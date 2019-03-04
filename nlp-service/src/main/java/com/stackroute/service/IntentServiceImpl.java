package com.stackroute.service;

import com.stackroute.domain.Terms;
import com.stackroute.repository.IntentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IntentServiceImpl implements IntentService {
    private IntentRepository intentRepository;
    private ArrayList<Terms> intents;

    @Autowired
    public IntentServiceImpl(IntentRepository intentRepository) {
        this.intentRepository = intentRepository;
        this.intents = new ArrayList<>(intentRepository.getAllTerms());
    }

    public ArrayList<String> getKnowledgeTerms() {
        ArrayList<String> knowledgeTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Knowledge")) {
                knowledgeTerms.add(intents.get(i).getName());
            }
        }
        System.out.println("knowledge");
        System.out.println(knowledgeTerms);
        return knowledgeTerms;
    }

    public ArrayList<String> getComprehensionTerms() {
        ArrayList<String> comprehensionTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Comprehension")) {
                comprehensionTerms.add(intents.get(i).getName());
            }
        }
        System.out.println("Comprehension");
        System.out.println(comprehensionTerms);
        return comprehensionTerms;
    }

    public ArrayList<String> getApplicationTerms() {
        ArrayList<String> applicationTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Application")) {
                applicationTerms.add(intents.get(i).getName());
            }
        }
        return applicationTerms;
    }

    public ArrayList<String> getAnalysisTerms() {
        ArrayList<String> analysisTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Analysis")) {
                analysisTerms.add(intents.get(i).getName());
            }
        }
        return analysisTerms;
    }

    public ArrayList<String> getSynthesisTerms() {
        ArrayList<String> synthesisTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Synthesis")) {
                synthesisTerms.add(intents.get(i).getName());
            }
        }
        return synthesisTerms;
    }

    public ArrayList<String> getEvaluationTerms() {
        ArrayList<String> evaluationTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Evaluation")) {
                evaluationTerms.add(intents.get(i).getName());
            }
        }
        return evaluationTerms;
    }
}




