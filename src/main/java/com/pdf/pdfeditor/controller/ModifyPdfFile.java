package com.pdf.pdfeditor.controller;

import java.io.*;
import java.net.MalformedURLException;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.colors.Color;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.geom.Rectangle;
import com.itextpdf.kernel.pdf.*;
import com.itextpdf.kernel.pdf.annot.PdfAnnotation;
import com.itextpdf.kernel.pdf.annot.PdfTextAnnotation;
import com.itextpdf.kernel.pdf.annot.PdfTextMarkupAnnotation;
import com.itextpdf.kernel.pdf.canvas.PdfCanvas;
import com.itextpdf.kernel.pdf.canvas.PdfCanvasConstants;
import com.itextpdf.kernel.pdf.extgstate.PdfExtGState;
import com.pdf.pdfeditor.entity.*;
import com.pdf.pdfeditor.property.FileProperties;
import com.pdf.pdfeditor.service.FileService;
import org.apache.coyote.Response;
import org.apache.tomcat.util.file.ConfigurationSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Source;

@Controller
public class ModifyPdfFile {
    private final static Logger LOGGER = Logger.getLogger(ModifyPdfFile.class.getCanonicalName());

    @Autowired
    FileProperties fileProperties;
    @Autowired
    FileService fileService;

    private String path;
    private String imgPath;


    private double webPageWidth;
    private double webPageHeight;
    private Map<Integer, ModifiedContent> ModifiedContentMap = new HashMap<>();
    private Map<Integer, Integer> pageTable = new HashMap<>();

    private String SRC;
    private String DEST;

    @PostMapping("/modifyfile")
    public String DownLoadFile(@RequestBody DownLoadProperties downLoadProperties) throws Exception {
        path = fileProperties.getUploadDir();
        imgPath = fileProperties.getImgUploadDir();

        webPageWidth = PXString2Double(downLoadProperties.getPageWidth());
        webPageHeight = PXString2Double(downLoadProperties.getPageHeight());

        final String fileName = downLoadProperties.getFileName();
        SRC = path + File.separator + fileName;
        DEST = path + File.separator + "L" + fileName;
        if(downLoadProperties.getModifiedContents().isEmpty()) {
            PdfDocument pdfDoc = new PdfDocument(new PdfWriter(DEST));
            PdfDocument sourcePdf = new PdfDocument(new PdfReader(SRC));
            CopyAllPage(sourcePdf, pdfDoc);
            sourcePdf.close();
            pdfDoc.close();
            // Return file
            return null;
//            return "here has no modifies...";
        }
        // Initialize map
        PreprocessModifiedContent(downLoadProperties.getModifiedContents());
        ModifyFile(downLoadProperties, true);

        return null;
    }

    private void CopyAllPage(PdfDocument src, PdfDocument dest) throws IOException {
        int pageNums = src.getNumberOfPages();
        for(int pageNum = 1; pageNum <= src.getNumberOfPages(); pageNum++) {
            dest.addPage(src.getPage(pageNum).copyTo(dest));
            pageTable.put(pageNum, dest.getNumberOfPages());
        }
    }

