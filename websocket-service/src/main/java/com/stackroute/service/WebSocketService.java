package com.stackroute.service;

import com.stackroute.domain.ChatMessage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebSocketService {

    /*
    The methode takes ChatMessage object list and returns the same.
    */
    public List<ChatMessage> sendMessageService(List<ChatMessage> message){
        return message;
    }
}
