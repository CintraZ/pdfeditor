package com.pdf.pdfeditor.entity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ModifiedContent {

    private List<HLRect> hlRects;
    private List<Rect> rects;
    private List<Circle> circles;
    private List<Line> lines;
    private List<PolyLine> polyLines;
    private List<Comment> comments;
    private List<MarkComment> markComments;
    private List<Image> images;
    private List<Image> waterMarks;

    public ModifiedContent() {
        this.hlRects = new ArrayList<>();
        this.rects = new ArrayList<>();
        this.circles = new ArrayList<>();
        this.lines = new ArrayList<>();
        this.polyLines = new ArrayList<>();
        this.comments = new ArrayList<>();
        this.images = new ArrayList<>();
        this.waterMarks = new ArrayList<>();
        this.markComments = new ArrayList<>();
    }

    public List<Rect> getRects() {
        return rects;
    }

    public void setRects(List<Rect> rects) {
        this.rects = rects;
    }

    public List<HLRect> getHlRects() {
        return hlRects;
    }

    public void setHlRects(List<HLRect> hlRects) {
        this.hlRects = hlRects;
    }

    public List<Circle> getCircles() {
        return circles;
    }

    public void setCircles(List<Circle> circles) {
        this.circles = circles;
    }

    public List<Line> getLines() {
        return lines;
    }

    public void setLines(List<Line> lines) {
        this.lines = lines;
    }

    public List<PolyLine> getPolyLines() {
        return polyLines;
    }

    public void setPolyLines(List<PolyLine> polyLines) {
        this.polyLines = polyLines;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<Image> getWaterMarks() {
        return waterMarks;
    }

    public List<MarkComment> getMarkComments() {
        return markComments;
    }

    public void setMarkComments(List<MarkComment> markComments) {
        this.markComments = markComments;
    }

    public void setWaterMarks(List<Image> waterMarks) {
        this.waterMarks = waterMarks;
    }

    public boolean isEmpty() {
        if(!rects.isEmpty()) return false;
        if(!circles.isEmpty()) return false;
        if(!lines.isEmpty()) return false;
        if(!polyLines.isEmpty()) return false;
        if(!comments.isEmpty()) return false;
        if(!images.isEmpty()) return false;
        if(!waterMarks.isEmpty()) return false;
        if(!markComments.isEmpty()) return false;
        return hlRects.isEmpty();
    }

    @Override
    public String toString() {
        return "ModifiedContent{" +
                "hlRects=" + hlRects +
                ", rects=" + rects +
                '}';
    }
}
