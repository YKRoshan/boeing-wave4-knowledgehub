package com.stackroute.service;

import com.stackroute.domain.IntentWord;

import java.util.Collection;

public interface IntentService {
    public Collection<IntentWord> getKnowledgeTerms();

    public Collection<IntentWord> getComprehensionTerms();

    public Collection<IntentWord> getApplicationTerms();

    public Collection<IntentWord> getAnalysisTerms();

    public Collection<IntentWord> getSynthesisTerms();

    public Collection<IntentWord> getEvaluationTerms();

    public Collection<IntentWord> getAllIntentWords();

}
