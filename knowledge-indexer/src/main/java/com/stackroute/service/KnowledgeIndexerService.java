package com.stackroute.service;

import com.stackroute.model.Concept;
import com.stackroute.model.Knowledge;
import com.stackroute.repository.ConceptRepository;
import com.stackroute.repository.KnowledgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class KnowledgeIndexerService {
     private ConceptRepository conceptRepository;
     private KnowledgeRepository knowledgeRepository;

     @Autowired
     public KnowledgeIndexerService(ConceptRepository conceptRepository, KnowledgeRepository knowledgeRepository){
          this.conceptRepository=conceptRepository;
          this.knowledgeRepository=knowledgeRepository;
     }


     public void saveKnowledgeToDb(Knowledge knowledge) {
          knowledgeRepository.save(knowledge);
     }

     public void addRelationship(String name,
                                 Integer paragraphId, String intentLevel,String confidenceScore)
     {
          knowledgeRepository.insertRelationship(name,paragraphId,intentLevel,confidenceScore);
     }

//     public Iterable<Knowledge> getAllKnowledge(){return knowledgeRepository.findAll();}
//
//
//     public Iterable<Concept> getAllConcepts( String name){
//          return conceptRepository.getConcept(name);
//     }
//
//
//     public Iterable<Knowledge> getParticularKnowledge(Integer paragraphId,String intentLevel){
//          return knowledgeRepository.getKnowledge(paragraphId,intentLevel);
//     }





}
