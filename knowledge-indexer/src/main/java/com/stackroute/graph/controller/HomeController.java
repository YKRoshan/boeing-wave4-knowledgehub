package com.stackroute.graph.controller;

import com.stackroute.graph.model.Concept;
import com.stackroute.graph.model.Knowledge;
import com.stackroute.graph.service.HomeService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@RestController
@Slf4j
public class HomeController {
    private HomeService homeService;

    HomeController(HomeService homeService) {
        this.homeService = homeService;
    }

    @GetMapping("/concept/{name}")
    public ResponseEntity<List<Concept>> getConcept(@PathVariable("name") String name) {
        ResponseEntity<List<Concept>> responseEntity;
        List<Concept> concepts;
        try {
            log.info("Fetching movie nodes");
            concepts = IteratorUtils.toList(homeService.getAllConcepts(name).iterator());
            responseEntity = new ResponseEntity(concepts, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            concepts = Collections.emptyList();
            responseEntity = new ResponseEntity(concepts, HttpStatus.BAD_GATEWAY);
        }
        return responseEntity;
    }

    @GetMapping("/concept/{paragraphId}/{intentLevel}")
    public ResponseEntity<List<Knowledge>> getParticularKnowledge(@PathVariable("paragraphId") Integer paragraphId,@PathVariable("intentLevel") String intentLevel) {
        ResponseEntity<List<Knowledge>> responseEntity;
        List<Knowledge> knowledges;
        try {
            log.info("Fetching movie nodes");
            knowledges = IteratorUtils.toList(homeService.getParticularKnowledge(paragraphId,intentLevel).iterator());
            responseEntity = new ResponseEntity(knowledges, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            knowledges = Collections.emptyList();
            responseEntity = new ResponseEntity(knowledges, HttpStatus.BAD_GATEWAY);
        }
        return responseEntity;
    }

    @GetMapping("/knowledge")
    public ResponseEntity<List<Knowledge>> getAllKnowledge() {
        ResponseEntity<List<Knowledge>> responseEntity;
        List<Knowledge> knowledges;
        try {
            log.info("Fetching movie nodes");
            knowledges = IteratorUtils.toList(homeService.getAllKnowledge().iterator());
            responseEntity = new ResponseEntity(knowledges, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            knowledges = Collections.emptyList();
            responseEntity = new ResponseEntity(knowledges, HttpStatus.BAD_GATEWAY);
        }
        return responseEntity;
    }

    @PostMapping("/addKnowledge")
    public ResponseEntity<String> addKnowledge(@RequestBody Knowledge knowledge) {
        ResponseEntity<String> responseEntity;
        try {
            homeService.saveKnowledgeToDb(knowledge);
            responseEntity = new ResponseEntity<>("Knowledge saved sucessfully", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            responseEntity = new ResponseEntity<>("Error while saving knowledge", HttpStatus.BAD_GATEWAY);
        }
        return responseEntity;
    }

    @PostMapping("addRelationship/{name}/{paragraphId}/{intentLevel}/{confidenceScore}")
    public ResponseEntity<String> addRelationship(@PathVariable("name") String name,
                                                 @PathVariable("paragraphId")Integer paragraphId,
                                                 @PathVariable("intentLevel") String intentLevel,
                                                 @PathVariable("confidenceScore") String confidenceScore)
    {
        ResponseEntity<String> responseEntity;
        try {
            homeService.addRelationship(name,paragraphId,intentLevel,confidenceScore);
            responseEntity = new ResponseEntity<>("Relationship saved sucessfully", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            responseEntity = new ResponseEntity<>("Error while saving relationship", HttpStatus.BAD_GATEWAY);
        }
        return responseEntity;
    }
}
