package com.stackroute.searchbotservice.controller;

import com.stackroute.searchbotservice.domain.Search;
import com.stackroute.searchbotservice.listener.KafkaProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/")
public class SearchController {


    private KafkaProducer kafkaProducer;

    @Autowired
    public SearchController(KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("search")
    public String search(@RequestBody Search search){
        return kafkaProducer.upStreamService(search);
    }

}
