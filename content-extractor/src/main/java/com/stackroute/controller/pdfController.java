package com.stackroute.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.gson.Gson;
import com.stackroute.domain.PdfDomain;
import com.stackroute.service.ContentExtractionServiceImpl;
import org.apache.tika.exception.TikaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.xml.sax.SAXException;

import java.io.File;
import java.io.IOException;
import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;

@CrossOrigin(origins = "*")
@Controller
public class pdfController {

        @Autowired
        ContentExtractionServiceImpl contentExtractionService;

        PdfDomain pdfDomainObj =new PdfDomain();

        String path;
        File file1;

        @PostMapping("/post")
        public ResponseEntity<String> handleFileUpload(@RequestParam("file")  MultipartFile file) {
            File convFile = new File( file.getOriginalFilename());

            String message = "";
            try {
                file.transferTo(convFile);
                path = convFile.getAbsolutePath();
                System.out.println("***********************************");
                System.out.println(path);
                System.out.println("***********************************");
                file1=convFile;
                System.out.println(file1);
                message = "You successfully uploaded !";
                return ResponseEntity.status(HttpStatus.OK).body(message);
            } catch (Exception e) {
                message = "FAIL to upload " + convFile.getAbsolutePath() + "!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
            }
        }

        @GetMapping("/files/{filename:.+}")
        @ResponseBody
        public ResponseEntity<String> getFile(@PathVariable String filename) throws TikaException, SAXException, IOException {
            System.out.println(filename);
            try {
                pdfDomainObj = contentExtractionService.extractPdf(path);
                ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
                String jsonString = objectWriter.writeValueAsString(pdfDomainObj);

//                Gson gson = new Gson();
//                String jsonString = gson.toJson(pdfDomainObj);
                return ResponseEntity.status(HttpStatus.OK).body(jsonString);
            } catch (Exception e) {
                String message = filename + "is not available";
                return ResponseEntity.status(HttpStatus.CONFLICT).body(message);
            }

        }

}
