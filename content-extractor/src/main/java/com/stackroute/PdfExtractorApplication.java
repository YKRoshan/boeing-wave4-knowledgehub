package com.stackroute;

import com.google.gson.Gson;
import com.stackroute.domain.PdfDomain;
import com.stackroute.service.ContentExtractionServiceImpl;
import org.apache.tika.exception.TikaException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.xml.sax.SAXException;

import java.io.IOException;

@SpringBootApplication
public class PdfExtractorApplication {

	public static void main(String[] args){
        SpringApplication.run(PdfExtractorApplication.class, args);

	}

}

