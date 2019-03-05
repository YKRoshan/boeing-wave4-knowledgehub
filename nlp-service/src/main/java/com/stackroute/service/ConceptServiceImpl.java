package com.stackroute.service;

import com.stackroute.domain.Concept;
import com.stackroute.repository.ConceptRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ConceptServiceImpl implements ConceptService {
    private ConceptRepository conceptRepository;
    private ArrayList<Concept> concepts;

    /*Constructor*/
    public ConceptServiceImpl(ConceptRepository conceptRepository) {
        this.conceptRepository = conceptRepository;
        this.concepts = new ArrayList<>(conceptRepository.getAllConcepts());
    }

    /*
  This method will return all concepts
   */
    public ArrayList<String> getConcepts() {

        ArrayList<String> conceptNames = new ArrayList<>();
        for (int i = 0; i < concepts.size(); i++) {
            conceptNames.add(concepts.get(i).getName());
        }
        return conceptNames;
    }
}