package com.stackroute.queryengine.listener;

import com.stackroute.queryengine.domain.JsonResult;
import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.domain.QueryEngineResult;
import com.stackroute.queryengine.service.QueryEngineServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class KafkaProducer {
    private QueryEngineServiceImpl queryEngineServiceImpl;


    @Autowired
    public KafkaProducer(QueryEngineServiceImpl queryEngineServiceImpl) {
        this.queryEngineServiceImpl = queryEngineServiceImpl;
    }

    @Autowired
    private KafkaTemplate<String, JsonResult> kafkaTemplate2;

    private static final String TOPIC = "QueryEngineResults";

    //This method is used to produce an object
    public String postservice(String concept, String intentLevel,String sessionId) {
        Knowledge knowledge;
        JsonResult jsonResult=new JsonResult();
        Iterable<Knowledge> results = queryEngineServiceImpl.getQueryResult(concept, intentLevel);
        List<QueryEngineResult> qs=new ArrayList<>();

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
                qs.add(queryEngineResult);
            }

            jsonResult.setResult(qs);
            System.out.println(jsonResult);
            kafkaTemplate2.send(TOPIC,jsonResult);
        }
        else
        {
            kafkaTemplate2.send(TOPIC,null);
        }
        return "Published successfully";
    }
}