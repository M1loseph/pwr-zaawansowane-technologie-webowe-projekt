package com.example.ZTWbackend.controller;

import com.example.ZTWbackend.exceptions.InvalidImageException;
import com.example.ZTWbackend.exceptions.ResourceNotFoundException;
import com.example.ZTWbackend.model.Board;
import com.example.ZTWbackend.model.BoardColumn;
import com.example.ZTWbackend.model.BoardViewModel;
import com.example.ZTWbackend.model.User;
import com.example.ZTWbackend.repository.BoardRepository;
import com.example.ZTWbackend.services.IFileSaver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class BoardController {

    @Autowired
    private BoardRepository boardRepository;

    @Autowired
    private IFileSaver fileSaver;

    @GetMapping("boards")
    public List<Board> getBoards(){
        return this.boardRepository.findAll();
    }

    @GetMapping("/boards/{id}")
    public ResponseEntity<Board> getBoardsByID(@PathVariable(value = "id") Long boardId) throws ResourceNotFoundException {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));
        return ResponseEntity.ok().body(board);
    }

    @PostMapping("boards")
    public Board createUser(@RequestBody BoardViewModel board) throws InvalidImageException {

        Board insertBoard =  new Board();
        try {
            String filePath = fileSaver.save(board.getImg());
            insertBoard.setImg(filePath);
        }catch (Exception e){
            e.printStackTrace();
            throw new InvalidImageException("File was in incorrect format");
        }
        insertBoard.setBoardTitle(board.getBoardTitle());
        insertBoard.setDescription(board.getDescription());
        return this.boardRepository.save(insertBoard);
    }

    @PostMapping("boards/addBoardColumn/{id}")
    public Board addBoarderColumn(@PathVariable(value = "id") Long boardId ,@RequestBody BoardColumn boardColumn) throws ResourceNotFoundException {

        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));

        board.getBoardColumnList().add(boardColumn);
        boardColumn.setBoard(board);

        return this.boardRepository.save(board);
    }

    @DeleteMapping("boards/{id}")
    public Map<String, Boolean> deleteBoard(@PathVariable(value = "id") Long boardId) throws ResourceNotFoundException{
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));

        this.boardRepository.delete(board);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PutMapping("boards/{id}")
    public ResponseEntity<Board> updateBoard(@PathVariable(value = "id") Long boardId,
                                           @Valid @RequestBody Board  boardDetails) throws ResourceNotFoundException {

        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new ResourceNotFoundException("Board not found::" + boardId));

        board.setBoardTitle(boardDetails.getBoardTitle());
        board.setDescription(boardDetails.getDescription());

        return ResponseEntity.ok(this.boardRepository.save(board));
    }
}
