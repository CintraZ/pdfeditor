package com.pdf.pdfeditor.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "file")
public class FileProperties {
    private String uploadDir;
    private String imgUploadDir;

    public String getUploadDir() {
        return uploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }

    public String getImgUploadDir() {
        return imgUploadDir;
    }

    public void setImgUploadDir(String imgUploadDir) {
        this.imgUploadDir = imgUploadDir;
    }
}
