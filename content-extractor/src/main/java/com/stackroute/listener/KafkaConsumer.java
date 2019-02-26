package com.stackroute.listener;

import com.stackroute.domain.FileUrl;
import com.stackroute.domain.PdfDocument;
import com.stackroute.exception.EmptyFileException;
import com.stackroute.exception.FileNotFoundException;
import com.stackroute.service.PdfExtractionService;
import org.apache.tika.exception.TikaException;
import org.springframework.stereotype.Service;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.xml.sax.SAXException;

import java.io.IOException;


@Service
public class KafkaConsumer {

    private PdfExtractionService pdfExtractionService;
    private KafkaProducer kafkaProducer;

    @Autowired
    public KafkaConsumer( PdfExtractionService pdfExtractionService, KafkaProducer kafkaProducer) {
        this.pdfExtractionService = pdfExtractionService;
        this.kafkaProducer = kafkaProducer;
    }
    @KafkaListener(topics = "FileUrl", groupId = "group_id")
    public void consume(String message)throws IOException, SAXException, NullPointerException, FileNotFoundException, EmptyFileException,
            TikaException {
        System.out.println("Consumed message: " + message);

      JSONObject object = (JSONObject) JSONValue.parse(message);


      FileUrl fileUrl=new FileUrl(object.get("fileUrl").toString());
        System.out.println(fileUrl.getFileUrl());

      kafkaProducer.postservice(fileUrl.getFileUrl());

    }

}
