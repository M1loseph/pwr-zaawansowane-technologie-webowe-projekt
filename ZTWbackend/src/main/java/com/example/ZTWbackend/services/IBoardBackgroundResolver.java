package com.example.ZTWbackend.services;

import com.example.ZTWbackend.exceptions.NoSuchBoardBgException;

public interface IBoardBackgroundResolver {
    String resolve(Integer id) throws NoSuchBoardBgException;
}
