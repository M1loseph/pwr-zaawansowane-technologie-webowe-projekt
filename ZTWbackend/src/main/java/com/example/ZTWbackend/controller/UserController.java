package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.BoardModel;
import com.example.ZTWbackend.model.UserModel;
import com.example.ZTWbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List<UserModel> getUsers(){
        return this.userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserModel> getUserID(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found::"+userId ));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("users")
    public UserModel createUser(@RequestBody UserModel user){
        UserModel insertUser =  new UserModel();
        insertUser.setFirstName(user.getFirstName());
        insertUser.setLastName(user.getLastName());
        insertUser.setPassword(user.getPassword());
        insertUser.setPreferredColor(user.getPreferredColor());
        insertUser.setEmail(user.getEmail());

        for(BoardModel temp: user.getBoardList() ){
            insertUser.getBoardList().add(temp);
            temp.getUserList().add(insertUser);
        }
        return this.userRepository.save(insertUser);
    }


    @PostMapping("users/addBoard/{id}")
    public UserModel addBoard(@PathVariable(value = "id") Long userId, @RequestBody BoardModel board) throws ResourceNotFoundException{

        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));

        user.getBoardList().add(board);
        board.getUserList().add(user);

        return this.userRepository.save(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<UserModel> updateUser(@PathVariable(value = "id") Long userId,
                                                @Valid @RequestBody UserModel userDetails) throws ResourceNotFoundException {

        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setBoardList(userDetails.getBoardList());
        user.setPassword(userDetails.getPassword());
        user.setPreferredColor(userDetails.getPreferredColor());

        for(BoardModel temp: userDetails.getBoardList() ){
                user.getBoardList().add(temp);
                temp.getUserList().add(user);
        }

        return ResponseEntity.ok(this.userRepository.save(user));
    }

    @DeleteMapping("users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
        UserModel user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::"+userId));

        this.userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
