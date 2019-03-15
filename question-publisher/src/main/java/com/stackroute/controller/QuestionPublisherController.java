package com.stackroute.controller;

import com.stackroute.domain.PublishQuestion;
import com.stackroute.service.QuestionDeleterService;
import com.stackroute.service.QuestionPublisherService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
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

    @DeleteMapping("deleteQuestion/{uniqueId}")
    public ResponseEntity<String> deleteQuestion(@PathVariable("uniqueId") String uniqueId) {

        ResponseEntity responseEntity;
        System.out.println("uniqueID: "+uniqueId);
        questionDeleterService.deleteQuestion(uniqueId);
        try {
            responseEntity = new ResponseEntity<String>("QueryQuestions is deleted successfully.", HttpStatus.OK);
        }
        catch (Exception e){
            responseEntity= new ResponseEntity<String>(e.getMessage(),HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @PostMapping("publishQuestion")
    public ResponseEntity<String> postQuestion(@RequestBody PublishQuestion publishQuestion){
        ResponseEntity<String> responseEntity;
        System.out.println("QueryQuestions published successfully = "+publishQuestion.toString());
        responseEntity = new ResponseEntity<>("QueryQuestions published successfully",HttpStatus.ACCEPTED);
        return responseEntity;
    }
}
