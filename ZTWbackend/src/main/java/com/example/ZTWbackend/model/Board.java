package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "boards")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardId;
    @Column(name = "board_title")
    private String boardTitle;
    @Column(name = "description")
    private String description;
    @OneToMany(mappedBy = "board",  cascade = CascadeType.ALL)
    private List<BoardColumn> boardColumnList = new ArrayList<>();
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    private List<User> userList = new ArrayList<>();

    public Board() {

    }

    public Board(long boardId, String boardTile, String description, List<BoardColumn> boardColumnList, List<User> userList) {
        super();
        this.boardId = boardId;
        this.boardTitle = boardTile;
        this.description = description;
        this.boardColumnList = boardColumnList;
        this.userList = userList;
    }

    public Board( String boardTile, String description, List<BoardColumn> boardColumnList) {
        this.boardTitle = boardTile;
        this.description = description;
        this.boardColumnList = boardColumnList;
    }

    public long getBoardId() {
        return boardId;
    }

    public void setBoardId(long boardId) {
        this.boardId = boardId;
    }

    public String getBoardTitle() {
        return boardTitle;
    }

    public void setBoardTitle(String boardTitle) {
        this.boardTitle = boardTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<BoardColumn> getBoardColumnList() {
        return boardColumnList;
    }

    public void setBoardColumnList(List<BoardColumn> boardColumnList) {
        this.boardColumnList = boardColumnList;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
}
