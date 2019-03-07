package com.stackroute.queryengine.listener;

import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.domain.QueryEngineResult;
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
    private KafkaTemplate<String, QueryEngineResult> kafkaTemplate2;

    private static final String TOPIC = "QueryEngineResults";

    //This method is used to produce an object
    public String postservice(String concept, String intentLevel,String sessionId) {
        Knowledge knowledge;
        Iterable<Knowledge> results = queryEngineServiceImpl.getQueryResult(concept, intentLevel);


        if(intentLevel.equalsIgnoreCase("no intent found"))
        {
            kafkaTemplate2.send(TOPIC,null);
        }

        if (results != null) {

            for (Knowledge result : results) {
                QueryEngineResult queryEngineResult = new QueryEngineResult(
                        result.getParagraphId(), result.getName(), result.getDocumentId(),
                        result.getDomain(), result.getConcept(), result.getIntentLevel(),
                        result.getConfidenceScore(), sessionId
                );
                kafkaTemplate2.send(TOPIC, queryEngineResult);
                System.out.println(queryEngineResult.toString());
            }

        }
        else
        {
            kafkaTemplate2.send(TOPIC,null);
        }
        return "Published successfully";
    }
}