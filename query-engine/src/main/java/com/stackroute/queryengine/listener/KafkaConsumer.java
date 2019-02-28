package com.stackroute.queryengine.listener;


import com.stackroute.queryengine.model.Knowledge;
import com.stackroute.queryengine.service.QueryEngineService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KafkaConsumer {
    private QueryEngineService queryEngineService;
    private KafkaProducer kafkaProducer;


    @Autowired
    public KafkaConsumer(QueryEngineService queryEngineService,KafkaProducer kafkaProducer) {
        this.queryEngineService = queryEngineService;
        this.kafkaProducer = kafkaProducer;
    }
    @Autowired
    private KafkaTemplate<String, Knowledge> kafkaTemplate;

    //  private static final String TOPIC = "Kafka_Example2";
    @KafkaListener(topics = "NLPResults", groupId = "group_id")
    public void consume(String message) {
        JSONObject object = (JSONObject) JSONValue.parse(message);

        Knowledge knowledge=new Knowledge(object.get("paragraphId").toString(),object.get("name").toString(),object.get("documentId").toString(),
                object.get("domain").toString(),object.get("concept").toString(),object.get("intentLevel").toString(),Double.parseDouble(object.get("confidenceScore").toString()));

//        Paragraph paragraph = new Paragraph(object.get("paragraphId").toString(), object.get("paragraphText").toString(), object.get("documentId").toString());
//        System.out.println(paragraph.getDocumentId());
//        System.out.println(paragraph.getParagraphId());
//        System.out.println(paragraph.getParagraphContent());
//        paragraphService.takeParagraph(paragraph);
//        paragraphProviderService.setParagraph(paragraph);
        kafkaProducer.postservice(knowledge.getConcept(),knowledge.getIntentLevel());
    }
}