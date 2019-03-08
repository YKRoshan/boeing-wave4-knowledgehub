package com.stackroute.listener;

import com.stackroute.domain.ChatMessage;
import com.stackroute.service.WebSocketService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class KafkaConsumer {
    private KafkaProducer kafkaProducer;

    private WebSocketService webSocketService;


    @Autowired
    SimpMessagingTemplate template;



    @Autowired
    public KafkaConsumer(WebSocketService webSocketService,
                         KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
        this.webSocketService = webSocketService;
    }

    @KafkaListener(topics = "QueryEngineResults", groupId = "group_id")
    public void consume(String  message){

        List<ChatMessage> messages=new ArrayList<>();
        JSONObject object = new JSONObject(message);
        JSONArray values = object.getJSONArray("result");
        String sessionid="";
        for(int i=0; i<values.length();i++){
            JSONObject result = values.getJSONObject(i);
            System.out.println("bbbbbbbbbbbbbbbbbbb");
            System.out.println(result);

            ChatMessage chatMessage=new ChatMessage(result.get("name").toString(),result.get("sessionId").toString(),result.get("paragraphId").toString(),result.get("documentId").toString(),result.get("domain").toString(),result.get("concept").toString(),result.get("intentLevel").toString(),result.get("confidenceScore").toString());
            sessionid=result.get("sessionId").toString();
            messages.add(chatMessage);

        }
        template.convertAndSend("/topic/public/"+sessionid,webSocketService.sendMessageService(messages));

    }



}