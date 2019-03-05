package com.stackroute.domain;

public class ConceptNameFrequency {
    String conceptName;
    Long frequencyCount;

    public ConceptNameFrequency(String conceptName, Long frequencyCount) {
        this.conceptName = conceptName;
        this.frequencyCount = frequencyCount;
    }

    public ConceptNameFrequency() {
    }

    /*Getter for conceptName*/
    public String getConceptName() {
        return conceptName;
    }

    /*Setter for conceptName*/
    public void setConceptName(String conceptName) {
        this.conceptName = conceptName;
    }

    /*Getter for frequencyCount*/
    public Long getFrequencyCount() {
        return frequencyCount;
    }

    /*Setter for frequencyCount*/
    public void setFrequencyCount(Long frequencyCount) {
        this.frequencyCount = frequencyCount;
    }

    @Override
    public String toString() {
        return "ConceptNameFrequency{" +
                "conceptName='" + conceptName + '\'' +
                ", frequencyCount=" + frequencyCount +
                '}';
    }
}
