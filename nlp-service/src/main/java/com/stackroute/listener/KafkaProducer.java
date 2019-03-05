package com.stackroute.listener;

import com.stackroute.domain.NlpResult;
import com.stackroute.service.NlpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {
    private NlpService nlpService;

    //Constructor
    @Autowired
    public KafkaProducer(NlpService nlpService) {
        this.nlpService = nlpService;
    }

    @Autowired
    private KafkaTemplate<String, NlpResult> kafkaTemplate2;

    private static final String TOPIC = "NLPResults";

    //This method is used to produce an object
    public String postservice() {
        kafkaTemplate2.send(TOPIC, nlpService.getNlpResults());
        return "Published successfully";
    }
}