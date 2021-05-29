package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.LabelModel;
import com.example.ZTWbackend.repository.LabelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class LabelController {
    @Autowired
    private LabelRepository labelRepository;

    @GetMapping("label")
    public List<LabelModel> getLabels(){
        return this.labelRepository.findAll();
    }

    @GetMapping("/label/{id}")
    public ResponseEntity<LabelModel> getLabelId(@PathVariable(value = "id") Long labelId) throws ResourceNotFoundException {
        LabelModel label = labelRepository.findById(labelId)
                .orElseThrow(() -> new ResourceNotFoundException("Label not found::"+labelId ));
        return ResponseEntity.ok().body(label);
    }

    @PostMapping("label")
    public LabelModel createLabel(@RequestBody LabelModel label){
        return this.labelRepository.save(label);
    }

    @PutMapping("label/{id}")
    public ResponseEntity<LabelModel> updateLabel(@PathVariable(value = "id") Long boardId,
                                                  @Valid @RequestBody LabelModel labelDetails) throws ResourceNotFoundException {

        LabelModel label = labelRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Label not found::" + boardId));

        label.setColor(labelDetails.getColor());
        label.setTitle(labelDetails.getTitle());

        return ResponseEntity.ok(this.labelRepository.save(label));
    }

    @DeleteMapping("label/{id}")
    public Map<String, Boolean> deleteLabel(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{

        LabelModel label = labelRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Label not found::"+userId));

        this.labelRepository.delete(label);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);

        return response;
    }

}
