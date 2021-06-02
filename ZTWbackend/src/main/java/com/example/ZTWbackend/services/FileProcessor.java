package com.example.ZTWbackend.services;

import com.example.ZTWbackend.exceptions.InvalidImageException;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Path;
import java.util.Base64;
import java.util.UUID;

@Service
public class FileProcessor implements IFileProcessor {
    private static final String publicFolder = "upload-images/";

    @Override
    public String save(String folder, String base64) throws InvalidImageException {
        try {
            String[] splitted = base64.split(",");
            String fileExtension = splitted[0].split("/")[1].split(";")[0];
            byte[] decodedBytes = Base64.getDecoder().decode(splitted[1]);
            String fileName = UUID.randomUUID().toString().replace("-", "") + "." + fileExtension;
            Path filePath = Path.of(publicFolder, folder, fileName);
            FileUtils.writeByteArrayToFile(filePath.toFile(), decodedBytes);
            return fileName;
        } catch (Exception e) {
            throw new InvalidImageException("Image did not contain base64 metadata");
        }
    }

    @Override
    public void delete(String folder, String fileName) {
        try {
            Path filePath = Path.of(publicFolder, folder, fileName);
            FileUtils.delete(filePath.toFile());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
