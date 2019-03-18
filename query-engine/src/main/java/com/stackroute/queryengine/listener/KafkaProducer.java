package com.stackroute.queryengine.listener;

import com.stackroute.queryengine.domain.*;
import com.stackroute.queryengine.service.NlpResultSeviceImpl;
import com.stackroute.queryengine.service.QueryEngineServiceImpl;
import com.stackroute.queryengine.service.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class KafkaProducer {
    private QueryEngineServiceImpl queryEngineServiceImpl;
    private NlpResultSeviceImpl nlpResultSevice;
    private SearchServiceImpl searchServiceImpl;

    @Autowired
    public KafkaProducer(QueryEngineServiceImpl queryEngineServiceImpl, NlpResultSeviceImpl nlpResultSeviceImpl,
                         SearchServiceImpl searchServiceImpl) {
        this.queryEngineServiceImpl = queryEngineServiceImpl;
        this.nlpResultSevice=nlpResultSeviceImpl;
        this.searchServiceImpl=searchServiceImpl;
    }

    @Autowired
    private KafkaTemplate<String, JsonResult> kafkaTemplate2;

    private static final String TOPIC = "QueryEngineResults";

    //This method is used to produce an object
    public String postservice(String concept, String intentLevel,String sessionId) {
        Knowledge knowledge;
        WebAnalyticsKnowledge webAnalyticsKnowledge;
        JsonResult jsonResult=new JsonResult();
        List<Knowledge> knowledgeresults = (List<Knowledge>) queryEngineServiceImpl.getQueryResult(concept, intentLevel);
        List<WebAnalyticsKnowledge> webKnowledgeResults= (List<WebAnalyticsKnowledge>)queryEngineServiceImpl.getWebQueryResult(concept,intentLevel);
        List<Concept> recommendationsList1=(List<Concept>) queryEngineServiceImpl.getRecommendations(concept);
        List<Concept> recommendationsList2=(List<Concept>) queryEngineServiceImpl.Recommendations(concept);
        List<Concept> recommendations = new ArrayList<Concept>();

        List<NlpResultFrequency> nlpResultFrequencies=nlpResultSevice.getNLPFrequencyResults();
        List<SearchFrequency> searchResultFrequencies=searchServiceImpl.getSearchStringResults();

//        List<QueryEngineResult> qs=new ArrayList<>();
//        List<QueryEngineWebResult> wqs=new ArrayList<>();

//        if(intentLevel.equalsIgnoreCase("no intent found"))
//        {
//            kafkaTemplate2.send(TOPIC,null);
//        }

        recommendations.addAll(recommendationsList1);
        recommendations.addAll(recommendationsList2);

//        if (results != null) {
//            for (Knowledge result : results) {
//                QueryEngineResult queryEngineResult = new QueryEngineResult(
//                        result.getParagraphId(), result.getName(), result.getDocumentId(),
//                        result.getDomain(), result.getConcept(), result.getIntentLevel(),
//                        result.getConfidenceScore(), sessionId
//                );
//                qs.add(queryEngineResult);
//            }
//        }
//
//        if(webResults!=null) {
//            for (WebAnalyticsKnowledge webResult : webResults) {
//                QueryEngineWebResult queryEngineWebResult=new QueryEngineWebResult(
//                        webResult.getWebAnalyticsId(),webResult.getDomain(),webResult.getLink(),
//                        webResult.getConceptName(),webResult.getKeywords(),webResult.getImageCount(),
//                        webResult.getCodePercentage(),webResult.getTitle(),webResult.getDescription(),
//                        webResult.getIntentLevel(),webResult.getConfidenceScore(),sessionId
//                );
//                wqs.add(queryEngineWebResult);
//            }
//        }

        Collections.sort(knowledgeresults,Collections.reverseOrder());
        Collections.sort(webKnowledgeResults,Collections.reverseOrder());

        jsonResult.setSessionId(sessionId);
        jsonResult.setResult(knowledgeresults);
        jsonResult.setWebResult(webKnowledgeResults);
        jsonResult.setRecommendations(recommendations);
        jsonResult.setNlpResultFrequencies(nlpResultFrequencies);
        jsonResult.setSearchFrequencies(searchResultFrequencies);
            System.out.println(jsonResult);
            kafkaTemplate2.send(TOPIC,jsonResult);
//        }
//        else
//        {
//            kafkaTemplate2.send(TOPIC,null);
//        }
        return "Published successfully";
    }
}