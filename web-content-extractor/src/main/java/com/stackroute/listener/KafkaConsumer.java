
package com.stackroute.listener;

import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.WebDocument;
import com.stackroute.service.WebDocumentService;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumer {
    private WebDocumentService webDocumentService;
    private KafkaProducer kafkaProducer;

    @Autowired
    public KafkaConsumer( WebDocumentService webDocumentService, KafkaProducer kafkaProducer) {
        this.webDocumentService = webDocumentService;
        this.kafkaProducer = kafkaProducer;
    }

    // It listens to topic name "ParagraphContents"
    @KafkaListener(topics = "WebSearch", groupId = "group_id")
    public void consume(String message) {
                JSONObject object=(JSONObject) JSONValue.parse(message);
        SearchDocument searchDocument=new SearchDocument(object.get("id").toString(),object.get("conceptName").toString(), object.get("domain").toString(),object.get("link").toString());
        System.out.println(message);

        webDocumentService.sendSearchdoc(searchDocument);
        webDocumentService.extractWebContent(searchDocument);
        webDocumentService.extractTitle(searchDocument);
        webDocumentService.extractMetadata(searchDocument);
        webDocumentService.extractDescription(searchDocument);
        webDocumentService.extractKeywords(searchDocument);
        webDocumentService.extractImageCount(searchDocument);
        webDocumentService.extractCodePercentage(searchDocument);
        WebDocument webDocument= webDocumentService.getContentExtractorResults();
        kafkaProducer.postservice(webDocument);
        System.out.println(message);
    }
}
