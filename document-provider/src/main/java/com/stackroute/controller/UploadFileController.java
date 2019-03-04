package com.stackroute.controller;

import com.stackroute.domain.FileUrl;
import com.stackroute.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
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

    @Autowired
    private KafkaTemplate<String,FileUrl> kafkaTemplate;

    private static final String TOPIC = "FileUrl";

    FileUrl fileUrl;

    @Value("${aws.region}")
    private String awsRegion;

    @Value("${aws.s3.bucket}")
    private String awsS3AudioBucket;

    /* A controller method to upload a file which accepts
       a file as a parameter
    */
    @PostMapping
    public FileUrl uploadFile(@RequestPart(value = "file") MultipartFile file)
    {
        String url="https://s3."+ awsRegion+".amazonaws.com/"+awsS3AudioBucket+"/"+file.getOriginalFilename();
        fileUrl = new FileUrl();
        fileUrl.setFileUrl(url);

        //calling the serviceImpl method to upload file to s3
        this.amazonS3ClientService.uploadFileToS3Bucket(file, true);


        //sending the fileurl to kafka bus
        kafkaTemplate.send(TOPIC,fileUrl);
        return fileUrl;
    }

    /* A controller method to delete a file which accepts
      a file as a parameter
   */
    @DeleteMapping
    public Map<String, String> deleteFile(@RequestParam("file_name") String fileName)
    {
        this.amazonS3ClientService.deleteFileFromS3Bucket(fileName);

        Map<String, String> response = new HashMap<>();
        response.put("message", "file [" + fileName + "] removing request submitted successfully.");

        return response;
    }
}
