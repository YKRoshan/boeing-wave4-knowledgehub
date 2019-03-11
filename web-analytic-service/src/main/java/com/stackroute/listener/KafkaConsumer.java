package com.stackroute.listener;

import com.stackroute.domain.WebDocument;
import com.stackroute.service.WebAnalyticService;
import com.stackroute.service.WebDocumentProviderService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class KafkaConsumer {
    private WebAnalyticService webAnalyticService;
    private WebDocumentProviderService webDocumentProviderService;
    private KafkaProducer kafkaProducer;

    @Autowired
    public KafkaConsumer(WebDocumentProviderService webDocumentProviderService,
                         WebAnalyticService webAnalyticService,
                         KafkaProducer kafkaProducer) {
        this.webAnalyticService = webAnalyticService;
        this.webDocumentProviderService = webDocumentProviderService;
    }

    // It listens to topic name "WebContentExtractor"
    @KafkaListener(topics = "WebContentExtractor", groupId = "group_id")
    public void consume(String message) throws IOException {
        JSONObject object = (JSONObject) JSONValue.parse(message);
        List<JSONObject> jsonObjectList = new ArrayList<>();
        JSONObject metaDataJSONObject = (JSONObject) JSONValue.parse(object.get("metadata").toString());
        jsonObjectList.add(metaDataJSONObject);
        //Converting JsonObject to Paragraph domain object
        WebDocument webDocument = new WebDocument(object.get("id").toString(),
                object.get("domain").toString(), jsonObjectList, object.get("link").toString(),
                object.get("conceptName").toString(), object.get("keywords").toString(),
                Integer.parseInt(object.get("imageCount").toString()), Float.parseFloat(object.get("codePercentage").toString()),
                object.get("title").toString(), object.get("description").toString(), object.get("webContent").toString());
        // these method are similar to the methods present in controller
        webDocumentProviderService.setWebDocument(webDocument);
        // After analysis we call the postservice to post in kafka message bus
        kafkaProducer.postservice();
    }
}