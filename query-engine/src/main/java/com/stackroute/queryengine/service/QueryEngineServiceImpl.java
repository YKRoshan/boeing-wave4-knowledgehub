package com.stackroute.queryengine.service;

import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.repository.KnowledgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QueryEngineServiceImpl implements QueryEngineService {
    private KnowledgeRepository knowledgeRepository;

    public QueryEngineServiceImpl() {
    }

    @Autowired
    public QueryEngineServiceImpl(KnowledgeRepository knowledgeRepository){
        this.knowledgeRepository=knowledgeRepository;
    }

    //This method is used for fetching the query results from neo4j
    public Iterable<Knowledge> getQueryResult(String concept, String intentLevel) {
         return  knowledgeRepository.getKnowledgeNode(concept,intentLevel);
    }
}
