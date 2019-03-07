package com.stackroute.searchupstreamservice.service;

import com.stackroute.searchupstreamservice.domain.Search;
import com.stackroute.searchupstreamservice.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchServiceImpl implements  SearchService {
    private SearchRepository searchRepository;

    @Autowired
    public SearchServiceImpl(SearchRepository searchRepository){
        this.searchRepository=searchRepository;
    }

    @Override
    public Search saveSearchText(Search search){

        Search savedText=searchRepository.save(search);
        return savedText;
    }

}
