package com.stackroute.service;

import com.stackroute.Domain.SearchJSON;

import java.util.ArrayList;

public interface SearchService {
    public SearchJSON getSearchJSON();

    public void setSearchJSON(SearchJSON searchJSON);

    public SearchJSON takeSearchJSON(SearchJSON searchJSON);
}
