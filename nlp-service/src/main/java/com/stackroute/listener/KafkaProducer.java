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
//    private NlpService nlpservice;
//    public KafkaProducer(NlpService nlpservice){
//        this.nlpservice=nlpservice;
//    }
//    @Autowired
//    private KafkaTemplate<String, NlpResult> kafkaTemplate2;
//
//    private static final String TOPIC = "NLPResults";
//
//    public String postservice() {
//        NlpResult nlpResult = nlpservice.getNlpResults();
//        kafkaTemplate2.send(TOPIC, nlpResult);
//        return "Published successfully";
//    }
//
//}