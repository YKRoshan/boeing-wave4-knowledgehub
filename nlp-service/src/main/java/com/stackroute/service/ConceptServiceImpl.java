package com.stackroute.service;

import com.stackroute.domain.Concept;
import com.stackroute.repository.ConceptRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConceptServiceImpl implements ConceptService {
    private ConceptRepository conceptRepository;

    public ConceptServiceImpl(ConceptRepository conceptRepository) {
        this.conceptRepository = conceptRepository;
    }

    public ArrayList<String> getConcepts() {
        ArrayList<Concept> concepts = new ArrayList<>(conceptRepository.getAllConcepts());
        ArrayList<String> conceptNames = new ArrayList<>();
        for (int i = 0; i < concepts.size(); i++) {
            conceptNames.add(concepts.get(i).getName());
        }
        return conceptNames;
    }
}