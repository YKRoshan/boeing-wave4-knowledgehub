package com.stackroute.listener;

import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.UIDocument;
import com.stackroute.exception.DomainNotFoundException;
import com.stackroute.Service.WebSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/*
Kafka Producer producing JSON Object for Paragraph tokenizer
 */
@Service
public class KafkaProducer {

    private WebSearchService webSearchService;
    private KafkaTemplate<Object, List<SearchDocument>> kafkaTemplate2;

    @Autowired
    public KafkaProducer(WebSearchService webSearchService , KafkaTemplate<Object, List<SearchDocument>> kafkaTemplate2) {
        this.webSearchService = webSearchService;
        this.kafkaTemplate2=kafkaTemplate2;
    }

    @Autowired


    private static final String TOPIC="WebSearch";
    public String postservice(UIDocument uiDocument) throws IOException, DomainNotFoundException {

        List<SearchDocument> searchDocumentList = webSearchService.getUrls(uiDocument);
        kafkaTemplate2.send(TOPIC, searchDocumentList);
        return "Published successfully";
    }

}
