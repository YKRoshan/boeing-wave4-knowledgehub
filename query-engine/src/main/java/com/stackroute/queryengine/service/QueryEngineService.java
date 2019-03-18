package com.stackroute.queryengine.service;

import com.stackroute.queryengine.domain.Concept;
import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.domain.WebAnalyticsKnowledge;

public interface QueryEngineService {
    public Iterable<Knowledge> getQueryResult(String concept, String intentLevel);
    public Iterable<WebAnalyticsKnowledge> getWebQueryResult(String concept, String intentLevel);

    public Iterable<Concept> getRecommendations(String concept);

    public Iterable<Concept> Recommendations(String concept);

}
