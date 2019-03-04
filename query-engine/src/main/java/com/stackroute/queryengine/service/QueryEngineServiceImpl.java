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


    @Override
    public Iterable<Knowledge> getQueryResult(String concept, String intentLevel) {

        if(intentLevel.equalsIgnoreCase("Knowledge"))
        {
            return  knowledgeRepository.getKnowledgeNode(concept,intentLevel);
        }
        else if(intentLevel.equalsIgnoreCase("Comprehension"))
        {
            return  knowledgeRepository.getComprehensionNode(concept,intentLevel);
        }
        else if(intentLevel.equalsIgnoreCase("Analysis"))
        {
            return  knowledgeRepository.getanalysisNode(concept,intentLevel);
        }

        else if(intentLevel.equalsIgnoreCase("Application"))
        {
            return  knowledgeRepository.getapplicationNode(concept,intentLevel);
        }

        else if(intentLevel.equalsIgnoreCase("Synthesis"))
        {
            return  knowledgeRepository.getsynthesisNode(concept,intentLevel);
        }
        else if(intentLevel.equalsIgnoreCase("Evaluation"))
        {
            return  knowledgeRepository.getevaluationNode(concept,intentLevel);
        }
        else
            return  knowledgeRepository.getevaluationNode(concept,intentLevel);

    }
}
