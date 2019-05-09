package com.pdf.pdfeditor.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

@Controller
@WebServlet(name = "FileUploadServlet", urlPatterns = "/uploadpdffile")
@MultipartConfig
public class Upload extends HttpServlet {
    private final static Logger LOGGER = Logger.getLogger(Upload.class.getCanonicalName());

    @Value("${UploadPath}")
    private String path;
    @Value("${ImgUploadPath}")
    private String imgPath;

    @PostMapping("/uploadpdffile")
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");

        // Create path components to save file
//        final String blobUrl = request.getParameter("blobUrl");
        final String fileType = request.getParameter("type");


        final Part filePart = request.getPart("file");
        final String filename = getFileName(filePart);

        switch (fileType) {
            case "pdf": break;
            case "image": path = imgPath; break;
            default:
        }

        OutputStream out = null;
        InputStream fileContent = null;
        final PrintWriter writer = response.getWriter();

        try {
            File file = new File(path + File.separator + filename);

            if(file.exists()) {
                writer.println("file " + filename + " already exists in " + path);
                return;
            }
            out = new FileOutputStream(file);
            fileContent = filePart.getInputStream();

            int read = 0;
            final byte[] bytes = new byte[1024];

            while ((read = fileContent.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            writer.println("New file " + filename + " created at " + path);
            LOGGER.log(Level.INFO, "File {0} being uploaded to {1}", new Object[]{filename, path});
        } catch (FileNotFoundException fne) {
            writer.println("You either did not specify a  file to upload or are" +
                    "trying to upload a  file to a protected or nonexistent location.");
            writer.println("<br/> ERROR: " + fne.getMessage());

            LOGGER.log(Level.SEVERE, "Problems during file upload. Error: {0}", new Object[]{fne.getMessage()});
        } finally {
            if(out != null) {
                out.close();
            }
            if(fileContent != null) {
                fileContent.close();
            }
            if(writer != null) {
                writer.close();
            }
        }

    }

    private String getFileName(final Part part) {
        final String partHeader = part.getHeader("content-disposition");
        LOGGER.log(Level.INFO, "Part Header = {0}", partHeader);
        for (String content: part.getHeader("content-disposition").split(";")) {
            if(content.trim().startsWith("filename")) {
                return content.substring(content.indexOf('=') + 1).trim().replace("\"", "");
            }
        }
        return null;
    }
}
