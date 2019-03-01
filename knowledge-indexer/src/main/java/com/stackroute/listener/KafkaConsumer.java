package com.stackroute.listener;

import com.stackroute.model.Knowledge;
import com.stackroute.service.KnowledgeIndexerService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    private KnowledgeIndexerService knowledgeIndexerService;

    @Autowired
    public KafkaConsumer(KnowledgeIndexerService knowledgeIndexerService) {
        this.knowledgeIndexerService = knowledgeIndexerService;
    }

    //This method is used to consume json object from producer
    @KafkaListener(topics = "AnalyticsResults", groupId = "group_id")
    public void consume(String message)
    {
        JSONObject object = (JSONObject) JSONValue.parse(message);
        Knowledge knowledge=new Knowledge(object.get("paragraphId").toString(),object.get("paragraphContent").toString(),
                object.get("documentId").toString(),object.get("domain").toString()
                ,object.get("concept").toString(),object.get("intentLevel").toString(),Double.parseDouble(object.get("confidenceScore").toString()));

        knowledgeIndexerService.saveKnowledgeToDb(knowledge);
        knowledgeIndexerService.addRelationship(knowledge.getConcept(),knowledge.getParagraphId(),knowledge.getIntentLevel(),knowledge.getConfidenceScore());
    }
}
