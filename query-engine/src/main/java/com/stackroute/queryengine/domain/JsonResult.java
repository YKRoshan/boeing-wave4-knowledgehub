package com.stackroute.queryengine.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Iterator;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class JsonResult {

    private String sessionId;
    private List<Knowledge> result;
    private List<WebAnalyticsKnowledge> webResult;
    private List<Concept> recommendations;
    private List<NlpResultFrequency> nlpResultFrequencies;
    private List<SearchFrequency> searchFrequencies;
}
