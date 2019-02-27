package com.stackroute.queryengine.controller;

import com.stackroute.queryengine.model.Knowledge;
import com.stackroute.queryengine.service.QueryEngineService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@Slf4j
public class QueryEngineController {


    private QueryEngineService queryEngineService;

    @Autowired
    QueryEngineController(QueryEngineService queryEngineService) {
        this.queryEngineService = queryEngineService;
    }

    //Code used for testing the methods
//    @GetMapping(value = "/{concept}/{intentLevel}")
//    public ResponseEntity<?> getQueryResult(@PathVariable("concept") String concept, @PathVariable("intentLevel")String intentLevel)
//        {
//
//        ResponseEntity responseEntity;
//        try {
//            return new ResponseEntity<Optional<Track>>(trackService.getTrackById(id),HttpStatus.OK);
//        }
//        catch (Exception ex)
//        {
//            responseEntity = new ResponseEntity<String>(ex.getMessage(),HttpStatus.CONFLICT);
//        }
//        return responseEntity;
//    }

    @GetMapping("/{concept}/{intentLevel}")
    public ResponseEntity<List<Knowledge>> getKnowledgeNode(@PathVariable("concept") String concept, @PathVariable("intentLevel") String intentLevel) {

        ResponseEntity responseEntity;
        responseEntity = new ResponseEntity<List<Knowledge>>((List<Knowledge>) queryEngineService.getQueryResult(concept,intentLevel),HttpStatus.OK);
        return responseEntity;
    }
}