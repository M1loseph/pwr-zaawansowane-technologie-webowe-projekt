package com.example.ZTWbackend.services;

import com.example.ZTWbackend.exceptions.NoSuchBoardBgException;

import java.util.Map;

public interface IBoardBackgroundResolver {
    String resolve(Integer id) throws NoSuchBoardBgException;
    Map<Integer, String> getAvailableBackgrounds();
}
