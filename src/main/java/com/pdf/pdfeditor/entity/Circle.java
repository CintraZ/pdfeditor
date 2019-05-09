package com.pdf.pdfeditor.entity;

public class Circle {
    private String page;
    private String fill;
    private String stroke;
    private String fillOpacity;
    private String strokeOpacity;
    private String strokeWidth;
    private String strokeLinejoin;
    private String x1;
    private String y1;
    private String rx;
    private String ry;

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public String getFill() {
        return fill;
    }

    public void setFill(String fill) {
        this.fill = fill;
    }

    public String getStroke() {
        return stroke;
    }

    public void setStroke(String stroke) {
        this.stroke = stroke;
    }

    public String getFillOpacity() {
        return fillOpacity;
    }

    public void setFillOpacity(String fillOpacity) {
        this.fillOpacity = fillOpacity;
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

    public String getY1() {
        return y1;
    }

    public void setY1(String y1) {
        this.y1 = y1;
    }

    public String getRx() {
        return rx;
    }

    public void setRx(String rx) {
        this.rx = rx;
    }

    public String getRy() {
        return ry;
    }

    public void setRy(String ry) {
        this.ry = ry;
    }

    @Override
    public String toString() {
        return "Circle{" +
                "page='" + page + '\'' +
                ", fill='" + fill + '\'' +
                ", stroke='" + stroke + '\'' +
                ", fillOpacity='" + fillOpacity + '\'' +
                ", strokeOpacity='" + strokeOpacity + '\'' +
                ", strokeWidth='" + strokeWidth + '\'' +
                ", strokeLinejoin='" + strokeLinejoin + '\'' +
                ", x1='" + x1 + '\'' +
                ", y1='" + y1 + '\'' +
                ", rx='" + rx + '\'' +
                ", ry='" + ry + '\'' +
                '}';
    }
}
