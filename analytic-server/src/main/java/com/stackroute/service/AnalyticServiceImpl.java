package com.stackroute.service;

import com.stackroute.domain.*;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@PropertySource(value = "classpath:application.yml")
public class AnalyticServiceImpl implements AnalyticService {
    private ArrayList<String> conceptNames;
    private NlpResultService nlpResultService;
    private IntentService intentService;
    private ParagraphProviderService paragraphProviderService;
    private ArrayList<IntentWord> knowledge;
    private ArrayList<IntentWord> comprehension;
    private ArrayList<IntentWord> application;
    private ArrayList<IntentWord> analysis;
    private ArrayList<IntentWord> synthesis;
    private ArrayList<IntentWord> evaluation;
    private ArrayList<IntentWord> allIntentterms = new ArrayList<>();
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
        this.allIntentterms = new ArrayList<>(intentService.getAllIntentWords());
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
    public List<String> getTopConceptName() {
        ArrayList<ConceptNameFrequency> sortedConceptNameFrequenciesList = new ArrayList<>(getFrequencyOfSpringConcepts());
        sortedConceptNameFrequenciesList.sort((o1, o2) -> (int) (o2.getFrequencyCount() - o1.getFrequencyCount()));
        List<String> topConceptNamesList = new ArrayList<>();
        long maxConceptFrequency = sortedConceptNameFrequenciesList.get(0).getFrequencyCount();
        for (int i = 0; i < sortedConceptNameFrequenciesList.size(); i++) {
            if (sortedConceptNameFrequenciesList.get(i).getFrequencyCount() > 0) {
                topConceptNamesList.add(sortedConceptNameFrequenciesList.get(i).getConceptName());
            }
        }
        if (maxConceptFrequency == 0) {
            topConceptNamesList.add("No concept found");
            return topConceptNamesList;
        } else {
            return topConceptNamesList;
        }
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
        System.out.println(wordsFrequencyMap.get(0).toString());
        return wordsFrequencyMap;
    }

    public List<IntentWithConfidenceScore> getConfidenceScoreOfMostAccurateIntents() {
        List<IntentWord> intentWordWithFrequencyList = getIntentWordWithFrequencyCount();
        double[] confidenceScore = new double[6];
        int[] noOfTermsInEachIntent = new int[6];
        double indicator = 0;
        double counterIndicator = 0;
        for (int i = 0; i < intentWordWithFrequencyList.size(); i++) {
            switch (intentWordWithFrequencyList.get(i).getIntent()) {
                case "Knowledge":
                    noOfTermsInEachIntent[0]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[0] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
                case "Comprehension":
                    noOfTermsInEachIntent[1]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[1] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
                case "Application":
                    noOfTermsInEachIntent[2]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[2] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
                case "Analysis":
                    noOfTermsInEachIntent[3]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[3] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
                case "Synthesis":
                    noOfTermsInEachIntent[4]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[4] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
                case "Evaluation":
                    noOfTermsInEachIntent[5]++;
                    indicator = 0;
                    counterIndicator = 0;
                    if (intentWordWithFrequencyList.get(i).getRelationship().equalsIgnoreCase("indicatorOf")) {
                        indicator = indicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    } else {
                        counterIndicator = counterIndicator + intentWordWithFrequencyList.get(i).getFrequencyCount() * intentWordWithFrequencyList.get(i).getWeight();
                    }
                    if (indicator != 0) {
                        confidenceScore[5] += (indicator / (indicator + counterIndicator)) * 100;
                    }
                    break;
            }
        }
        List<IntentWithConfidenceScore> intentWithConfidencyScoresList = new ArrayList<>();
        for (int i = 0; i < confidenceScore.length; i++) {
            confidenceScore[i] = confidenceScore[i] / noOfTermsInEachIntent[i];
            if (confidenceScore[i] >= 1) {
                intentWithConfidencyScoresList.add(new IntentWithConfidenceScore(intents[i], confidenceScore[i]));
            }
        }
        return intentWithConfidencyScoresList;
    }


