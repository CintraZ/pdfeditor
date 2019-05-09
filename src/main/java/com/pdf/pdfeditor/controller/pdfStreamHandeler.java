package com.pdf.pdfeditor.controller;

import java.io.*;

import com.pdf.pdfeditor.property.FileProperties;
import com.pdf.pdfeditor.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class pdfStreamHandeler {

    @Autowired
    FileProperties fileProperties;
    @Autowired
    FileService fileService;

    @RequestMapping(value = "/convertLocal", method = RequestMethod.GET)
    public void convertLocal(HttpServletRequest request, HttpServletResponse response, String fileName) {
        String filePath = fileProperties.getUploadDir() + File.separator + fileName;
//        System.out.println(fileName);
        File file = new File(filePath);
        byte[] data = null;
        try {
            FileInputStream input = new FileInputStream(file);
            data = new byte[input.available()];
            input.read(data);
            response.getOutputStream().write(data);
            input.close();
        } catch (Exception e) {
            System.out.print("pdf文件处理异常：" + e.getMessage());
        }
    }
}
