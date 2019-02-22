package com.stackroute.listener;

import com.stackroute.domain.Paragraph;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {


    @Autowired
    private KafkaTemplate<String, Paragraph> kafkaTemplate;

    private static final String TOPIC = "Kafka_Example2";

    @KafkaListener(topics = "Kafka_Example2", groupId = "group_id")
    public void consume(Paragraph message) {
        System.out.println("Consumed message: " + message.getDocumentId());

    }


//
//    @KafkaListener(topics = "Kafka_Example2", groupId = "group_json",
//            containerFactory = "userKafkaListenerFactory")
//    public void consume(Paragraph paragraph) {
//        System.out.println("Consumed JSON Message: " + paragraph);
//    }

    
//
//
//    public String postservice(String name)
//    {
//        kafkaTemplate.send(TOPIC, new Paragraph("","",""));
//
//        return "Published successfully";
//    }
//
}