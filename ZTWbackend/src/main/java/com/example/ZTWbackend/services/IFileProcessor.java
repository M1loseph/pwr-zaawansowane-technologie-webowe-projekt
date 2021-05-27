package com.example.ZTWbackend.services;

import com.example.ZTWbackend.exceptions.InvalidImageException;

public interface IFileProcessor {
    String save(String folder, String base64) throws InvalidImageException;
    void delete(String folder, String fileName);
}
