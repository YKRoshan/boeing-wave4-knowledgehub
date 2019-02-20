package com.stackroute.Exception;


//This Class handles FileUrl Not Found Exception
public class FileNotFoundException extends Exception{
    private String message;

    public FileNotFoundException(String message) {
        super(message);
        this.message = message;
    }
}
