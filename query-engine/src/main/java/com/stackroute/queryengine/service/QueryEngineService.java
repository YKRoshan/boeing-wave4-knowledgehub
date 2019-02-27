package com.stackroute.queryengine.service;

import com.stackroute.queryengine.model.Knowledge;
import com.stackroute.queryengine.repository.KnowledgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QueryEngineService {
    private KnowledgeRepository knowledgeRepository;

    public QueryEngineService() {
    }

    @Autowired
    public QueryEngineService( KnowledgeRepository knowledgeRepository){
        this.knowledgeRepository=knowledgeRepository;
    }

    public Iterable<Knowledge> getQueryResult(String concept, String intentLevel) {
         return  knowledgeRepository.getKnowledgeNode(concept,intentLevel);
    }

}
