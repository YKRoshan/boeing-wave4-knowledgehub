package com.stackroute.service;


import java.lang.String;

import com.stackroute.domain.*;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.when;

public class AnalyticServiceImplTest {
    private AnalyticServiceImpl spyTemp;
    private ArrayList<String> nouns;
    private ArrayList<String> verbs;
    private NlpResult nlpResult;
    private String paragraphWithOutStopWords;
    private ArrayList<String> conceptNames;
    private ArrayList<ConceptNameFrequency> frequencyOfSpringConcepts;
    private ConceptNameFrequency conceptNameFrequency;
    private ArrayList<IntentWord> allIntentWordWithFrequencyCount;
    private IntentWord intentWord;
    private List<IntentWithConfidenceScore> intentWithConfidenceScoresList;
    private IntentWithConfidenceScore intentWithConfidenceScore;
    private List<AnalysisResult> analysisResultList;
    private AnalysisResult analysisResult;
    private List<String> topConcepNamesList;
    private Paragraph paragraph;
    @Mock
    private NlpResultService nlpResultService;

    @Mock
    private ParagraphProviderService paragraphProviderService;

    @Mock
    private IntentService intentService;

    @InjectMocks
    private AnalyticServiceImpl analyticServiceImpl;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        spyTemp = Mockito.spy(analyticServiceImpl);
        intentWord = new IntentWord("define", 1, "Knowledge", "indicatorOf", 9);
        allIntentWordWithFrequencyCount = new ArrayList<>();
        allIntentWordWithFrequencyCount.add(intentWord);
        conceptNames = new ArrayList<>();
        conceptNames.add("spring framework");
        frequencyOfSpringConcepts = new ArrayList<>();
        conceptNameFrequency = new ConceptNameFrequency("spring framework", 1);
        frequencyOfSpringConcepts.add(conceptNameFrequency);
        nouns = new ArrayList<>();
        nouns.add("spring");
        nouns.add("framework");
        verbs = new ArrayList<>();
        verbs.add("define");
        paragraphWithOutStopWords = "define spring framework";
        nlpResult = new NlpResult();
        nlpResult.setNounWords(nouns);
        nlpResult.setVerbWords(verbs);
        nlpResult.setParagraphWithOutStopWords(paragraphWithOutStopWords);
        nlpResult.setClearedParagraph("define spring framework");
        intentWithConfidenceScore = new IntentWithConfidenceScore("Knowledge", 100);
        intentWithConfidenceScoresList = new ArrayList<>();
        intentWithConfidenceScoresList.add(intentWithConfidenceScore);
        analysisResult = new AnalysisResult();
        analysisResult.setParagraphContent(paragraphWithOutStopWords);
        analysisResult.setIntentLevel("Knowledge");
        analysisResult.setDomain("spring framework");
        analysisResult.setParagraphId("P001");
        analysisResult.setDocumentId("D001");
        analysisResult.setConfidenceScore(100);
        analysisResult.setConcept("spring framework");
        analysisResultList = new ArrayList<>();
        analysisResultList.add(analysisResult);
        topConcepNamesList = new ArrayList<>();
        topConcepNamesList.add("spring framework");
        paragraph = new Paragraph("P001", paragraphWithOutStopWords, "D001");
    }

    @Test
    public void getNounSentence() {
        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
        StringBuilder expected = new StringBuilder();
        for (int i = 0; i < nouns.size(); i++) {
            expected.append(nouns.get(i) + " ");
        }
        String expectedString = expected.toString().trim();
        String actualString = analyticServiceImpl.getNounSentence();
        Assert.assertEquals(expectedString, actualString);
    }

    @Test
    public void getFrequencyOfSpringConcepts() {
        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
        String expectedConceptNameFrequencyString = conceptNameFrequency.toString();
        analyticServiceImpl.setConceptNames(conceptNames);
        String actualConceptNameFrequencyString = analyticServiceImpl.getFrequencyOfSpringConcepts().get(0).toString();
        Assert.assertEquals(expectedConceptNameFrequencyString, actualConceptNameFrequencyString);
    }

    @Test
    public void getTopConceptName() {
        Mockito.doReturn(frequencyOfSpringConcepts).when(spyTemp).getFrequencyOfSpringConcepts();
        String expectedTopConceptNameString = "spring framework";
        String actualTopConceptNameString = spyTemp.getTopConceptName().get(0);
        Assert.assertEquals(expectedTopConceptNameString, actualTopConceptNameString);
    }

    @Test
    public void getVerbSentence() {
        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
        StringBuilder expected = new StringBuilder();
        for (int i = 0; i < verbs.size(); i++) {
            expected.append(verbs.get(i) + " ");
        }
        String expectedString = expected.toString().trim();
        String actualString = analyticServiceImpl.getVerbSentence();
        Assert.assertEquals(expectedString, actualString);
    }

    @Test
    public void getIntentWordWithFrequencyCount() {
        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
        String expectedIntentWordFrequencyCount = allIntentWordWithFrequencyCount.get(0).toString();
        ArrayList<IntentWord> intentWordList = new ArrayList<>();
        intentWordList.add(new IntentWord("define", 0, "Knowledge", "indicatorOf", 9));
        analyticServiceImpl.setAllIntentterms(intentWordList);
        String actualIntentWordFrequencyCount = analyticServiceImpl.getIntentWordWithFrequencyCount().get(0).toString();
        Assert.assertEquals(expectedIntentWordFrequencyCount, actualIntentWordFrequencyCount);
    }

    @Test
    public void getConfidenceScoreOfMostAccurateIntents() {
        Mockito.doReturn(allIntentWordWithFrequencyCount).when(spyTemp).getIntentWordWithFrequencyCount();
        String expectedIntentWithConfidenceScoreString = intentWithConfidenceScore.toString();
        spyTemp.setIntents(new String[]{"Knowledge", "Comprehension", "Application", "Analysis", "Synthesis", "Evaluation"});
        String actualIntentWithConfidenceScoreString = spyTemp.getConfidenceScoreOfMostAccurateIntents().get(0).toString();
        Assert.assertEquals(expectedIntentWithConfidenceScoreString, actualIntentWithConfidenceScoreString);
    }

    @Test
    public void getIntentLevel() {
        Mockito.doReturn(intentWithConfidenceScoresList).when(spyTemp).getConfidenceScoreOfMostAccurateIntents();
        String expectedIntentLevel = "Knowledge";
        String actualIntentLevel = spyTemp.getIntentLevel();
        Assert.assertEquals(expectedIntentLevel, actualIntentLevel);
    }

    @Test
    public void getConfidenceScore() {
        Mockito.doReturn(intentWithConfidenceScoresList).when(spyTemp).getConfidenceScoreOfMostAccurateIntents();
        double expectedConfidenceScore = 100;
        double actualConfidenceScore = spyTemp.getConfidenceScore();
        Assert.assertEquals(expectedConfidenceScore, actualConfidenceScore, 0);
    }

    @Test
    public void getAnalysisResults() {
        Mockito.doReturn(topConcepNamesList).when(spyTemp).getTopConceptName();
        Mockito.doReturn(100.0).when(spyTemp).getConfidenceScore();
        Mockito.doReturn("Knowledge").when(spyTemp).getIntentLevel();
        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
        when(paragraphProviderService.getParagraph()).thenReturn(paragraph);
        spyTemp.setConceptNames(conceptNames);
        String expectedAnalysisResultsString = analysisResultList.get(0).toString();
        String actualAnalysisResultsString = spyTemp.getAnalysisResults().get(0).toString();
        Assert.assertEquals(expectedAnalysisResultsString, actualAnalysisResultsString);
    }
}