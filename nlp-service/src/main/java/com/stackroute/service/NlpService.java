package com.stackroute.service;

import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@PropertySource(value = "classpath:application.properties")
public interface NlpService {
    public void setParagraph(String paragraph) ;
    public String getCleanerParagrah() ;
    public ArrayList<String> getLemmitizedWords();
    public List<String> getStemmedWords();
    public ArrayList<POSTagging> getPOSWords();
    public ArrayList<String> getWordsWithoutStopWords();
    public String getParagraphWithOutStopWords();
}
