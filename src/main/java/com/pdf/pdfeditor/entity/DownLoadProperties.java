package com.pdf.pdfeditor.entity;

import java.util.List;

public class DownLoadProperties {
    private String fileName;
    private String blobUrl;
    private String pageWidth;
    private String pageHeight;
    private ModifiedContent modifiedContents;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getBlobUrl() {
        return blobUrl;
    }

    public void setBlobUrl(String blobUrl) {
        this.blobUrl = blobUrl;
    }

    public String getPageWidth() {
        return pageWidth;
    }

    public void setPageWidth(String pageWidth) {
        this.pageWidth = pageWidth;
    }

    public String getPageHeight() {
        return pageHeight;
    }

    public void setPageHeight(String pageHeight) {
        this.pageHeight = pageHeight;
    }

    public ModifiedContent getModifiedContents() {
        return modifiedContents;
    }

    public void setModifiedContents(ModifiedContent modifiedContents) {
        this.modifiedContents = modifiedContents;
    }
}
