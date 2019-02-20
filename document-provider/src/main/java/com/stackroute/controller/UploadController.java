package com.stackroute.controller;

import com.stackroute.service.UploadServiceImp;
import org.springframework.stereotype.Controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@Controller
public class UploadController {

    @Autowired
    UploadServiceImp uploadservice;
    List<String> files = new ArrayList<String>();
    @PostMapping("uploadfile")
    public ResponseEntity<String> fileUpload(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            uploadservice.store(file);
            files.add(file.getOriginalFilename());
            message = "You successfully uploaded the file !";
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "FAIL to upload " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }
}
