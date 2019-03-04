//package com.stackroute.listener;
//
//import com.stackroute.domain.NlpResult;
//import com.stackroute.service.NlpService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class KafkaProducer {
//    private NlpService nlpService;
//
//    public KafkaProducer(NlpService nlpService) {
//        this.nlpService = nlpService;
//    }
//
//    @Autowired
//    private KafkaTemplate<String, NlpResult> kafkaTemplate2;
//
//    private static final String TOPIC = "NLPResults";
//
//    public String postservice() {
//        NlpResult nlpResult = nlpService.getNlpResults();
//        kafkaTemplate2.send(TOPIC, nlpResult);
//        return "Published successfully";
//    }
//}