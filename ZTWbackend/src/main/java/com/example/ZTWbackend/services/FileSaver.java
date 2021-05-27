package com.example.ZTWbackend.services;

import org.apache.commons.io.FileUtils;
import org.apache.tomcat.jni.File;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.Base64;
import java.util.UUID;

@Service
public class FileSaver implements  IFileSaver {
    @Override
    public String save(String base64) throws Exception {
        String folder = "/images/";
        byte[] decodedBytes = Base64.getDecoder().decode(base64.split(",")[1]);
        Path filePath = Path.of(folder, UUID.randomUUID().toString());
        FileUtils.writeByteArrayToFile(filePath.toFile(), decodedBytes);
        return filePath.toString();
    }
}
