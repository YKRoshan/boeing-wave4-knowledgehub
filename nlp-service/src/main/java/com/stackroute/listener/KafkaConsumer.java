//package com.stackroute.listener;
//
//import com.stackroute.Domain.Search;
//import com.stackroute.service.NlpService;
//import org.json.simple.JSONObject;
//import org.json.simple.JSONValue;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//
//@Service
//public class KafkaConsumer {
//
//    private NlpService nlpService;
//    private KafkaProducer kafkaProducer;
//
//    @Autowired
//    public KafkaConsumer(NlpService nlpService, KafkaProducer kafkaProducer) {
//        this.kafkaProducer = kafkaProducer;
//        this.nlpService = nlpService;
//    }
//
//    @KafkaListener(topics = "UpstreamResults", groupId = "group_id")
//    public void consume(String message)  {
//
//
//
//        JSONObject object=(JSONObject) JSONValue.parse(message);
//        Search search=new Search(object.get("searchString").toString(),object.get("sessionId").toString());
//        kafkaProducer.postservice(search);
//        System.out.println(message);
//
////        List<JSONObject> paragraphList=paragraphService.getParagraphObject(pdfDocument.getDocumentId(),pdfDocument.getDocumentText());
////
////        kafkaProducer.postservice(paragraphList);
////
////        System.out.println("text\n"+pdfDocument.getDocumentText());
////        System.out.println("Id\n"+pdfDocument.getDocumentId());
////        System.out.println("metadata\n"+pdfDocument.getDocumentMetaData());
//    }
//
//
//
//}
//
