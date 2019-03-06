package com.stackroute.service;

import com.stackroute.domain.IntentWord;
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

    // this method fetches the knowledgeTrems present in Neo4j Intent Graph
    public ArrayList<IntentWord> getKnowledgeTerms() {
        ArrayList<IntentWord> knowledgeTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Knowledge")) {
                knowledgeTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Knowledge",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return knowledgeTerms;
    }

    // this method fetches the ComprehensionTerms present in Neo4j Intent Graph
    public ArrayList<IntentWord> getComprehensionTerms() {
        ArrayList<IntentWord> comprehensionTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Comprehension")) {
                comprehensionTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Comprehension",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return comprehensionTerms;
    }

    // this method fetches the ApplicationTerms present in Neo4j Intent Graph
    public ArrayList<IntentWord> getApplicationTerms() {
        ArrayList<IntentWord> applicationTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Application")) {
                applicationTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Application",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return applicationTerms;
    }

    // this method fetches the AnalysisTerms present in Neo4j Intent Graph
    public ArrayList<IntentWord> getAnalysisTerms() {
        ArrayList<IntentWord> analysisTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Analysis")) {
                analysisTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Analysis",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return analysisTerms;
    }

    // this method fetches the SynthesisTerms present in Neo4j Intent Graph
    public ArrayList<IntentWord> getSynthesisTerms() {
        ArrayList<IntentWord> synthesisTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Synthesis")) {
                synthesisTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Synthesis",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return synthesisTerms;
    }

    // this method fetches the EvaluationTerms present in Neo4j Intent Graph
    public ArrayList<IntentWord> getEvaluationTerms() {
        ArrayList<IntentWord> evaluationTerms = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            if (intents.get(i).getParent_node_type().equals("Evaluation")) {
                evaluationTerms.add(new IntentWord(intents.get(i).getName(),
                        0,
                        "Evaluation",
                        intents.get(i).getRelationship(),
                        Double.parseDouble(intents.get(i).getWeight())));
            }
        }
        return evaluationTerms;
    }

    public ArrayList<IntentWord> getAllIntentWords() {
        ArrayList<IntentWord> allIntentWords = new ArrayList<>();
        for (int i = 0; i < intents.size(); i++) {
            allIntentWords.add(new IntentWord(intents.get(i).getName(),
                    0,
                    intents.get(i).getParent_node_type(),
                    intents.get(i).getRelationship(),
                    Double.parseDouble(intents.get(i).getWeight())));
        }
        return allIntentWords;
    }
}




