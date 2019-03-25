package com.stackroute.service;

import com.stackroute.domain.ChatMessage;
import com.stackroute.domain.JsonResult;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebSocketService {

    /*
    The methode takes ChatMessage object list and returns the same.
    */

//    @Cacheable(value = "webcache",key = "#jsonResult.sessionId")
    public JsonResult sendMessageService(JsonResult jsonResult){
        System.out.println("going into cacheable service");
        return jsonResult;
    }

//    @Scheduled(cron = "0 */5 * ? * *")
//    @CacheEvict(value = "webcache", allEntries = true)
//    public void clearrediscache(){
//
//    }
}
