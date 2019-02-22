package com.stackroute.listener;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {

    @KafkaListener(topics = "Knowledge_Indexer", groupId = "group_id")
    public void consume(String message) {
        System.out.println("Consumed message: " + message);
    }


}
