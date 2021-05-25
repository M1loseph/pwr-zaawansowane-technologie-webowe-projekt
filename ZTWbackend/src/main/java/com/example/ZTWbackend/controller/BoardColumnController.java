package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.*;
import com.example.ZTWbackend.repository.BoardColumnRepository;
import com.example.ZTWbackend.repository.LabelRepository;
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
public class BoardColumnController {

    @Autowired
    private BoardColumnRepository boardColumnRepository;

    @GetMapping("boardcolumn")
    public List<BoardColumn> getBoardColumn(){
        return this.boardColumnRepository.findAll();
    }

    @GetMapping("/boardcolumn/{id}")
    public ResponseEntity<BoardColumn> getBorderColumnId(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException {
        BoardColumn boardColumn = boardColumnRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::"+userId ));
        return ResponseEntity.ok().body(boardColumn);
    }

    @PostMapping("boardcolumn")
    public BoardColumn createBorderColumn(@RequestBody BoardColumn boardColumn){
        return this.boardColumnRepository.save(boardColumn);
    }

    @PostMapping("boardcolumn/addCard/{id}")
    public BoardColumn addBorderColumn(@PathVariable(value = "id") Long boardColumnID, @RequestBody Card card) throws ResourceNotFoundException{

        BoardColumn boardColumn = boardColumnRepository.findById(boardColumnID)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardColumnID));

        boardColumn.getCardList().add(card);
        card.setBoardColumn(boardColumn);

        return this.boardColumnRepository.save(boardColumn);
    }

    @DeleteMapping("boardcolumn/{id}")
    public Map<String, Boolean> deleteBoardColumn(@PathVariable(value = "id") Long boardcolumnId) throws ResourceNotFoundException{

        BoardColumn boardColumn = boardColumnRepository.findById(boardcolumnId)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardcolumnId));

        this.boardColumnRepository.delete(boardColumn);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("boardcolumn/{id}")
    public ResponseEntity<BoardColumn> updateBoardColumn(@PathVariable(value = "id") Long boardId,
                                             @Valid @RequestBody BoardColumn boardColumnDetails) throws ResourceNotFoundException {

        BoardColumn boardColumn = boardColumnRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("BoarderColumn not found::" + boardId));

        boardColumn.setBoardColumnTitle(boardColumnDetails.getBoardColumnTitle());
        boardColumn.setDescription(boardColumnDetails.getDescription());

        return ResponseEntity.ok(this.boardColumnRepository.save(boardColumn));
    }
}
