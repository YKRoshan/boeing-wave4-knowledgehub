//package com.stackroute.listener;
//
//import com.stackroute.domain.NlpResult;
//import com.stackroute.domain.SearchJSON;
//import com.stackroute.service.NlpService;
//import com.stackroute.service.QuestionStorageService;
//import org.json.simple.JSONObject;
//import org.json.simple.JSONValue;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Arrays;
//
//
//@Service
//public class KafkaConsumer {
//    private KafkaProducer kafkaProducer;
//    private NlpService nlpservice;
//    private QuestionStorageService questionStorageService;
//
//    @Autowired
//    public KafkaConsumer(NlpService nlpservice,
//                         KafkaProducer kafkaProducer,
//                         QuestionStorageService questionStorageService) {
//        this.kafkaProducer = kafkaProducer;
//        this.nlpservice = nlpservice;
//        this.questionStorageService = questionStorageService;
//    }
//
//    @KafkaListener(topics = "UpstreamResults", groupId = "group_id")
//    public void consume(String message) {
//        JSONObject object = (JSONObject) JSONValue.parse(message);
//        SearchJSON searchJSON = new SearchJSON(object.get("searchString").toString(), object.get("sessionId").toString());
//        ArrayList<String> concepts = new ArrayList<>(Arrays.asList("annotations", "ioc container", "beans", "spring core", "spring data jpa", "spring datajpa", "spring aop", "spring security", "spring cloud", "spring reactive", "spring mvc"));
//        nlpservice.setSessonId(searchJSON.getSessonId());
//        nlpservice.setParagraph(searchJSON.getSearchString());
//        nlpservice.setConceptName(concepts);
//        NlpResult nlpResult = nlpservice.getNlpResults();
//        if (nlpResult.getIntent().equalsIgnoreCase("no intent found")) {
//            String searchStringQuestion = searchJSON.getSearchString();
//            questionStorageService.saveQuestion(searchStringQuestion);
//            kafkaProducer.postservice();
//        } else {
//            kafkaProducer.postservice();
//        }
//    }
//}
//
