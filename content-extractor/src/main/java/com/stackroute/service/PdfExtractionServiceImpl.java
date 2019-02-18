package com.stackroute.service;

import com.google.gson.Gson;
import com.stackroute.domain.PdfDocument;
import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.AutoDetectParser;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.Parser;
import org.apache.tika.sax.BodyContentHandler;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

@Service
public class PdfExtractionServiceImpl implements PdfExtractionService {

    /*
    This method will take path of PDF file as input parameter and return String in JSON Format
     */

    public String extractFromFile( String path ) throws IOException , SAXException, NullPointerException,
            TikaException{

        Parser parser = new AutoDetectParser();
        PdfDocument pdfDocument = new PdfDocument();
        String uniqueID = UUID.randomUUID().toString();
        BodyContentHandler handler = new BodyContentHandler(1000000);
        Metadata metadata =new Metadata();

        FileInputStream content = new FileInputStream(path);
        parser.parse(content,handler,metadata,new ParseContext());
        pdfDocument.setDocumentId(uniqueID);
        pdfDocument.setDocumentText(handler.toString());
        pdfDocument.setDocumentMetaData(metadata.names());

        Gson gson = new Gson();
        String jsonString = gson.toJson(pdfDocument);
//        ObjectWriter objectWriter = new ObjectMapper().writer().withDefaultPrettyPrinter();
//        String jsonString = objectWriter.writeValueAsString(pdfDocument);
        return jsonString;
    }

}
