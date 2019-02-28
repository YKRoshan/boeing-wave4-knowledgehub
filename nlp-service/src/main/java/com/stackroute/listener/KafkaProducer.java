//package com.stackroute.listener;
//
//import com.stackroute.Domain.Search;
//import com.stackroute.service.NlpService;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.json.simple.JSONObject;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.core.KafkaTemplate;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Component
//public class KafkaProducer {
//
//    private NlpService nlpService;
//
//    @Autowired
//    public KafkaProducer(NlpService nlpService) {
//        this.nlpService = nlpService;
//    }
//
//
//    @Autowired
//    private KafkaTemplate<String, JSONObject> kafkaTemplate2;
//
//    private static final String TOPIC="NLPResults";
//
//
//    public String postservice(Search search) {
//
//
//
////        Search search;
////        nlpService.
////
////        for(int i=0;i<paragraphList.size();i++)
////        {
////            kafkaTemplate2.send(TOPIC,paragraphList.get(i));
////        }
//        return "Published successfully";
//    }
//
//}