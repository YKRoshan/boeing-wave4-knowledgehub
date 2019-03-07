package com.stackroute.listener;

import com.stackroute.domain.ChatMessage;
import com.stackroute.service.WebSocketService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

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

//    @SendTo("/topic/public/{sessionId}")
    @KafkaListener(topics = "QueryEngineResults", groupId = "group_id")
    public void consume(String  message){
        JSONObject object = (JSONObject) JSONValue.parse(message);
        ChatMessage chatMessage=new ChatMessage(object.get("name").toString(),object.get("sessionId").toString(),object.get("paragraphId").toString(),object.get("documentId").toString(),object.get("domain").toString(),object.get("concept").toString(),object.get("intentLevel").toString(),object.get("confidenceScore").toString());
        System.out.println("in consumer"+chatMessage.getSessionId());
        System.out.println(chatMessage.getConcept());
        template.convertAndSend("/topic/public/"+chatMessage.getSessionId().toString(),webSocketService.sendMessageService(chatMessage));
//        return webSocketService.sendMessageService(message);
    }
//    public ChatMessage consume(String message) {
//
//        JSONObject object = (JSONObject) JSONValue.parse(message);
//        ChatMessage chatMessage=new ChatMessage(object.get("content").toString()
//                ,object.get("sender").toString());
//        System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//        System.out.println(chatMessage.getSender());
//        System.out.println("bbbbbbbbbbbbbbbbbbbbbbbbbb");
//        System.out.println(chatMessage.getContent());
//
//        return webSocketService.sendMessageService(chatMessage);
//
////        kafkaProducer.postservice(chatMessage);
//    }
}
