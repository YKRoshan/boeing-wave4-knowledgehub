package com.stackroute.domain;

public class SearchJSON {
    private String searchString;
    private String sessonId;

    public SearchJSON(String searchString, String sessonId) {
        this.searchString = searchString;
        this.sessonId = sessonId;
    }

    public SearchJSON() {
    }

    /*Getter for searchString*/
    public String getSearchString() {
        return searchString;
    }

    /*Setter for searchString*/
    public void setSearchString(String searchString) {
        this.searchString = searchString;
    }

    /*Getter for sessonId*/
    public String getSessonId() {
        return sessonId;
    }

    /*Setter for sessonId*/
    public void setSessonId(String sessonId) {
        this.sessonId = sessonId;
    }

    @Override
    public String toString() {
        return "SearchString{" +
                "searchString='" + searchString + '\'' +
                ", sessonId='" + sessonId + '\'' +
                '}';
    }
}
