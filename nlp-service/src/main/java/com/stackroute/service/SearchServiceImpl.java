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
        // Iterator<String> iterator = conceptSerive.getConcepts().iterator();
        ArrayList<String> concepts = new ArrayList<>(Arrays.asList("annotations", "ioc container", "beans", "spring core", "spring data jpa", "spring datajpa", "spring aop", "spring security", "spring cloud", "spring reactive", "spring mvc"));
//        while (iterator.hasNext()) {
//            concepts.add(iterator.next());
//        }
//
        nlpService.setConceptName(concepts);
        nlpService.setParagraph(searchJSON.getSearchString());
        nlpService.setSessonId(searchJSON.getSessonId());
        return searchJSON;
    }
}
