package com.stackroute.controller;

import com.stackroute.model.FileUrl;
import com.stackroute.service.S3Service;
import netscape.javascript.JSObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/files")
public class UploadFileController {
    @Autowired
    private S3Service amazonS3ClientService;

    @Value("${aws.region}")
    private String awsRegion;

    @Value("${aws.s3.bucket}")
    private String awsS3AudioBucket;


    @PostMapping
    public Map<String, String> uploadFile(@RequestPart(value = "file") MultipartFile file)
    {
        this.amazonS3ClientService.uploadFileToS3Bucket(file, true);

        Map<String, String> response = new HashMap<>();
        response.put("url", "https://s3."+awsRegion+".amazonaws.com/"+awsS3AudioBucket+"/"+file.getOriginalFilename());

        return response;
    }

    @DeleteMapping
    public Map<String, String> deleteFile(@RequestParam("file_name") String fileName)
    {
        this.amazonS3ClientService.deleteFileFromS3Bucket(fileName);

        Map<String, String> response = new HashMap<>();
        response.put("message", "file [" + fileName + "] removing request submitted successfully.");

        return response;
    }
}
