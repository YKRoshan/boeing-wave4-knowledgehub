package com.stackroute.Exception;

public class EmptyFileException extends Exception {
    private String message;

    public EmptyFileException(String message) {
        super(message);
        this.message = message;
    }
}
