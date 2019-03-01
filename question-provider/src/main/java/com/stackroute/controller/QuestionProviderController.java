package com.stackroute.controller;

import com.stackroute.domain.Question;
import com.stackroute.service.QuestionProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class QuestionProviderController {
    private QuestionProviderService questionProviderService;

    @Autowired
    public QuestionProviderController(QuestionProviderService questionProviderService) {
        this.questionProviderService = questionProviderService;
    }

    @GetMapping("searchQuestions")
    public ResponseEntity<List<Question>> getAllTracks() {
        return new ResponseEntity<>(questionProviderService.getAllQuestions(), HttpStatus.OK);
    }

}
