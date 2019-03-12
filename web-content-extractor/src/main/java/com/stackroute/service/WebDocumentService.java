package com.stackroute.service;

import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.WebDocument;
import org.json.simple.JSONObject;

import java.util.List;

public interface WebDocumentService {
    public void sendSearchdoc(SearchDocument searchDocument);
//    public void extractWebContent(SearchDocument searchDocument);
    public String extractTitle(SearchDocument searchDocument);
//    public void extractMetadata(SearchDocument searchDocument);
    public String extractDescription(SearchDocument searchDocument);
    public String extractKeywords(SearchDocument searchDocument);
    public int extractImageCount(SearchDocument searchDocument);
    public void extractCodePercentage(SearchDocument searchDocument);
    public WebDocument getContentExtractorResults();
}
