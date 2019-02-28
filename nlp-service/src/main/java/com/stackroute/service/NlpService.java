package com.stackroute.service;

import com.aliasi.tokenizer.IndoEuropeanTokenizerFactory;
import com.aliasi.tokenizer.PorterStemmerTokenizerFactory;
import com.aliasi.tokenizer.Tokenization;
import com.aliasi.tokenizer.TokenizerFactory;
import com.stackroute.Domain.NlpResult;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.CoreDocument;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

@Service
@PropertySource(value = "classpath:application.properties")
public interface NlpService {
    public ArrayList<String> getConceptName();

    public void setConceptName(ArrayList<String> conceptName);

    public String getParagraph();

    public String getSessonId();

    public void setSessonId(String sessonId);

    public void setParagraph(String paragraph);

    public String getCleanerParagrah();

    public ArrayList<String> getLemmitizedWords();

    public List<String> getStemmedWords();

    public ArrayList<String> getWordsWithoutStopWords();

    public String getParagraphWithOutStopWords();

    public ArrayList<POSTagging> getPOSWords();

    public void showAllResults();

    public String getUserIntent(String searchString);

    public NlpResult getNlpResults(String searchString);

}
