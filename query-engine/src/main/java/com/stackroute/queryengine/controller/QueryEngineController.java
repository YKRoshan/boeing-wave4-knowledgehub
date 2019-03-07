package com.stackroute.queryengine.controller;

import com.stackroute.queryengine.domain.Knowledge;
import com.stackroute.queryengine.service.QueryEngineServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class QueryEngineController {

    private QueryEngineServiceImpl queryEngineServiceImpl;

    @Autowired
    QueryEngineController(QueryEngineServiceImpl queryEngineServiceImpl) {
        this.queryEngineServiceImpl = queryEngineServiceImpl;
    }

    //Code used for testing the methods
    @GetMapping("/{concept}/{intentLevel}")
    public ResponseEntity<List<Knowledge>> getKnowledgeNode(@PathVariable("concept") String concept, @PathVariable("intentLevel") String intentLevel) {
        ResponseEntity responseEntity;
        responseEntity = new ResponseEntity<List<Knowledge>>((List<Knowledge>) queryEngineServiceImpl.getQueryResult(concept,intentLevel),HttpStatus.OK);
        return responseEntity;
    }
}