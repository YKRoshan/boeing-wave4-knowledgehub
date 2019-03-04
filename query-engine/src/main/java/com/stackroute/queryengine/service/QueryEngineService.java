package com.stackroute.queryengine.service;

import com.stackroute.queryengine.domain.Knowledge;

public interface QueryEngineService {
    public Iterable<Knowledge> getQueryResult(String concept, String intentLevel);
}
