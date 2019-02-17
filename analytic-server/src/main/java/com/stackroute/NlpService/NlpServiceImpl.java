package com.stackroute.NlpService;

import com.aliasi.sentences.IndoEuropeanSentenceModel;
import com.aliasi.sentences.SentenceModel;
import com.aliasi.tokenizer.*;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;
import opennlp.tools.sentdetect.SentenceDetectorME;
import opennlp.tools.tokenize.SimpleTokenizer;

import java.io.*;
import java.util.*;

public class NlpServiceImpl {

    String paragraph;
    String paragraphId = "para001";
    String documentId = "doc001";
    String stopwords[] = {"i", "me", "my", "myself", "we", "our", "ours", "ourselves", "could", "he'd",
            "he'll", "he's", "here's", "how's", "ought", "she'd", "she'll", "that's", "there's", "they'd",
            "they'll", "they're", "they've", "we'd", "we'll", "we're", "we've", "what's", "when's", "where's",
            "who's", "why's", "would", "i'd", "i'll", "i'm", "i've", "you", "you're", "you've", "you'll",
            "you'd", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she",
            "she's", "her", "hers", "herself", "it", "it's", "its", "itself", "they", "them", "their",
            "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "that'll", "these",
            "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having",
            "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until",
            "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through",
            "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on",
            "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where",
            "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no",
            "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will",
            "just", "don", "don't", "should", "should've", "now", "d", "ll", "m", "o", "re", "ve", "y", "ain",
            "aren", "aren't", "couldn", "couldn't", "didn", "didn't", "doesn", "doesn't", "hadn", "hadn't",
            "hasn", "hasn't", "haven", "haven't", "isn", "isn't", "ma", "mightn", "mightn't", "mustn", "mustn't",
            "needn", "needn't", "shan", "shan't", "shouldn", "shouldn't", "wasn", "wasn't", "weren", "weren't",
            "won", "won't", "wouldn", "wouldn't"};

    String[] domainSpecificNgrams = {"annotations", "ioc container", "beans", "spring core", "spring data jpa", "spring datajpa",
            "spring aop", "spring security", "spring cloud", "spring reactive", "spring mvc"};

    public static void main(String[] args) {

    }

    public void setParagraph(String paragraph) {
        this.paragraph = paragraph;
    }

    public ArrayList<String> getAllSentences() {
        ArrayList<String> tokenizedSentences = new ArrayList<>();
        TokenizerFactory tokenizerFactory = IndoEuropeanTokenizerFactory.INSTANCE;
        SentenceModel sentenceModel = new IndoEuropeanSentenceModel();
        List<String> tokenList = new ArrayList<>();
        List<String> whiteSpaceList = new ArrayList<>();
        Tokenizer tokenizer = tokenizerFactory.tokenizer(this.paragraph.toCharArray(), 0, this.paragraph.length());
        tokenizer.tokenize(tokenList, whiteSpaceList);
        System.out.println("token List");
        System.out.println(tokenList);
        System.out.println(whiteSpaceList);
        String tokens[] = new String[tokenList.size()];
        String whiteSpaces[] = new String[whiteSpaceList.size()];
        tokenList.toArray(tokens);
        whiteSpaceList.toArray(whiteSpaces);
        int sentenceBoundaries[] = sentenceModel.boundaryIndices(tokens, whiteSpaces);

        int start = 0;
        for (int i = 0; i < sentenceBoundaries.length; i++) {
            String temporaryString = "";
            while (start <= sentenceBoundaries[i]) {
                temporaryString = temporaryString.concat(tokenList.get(start) + whiteSpaceList.get(start + 1));
                start++;
            }
            tokenizedSentences.add(temporaryString);
            System.out.println(temporaryString);
            System.out.println(tokenizedSentences);
        }
        System.out.println("tokenized Sentences");
        System.out.println(tokenizedSentences);
        return tokenizedSentences;
    }

