package com.pdf.pdfeditor.service;

import com.pdf.pdfeditor.property.FileProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileService {

    private final Path fileStorageLocation;
    private final Path imgStorageLocation;

    @Autowired
    public FileService(FileProperties fileProperties) {
        this.fileStorageLocation = Paths.get(fileProperties.getUploadDir()).toAbsolutePath().normalize();
        this.imgStorageLocation = Paths.get(fileProperties.getImgUploadDir()).toAbsolutePath().normalize();

        try{
            Files.createDirectories(this.fileStorageLocation);
            Files.createDirectories(this.imgStorageLocation);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public Resource loadFileAsResource(String fileName) {
        Resource resource = null;
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                System.out.println("loadFileAsResource: File not found");
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return resource;
    }
}
