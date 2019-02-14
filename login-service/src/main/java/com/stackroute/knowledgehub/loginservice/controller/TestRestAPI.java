package com.stackroute.knowledgehub.loginservice.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestRestAPI {
    @GetMapping("/api/test/user")
    public String userAccess() {
        return "Authenticated Contents!";
    }
}
