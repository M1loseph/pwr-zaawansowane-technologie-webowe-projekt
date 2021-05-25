package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.Board;
import com.example.ZTWbackend.model.User;
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
    public List<User> getUsers(){
        return this.userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserID(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found::"+userId ));
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("users")
    public User createUser(@RequestBody User user){
        User insertUser =  new User();
        insertUser.setFirstName(user.getFirstName());
        insertUser.setLastName(user.getLastName());
        insertUser.setPassword(user.getPassword());
        insertUser.setPreferredColor(user.getPreferredColor());
        insertUser.setEmail(user.getEmail());

        for(Board temp: user.getBoardList() ){
            insertUser.getBoardList().add(temp);
            temp.getUserList().add(insertUser);
        }
        return this.userRepository.save(insertUser);
    }


    @PostMapping("users/addBoard/{id}")
    public User addBoard(@PathVariable(value = "id") Long userId, @RequestBody Board board) throws ResourceNotFoundException{

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));

        user.getBoardList().add(board);
        board.getUserList().add(user);

        return this.userRepository.save(user);
    }

    @PutMapping("users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long userId,
                                                   @Valid @RequestBody User userDetails) throws ResourceNotFoundException {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::" + userId));

        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setBoardList(userDetails.getBoardList());
        user.setPassword(userDetails.getPassword());
        user.setPreferredColor(userDetails.getPreferredColor());

        for(Board temp: userDetails.getBoardList() ){
                user.getBoardList().add(temp);
                temp.getUserList().add(user);
        }

        return ResponseEntity.ok(this.userRepository.save(user));
    }

    @DeleteMapping("users/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found::"+userId));

        this.userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

}
