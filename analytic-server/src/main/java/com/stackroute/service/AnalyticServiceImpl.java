package com.stackroute.service;

import com.stackroute.domain.AnalysisResult;
import com.stackroute.domain.ConceptNameFrequency;
import com.stackroute.domain.NlpResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AnalyticServiceImpl implements AnalyticService {
    private ArrayList<String> conceptNames;
    private NlpResultService nlpResultService;
    private ParagraphProviderService paragraphProviderService;
    private static final ArrayList<String> knowledge = new ArrayList<>(Arrays.asList("Count", "Read", "Define", "Recall", "Describe", "Recite", "Draw", "Record", "Enumerate", "Reproduce", "Find", "Select", "Identify", "Sequence", "Label", "State", "List", "Tell", "Match", "View", "Name", "Write", "Quote"));
    private static final ArrayList<String> comprehension = new ArrayList<>(Arrays.asList("Classify", "Interpret", "Cite", "Locate", "Conclude", "Make", "sense", "of", "make sense of", "Convert", "Paraphrase", "Describe", "Predict", "Discuss", "Report", "Estimate", "Restate", "Explain", "Review", "Generalize", "Summarize", "Give", "examples", "give examples", "example", "given example", "given examples", "Trace", "Illustrate", "Understand"));
    private static final ArrayList<String> application = new ArrayList<>(Arrays.asList("Act", "Imitate", "Administer", "Implement", "Articulate", "Interview", "Assess", "Include", "Change", "Inform", "Chart", "Instruct", "Choose", "Paint", "Collect", "Participate", "Compute", "Predict", "Construct", "Prepare", "Contribute", "Produce", "Control", "Provide", "Demonstrate", "Relate", "Determine", "Report", "Develop", "Select", "Discover", "Show", "Dramatize", "Solve", "Draw", "Transfer", "Establish", "Use", "Extend", "Utilize"));
    private static final ArrayList<String> analysis = new ArrayList<>(Arrays.asList("Break down", "Focus", "Characterize", "Illustrate", "Classify", "Infer", "Compare", "Limit", "Contrast", "Outline", "Correlate", "Pointout", "Debate", "Prioritize", "Deduce", "Recognize", "Diagram", "Research", "Differentiate", "Relate", "Discriminate", "Separate", "Distinguish", "Subdivide", "Examine"));
    private static final ArrayList<String> synthesis = new ArrayList<>(Arrays.asList("Adapt", "Intervene", "Anticipate", "Invent", "Categorize", "Makeup", "Collaborate", "Model", "Combine", "Modify", "Communicate", "Negotiate", "Compare", "Organize", "Compile", "Perform", "Compose", "Plan", "Construct", "Pretend", "Contrast", "Produce", "Create", "Progress", "Design", "Propose", "Develop", "Rearrange", "Devise", "Reconstruct", "Express", "Reinforce", "Facilitate", "Reorganize", "Formulate", "Revise", "Generate", "Rewrite", "Incorporate", "Structure", "Individualize", "Substitute", "Initiate", "Validate", "Integrate"));
    private static final ArrayList<String> evaluation = new ArrayList<>(Arrays.asList("Appraise", "Interpret", "Argue", "Judge", "Assess", "Justify", "Choose", "Predict", "Compare&Contrast", "compare & contrast", "Prioritize", "Conclude", "Prove", "Criticize", "Rank", "Critique", "Rate", "Decide", "Reframe", "Defend", "Select", "Evaluate", "Support"));

    @Autowired
    public AnalyticServiceImpl(NlpResultService nlpResultService, ParagraphProviderService paragraphProviderService) {
        this.nlpResultService = nlpResultService;
        this.paragraphProviderService = paragraphProviderService;
    }

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
            wordsFrequencyMap.add(new ConceptNameFrequency(conceptNames.get(i).toLowerCase(), counter));
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

    public String getVerbSentence() {
        StringBuilder verbSentence = new StringBuilder();
        ArrayList<String> verbs = new ArrayList<>(nlpResultService.getNlpResult().getVerbWords());
        for (int i = 0; i < verbs.size(); i++) {
            verbSentence.append(verbs.get(i) + " ");
        }
        return verbSentence.toString().trim().toLowerCase();
    }

    public double getConfidenceScore() {
        double confidenceScore = 6;
        return confidenceScore;
    }

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
        String[] intents = {"knowledge", "comprehension", "application", "analysis", "synthesis", "evaluation"};
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