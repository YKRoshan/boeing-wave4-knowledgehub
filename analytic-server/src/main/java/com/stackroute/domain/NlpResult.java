package com.stackroute.domain;

import com.stackroute.nlpService.POSTagging;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NlpResult {
    private String clearedParagraph;
    private List<String> allTokenedSentences;
    private List<String> lemmaWords;
    private List<String> stemmedWords;
    private List<String> wordsWithOutStopWords;
    private String paragraphWithOutStopWords;
    private List<POSTagging> posTaggings;
    private List<String> nounWords;
    private List<String> verbWords;
}
