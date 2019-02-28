package com.stackroute.service;

import com.stackroute.domain.AnalysisResult;

import java.util.ArrayList;
import java.util.List;

public interface AnalyticService {
    public String getNounSentence();

    public String getVerbSentence();

    public AnalysisResult getAnalysisResult();

    public List<String> getConceptNames();

    public void setConceptNames(List<String> conceptNames);
}
