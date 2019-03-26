//web document service interface for web document service methods

package com.stackroute.service;

import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.WebDocument;

public interface WebDocumentService {
    public void sendSearchdoc(SearchDocument searchDocument);
    public String extractTitle(SearchDocument searchDocument);
    public String extractDescription(SearchDocument searchDocument);
    public String extractKeywords(SearchDocument searchDocument);
    public int extractImageCount(SearchDocument searchDocument);
    public void extractCodeSnippets(SearchDocument searchDocument);
    public WebDocument getContentExtractorResults();
}