    private void PreprocessModifiedContent(ModifiedContent modifiedContents) throws IOException {
        ModifiedContentMap.clear();
        // Group by page
        PdfDocument sourcePdf = new PdfDocument(new PdfReader(SRC));
        int pageNums = sourcePdf.getNumberOfPages();
        sourcePdf.close();

        // Initialize map
        for(int i = 1; i <= pageNums; i++) {
            ModifiedContent modifiedContent = new ModifiedContent();
            ModifiedContentMap.put(i, modifiedContent);
        }

        // Group rectangle
        for(Rect rect : modifiedContents.getRects()) {
            int pageNum = Integer.parseInt(rect.getPage());
            ModifiedContentMap.get(pageNum).getRects().add(rect);
        }
        // Group highlight rectangle
        for(HLRect rect : modifiedContents.getHlRects()) {
            int pageNum = Integer.parseInt(rect.getPage());
            ModifiedContentMap.get(pageNum).getHlRects().add(rect);
        }
        // Group circles
        for(Circle circle : modifiedContents.getCircles()) {
            int pageNum = Integer.parseInt(circle.getPage());
            ModifiedContentMap.get(pageNum).getCircles().add(circle);
        }
        // Group lines
        for(Line line: modifiedContents.getLines()) {
            int pageNum = Integer.parseInt(line.getPage());
            ModifiedContentMap.get(pageNum).getLines().add(line);
        }
        // Group poly lines
        for(PolyLine polyLine: modifiedContents.getPolyLines()) {
            int pageNum = Integer.parseInt(polyLine.getPage());
            ModifiedContentMap.get(pageNum).getPolyLines().add(polyLine);
        }
        // Group comments
        for(Comment comment: modifiedContents.getComments()) {
            int pageNum = Integer.parseInt(comment.getPage());
            ModifiedContentMap.get(pageNum).getComments().add(comment);
        }
        for (MarkComment comment : modifiedContents.getMarkComments()) {
            int pageNum = Integer.parseInt(comment.getPage());
            ModifiedContentMap.get(pageNum).getMarkComments().add(comment);
        }
        // Group images
        for(Image image: modifiedContents.getImages()) {
            int pageNum = Integer.parseInt(image.getPage());
            ModifiedContentMap.get(pageNum).getImages().add(image);
        }
        // Group waterMarks
        for (Image waterMark : modifiedContents.getWaterMarks()) {
            for (int pageNum = 1; pageNum <= pageNums; pageNum++) {
                if(ModifiedContentMap.get(pageNum).isEmpty()) continue;
                ModifiedContentMap.get(pageNum).getWaterMarks().add(waterMark);
            }
        }

    }

    private void ModifyFile(DownLoadProperties dps, boolean modifiedAllPage) throws Exception{
        pageTable.clear();

        ModifiedContent modifiedContents = dps.getModifiedContents();

        PdfDocument pdfDoc = new PdfDocument(new PdfWriter(DEST));
        PdfDocument sourcePdf = new PdfDocument(new PdfReader(SRC));

        if(ModifiedContentMap.isEmpty()) {
            LOGGER.log(Level.WARNING, "Modify Content Map is empty...");
            return;
        }
        for(Map.Entry<Integer, ModifiedContent> entry : ModifiedContentMap.entrySet()) {
            int pageNum = entry.getKey();
            ModifiedContent modifiedContent = entry.getValue();
            if(modifiedContent.isEmpty() && !modifiedAllPage) continue;

            // Copy page from source pdf to destination pdf
            if(!pageTable.containsKey(pageNum)) {
                pdfDoc.addPage(sourcePdf.getPage(pageNum).copyTo(pdfDoc));
                pageTable.put(pageNum, pdfDoc.getNumberOfPages());
            }
            RectsAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            HlRectsAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            CirclesAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            LinesAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            PolylinesAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            CommentsAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
            ImagesAdder(modifiedContent, pdfDoc, pageTable.get(pageNum));
        }
        // Add WaterMarks
        if(pdfDoc.getNumberOfPages() == 0 && !modifiedContents.getWaterMarks().isEmpty()) {
            CopyAllPage(sourcePdf, pdfDoc);
        }
        WaterMarksAdder(modifiedContents, pdfDoc);
        sourcePdf.close();
        pdfDoc.close();
    }

