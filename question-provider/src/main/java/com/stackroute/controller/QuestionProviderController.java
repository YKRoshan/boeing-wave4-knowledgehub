package com.stackroute.controller;

import com.stackroute.domain.QueryQuestions;
import com.stackroute.service.QuestionProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class QuestionProviderController {
    private QuestionProviderService questionProviderService;

    @Autowired
    public QuestionProviderController(QuestionProviderService questionProviderService) {
        this.questionProviderService = questionProviderService;
    }

    @GetMapping("getAllQueryQuestions")
    public List<QueryQuestions> getAllQueryQuestions() {
        return new ArrayList<>(questionProviderService.getAllQueryQuestions());
    }
}
