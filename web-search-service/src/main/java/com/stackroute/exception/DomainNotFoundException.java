package com.stackroute.exception;

public class DomainNotFoundException extends Exception{
    private String message;

    public DomainNotFoundException()
    {

    }

    public DomainNotFoundException( String message )
    {
        super(message);
        this.message = message;
    }
}
