package com.pdf.pdfeditor.entity;

public class Comment {
    private String page;
    private String color;
    private String top;
    private String left;
    private String width;
    private String height;

    private String content;

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getTop() {
        return top;
    }

    public void setTop(String top) {
        this.top = top;
    }

    public String getLeft() {
        return left;
    }

    public void setLeft(String left) {
        this.left = left;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWidth() {
        return width;
    }

    public void setWidth(String width) {
        this.width = width;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "page='" + page + '\'' +
                ", color='" + color + '\'' +
                ", top='" + top + '\'' +
                ", left='" + left + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
