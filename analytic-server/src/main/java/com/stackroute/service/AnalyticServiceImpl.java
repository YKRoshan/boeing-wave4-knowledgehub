package com.stackroute.service;

import com.stackroute.domain.AnalysisResult;
import com.stackroute.domain.ConceptNameFrequency;
import com.stackroute.domain.NlpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@PropertySource(value = "classpath:application.properties")
public class AnalyticServiceImpl implements AnalyticService {
    private ArrayList<String> conceptNames;
    private NlpResultService nlpResultService;
    private IntentService intentService;
    private ParagraphProviderService paragraphProviderService;
    private ArrayList<String> knowledge;
    private ArrayList<String> comprehension;
    private ArrayList<String> application;
    private ArrayList<String> analysis;
    private ArrayList<String> synthesis;
    private ArrayList<String> evaluation;
    @Value("${intentNames}")
    private String[] intents;

    // constructor is to initialize all the services required by AnalyticService and also initialize variables
    @Autowired
    public AnalyticServiceImpl(IntentService intentService,
                               NlpResultService nlpResultService,
                               ParagraphProviderService paragraphProviderService) {
        this.nlpResultService = nlpResultService;
        this.paragraphProviderService = paragraphProviderService;
        this.intentService = intentService;
        this.knowledge = new ArrayList<>(intentService.getKnowledgeTerms());
        this.comprehension = new ArrayList<>(intentService.getComprehensionTerms());
        this.application = new ArrayList<>(intentService.getApplicationTerms());
        this.analysis = new ArrayList<>(intentService.getAnalysisTerms());
        this.synthesis = new ArrayList<>(intentService.getSynthesisTerms());
        this.evaluation = new ArrayList<>(intentService.getEvaluationTerms());
    }

    // nlpResultService is used to get all the nouns present in paragraph
    // this method returns all the nouns as one sentence for further analysis
    public String getNounSentence() {
        NlpResult nlpResult = nlpResultService.getNlpResult();
        StringBuilder nounSentence = new StringBuilder();
        ArrayList<String> nouns = new ArrayList<>(nlpResult.getNounWords());
        for (int i = 0; i < nouns.size(); i++) {
            nounSentence.append(nouns.get(i) + " ");
        }
        return nounSentence.toString().trim().toLowerCase();
    }

    public List<ConceptNameFrequency> getFrequencyOfSpringConcepts() {
        String paragraphWithOutStopWords = nlpResultService.getNlpResult().getParagraphWithOutStopWords().toLowerCase();
        ArrayList<ConceptNameFrequency> wordsFrequencyMap = new ArrayList<>();
        for (int i = 0; i < conceptNames.size(); i++) {
            long counter = 0;
            wordsFrequencyMap.add(new ConceptNameFrequency(conceptNames.get(i), counter));
            String pattenString = conceptNames.get(i).toLowerCase();
            Pattern pattern = Pattern.compile(pattenString);
            Matcher matcher = pattern.matcher(paragraphWithOutStopWords);
            while (matcher.find()) {
                long tempCount = wordsFrequencyMap.get(i).getFrequencyCount();
                tempCount++;
                wordsFrequencyMap.get(i).setFrequencyCount(tempCount);
            }
        }
        return wordsFrequencyMap;
    }

    // returns the highest no:of times used conceptName
    public String getMostAccurateConceptName() {
        ArrayList<ConceptNameFrequency> conceptNameFrequenciesList = new ArrayList<>(getFrequencyOfSpringConcepts());
        conceptNameFrequenciesList.sort((o1, o2) -> (int) (o2.getFrequencyCount() - o1.getFrequencyCount()));
        String conceptName = null;
        long max = Integer.MIN_VALUE;
        for (int i = 0; i < conceptNameFrequenciesList.size(); i++) {
            if (max <= conceptNameFrequenciesList.get(i).getFrequencyCount()) {
                max = conceptNameFrequenciesList.get(i).getFrequencyCount();
                conceptName = conceptNameFrequenciesList.get(i).getConceptName();
            }
        }
        return conceptName;
    }

    // nlpResultService is used to get all the verbs present in paragraph
    // this method returns all the verbs as one sentence for further analysis
    public String getVerbSentence() {
        StringBuilder verbSentence = new StringBuilder();
        ArrayList<String> verbs = new ArrayList<>(nlpResultService.getNlpResult().getVerbWords());
        for (int i = 0; i < verbs.size(); i++) {
            verbSentence.append(verbs.get(i) + " ");
        }
        return verbSentence.toString().trim().toLowerCase();
    }

    //still need to implement logic to confidenceScore
    public double getConfidenceScore() {
        double confidenceScore = 6;
        return confidenceScore;
    }

    // returns the intent level of the paragraph by analysis the terms present in paragraph
    public String getIntentLevel() {
        String verbSentence = getVerbSentence().toLowerCase();
        ArrayList<ArrayList<String>> intentLevelList = new ArrayList<>();
        intentLevelList.add(knowledge);
        intentLevelList.add(comprehension);
        intentLevelList.add(application);
        intentLevelList.add(analysis);
        intentLevelList.add(synthesis);
        intentLevelList.add(evaluation);
        int intentLevel = 0;
        int[] count = new int[6];
        for (int i = 0; i < intentLevelList.size(); i++) {
            for (int j = 0; j < intentLevelList.get(i).size(); j++) {
                String pattenString = intentLevelList.get(i).get(j).toLowerCase();
                Pattern pattern = Pattern.compile(pattenString);
                Matcher matcher = pattern.matcher(verbSentence);
                while (matcher.find()) {
                    count[i]++;
                }
            }
        }
        int maximum = Integer.MIN_VALUE;
        for (int i = 0; i < count.length; i++) {
            if (maximum < count[i]) {
                maximum = count[i];
                intentLevel = i;
            }
        }
        return intents[intentLevel];
    }

    public AnalysisResult getAnalysisResult() {
        AnalysisResult analysisResult = new AnalysisResult();
        analysisResult.setConfidenceScore(getConfidenceScore());
        analysisResult.setDocumentId(paragraphProviderService.getParagraph().getDocumentId());
        analysisResult.setParagraphId(paragraphProviderService.getParagraph().getParagraphId());
        analysisResult.setDomain("spring framework");
        analysisResult.setIntentLevel(getIntentLevel());
        analysisResult.setConcept(getMostAccurateConceptName());
        analysisResult.setParagraphContent(nlpResultService.getNlpResult().getClearedParagraph());
        return analysisResult;
    }

    public List<String> getConceptNames() {
        return conceptNames;
    }

    public void setConceptNames(List<String> conceptNames) {
        this.conceptNames = new ArrayList<>(conceptNames);
    }
}