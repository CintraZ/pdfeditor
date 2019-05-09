package com.pdf.pdfeditor.entity;

import java.util.ArrayList;
import java.util.List;

public class PolyLine {
    private String page;
    private String stroke;
    private String strokeOpacity;
    private String strokeWidth;
    private String strokeLinejoin;
    private List<List<String>> points;
    private String dx;
    private String dy;

    public PolyLine() {
        this.points = new ArrayList<>();
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public String getStroke() {
        return stroke;
    }

    public void setStroke(String stroke) {
        this.stroke = stroke;
    }

    public String getStrokeOpacity() {
        return strokeOpacity;
    }

    public void setStrokeOpacity(String strokeOpacity) {
        this.strokeOpacity = strokeOpacity;
    }

    public String getStrokeWidth() {
        return strokeWidth;
    }

    public void setStrokeWidth(String strokeWidth) {
        this.strokeWidth = strokeWidth;
    }

    public String getStrokeLinejoin() {
        return strokeLinejoin;
    }

    public void setStrokeLinejoin(String strokeLinejoin) {
        this.strokeLinejoin = strokeLinejoin;
    }

    public List<List<String>> getPoints() {
        return points;
    }

    public void setPoints(List<List<String>> points) {
        this.points = points;
    }

    public String getDx() {
        return dx;
    }

    public void setDx(String dx) {
        this.dx = dx;
    }

    public String getDy() {
        return dy;
    }

    public void setDy(String dy) {
        this.dy = dy;
    }
}
