package com.pdf.pdfeditor.entity;

public class Line {
    private String page;
    private String stroke;
    private String strokeOpacity;
    private String strokeWidth;
    private String strokeLinejoin;
    private String x1;
    private String x2;
    private String y1;
    private String y2;

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

    public String getX1() {
        return x1;
    }

    public void setX1(String x1) {
        this.x1 = x1;
    }

    public String getX2() {
        return x2;
    }

    public void setX2(String x2) {
        this.x2 = x2;
    }

    public String getY1() {
        return y1;
    }

    public void setY1(String y1) {
        this.y1 = y1;
    }

    public String getY2() {
        return y2;
    }

    public void setY2(String y2) {
        this.y2 = y2;
    }

    @Override
    public String toString() {
        return "Line{" +
                "page='" + page + '\'' +
                ", stroke='" + stroke + '\'' +
                ", strokeOpacity='" + strokeOpacity + '\'' +
                ", strokeWidth='" + strokeWidth + '\'' +
                ", strokeLinejoin='" + strokeLinejoin + '\'' +
                ", x1='" + x1 + '\'' +
                ", x2='" + x2 + '\'' +
                ", y1='" + y1 + '\'' +
                ", y2='" + y2 + '\'' +
                '}';
    }
}
