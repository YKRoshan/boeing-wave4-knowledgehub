package com.stackroute.Service;


import com.stackroute.domain.SearchDocument;
import com.stackroute.domain.UIDocument;
import com.stackroute.exception.DomainNotFoundException;

import java.io.IOException;
import java.util.List;

public interface WebSearchService {

    public List<SearchDocument> getUrls( UIDocument uiDocument ) throws IOException, DomainNotFoundException;

}
