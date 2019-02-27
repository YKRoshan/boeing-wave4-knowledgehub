package com.stackroute.searchbotservice.listener;


import com.stackroute.searchbotservice.domain.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {
    @Autowired
    private KafkaTemplate<String, Search> kafkaTemplate2;

    private static final String TOPIC="UpstreamService";

    public String upStreamService(Search search)
    {
        kafkaTemplate2.send(TOPIC, search);
        return "Published successfully";
    }
}

