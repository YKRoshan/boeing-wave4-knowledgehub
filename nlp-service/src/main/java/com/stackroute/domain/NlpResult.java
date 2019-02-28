package com.stackroute.domain;


public class NlpResult {
    private String intent;
    private String concept;
    private String sessonId;

    public NlpResult(String intent, String concept, String sessonId) {
        this.intent = intent;
        this.concept = concept;
        this.sessonId = sessonId;
    }

    public NlpResult() {
    }

    public String getSessonId() {
        return sessonId;
    }

    public void setSessonId(String sessonId) {
        this.sessonId = sessonId;
    }

    public String getIntent() {
        return intent;
    }

    public void setIntent(String intent) {
        this.intent = intent;
    }

    public String getConcept() {
        return concept;
    }

    public void setConcept(String concept) {
        this.concept = concept;
    }

    @Override
    public String toString() {
        return "NlpResult{" +
                "intent='" + intent + '\'' +
                ", concept='" + concept + '\'' +
                ", sessonId='" + sessonId + '\'' +
                '}';
    }
}
