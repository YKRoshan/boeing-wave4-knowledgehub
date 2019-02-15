package com.stackroute;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.stackroute.domain.PdfDomain;
import com.stackroute.pdfReader.ContentExtraction;
import org.apache.tika.exception.TikaException;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.xml.sax.SAXException;

import java.io.IOException;

@SpringBootApplication
public class PdfExtractorApplication {

	public static void main(String[] args) throws IOException, TikaException, SAXException {
        ContentExtraction contentExtraction =new ContentExtraction();
        contentExtraction.extractPdf();
        PdfDomain pdfDomainObj =new PdfDomain();
        pdfDomainObj = contentExtraction.extractPdf();

        // this will convert java Object to Json Object
//        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
//        String json = objectWriter.writeValueAsString(pdfDomainObj);
//        System.out.println(json);

        Gson gson = new Gson();
        String jsonString = gson.toJson(pdfDomainObj);
        System.out.println(jsonString);

	}

}

