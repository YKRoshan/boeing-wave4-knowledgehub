package com.stackroute.queryengine.listener;

import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.service.QueryEngineServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducer {
    private QueryEngineServiceImpl queryEngineServiceImpl;

    @Autowired
    public KafkaProducer(QueryEngineServiceImpl queryEngineServiceImpl) {
        this.queryEngineServiceImpl = queryEngineServiceImpl;
    }

    @Autowired
    private KafkaTemplate<String, Knowledge> kafkaTemplate2;

    private static final String TOPIC = "QueryEngineResults";

    //This method is used to produce an object
    public String postservice(String concept, String intentLevel) {
        Knowledge knowledge;
        Iterable<Knowledge> results= queryEngineServiceImpl.getQueryResult(concept,intentLevel);
        return "Published successfully";
    }
}