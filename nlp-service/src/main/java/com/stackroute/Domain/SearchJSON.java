package com.stackroute.Domain;

public class SearchJSON {
    private String searchString;
    private String sessonId;

    public SearchJSON(String searchString, String sessonId) {
        this.searchString = searchString;
        this.sessonId = sessonId;
    }

    public SearchJSON() {
    }

    public String getSearchString() {
        return searchString;
    }

    public void setSearchString(String searchString) {
        this.searchString = searchString;
    }

    public String getSessonId() {
        return sessonId;
    }

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
