package com.stackroute.nlpService;

import com.aliasi.sentences.IndoEuropeanSentenceModel;
import com.aliasi.sentences.SentenceModel;
import com.aliasi.tokenizer.*;
import com.stackroute.domain.NlpResult;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@PropertySource(value = "classpath:application.properties")
public class NlpServiceImpl implements NlpService {

    private String paragraphContent;
    private ArrayList<String> conceptNames;
    @Value("${stopwords}")
    private String stopwords[];

    public String getCleanerParagrah() {
        String inputParagraph = getParagraphContent();
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

    public ArrayList<String> getLemmitizedWords() {
        Properties properties = new Properties();
        properties.setProperty("annotator", "lemma");
        // StanfordCoreNLP uses pipeline and this pipeline is create
        // based on the properties we specity in java.util.Properties
        // different set of propeties provide different NLP tasks
        StanfordCoreNLP pipeline = new StanfordCoreNLP(properties);
        // This annotations object gives the special meaning to the
        // string we used in propeties.put() method
        Annotation annotations = new Annotation(getCleanerParagrah());
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

    public ArrayList<String> getStemmedWords() {
        TokenizerFactory tokenizerFactory = IndoEuropeanTokenizerFactory.INSTANCE;
        TokenizerFactory porterFactory = new PorterStemmerTokenizerFactory(tokenizerFactory);
        ArrayList<String> wordTokens = getLemmitizedWords();
        ArrayList<String> stemmedWordsList = new ArrayList<>();
        for (String word : wordTokens) {
            Tokenization tokenization = new Tokenization(word, porterFactory);
            stemmedWordsList.add(tokenization.tokenList().toString());
        }
        return stemmedWordsList;
    }

    public ArrayList<String> getWordsWithoutStopWords() {
        ArrayList<String> wordsWithOutStopwords = getLemmitizedWords();
        for (int j = 0; j < stopwords.length; j++) {
            if (wordsWithOutStopwords.contains(stopwords[j])) {
                wordsWithOutStopwords.remove(stopwords[j]);//remove it
            }
        }
        return wordsWithOutStopwords;
    }

    public String getParagraphWithOutStopWords() {
        ArrayList<String> wordsWithOutStopwords = getWordsWithoutStopWords();
        StringBuffer paragraphWithOutStopWords = new StringBuffer();
        for (int i = 0; i < wordsWithOutStopwords.size(); i++) {
            paragraphWithOutStopWords.append(wordsWithOutStopwords.get(i) + " ");
        }
        return paragraphWithOutStopWords.toString().trim();
    }

    public ArrayList<POSTagging> getPOSWords() {
        Properties properties = new Properties();
        properties.setProperty("annotator", "pos");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(properties);
        CoreDocument coreDocument = new CoreDocument(getParagraphWithOutStopWords());
        pipeline.annotate(coreDocument);
        List<CoreLabel> coreLabelsList = coreDocument.tokens();
        ArrayList<POSTagging> wordsWithPOSTag = new ArrayList<>();
        for (CoreLabel coreLabel : coreLabelsList) {
            String partsOfSpeech = coreLabel.get(CoreAnnotations.PartOfSpeechAnnotation.class);
            wordsWithPOSTag.add(new POSTagging(coreLabel.originalText(), partsOfSpeech));
        }
        return wordsWithPOSTag;
    }

    public ArrayList<String> getNouns() {
        ArrayList<POSTagging> posTaggings = new ArrayList<>(getPOSWords());
        ArrayList<String> nounWords = new ArrayList<>();
        for (int i = 0; i < posTaggings.size(); i++) {
            if (posTaggings.get(i).getPOSTag().contains("NN")) {
                nounWords.add(posTaggings.get(i).getOriginalWord());
            }
        }
        return nounWords;
    }

    public ArrayList<String> getVerbs() {
        ArrayList<POSTagging> posTaggings = new ArrayList<>(getPOSWords());
        ArrayList<String> verbWords = new ArrayList<>();
        for (int i = 0; i < posTaggings.size(); i++) {
            if (posTaggings.get(i).getPOSTag().contains("VB")) {
                verbWords.add(posTaggings.get(i).getOriginalWord());
            }
        }
        return verbWords;
    }

    public NlpResult getNlpResults() {
        NlpResult nlpResult = new NlpResult();
        System.out.println("Get Cleared Paragraph");
        nlpResult.setClearedParagraph(getCleanerParagrah());
//        System.out.println("Lemmitization");
//        nlpResult.setLemmaWords(getLemmitizedWords());
//        System.out.println("Stemming");
//        nlpResult.setStemmedWords(getStemmedWords());
        System.out.println("Stop words");
        System.out.println(stopwords[0]);
        System.out.println("Stop Word Removal");
        nlpResult.setWordsWithOutStopWords(getWordsWithoutStopWords());
        System.out.println("Stop Word Removal Paragraph");
        nlpResult.setParagraphWithOutStopWords(getParagraphWithOutStopWords());
        System.out.println("POS TAGGING");
        nlpResult.setPosTaggings(getPOSWords());
        System.out.println("Noun Words");
        nlpResult.setNounWords(getNouns());
        System.out.println("Verb Words");
        nlpResult.setVerbWords(getVerbs());
        return nlpResult;
    }

    public ArrayList<String> getConceptNames() {
        return conceptNames;
    }

    public void setConceptNames(ArrayList<String> conceptNames) {
        this.conceptNames = new ArrayList<>(conceptNames);
    }

    public String getParagraphContent() {
        return paragraphContent;
    }

    public void setParagraphContent(String paragraphContent) {
        this.paragraphContent = paragraphContent;
    }
}
