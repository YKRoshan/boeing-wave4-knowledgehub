package com.stackroute.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TestRestAPI {
    @GetMapping("/api/test/user")
    @PreAuthorize("authenticated")
    public String userAccess() {
        return "Authenticated Contents!";
    }
}
