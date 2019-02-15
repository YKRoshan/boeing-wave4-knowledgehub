package com.stackroute.service;

import com.stackroute.domain.PdfDomain;
import org.apache.tika.exception.TikaException;
import org.apache.tika.parser.Parser;
import org.xml.sax.SAXException;

import java.io.IOException;

public interface ContentExtractionService {

    public PdfDomain extractFromFile(final Parser parser, final String fileName ) throws IOException, SAXException,
            TikaException;
    public PdfDomain extractPdf(String path) throws IOException , SAXException,
            TikaException;

}



