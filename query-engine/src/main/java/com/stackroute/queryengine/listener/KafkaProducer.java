//package com.stackroute.queryengine.listener;
//
//import com.stackroute.queryengine.model.Knowledge;
//import com.stackroute.queryengine.service.QueryEngineService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class KafkaProducer {
//    private QueryEngineService queryEngineService;
//
//    @Autowired
//    public KafkaProducer(QueryEngineService queryEngineService) {
//        this.queryEngineService = queryEngineService;
//    }
//
//    @Autowired
//    private KafkaTemplate<String, Knowledge> kafkaTemplate2;
//
//    private static final String TOPIC = "QueryEngineResults";
//
//    public String postservice(String concept, String intentLevel) {
//        Knowledge knowledge;
//        Iterable<Knowledge> results=queryEngineService.getQueryResult(concept,intentLevel);
//        return "Published successfully";
//    }
//}