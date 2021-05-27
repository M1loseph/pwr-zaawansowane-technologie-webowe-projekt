package com.example.ZTWbackend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class NoSuchBoardBgException extends Exception {

    private static final long serialVersionUID = 3687148442133872389L;

    public NoSuchBoardBgException(String message) {
        super(message);
    }
}
