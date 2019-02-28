package com.stackroute.Domain;

public class ConceptNameFrequency {
    String conceptName;
    Long frequencyCount;

    public ConceptNameFrequency(String conceptName, Long frequencyCount) {
        this.conceptName = conceptName;
        this.frequencyCount = frequencyCount;
    }

    public ConceptNameFrequency() {
    }

    public String getConceptName() {
        return conceptName;
    }

    public void setConceptName(String conceptName) {
        this.conceptName = conceptName;
    }

    public Long getFrequencyCount() {
        return frequencyCount;
    }

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
