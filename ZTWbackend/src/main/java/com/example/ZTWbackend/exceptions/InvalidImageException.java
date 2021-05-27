package com.example.ZTWbackend.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class InvalidImageException extends Exception {

    private static final long serialVersionUID = 5408133244997753615L;

    public InvalidImageException (String message) {
        super(message);
    }
}
