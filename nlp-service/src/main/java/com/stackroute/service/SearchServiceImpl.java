package com.stackroute.service;

import com.stackroute.domain.SearchJSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;

@Service
public class SearchServiceImpl implements SearchService {
    private NlpService nlpService;
    private SearchJSON searchJSON;

    @Autowired
    public SearchServiceImpl(NlpService nlpService) {
        this.nlpService = nlpService;
    }

    public SearchJSON getSearchJSON() {
        return searchJSON;
    }

    public void setSearchJSON(SearchJSON searchJSON) {
        this.searchJSON = searchJSON;
    }

    public SearchJSON takeSearchJSON(SearchJSON searchJSON) {
        this.searchJSON = searchJSON;
        nlpService.setParagraph(searchJSON.getSearchString());
        nlpService.setSessonId(searchJSON.getSessonId());
        return searchJSON;
    }
}
