package com.stackroute.listener;

import com.stackroute.domain.WebDocument;
import com.stackroute.service.WebDocumentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
public class KafkaProducer {

    private WebDocumentService webDocumentService;

    @Autowired
    public KafkaProducer(WebDocumentService webDocumentService) {
        this.webDocumentService = webDocumentService;
    }


    @Autowired
    private KafkaTemplate<String, WebDocument> kafkaTemplate2;

    private static final String TOPIC="WebContentExtractor";


    public String postservice(WebDocument webDocument)
    {
        kafkaTemplate2.send(TOPIC,webDocument);

        return "Published successfully";
    }

}