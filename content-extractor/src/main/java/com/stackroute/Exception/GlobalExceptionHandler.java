package com.stackroute.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(FileNotFoundException.class)
    public ResponseEntity userAlreadyExistsException(final FileNotFoundException e) {
        return  new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EmptyFileException.class)
    public ResponseEntity userAlreadyExistsException(final EmptyFileException e) {
        return  new ResponseEntity(e.getMessage(), HttpStatus.CONFLICT);
    }
}
