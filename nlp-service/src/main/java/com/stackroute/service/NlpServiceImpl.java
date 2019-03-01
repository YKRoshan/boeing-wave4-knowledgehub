package com.stackroute.service;

import com.aliasi.tokenizer.*;
import com.stackroute.domain.ConceptNameFrequency;
import com.stackroute.domain.NlpResult;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@PropertySource(value = "classpath:application.properties")
public class NlpServiceImpl implements NlpService {

    private String paragraph;
    private String sessonId;
    private ArrayList<String> conceptName;

    public ArrayList<String> getConceptName() {
        return conceptName;
    }

    public void setConceptName(ArrayList<String> conceptName) {
        this.conceptName = conceptName;
    }

    public String getParagraph() {
        return paragraph;
    }

    public String getSessonId() {
        return sessonId;
    }

    public void setSessonId(String sessonId) {
        this.sessonId = sessonId;
    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }

    String[] stopwords = {"i", "me", "my", "myself", "we", "our", "ours", "ourselves", "could", "he'd", "he'll", "he's", "here's", "how's", "ought", "she'd", "she'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "we'd", "we'll", "we're", "we've", "when's", "where's", "who's", "why's", "would", "i'd", "i'll", "i'm", "i've", "you", "you're", "you've", "you'll", "you'd", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "she's", "her", "hers", "herself", "it", "it's", "its", "itself", "they", "them", "their", "theirs", "themselves", "which", "who", "whom", "this", "that", "that'll", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "don't", "should", "should've", "now", "d", "ll", "m", "o", "re", "ve", "y", "ain", "aren", "aren't", "couldn", "couldn't", "didn", "didn't", "doesn", "doesn't", "hadn", "hadn't", "hasn", "hasn't", "haven", "haven't", "isn", "isn't", "ma", "mightn", "mightn't", "mustn", "mustn't", "needn", "needn't", "shan", "shan't", "shouldn", "shouldn't", "wasn", "wasn't", "weren", "weren't", "won", "won't", "wouldn", "wouldn't"};
    private ArrayList<String> knowledge = new ArrayList<>(Arrays.asList("What", "Count", "Read", "Define", "Recall", "Describe", "Recite", "Draw", "Record", "Enumerate", "Reproduce", "Find", "Select", "Identify", "Sequence", "Label", "State", "List", "Tell", "Match", "View", "Name", "Write", "Quote"));
    private ArrayList<String> comprehension = new ArrayList<>(Arrays.asList("Classify", "Interpret", "Cite", "Locate", "Conclude", "Make", "sense", "of", "make sense of", "Convert", "Paraphrase", "Describe", "Predict", "Discuss", "Report", "Estimate", "Restate", "Explain", "Review", "Generalize", "Summarize", "Give", "examples", "give examples", "example", "given example", "given examples", "Trace", "Illustrate", "Understand"));
    private ArrayList<String> application = new ArrayList<>(Arrays.asList("Act", "Imitate", "Administer", "Implement", "Articulate", "Interview", "Assess", "Include", "Change", "Inform", "Chart", "Instruct", "Choose", "Paint", "Collect", "Participate", "Compute", "Predict", "Construct", "Prepare", "Contribute", "Produce", "Control", "Provide", "Demonstrate", "Relate", "Determine", "Report", "Develop", "Select", "Discover", "Show", "Dramatize", "Solve", "Draw", "Transfer", "Establish", "Use", "Extend", "Utilize"));
    private ArrayList<String> analysis = new ArrayList<>(Arrays.asList("Break down", "Focus", "Characterize", "Illustrate", "Classify", "Infer", "Compare", "Limit", "Contrast", "Outline", "Correlate", "Pointout", "Debate", "Prioritize", "Deduce", "Recognize", "Diagram", "Research", "Differentiate", "Relate", "Discriminate", "Separate", "Distinguish", "Subdivide", "Examine"));
    private ArrayList<String> synthesis = new ArrayList<>(Arrays.asList("Adapt", "Intervene", "Anticipate", "Invent", "Categorize", "Makeup", "Collaborate", "Model", "Combine", "Modify", "Communicate", "Negotiate", "Compare", "Organize", "Compile", "Perform", "Compose", "Plan", "Construct", "Pretend", "Contrast", "Produce", "Create", "Progress", "Design", "Propose", "Develop", "Rearrange", "Devise", "Reconstruct", "Express", "Reinforce", "Facilitate", "Reorganize", "Formulate", "Revise", "Generate", "Rewrite", "Incorporate", "Structure", "Individualize", "Substitute", "Initiate", "Validate", "Integrate"));
    private ArrayList<String> evaluation = new ArrayList<>(Arrays.asList("Appraise", "Interpret", "Argue", "Judge", "Assess", "Justify", "Choose", "Predict", "Compare&Contrast", "compare & contrast", "Prioritize", "Conclude", "Prove", "Criticize", "Rank", "Critique", "Rate", "Decide", "Reframe", "Defend", "Select", "Evaluate", "Support"));
    private ArrayList<ArrayList<String>> intentGraph;

    public String getCleanerParagrah() {
        String inputParagraph = this.paragraph;
        // Data Cleaning by removing extra spaces.
        inputParagraph = inputParagraph.trim();
        inputParagraph = inputParagraph.replaceAll("\\s+", " ");
        inputParagraph = inputParagraph.replaceAll("\\t", " ");

        String[] tokenizedWord = inputParagraph.split(" ");
        StringBuffer cleanedParagraph = new StringBuffer();
        for (int i = 0; i < tokenizedWord.length; i++) {
            cleanedParagraph.append(tokenizedWord[i] + " ");
        }
        return cleanedParagraph.toString().trim();
    }

    public ArrayList<String> getWordsWithoutStopWords() {
        String wordsWithOutStopwords[] = getCleanerParagrah().split(" ");
        ArrayList<String> listWithOutStopWords = new ArrayList<>();
        for (int i = 0; i < wordsWithOutStopwords.length; i++) {
            listWithOutStopWords.add(wordsWithOutStopwords[i]);
        }
        for (int j = 0; j < stopwords.length; j++) {
            if (listWithOutStopWords.contains(stopwords[j])) {
                listWithOutStopWords.remove(stopwords[j]);//remove it
            }
        }
        return listWithOutStopWords;
    }

    public String getParagraphWithOutStopWords() {
        ArrayList<String> wordsWithOutStopwords = getWordsWithoutStopWords();
        StringBuffer paragraphWithOutStopWords = new StringBuffer();
        for (int i = 0; i < wordsWithOutStopwords.size(); i++) {
            paragraphWithOutStopWords.append(wordsWithOutStopwords.get(i) + " ");
        }
        return paragraphWithOutStopWords.toString().trim();
    }


    public ArrayList<String> getLemmitizedWords() {
        Properties properties = new Properties();
        properties.setProperty("annotator", "lemma");
        // StanfordCoreNLP uses pipeline and this pipeline is create
        // based on the properties we specity in java.util.Properties
        // different set of propeties provide different NLP tasks
        StanfordCoreNLP pipeline = new StanfordCoreNLP(properties);
        // This annotations object gives the special meaning to the
        // string we used in propeties.put() method
        Annotation annotations = new Annotation(getParagraphWithOutStopWords());
        // pipeline.annotate(annotations)  provies the annotation to those particular objects.
        pipeline.annotate(annotations);
        // sentenceList contains list of sentences
        ArrayList<String> lemmaWords = new ArrayList<>();
        ArrayList<String> originalWords = new ArrayList<>();
        List<CoreMap> sentenceList = annotations.get(CoreAnnotations.SentencesAnnotation.class);
        for (CoreMap sentence : sentenceList) {
            for (CoreLabel word : sentence.get(CoreAnnotations.TokensAnnotation.class)) {
                lemmaWords.add(word.lemma());
                originalWords.add(word.originalText());
            }
        }
        return lemmaWords;
    }

    public String getParagraphWithLemmatizedWords() {
        ArrayList<String> lemmatizedWords = getLemmitizedWords();
        StringBuffer paragraphWithLemmatizedWords = new StringBuffer();
        for (int i = 0; i < lemmatizedWords.size(); i++) {
            paragraphWithLemmatizedWords.append(lemmatizedWords.get(i) + " ");
        }
        return paragraphWithLemmatizedWords.toString().trim();
    }

    public List<String> getStemmedWords() {
        TokenizerFactory tokenizerFactory = IndoEuropeanTokenizerFactory.INSTANCE;
        TokenizerFactory porterFactory = new PorterStemmerTokenizerFactory(tokenizerFactory);
        ArrayList<String> wordTokens = getLemmitizedWords();
        List<String> stemmedWordsList = new ArrayList<>();
        for (String word : wordTokens) {
            Tokenization tokenization = new Tokenization(word, porterFactory);
            stemmedWordsList.add(tokenization.tokenList().toString());
        }
        return stemmedWordsList;
    }

    public ArrayList<ConceptNameFrequency> getFrequencyOfSpringConcepts() {
        String paragraphWithOutStopWords = getParagraphWithOutStopWords().toLowerCase();
        ArrayList<ConceptNameFrequency> wordsFrequencyMap = new ArrayList<>();
        for (int i = 0; i < conceptName.size(); i++) {
            long counter = 0;
            wordsFrequencyMap.add(new ConceptNameFrequency(conceptName.get(i), counter));
            String pattenString = conceptName.get(i).toLowerCase();
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
        ArrayList<ConceptNameFrequency> conceptNameFrequenciesList = getFrequencyOfSpringConcepts();
        conceptNameFrequenciesList.sort(new Comparator<ConceptNameFrequency>() {
            @Override
            public int compare(ConceptNameFrequency o1, ConceptNameFrequency o2) {
                return (int) (o2.getFrequencyCount() - o1.getFrequencyCount());
            }
        });
        String conceptName = new String();
        long max = Integer.MIN_VALUE;
        for (int i = 0; i < conceptNameFrequenciesList.size(); i++) {
            if (max <= conceptNameFrequenciesList.get(i).getFrequencyCount()) {
                max = conceptNameFrequenciesList.get(i).getFrequencyCount();
                conceptName = conceptNameFrequenciesList.get(i).getConceptName();
            }
        }
        return conceptName;
    }

    public String getUserIntent() {
        for (int i = 0; i < conceptName.size(); i++) {
            if (conceptName.get(i).equalsIgnoreCase(getParagraphWithLemmatizedWords())) {
                return "knowledge";
            }
        }
        intentGraph = new ArrayList<>();
        intentGraph.add(knowledge);
        intentGraph.add(comprehension);
        intentGraph.add(application);
        intentGraph.add(analysis);
        intentGraph.add(synthesis);
        intentGraph.add(evaluation);
        String intents[] = {"knowledge", "comprehension", "application", "analysis", "synthesis", "evaluation"};
        String searchString = getParagraphWithLemmatizedWords();
        for (int i = 0; i < intentGraph.size(); i++) {
            for (int j = 0; j < intentGraph.get(i).size(); j++) {
                String pattenString = intentGraph.get(i).get(j).toLowerCase();
                Pattern pattern = Pattern.compile(pattenString);
                Matcher matcher = pattern.matcher(searchString.toLowerCase());
                if (matcher.find()) {
                    return intents[i];
                }
            }
        }
        return "no intent found";
    }

    public NlpResult getNlpResults() {
        NlpResult nlpResult = new NlpResult();
        System.out.println("paragraph");
        System.out.println(getCleanerParagrah());
        System.out.println("stop word paragraph");
        System.out.println(getParagraphWithOutStopWords());
        System.out.println("lemmatized paragraph");
        System.out.println(getParagraphWithLemmatizedWords());
        nlpResult.setConcept(getMostAccurateConceptName());
        System.out.println("ConceptName = " + getMostAccurateConceptName());
        nlpResult.setIntent(getUserIntent());
        System.out.println("Intent = " + getUserIntent());
        nlpResult.setSessonId(getSessonId());
        System.out.println(nlpResult);
        return nlpResult;
    }

}
