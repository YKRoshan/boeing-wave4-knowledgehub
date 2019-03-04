package com.stackroute.controller;

import com.stackroute.service.QuestionDeleterService;
import com.stackroute.service.QuestionPublisherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class QuestionPublisherController {
    private QuestionDeleterService questionDeleterService;
    private QuestionPublisherService questionPublisherService;

    public QuestionPublisherController(QuestionDeleterService questionDeleterService,
                                       QuestionPublisherService questionPublisherService) {
        this.questionDeleterService = questionDeleterService;
        this.questionPublisherService = questionPublisherService;

    }

    @DeleteMapping("question")
    public ResponseEntity<String> deleteQuestion(@RequestParam String id) {
        ResponseEntity responseEntity;
        questionDeleterService.deleteQuestion(id);
        responseEntity = new ResponseEntity<String>("Question is deleted successfully.", HttpStatus.CREATED);
        return responseEntity;
    }
}