    private Color RGBString2Int(String rgb) {
        // rgb : "rgb(255, 255, 255)"
        String[] rgbs = rgb.split(",");
        rgbs[0] = rgbs[0].substring(4);
        rgbs[1] = rgbs[1].substring(1);
        rgbs[2] = rgbs[2].substring(1, rgbs[2].indexOf(')'));
        Color color = new DeviceRgb(Integer.parseInt(rgbs[0]), Integer.parseInt(rgbs[1]), Integer.parseInt(rgbs[2]));
        return color;
    }
    private double PXString2Double(String px) {
        String str = px.split("px")[0];
        return Double.parseDouble(str);
    }
    private boolean SetColorAndOpacity(PdfCanvas canvas, String fill, String stroke, String strokeOpacity, String fillOpacity) {
        boolean fillValid = true;
        Color color;
        String opacity;
        PdfExtGState gs1 = new PdfExtGState();
        if(fill.equals("none")) {
            color = RGBString2Int(stroke);
            opacity = strokeOpacity;
            canvas.setStrokeColor(color);
            canvas.setLineJoinStyle(PdfCanvasConstants.LineJoinStyle.ROUND);

            gs1.setStrokeOpacity(Float.parseFloat(opacity));

            fillValid = false;
        }
        else {
            color = RGBString2Int(fill);
            opacity = fillOpacity;
            canvas.setFillColor(color);

            gs1.setFillOpacity(Float.parseFloat(opacity));
        }

        canvas.setExtGState(gs1);
        return fillValid;
    }

    private void RectsAdder(ModifiedContent modifiedContents, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for(Rect rect : modifiedContents.getRects()) {
            PdfCanvas canvas = new PdfCanvas(page);
            AddRect2Pdf(canvas, pageSize, rect);
//            canvas.fill();
        }
    }
    private void AddRect2Pdf(PdfCanvas canvas, Rectangle pageSize, Rect rect) {
        boolean fillValid = SetColorAndOpacity(canvas, rect.getFill(), rect.getStroke(), rect.getStrokeOpacity(), rect.getFillOpacity());


        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double x = Double.parseDouble(rect.getX()) * insX;
        double y = Double.parseDouble(rect.getY()) * insY;
        double width = Double.parseDouble(rect.getWidth()) * insX;
        double height = Double.parseDouble(rect.getHeight()) * insY;
        canvas.rectangle(x, pageSize.getHeight() - y - height + 2, width, height);
//        canvas.fill();
        if(!fillValid) {
            float strokeWidth = (float) (Float.parseFloat(rect.getStrokeWidth()) * insY);
            canvas.setLineWidth(strokeWidth);
            canvas.stroke();
        } else {
            canvas.fill();
        }

    }

    private void HlRectsAdder(ModifiedContent modifiedContents, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for(HLRect rect : modifiedContents.getHlRects()) {
            PdfCanvas canvas = new PdfCanvas(page);
            AddHLRect2Pdf(canvas, pageSize, rect);
            canvas.fill();
        }
    }
    private void AddHLRect2Pdf(PdfCanvas canvas, Rectangle pageSize, HLRect rect) {
        Color color = RGBString2Int(rect.getBackgroundColor());
        canvas.setFillColor(color);
        PdfExtGState gs1 = new PdfExtGState();
        gs1.setFillOpacity(Float.parseFloat(rect.getOpacity()));
        canvas.setExtGState(gs1);

        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double x = Double.parseDouble(rect.getLeft()) * insX;
        double y = Double.parseDouble(rect.getTop()) * insY;
        double width = Double.parseDouble(rect.getWidth()) * insX;
        double height = Double.parseDouble(rect.getHeight()) * insY;

        canvas.rectangle(x, pageSize.getHeight() - y - height + 2, width, height);

    }

