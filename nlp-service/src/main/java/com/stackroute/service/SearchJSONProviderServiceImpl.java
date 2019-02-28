package com.stackroute.service;

import com.stackroute.domain.SearchJSON;
import org.springframework.stereotype.Service;

@Service
public class SearchJSONProviderServiceImpl implements SearchJSONProviderService {
    private SearchJSON searchJSON;

    public SearchJSON getSearchJSON() {
        return searchJSON;
    }

    public void setSearchJSON(SearchJSON searchJSON) {
        this.searchJSON = searchJSON;
    }
}
