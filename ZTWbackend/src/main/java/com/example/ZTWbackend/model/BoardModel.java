package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Set;

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
    @JsonIdentityReference(alwaysAsId = true)
    private UserModel owner;
    @OneToMany(mappedBy = "board", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIdentityReference(alwaysAsId = true)
    private Set<ColumnModel> columns;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JsonIdentityReference(alwaysAsId = true)
    private Set<UserModel> invitedUsers;

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

    public Set<ColumnModel> getColumns() {
        return columns;
    }

    public void setColumns(Set<ColumnModel> columns) {
        this.columns = columns;
    }

    public Set<UserModel> getInvitedUsers() {
        return invitedUsers;
    }

    public void setInvitedUsers(Set<UserModel> invitedUsers) {
        this.invitedUsers = invitedUsers;
    }

    public UserModel getOwner() {
        return owner;
    }

    public void setOwner(UserModel owner) {
        this.owner = owner;
    }
}
