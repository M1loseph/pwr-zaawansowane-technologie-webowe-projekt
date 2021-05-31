package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.AssignmentModel;
import com.example.ZTWbackend.model.AssignmentViewModel;
import com.example.ZTWbackend.model.CardModel;
import com.example.ZTWbackend.model.UserModel;
import com.example.ZTWbackend.repository.AssignmentRepository;
import com.example.ZTWbackend.repository.CardRepository;
import com.example.ZTWbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/assignment")
public class AssignmentController {

    @Autowired
    AssignmentRepository assignmentsRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CardRepository cardRepository;

    @GetMapping("/")
    public List<AssignmentModel> getAssignments() {
        return this.assignmentsRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssignmentModel> getAssignmentId(@PathVariable(value = "id") Long assignmentId) throws ResourceNotFoundException {
        AssignmentModel assignment = assignmentsRepository.findById(assignmentId).orElseThrow(() -> new ResourceNotFoundException("Assignment not found::" + assignmentId));
        return ResponseEntity.ok().body(assignment);
    }

    @PostMapping("/")
    public AssignmentModel createAssignment(@RequestBody AssignmentViewModel assignment) throws ResourceNotFoundException {
        UserModel user = userRepository.findById(assignment.getUser()).orElseThrow(() -> new ResourceNotFoundException("User not found::" + assignment.getUser()));
        CardModel card = cardRepository.findById(assignment.getCard()).orElseThrow(() -> new ResourceNotFoundException("Card not found::" + assignment.getCard()));
        AssignmentModel newAssignment = new AssignmentModel();
        newAssignment.setUser(user);
        newAssignment.setCard(card);
        newAssignment.setAssignmentDate(assignment.getAssignmentDate());
        try {
            return assignmentsRepository.save(newAssignment);

        }catch (Exception e){
            System.out.println(e.getClass());
            throw e;
        }
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteAssignment(@PathVariable(value = "id") Long assignmentId) throws ResourceNotFoundException {
        AssignmentModel assignment = assignmentsRepository.findById(assignmentId).orElseThrow(() -> new ResourceNotFoundException("Assignment not found::" + assignmentId));
        this.assignmentsRepository.delete(assignment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("/{id}")
    public ResponseEntity<AssignmentModel> updateAssignment(@PathVariable(value = "id") Long assignmentId, @Valid @RequestBody AssignmentViewModel assignment) throws ResourceNotFoundException {
        AssignmentModel existingAssignment = assignmentsRepository.findById(assignmentId).orElseThrow(() -> new ResourceNotFoundException("Assignemnt not found::" + assignment));
        existingAssignment.setCard(cardRepository.findById(assignment.getCard()).orElseThrow(() -> new ResourceNotFoundException("Card not found::" + assignment.getCard())));
        existingAssignment.setUser(userRepository.findById(assignment.getUser()).orElseThrow(() -> new ResourceNotFoundException("User not found::" + assignment.getUser())));
        existingAssignment.setAssignmentDate(assignment.getAssignmentDate());
        return ResponseEntity.ok(this.assignmentsRepository.save(existingAssignment));
    }

}
