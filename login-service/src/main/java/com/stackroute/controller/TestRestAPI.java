package com.stackroute.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//this controller class is used for testing the authentication
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestRestAPI {
    @GetMapping("/api/test/user") //rest end point can be accessed only with jwt token
    @PreAuthorize("authenticated")
    public String userAccess() {
        return "Authenticated Contents!";
    }//just a message
}
