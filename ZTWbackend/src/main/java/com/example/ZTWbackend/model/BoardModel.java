package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "boards")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "boardId")
public class BoardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardId;
    @Column(name = "board_title")
    private String boardTitle;
    @Column(name = "description")
    private String description;
    @Column(name = "img")
    private String img;
    @ManyToOne
    private UserModel owner;
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<ColumnModel> boardColumnList = new ArrayList<>();
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    private List<UserModel> userList = new ArrayList<>();

    public BoardModel() {
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
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

    public List<ColumnModel> getBoardColumnList() {
        return boardColumnList;
    }

    public void setBoardColumnList(List<ColumnModel> boardColumnList) {
        this.boardColumnList = boardColumnList;
    }

    public List<UserModel> getUserList() {
        return userList;
    }

    public void setUserList(List<UserModel> userList) {
        this.userList = userList;
    }

    public UserModel getOwner() {
        return owner;
    }

    public void setOwner(UserModel owner) {
        this.owner = owner;
    }
}