    public ArrayList<String> getAllWords() {
        String inputParagraph = getCleanerParagrah();
        String[] tokenizedWord = inputParagraph.split(" ");
        ArrayList<String> tokenizedWordList = new ArrayList<>();
        for (int i = 0; i < tokenizedWord.length; i++) {
            tokenizedWordList.add(tokenizedWord[i]);
        }
        System.out.println(tokenizedWordList);
        return tokenizedWordList;
    }

    public String getCleanerParagrah() {
        String inputParagraph = this.paragraph;
        // Data Cleaning by removing extra spaces.
        inputParagraph = inputParagraph.toLowerCase();
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

    public ArrayList<String> getAllTokens() {
        SimpleTokenizer simpleTokenizer = SimpleTokenizer.INSTANCE;
        String[] tokens = simpleTokenizer.tokenize(getCleanerParagrah());
        ArrayList<String> tokensList = new ArrayList<>();
        for (int i = 0; i < tokens.length; i++) {
            tokensList.add(tokens[i]);
        }
        System.out.println(tokensList);
        return tokensList;
    }

    public ArrayList<String> getWordsWithoutStopWords() {
        ArrayList<String> wordsWithOutStopwords = getAllTokens();
        for (int j = 0; j < stopwords.length; j++) {
            if (wordsWithOutStopwords.contains(stopwords[j])) {
                wordsWithOutStopwords.remove(stopwords[j]);//remove it
            }
        }
        System.out.println(wordsWithOutStopwords);
        return wordsWithOutStopwords;
    }

    public String getParagraphWithOutStopWords() {
        ArrayList<String> wordsWithOutStopwords = getAllTokens();
        for (int j = 0; j < stopwords.length; j++) {
            if (wordsWithOutStopwords.contains(stopwords[j])) {
                wordsWithOutStopwords.remove(stopwords[j]);//remove it
            }
        }
        StringBuffer paragraphWithOutStopWords = new StringBuffer();
        for (int i = 0; i < wordsWithOutStopwords.size(); i++) {
            paragraphWithOutStopWords.append(wordsWithOutStopwords.get(i) + " ");
        }
        return paragraphWithOutStopWords.toString().trim();
    }

    public HashMap<String, Long> frequencyOfWords() {
        ArrayList<String> wordsWithOutStopwords = getWordsWithoutStopWords();
        HashMap<String, Long> wordsFrequencyMap = new HashMap<>();
        for (int i = 0; i < wordsWithOutStopwords.size(); i++) {
            if (wordsFrequencyMap.containsKey(wordsWithOutStopwords.get(i))) {
                long count = wordsFrequencyMap.get(wordsWithOutStopwords.get(i));
                count++;
                wordsFrequencyMap.put(wordsWithOutStopwords.get(i), count);
            } else {
                long one = 1;
                wordsFrequencyMap.put(wordsWithOutStopwords.get(i), one);
            }
        }
        System.out.println(wordsFrequencyMap);
        return wordsFrequencyMap;
    }

    public List<String> getStemmedWords() {
        TokenizerFactory tokenizerFactory = IndoEuropeanTokenizerFactory.INSTANCE;
        TokenizerFactory porterFactory = new PorterStemmerTokenizerFactory(tokenizerFactory);
        ArrayList<String> wordTokens = getWordsWithoutStopWords();
        List<String> stemmedWordsList = new ArrayList<>();
        for (String word : wordTokens) {
            Tokenization tokenization = new Tokenization(word, porterFactory);
            stemmedWordsList.add(tokenization.tokenList().toString());
        }
        System.out.println("get stemmed words");
        System.out.println(stemmedWordsList);
        return stemmedWordsList;
    }

    public ArrayList<String> getLemmitizedWords() {
        System.out.println("Lemmitization");

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
        System.out.println(originalWords);
        System.out.println(lemmaWords);
        return lemmaWords;
    }


}
