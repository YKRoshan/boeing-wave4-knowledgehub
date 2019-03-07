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

    /*Getter for sessonId*/
    public String getSessonId() {
        return sessonId;
    }

    /*Setter for sessonId*/
    public void setSessonId(String sessonId) {
        this.sessonId = sessonId;
    }

    /*Getter for intent*/
    public String getIntent() {
        return intent;
    }

    /*Setter for intent*/
    public void setIntent(String intent) {
        this.intent = intent;
    }

    /*Getter for concept*/
    public String getConcept() {
        return concept;
    }

    /*Setter for concept*/
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
