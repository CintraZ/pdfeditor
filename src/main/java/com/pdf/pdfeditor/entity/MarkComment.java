package com.pdf.pdfeditor.entity;

import java.util.ArrayList;
import java.util.List;

public class MarkComment {
    private String page;
    private List<HLRect> hlDivs;
    private String color;
    private String content;

    public MarkComment() {
        this.hlDivs = new ArrayList<>();
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public List<HLRect> getHlDivs() {
        return hlDivs;
    }

    public void setHlDivs(List<HLRect> hlDivs) {
        this.hlDivs = hlDivs;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
