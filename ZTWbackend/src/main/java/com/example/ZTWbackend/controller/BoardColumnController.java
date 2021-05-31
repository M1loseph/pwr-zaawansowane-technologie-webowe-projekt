package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.*;
import com.example.ZTWbackend.repository.BoardColumnRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/column")
public class BoardColumnController {

    @Autowired
    private BoardColumnRepository boardColumnRepository;

    @GetMapping("/")
    public List<ColumnModel> getBoardColumn() {
        return this.boardColumnRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ColumnModel> getBoardColumnId(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        ColumnModel boardColumn = boardColumnRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("BoardColumn not found::" + userId));
        return ResponseEntity.ok().body(boardColumn);
    }

    @PostMapping("/")
    public ColumnModel createBoardColumn(@RequestBody ColumnModel boardColumn) {
        return this.boardColumnRepository.save(boardColumn);
    }

    @PostMapping("/addCard/{id}")
    public ColumnModel addBoardColumn(@PathVariable(value = "id") Long boardColumnID, @RequestBody CardModel card) throws ResourceNotFoundException {

        ColumnModel boardColumn = boardColumnRepository.findById(boardColumnID).orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardColumnID));

        boardColumn.getCards().add(card);
        card.setBoardColumn(boardColumn);

        return this.boardColumnRepository.save(boardColumn);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteBoardColumn(@PathVariable(value = "id") Long boardcolumnId) throws ResourceNotFoundException {

        ColumnModel boardColumn = boardColumnRepository.findById(boardcolumnId).orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardcolumnId));

        this.boardColumnRepository.delete(boardColumn);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("/{id}")
    public ResponseEntity<ColumnModel> updateBoardColumn(@PathVariable(value = "id") Long boardId, @Valid @RequestBody ColumnModel boardColumnDetails) throws ResourceNotFoundException {

        ColumnModel boardColumn = boardColumnRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardId));

        boardColumn.setTitle(boardColumnDetails.getTitle());
        boardColumn.setDescription(boardColumnDetails.getDescription());

        return ResponseEntity.ok(this.boardColumnRepository.save(boardColumn));
    }
}