    // returns the intent level of the paragraph by analysis the terms present in paragraph
    public String getIntentLevel() {
        List<IntentWithConfidenceScore> intentWithConfidenceScores = getConfidenceScoreOfMostAccurateIntents();
        double maxConfidenceScore = Integer.MIN_VALUE;
        String intentLevel = null;
        for (int i = 0; i < intentWithConfidenceScores.size(); i++) {
            if (intentWithConfidenceScores.get(i).getConfidenceScore() > maxConfidenceScore) {
                maxConfidenceScore = intentWithConfidenceScores.get(i).getConfidenceScore();
                intentLevel = intentWithConfidenceScores.get(i).getIntnet();
            }
        }
        if (intentLevel == null) {
            return "no intentLevel found";
        }
        return intentLevel;
    }

    public double getConfidenceScore() {
        List<IntentWithConfidenceScore> intentWithConfidenceScores = getConfidenceScoreOfMostAccurateIntents();
        System.out.println("intentWithConfidenceScore" + intentWithConfidenceScores);
        double maxConfidenceScore = Integer.MIN_VALUE;
        for (int i = 0; i < intentWithConfidenceScores.size(); i++) {
            if (intentWithConfidenceScores.get(i).getConfidenceScore() > maxConfidenceScore) {
                maxConfidenceScore = intentWithConfidenceScores.get(i).getConfidenceScore();
            }
        }
        return maxConfidenceScore;
    }

    public List<AnalysisResult> getAnalysisResults() {
        List<AnalysisResult> analysisResultList = new ArrayList<>();
        for (int i = 0; i < getTopConceptName().size(); i++) {
            analysisResultList.add(new AnalysisResult());
        }
        for (int i = 0; i < analysisResultList.size(); i++) {
            analysisResultList.get(i).setConfidenceScore(getConfidenceScore());
            analysisResultList.get(i).setDocumentId(paragraphProviderService.getParagraph().getDocumentId());
            analysisResultList.get(i).setParagraphId(paragraphProviderService.getParagraph().getParagraphId());
            analysisResultList.get(i).setDomain("spring framework");
            analysisResultList.get(i).setIntentLevel(getIntentLevel());
            analysisResultList.get(i).setConcept(getTopConceptName().get(i));
            analysisResultList.get(i).setParagraphContent(nlpResultService.getNlpResult().getClearedParagraph());
        }
        return analysisResultList;
    }

    public void setConceptNames(ArrayList<String> conceptNames) {
        this.conceptNames = conceptNames;
    }

    public void setNlpResultService(NlpResultService nlpResultService) {
        this.nlpResultService = nlpResultService;
    }

    public void setIntentService(IntentService intentService) {
        this.intentService = intentService;
    }

    public void setParagraphProviderService(ParagraphProviderService paragraphProviderService) {
        this.paragraphProviderService = paragraphProviderService;
    }

    public void setKnowledge(ArrayList<IntentWord> knowledge) {
        this.knowledge = knowledge;
    }

    public void setComprehension(ArrayList<IntentWord> comprehension) {
        this.comprehension = comprehension;
    }

    public void setApplication(ArrayList<IntentWord> application) {
        this.application = application;
    }

    public void setAnalysis(ArrayList<IntentWord> analysis) {
        this.analysis = analysis;
    }

    public void setSynthesis(ArrayList<IntentWord> synthesis) {
        this.synthesis = synthesis;
    }

    public void setEvaluation(ArrayList<IntentWord> evaluation) {
        this.evaluation = evaluation;
    }

    public void setAllIntentterms(ArrayList<IntentWord> allIntentterms) {
        this.allIntentterms = allIntentterms;
    }

    public void setIntents(String[] intents) {
        this.intents = intents;
    }
}