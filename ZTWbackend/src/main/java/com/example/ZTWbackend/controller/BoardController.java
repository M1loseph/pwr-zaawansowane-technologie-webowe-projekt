package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.InvalidImageException;
import com.example.ZTWbackend.exceptions.NoSuchBoardBgException;
import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.BoardModel;
import com.example.ZTWbackend.model.ColumnModel;
import com.example.ZTWbackend.model.BoardViewModel;
import com.example.ZTWbackend.repository.BoardRepository;
import com.example.ZTWbackend.services.IBoardBackgroundResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/board")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private IBoardBackgroundResolver bgResolver;

    @GetMapping("/")
    public List<BoardModel> getBoards() {
        return this.boardRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardModel> getBoardsByID(@PathVariable(value = "id") Long boardId) throws ResourceNotFoundException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        return ResponseEntity.ok().body(board);
    }

    @PostMapping("/")
    public BoardModel createUser(@RequestBody BoardViewModel board) throws InvalidImageException, NoSuchBoardBgException {
        BoardModel insertBoard = new BoardModel();
        insertBoard.setImg(bgResolver.resolve(board.getImg()));
        insertBoard.setBoardTitle(board.getBoardTitle());
        insertBoard.setDescription(board.getDescription());
        return this.boardRepository.save(insertBoard);
    }

    @PostMapping("/addBoardColumn/{id}")
    public BoardModel addBoarderColumn(@PathVariable(value = "id") Long boardId, @RequestBody ColumnModel boardColumn) throws ResourceNotFoundException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        board.getBoardColumnList().add(boardColumn);
        boardColumn.setBoard(board);
        return this.boardRepository.save(board);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteBoard(@PathVariable(value = "id") Long boardId) throws ResourceNotFoundException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        this.boardRepository.delete(board);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("boards/")
    public ResponseEntity<BoardModel> updateBoard(@PathVariable(value = "id") Long boardId, @Valid @RequestBody BoardViewModel boardDetails) throws ResourceNotFoundException, NoSuchBoardBgException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        board.setBoardTitle(boardDetails.getBoardTitle());
        board.setDescription(boardDetails.getDescription());
        board.setImg(bgResolver.resolve(boardDetails.getImg()));
        return ResponseEntity.ok(this.boardRepository.save(board));
    }
}
