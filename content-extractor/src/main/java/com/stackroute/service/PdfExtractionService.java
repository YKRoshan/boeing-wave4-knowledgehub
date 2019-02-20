package com.stackroute.service;

import com.stackroute.exception.EmptyFileException;
import com.stackroute.exception.FileNotFoundException;
import org.apache.tika.exception.TikaException;
import org.xml.sax.SAXException;

import java.io.IOException;

public interface PdfExtractionService {

    public String extractFromFile(String path) throws IOException, SAXException,
            TikaException,FileNotFoundException, EmptyFileException;


    public  String extractFromURL( String path ) throws IOException , SAXException, NullPointerException, FileNotFoundException, EmptyFileException,
            TikaException;
}



