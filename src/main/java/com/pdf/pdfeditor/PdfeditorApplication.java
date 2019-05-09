package com.pdf.pdfeditor;

import com.pdf.pdfeditor.property.FileProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        FileProperties.class
})
public class PdfeditorApplication {

    public static void main(String[] args) {
        SpringApplication.run(PdfeditorApplication.class, args);
    }

}
