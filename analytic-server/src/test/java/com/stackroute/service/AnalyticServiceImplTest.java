package com.stackroute.service;

import com.stackroute.domain.ConceptNameFrequency;
import com.stackroute.domain.IntentWord;
import com.stackroute.domain.NlpResult;

import java.lang.String;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

public class AnalyticServiceImplTest {

    private ArrayList<String> nouns;
    private ArrayList<String> verbs;
    private NlpResult nlpResult;
    private String paragraphWithOutStopWords;
    private ArrayList<String> conceptNames;
    private ArrayList<ConceptNameFrequency> sortedConceptNameFrequenciesList;
    @Mock
    private NlpResultService nlpResultService;

    @Mock
    private ParagraphProviderService paragraphProviderService;

    @Mock
    private IntentService intentService;

    @InjectMocks
    private AnalyticServiceImpl analyticServiceImpl;

    private ArrayList<IntentWord> allIntentterms;
    private IntentWord intentWord;

    private AnalyticServiceImpl spyTemp;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        spyTemp = Mockito.spy(analyticServiceImpl);
        intentWord = new IntentWord("define",0,"Knowledge","indicatorOf",8);
        allIntentterms = new ArrayList<>();
        allIntentterms.add(intentWord);
        conceptNames = new ArrayList<>();
        conceptNames.add("spring framework");
        sortedConceptNameFrequenciesList = new ArrayList<>();
        sortedConceptNameFrequenciesList.add(new ConceptNameFrequency("spring framework", 1));
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
        ArrayList<ConceptNameFrequency> expectedConceptNameFrequencies = new ArrayList<>();
        for (int i = 0; i < conceptNames.size(); i++) {
            long counter = 0;
            expectedConceptNameFrequencies.add(new ConceptNameFrequency(conceptNames.get(i), counter));
            String pattenString = conceptNames.get(i).toLowerCase();
            Pattern pattern = Pattern.compile(pattenString);
            Matcher matcher = pattern.matcher(paragraphWithOutStopWords);
            while (matcher.find()) {
                long tempCount = expectedConceptNameFrequencies.get(i).getFrequencyCount();
                tempCount++;
                expectedConceptNameFrequencies.get(i).setFrequencyCount(tempCount);
            }
        }
        String expectedString = expectedConceptNameFrequencies.get(0).toString();
        analyticServiceImpl.setConceptNames(conceptNames);
        String actualString = analyticServiceImpl.getFrequencyOfSpringConcepts().get(0).toString();
        Assert.assertEquals(expectedString, actualString);
    }

    @Test
    public void getTopConceptName() {
        Mockito.doReturn(sortedConceptNameFrequenciesList).when(spyTemp).getFrequencyOfSpringConcepts();
        sortedConceptNameFrequenciesList.sort((o1, o2) -> (int) (o2.getFrequencyCount() - o1.getFrequencyCount()));
        List<String> topConceptNamesList = new ArrayList<>();
        for (int i = 0; i < 1; i++) {
            if (sortedConceptNameFrequenciesList.get(i).getFrequencyCount() > 0) {
                topConceptNamesList.add(sortedConceptNameFrequenciesList.get(i).getConceptName());
            }
        }
        String expectedString = topConceptNamesList.get(0);
        String actualString = spyTemp.getTopConceptName().get(0);
        Assert.assertEquals(expectedString, actualString);
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

    /*

    public List<IntentWord> getIntentWordWithFrequencyCount() {
        String paragraphWithOutStopWords = nlpResultService.getNlpResult().getParagraphWithOutStopWords().toLowerCase();
        ArrayList<IntentWord> wordsFrequencyMap = new ArrayList<>();
        for (int i = 0; i < allIntentterms.size(); i++) {
            String pattenString = allIntentterms.get(i).getIntentWord().toLowerCase();
            Pattern pattern = Pattern.compile(pattenString);
            Matcher matcher = pattern.matcher(paragraphWithOutStopWords);
            wordsFrequencyMap.add(allIntentterms.get(i));
            while (matcher.find()) {
                long tempCount = wordsFrequencyMap.get(i).getFrequencyCount();
                tempCount++;
                wordsFrequencyMap.get(i).setFrequencyCount(tempCount);
            }
        }
        return wordsFrequencyMap;
    }
*/
    @Test
    public void getIntentWordWithFrequencyCount() {
//        when(nlpResultService.getNlpResult()).thenReturn(nlpResult);
//        ArrayList<IntentWord> wordsFrequencyMap = new ArrayList<>();
//        for (int i = 0; i < allIntentterms.size(); i++) {
//            String pattenString = allIntentterms.get(i).getIntentWord().toLowerCase();
//            Pattern pattern = Pattern.compile(pattenString);
//            Matcher matcher = pattern.matcher(paragraphWithOutStopWords);
//            wordsFrequencyMap.add(allIntentterms.get(i));
//            while (matcher.find()) {
//                long tempCount = wordsFrequencyMap.get(i).getFrequencyCount();
//                tempCount++;
//                wordsFrequencyMap.get(i).setFrequencyCount(tempCount);
//            }
//        }
//        analyticServiceImpl.setAllIntentterms(allIntentterms);
//        String expectedString = wordsFrequencyMap.get(0).toString();
//        String actualString = analyticServiceImpl.getIntentWordWithFrequencyCount().get(0).toString();
////        System.out.println(expectedString);
////        System.out.println(actualString);
//        Assert.assertEquals(expectedString, actualString);
    }

    @Test
    public void getConfidenceScoreOfMostAccurateIntents() {
    }

    @Test
    public void getIntentLevel() {
    }

    @Test
    public void getAnalysisResults() {
    }

    @Test
    public void getConceptNames() {
    }

    @Test
    public void setConceptNames() {
    }
}