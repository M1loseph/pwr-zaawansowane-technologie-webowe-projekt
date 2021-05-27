package com.example.ZTWbackend.services;

import com.example.ZTWbackend.exceptions.NoSuchBoardBgException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class BoardBgResolver implements IBoardBackgroundResolver {

    private static final Map<Integer, String> paths = new HashMap<>();

    static {
        paths.put(1, "1.jpg");
        paths.put(2, "2.jpg");
        paths.put(3, "3.jpg");
        paths.put(4, "4.jpg");
    }

    @Override
    public String resolve(Integer id) throws NoSuchBoardBgException {
        if(paths.containsKey(id))
            return paths.get(id);
        else throw new NoSuchBoardBgException("Invalid bg key for board object");
    }
}
