package com.stackroute.controller;

import com.stackroute.domain.WebAnalysisResult;
import com.stackroute.domain.WebDocument;
import com.stackroute.service.WebAnalyticService;
import com.stackroute.service.WebDocumentProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class WebAnalyticServiceController {
    private WebAnalyticService webAnalyticService;
    private WebDocumentProviderService webDocumentProviderService;

    @Autowired
    public WebAnalyticServiceController(WebDocumentProviderService webDocumentProviderService,
                                        WebAnalyticService webAnalyticService) {
        this.webAnalyticService = webAnalyticService;
        this.webDocumentProviderService = webDocumentProviderService;
    }

    @PostMapping("webDocument")
    public ResponseEntity setWebDocument(@RequestBody WebDocument webDocument) {
        ResponseEntity responseEntity;
        try {
            //webDocumentProviderService just stores the input webDocument and if any other service requires
            // webDocument it can just call the webDocumentProviderService.getWebDocument()
            webDocumentProviderService.setWebDocument(webDocument);
            responseEntity = new ResponseEntity<>("Web Document is successfully taken.", HttpStatus.OK);
            return responseEntity;
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("Web Document is not taken.", HttpStatus.BAD_GATEWAY);
            return responseEntity;
        }
    }

    @GetMapping("webAnalysisResult")
    public ResponseEntity<WebAnalysisResult> getWebAnalysisResult() {
        ResponseEntity responseEntity;
        try {
            WebAnalysisResult webAnalysisResult;
            webAnalysisResult = webAnalyticService.getWebAnalysisResult();
            return new ResponseEntity<>(webAnalysisResult, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("No results found.", HttpStatus.EXPECTATION_FAILED);
            return responseEntity;
        }
    }
}