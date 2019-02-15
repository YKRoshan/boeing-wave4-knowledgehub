package com.stackroute.NlpService;

import java.util.ArrayList;
import java.util.HashMap;

public class NlpServiceImpl {

    String paragraph;
    String paragraphId = "para001";
    String documentId = "doc001";
    String  stopwords [] = {"i", "me", "my", "myself", "we", "our", "ours", "ourselves","could", "he'd",
            "he'll", "he's","here's","how's","ought","she'd", "she'll","that's","there's","they'd",
            "they'll", "they're", "they've","we'd", "we'll", "we're", "we've","what's","when's","where's",
            "who's","why's","would", "i'd", "i'll", "i'm", "i've", "you", "you're", "you've", "you'll",
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

    String[] domainSpecificNgrams = {"annotations","ioc container","beans", "spring core","spring data jpa","spring datajpa",
            "spring aop","spring security","spring cloud","spring reactive","spring mvc"};


    public static void main(String[] args) {

    }

    public void setParagraph(String paragraph){
        this.paragraph = paragraph;
    }

    public ArrayList<String> getAllSentences(){
        String inputParagraph = this.paragraph;
        String[] tokenizedParagraph = inputParagraph.split(". ");
        ArrayList<String> tokenizedParagraphList = new ArrayList<>();
        for(int i=0;i<tokenizedParagraph.length;i++){
            tokenizedParagraphList.add(tokenizedParagraph[i]);
        }
        return tokenizedParagraphList;
    }



    public ArrayList<String> getAllWords(){
        String inputParagraph = this.paragraph;
        // Data Cleaning by removing extra spaces.
        inputParagraph = inputParagraph.toLowerCase();
        inputParagraph = inputParagraph.trim();
        inputParagraph = inputParagraph.replaceAll("\\s+", " ");
        inputParagraph = inputParagraph.replaceAll("\\t"," ");

        String[] tokenizedWord = inputParagraph.split(" ");
        ArrayList<String> tokenizedWordList = new ArrayList<>();
        for(int i=0;i<tokenizedWord.length;i++){
            tokenizedWordList.add(tokenizedWord[i]);
        }
        System.out.println(tokenizedWordList);
        return tokenizedWordList;
    }

    public ArrayList<String> removeStopWords(){
        ArrayList<String> wordsWithOutStopwords = getAllWords();
        for (int j = 0; j < stopwords.length; j++) {
            if (wordsWithOutStopwords.contains(stopwords[j])) {
                wordsWithOutStopwords.remove(stopwords[j]);//remove it
            }
        }
        System.out.println(wordsWithOutStopwords);
        return wordsWithOutStopwords;
    }

    public HashMap<String,Long> frequencyOfWords(){
        ArrayList<String> wordsWithOutStopwords = removeStopWords();
        HashMap<String ,Long> wordsFrequencyMap = new HashMap<>();
        for(int i=0;i<wordsWithOutStopwords.size();i++){
            if(wordsFrequencyMap.containsKey(wordsWithOutStopwords.get(i))){
                long count = wordsFrequencyMap.get(wordsWithOutStopwords.get(i));
                count++;
                wordsFrequencyMap.put(wordsWithOutStopwords.get(i),count);
            } else {
                long one = 1;
                wordsFrequencyMap.put(wordsWithOutStopwords.get(i),one);
            }
        }
        System.out.println(wordsFrequencyMap);
        return wordsFrequencyMap;
    }




}
