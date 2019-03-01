package com.stackroute.searchupstreamservice.controller;

import com.stackroute.searchupstreamservice.domain.Search;
import com.stackroute.searchupstreamservice.listener.KafkaProducer;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


//Controller class
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/")
public class SearchController {


    private KafkaProducer kafkaProducer;

    @Autowired
    public SearchController(KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    //rest end point for search
    @PostMapping("search")
    public String search(@RequestBody String search){
        JSONObject jsonObj = new JSONObject(search);
        JSONObject location=jsonObj.getJSONObject("queryResult");
        Search searchClass =new Search();
        searchClass.setSearchString(location.getString("queryText"));


     return kafkaProducer.upStreamService(searchClass);
    }
    @PostMapping("search/{value}")
    public String searchBox(@RequestParam String value){

        Search searchClass =new Search();
        searchClass.setSearchString(value);


        return kafkaProducer.upStreamService(searchClass);
    }

}