    private void CirclesAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for(Circle circle: modifiedContent.getCircles()) {
            PdfCanvas canvas = new PdfCanvas(page);
            AddCircle2Pdf(canvas, pageSize, circle);
        }
    }
    private void AddCircle2Pdf(PdfCanvas canvas, Rectangle pageSize, Circle circle) {
        boolean fillValid = SetColorAndOpacity(canvas, circle.getFill(), circle.getStroke(), circle.getStrokeOpacity(), circle.getFillOpacity());

        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double x1 = Double.parseDouble(circle.getX1()) * insX;
        double y1 = Double.parseDouble(circle.getY1()) * insY;
        double rx = Double.parseDouble(circle.getRx()) * insX;
        double ry = Double.parseDouble(circle.getRy()) * insY;



        canvas.ellipse(x1, pageSize.getHeight()-y1-2*ry, x1 + 2*rx, pageSize.getHeight()-y1);

        if(fillValid) {
            canvas.fill();
        } else {
            float strokeWidth = (float) (Float.parseFloat(circle.getStrokeWidth()) * insY);
            canvas.setLineWidth(strokeWidth);
            canvas.stroke();
        }
    }

    private void LinesAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for (Line line : modifiedContent.getLines()) {
            PdfCanvas canvas = new PdfCanvas(page);
            AddLine2Pdf(canvas, pageSize, line);
        }
    }
    private void AddLine2Pdf(PdfCanvas canvas, Rectangle pageSize, Line line) {
        Color color = RGBString2Int(line.getStroke());
        float opacity = Float.parseFloat(line.getStrokeOpacity());
        float strokeWidth = Float.parseFloat(line.getStrokeWidth());
        canvas.setStrokeColor(color);

        canvas.setLineJoinStyle(PdfCanvasConstants.LineJoinStyle.ROUND);

        PdfExtGState ps1 = new PdfExtGState();
        ps1.setStrokeOpacity(opacity);
        canvas.setExtGState(ps1);

        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double x1 = Double.parseDouble(line.getX1()) * insX;
        double y1 = Double.parseDouble(line.getY1()) * insY;
        double x2 = Double.parseDouble(line.getX2()) * insX;
        double y2 = Double.parseDouble(line.getY2()) * insY;

        canvas.setLineWidth((float) (strokeWidth * insY));

        canvas.moveTo(x1, pageSize.getHeight() - y1);
        canvas.lineTo(x2, pageSize.getHeight() - y2);
        canvas.stroke();
    }

    private void PolylinesAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for (PolyLine polyLine : modifiedContent.getPolyLines()) {
            PdfCanvas canvas = new PdfCanvas(page);
            AddPolyline2Pdf(canvas, pageSize, polyLine);
        }
    }
    private void AddPolyline2Pdf(PdfCanvas canvas, Rectangle pageSize, PolyLine polyLine) {
        Color color = RGBString2Int(polyLine.getStroke());
        float opacity = Float.parseFloat(polyLine.getStrokeOpacity());
        float strokeWidth = Float.parseFloat(polyLine.getStrokeWidth());
        canvas.setStrokeColor(color);

        canvas.setLineJoinStyle(PdfCanvasConstants.LineJoinStyle.ROUND);

        PdfExtGState ps1 = new PdfExtGState();
        ps1.setStrokeOpacity(opacity);
        canvas.setExtGState(ps1);

        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double dx = Double.parseDouble(polyLine.getDx()) * insX;
        double dy = Double.parseDouble(polyLine.getDy()) * insY;

        canvas.setLineWidth((float) (strokeWidth * insY));

        int num = 0;
        for(List<String> point : polyLine.getPoints()) {
            double x = Double.parseDouble(point.get(0)) * insX;
            double y = Double.parseDouble(point.get(1)) * insY;
            if(num == 0) {
                canvas.moveTo(x + dx, pageSize.getHeight() - y - dy);
                num++;
                continue;
            }
            canvas.lineTo(x + dx, pageSize.getHeight() - y - dy);
//            canvas.moveTo(x + dx, pageSize.getHeight() - y - dy);
        }
        canvas.stroke();
    }

    private void CommentsAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc, int pageNum) {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for (Comment comment : modifiedContent.getComments()) {
            AddComment2Pdf(page, pageSize, comment);
        }
        for (MarkComment comment : modifiedContent.getMarkComments()) {
            AddMarkComment2Pdf(page, pageSize, comment);
        }
    }

    private void AddMarkComment2Pdf(PdfPage page, Rectangle pageSize, MarkComment comment) {
        Color color = RGBString2Int(comment.getColor());
        float insX = pageSize.getWidth() / (float)webPageWidth;
        float insY = pageSize.getHeight() / (float)webPageHeight;

        boolean isFirst = true;
        for(HLRect rect : comment.getHlDivs()) {
            float x = Float.parseFloat(rect.getLeft()) * insX;
            float y = Float.parseFloat(rect.getTop()) * insY;
            float width = Float.parseFloat(rect.getWidth()) * insX;
            float height = Float.parseFloat(rect.getHeight()) * insY;

            y = pageSize.getHeight() - y;

            PdfAnnotation ann = PdfTextMarkupAnnotation.createHighLight(
                new Rectangle(x, y, width, height),
                new float[] {x+width, y, x, y, x+width, y-height, x, y-height})
            //                new float[] {0,0,0,0,0,0,0,0})
                    .setColor(color)
                    .setContents(comment.getContent());
            page.addAnnotation(ann);
        }
    }

    private void AddComment2Pdf(PdfPage page, Rectangle pageSize, Comment comment) {
        Color color = RGBString2Int(comment.getColor());



        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;
        double x = Double.parseDouble(comment.getLeft()) * insX;
        double y = Double.parseDouble(comment.getTop()) * insY;
        double width = Double.parseDouble(comment.getWidth()) * insX;
        double height = Double.parseDouble(comment.getHeight()) * insY;
        x -= width/2;
        y += height/2;

        PdfAnnotation ann = new PdfTextAnnotation(new Rectangle((float)x, (float)(pageSize.getHeight()-y), 0,0))
                .setColor(color)
                .setContents(comment.getContent());
        page.addAnnotation(ann);
    }

    private void ImagesAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc, int pageNum) throws MalformedURLException {
        PdfPage page = pdfDoc.getPage(pageNum);
        Rectangle pageSize = page.getPageSize();

        for(Image image : modifiedContent.getImages()) {
            PdfCanvas canvas = new PdfCanvas(page);
            canvas.saveState();
            AddImage2Pdf(canvas, pageSize, image);
            canvas.restoreState();
        }
    }
    private void WaterMarksAdder(ModifiedContent modifiedContent, PdfDocument pdfDoc) throws MalformedURLException {
        PdfPage page = pdfDoc.getFirstPage();
        Rectangle pageSize = page.getPageSize();

        int pageNums = pdfDoc.getNumberOfPages();

        for(Image waterMark: modifiedContent.getWaterMarks()) {
            for(int pageNum = 1; pageNum <= pageNums; pageNum++) {
                PdfCanvas canvas = new PdfCanvas(pdfDoc.getPage(pageNum));
                canvas.saveState();
                AddImage2Pdf(canvas, pageSize, waterMark);
                canvas.restoreState();
            }
        }
    }
    private void AddImage2Pdf(PdfCanvas canvas, Rectangle pageSize, Image image) throws MalformedURLException {
        float opacity = Float.parseFloat(image.getOpacity());
        PdfExtGState ps1 = new PdfExtGState();
        ps1.setFillOpacity(opacity);
        canvas.setExtGState(ps1);

        double insX = pageSize.getWidth() / webPageWidth;
        double insY = pageSize.getHeight() / webPageHeight;

        double x = Double.parseDouble(image.getLeft()) * insX;
        double y = Double.parseDouble(image.getTop()) * insY;
        double width = Double.parseDouble(image.getWidth()) * insX;
        double height = Double.parseDouble(image.getHeight()) * insY;

        ImageData img = ImageDataFactory.create(imgPath + File.separator + image.getName());

        canvas.addImage(img, (float)width, 0, 0, (float)height, (float)x, (float)(pageSize.getHeight() - y - height), false);

    }

}
