package com.stackroute.pdfReader;

import com.stackroute.domain.PdfDomain;
import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.AutoDetectParser;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.Parser;
import org.apache.tika.sax.BodyContentHandler;
import org.xml.sax.SAXException;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.UUID;

public class ContentExtraction {


    public PdfDomain   extractFromFile(final Parser parser, final String fileName ) throws IOException , SAXException,
            TikaException{

        long start =System.currentTimeMillis();
        PdfDomain pdfDomain = new PdfDomain();
        String uniqueID = UUID.randomUUID().toString();
        BodyContentHandler handler = new BodyContentHandler(1000000);
        Metadata metadata =new Metadata();

        FileInputStream content = new FileInputStream(fileName);
        parser.parse(content,handler,metadata,new ParseContext());

        for( String name : metadata.names())
        {
            System.out.println(name + ":\t" + metadata.get(name));
        }
        System.out.println("File Content :" + handler.toString());
        pdfDomain.setDocumentId(uniqueID);
        pdfDomain.setDocumentText(handler.toString());
        pdfDomain.setDocumentMetaData(metadata.names());

        return pdfDomain;

    }

    public PdfDomain extractPdf() throws IOException , SAXException,
            TikaException {
        String path = "/home/user/Documents/Extractor/src/main/resources/static/pdf-sample.pdf";
        String[] ext=path.split("\\.");
        Parser parser = new AutoDetectParser();
        System.out.println("--------- Parsing PdfDomain --------:");
        return extractFromFile(parser,path);
    }
}
