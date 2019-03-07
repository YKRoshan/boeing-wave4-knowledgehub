package com.stackroute.service;

import com.stackroute.domain.*;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public interface AnalyticService {
    // nlpResultService is used to get all the nouns present in paragraph
    // this method returns all the nouns as one sentence for further analysis
    public String getNounSentence();

    public List<ConceptNameFrequency> getFrequencyOfSpringConcepts();

    // returns the highest no:of times used conceptName
    public List<String> getTopConceptName();

    // nlpResultService is used to get all the verbs present in paragraph
    // this method returns all the verbs as one sentence for further analysis
    public String getVerbSentence();

    public List<IntentWord> getIntentWordWithFrequencyCount();

    public List<IntentWithConfidenceScore> getConfidenceScoreOfMostAccurateIntents();


    // returns the intent level of the paragraph by analysis the terms present in paragraph
    public String getIntentLevel();

    public double getConfidenceScore();

    public List<AnalysisResult> getAnalysisResults();

    public void setConceptNames(ArrayList<String> conceptNames);

    public void setNlpResultService(NlpResultService nlpResultService);

    public void setIntentService(IntentService intentService);

    public void setParagraphProviderService(ParagraphProviderService paragraphProviderService);

    public void setAllIntentterms(ArrayList<IntentWord> allIntentterms);

    public void setIntents(String[] intents);
}
