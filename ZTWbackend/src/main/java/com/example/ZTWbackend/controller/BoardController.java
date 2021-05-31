package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.NoSuchBoardBgException;
import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.BoardModel;
import com.example.ZTWbackend.model.BoardViewModel;
import com.example.ZTWbackend.model.ColumnModel;
import com.example.ZTWbackend.repository.BoardRepository;
import com.example.ZTWbackend.repository.UserRepository;
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

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public List<BoardModel> getBoards() {
        return this.boardRepository.findAll();
    }

    @Autowired
    private IBoardBackgroundResolver gbResolver;

    @GetMapping("/{id}")
    public ResponseEntity<BoardModel> getBoardsByID(@PathVariable(value = "id") Long boardId) throws ResourceNotFoundException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        return ResponseEntity.ok().body(board);
    }

    @PostMapping("/")
    public BoardModel createBoard(@Valid @RequestBody BoardViewModel board) throws NoSuchBoardBgException, ResourceNotFoundException {
        BoardModel insertBoard = new BoardModel();
        insertBoard.setImg(bgResolver.resolve(board.getImg()));
        insertBoard.setBoardTitle(board.getBoardTitle());
        insertBoard.setDescription(board.getDescription());
        insertBoard.setOwner(userRepository.findById(board.getOwner()).orElseThrow(() -> new ResourceNotFoundException("User not found::" + board.getOwner())));
        return this.boardRepository.save(insertBoard);
    }

    @PostMapping("/addBoardColumn/{id}")
    public BoardModel addBoardColumn(@PathVariable(value = "id") Long boardId, @RequestBody ColumnModel boardColumn) throws ResourceNotFoundException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        board.getColumns().add(boardColumn);
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

    @PutMapping("/{id}")
    public ResponseEntity<BoardModel> updateBoard(@PathVariable(value = "id") Long boardId, @Valid @RequestBody BoardViewModel boardDetails) throws ResourceNotFoundException, NoSuchBoardBgException {
        BoardModel board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        board.setBoardTitle(boardDetails.getBoardTitle());
        board.setDescription(boardDetails.getDescription());
        board.setImg(bgResolver.resolve(boardDetails.getImg()));
        return ResponseEntity.ok(this.boardRepository.save(board));
    }

    @GetMapping("/backgrounds")
    public Map<Integer, String> getAvailableBackgrounds() {
        return gbResolver.getAvailableBackgrounds();
    }
}
