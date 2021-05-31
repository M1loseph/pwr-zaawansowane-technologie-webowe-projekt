package com.example.ZTWbackend.model;

import javax.validation.constraints.NotNull;

public class BoardViewModel {
    @NotNull
    private String boardTitle;
    @NotNull
    private String description;
    @NotNull
    private Integer img;
    @NotNull
    private Long owner;

    BoardViewModel() {
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

    public Integer getImg() {
        return img;
    }

    public void setImg(Integer img) {
        this.img = img;
    }

    public Long getOwner() {
        return owner;
    }

    public void setOwner(Long owner) {
        this.owner = owner;
    }
}
