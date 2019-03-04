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
        Iterable<Knowledge> results = queryEngineServiceImpl.getQueryResult(concept, intentLevel);

        System.out.println("size of results"+results);

        if(intentLevel.equalsIgnoreCase("no intent found"))
        {
            kafkaTemplate2.send(TOPIC,null);
        }

        if (results != null) {

            for (Knowledge result : results) {

                kafkaTemplate2.send(TOPIC,result);
                System.out.println(result.getConfidenceScore());
                System.out.println(result.getName());
                System.out.println(result.getConcept());
                System.out.println(result.getDomain());
                System.out.println(result.getIntentLevel());
            }
        }
        else
        {
            kafkaTemplate2.send(TOPIC,null);
        }
        return "Published successfully";
    }
}