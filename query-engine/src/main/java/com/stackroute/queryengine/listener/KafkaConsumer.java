package com.stackroute.queryengine.listener;


import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.service.QueryEngineServiceImpl;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {
    private QueryEngineServiceImpl queryEngineServiceImpl;
    private KafkaProducer kafkaProducer;


    @Autowired
    public KafkaConsumer(QueryEngineServiceImpl queryEngineServiceImpl, KafkaProducer kafkaProducer) {
        this.queryEngineServiceImpl = queryEngineServiceImpl;
        this.kafkaProducer = kafkaProducer;
    }
    @Autowired
    private KafkaTemplate<String, Knowledge> kafkaTemplate;

    //This method is used to consume json object from producer
    @KafkaListener(topics = "NLPResults", groupId = "group_id")
    public void consume(String message) {
        JSONObject object = (JSONObject) JSONValue.parse(message);


        kafkaProducer.postservice(object.get("concept").toString(),object.get("intent").toString());
    }
}