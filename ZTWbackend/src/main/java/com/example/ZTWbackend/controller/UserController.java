package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.InvalidImageException;
import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.UserModel;
import com.example.ZTWbackend.model.UserViewModel;
import com.example.ZTWbackend.repository.UserRepository;
import com.example.ZTWbackend.services.IFileProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IFileProcessor fileProcessor;

    @GetMapping("/")
    public List<UserModel> getUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserModel> getUserID(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        UserModel user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/")
    public UserModel createUser(@RequestBody UserViewModel user) throws InvalidImageException {
        UserModel insertUser = new UserModel();
        insertUser.setFirstName(user.getFirstName());
        insertUser.setLastName(user.getLastName());
        insertUser.setPassword(user.getPassword());
        insertUser.setPreferredColor(user.getPreferredColor());
        insertUser.setEmail(user.getEmail());
        insertUser.setAvatar(fileProcessor.save(userRepository.IMAGE_FOLDER, user.getAvatar()));
        return this.userRepository.save(insertUser);
    }


    //    @PostMapping("/addBoard/{id}")
    //    public UserModel addBoard(@PathVariable(value = "id") Long userId, @RequestBody BoardModel board) throws ResourceNotFoundException {
    //        UserModel user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));
    //        user.getCollaborationBoards().add(board);
    //        board.getInvitedUsers().add(user);
    //        return this.userRepository.save(user);
    //    }

    @PutMapping("/{id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable(value = "id") Long userId, @Valid @RequestBody UserViewModel userDetails) throws ResourceNotFoundException, InvalidImageException {
        UserModel user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setPreferredColor(userDetails.getPreferredColor());
        if (userDetails.getAvatar() != null) {
            String newAvatar = fileProcessor.save(userRepository.IMAGE_FOLDER, userDetails.getAvatar());
            fileProcessor.delete(userRepository.IMAGE_FOLDER, user.getAvatar());
            user.setAvatar(newAvatar);
        }
        return ResponseEntity.ok(this.userRepository.save(user));
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        UserModel user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));
        fileProcessor.delete(userRepository.IMAGE_FOLDER, user.getAvatar());
        this.userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
