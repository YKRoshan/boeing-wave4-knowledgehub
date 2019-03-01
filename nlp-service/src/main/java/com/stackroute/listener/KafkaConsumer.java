package com.stackroute.listener;

import com.stackroute.domain.NlpResult;
import com.stackroute.domain.SearchJSON;
import com.stackroute.listener.KafkaProducer;
import com.stackroute.service.NlpService;
import com.stackroute.service.QuestionStorageService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;


@Service
public class KafkaConsumer {
    private KafkaProducer kafkaProducer;
    private NlpService nlpService;
    private QuestionStorageService questionStorageService;

    @Autowired
    public KafkaConsumer(NlpService nlpService,
                         KafkaProducer kafkaProducer,
                         QuestionStorageService questionStorageService) {
        this.kafkaProducer = kafkaProducer;
        this.nlpService = nlpService;
        this.questionStorageService = questionStorageService;
    }

    @KafkaListener(topics = "UpstreamResults", groupId = "group_id")
    public void consume(String message) {
        JSONObject object = (JSONObject) JSONValue.parse(message);
        SearchJSON searchJSON = new SearchJSON(object.get("searchString").toString(), object.get("sessionId").toString());
        ArrayList<String> concepts = new ArrayList<>(Arrays.asList("annotations", "ioc container", "beans", "spring core", "spring data jpa", "spring datajpa", "spring aop", "spring security", "spring cloud", "spring reactive", "spring mvc"));
        nlpService.setSessonId(searchJSON.getSessonId());
        nlpService.setParagraph(searchJSON.getSearchString());
        nlpService.setConceptName(concepts);
        NlpResult nlpResult = nlpService.getNlpResults();
        if (nlpResult.getIntent().equalsIgnoreCase("no intent found")) {
            String searchStringQuestion = searchJSON.getSearchString();
            questionStorageService.saveQuestion(searchStringQuestion);
            kafkaProducer.postservice();
        } else {
            kafkaProducer.postservice();
        }
    }
}