package com.example.ZTWbackend.model;

public class BoardViewModel {
    private String boardTitle;
    private String description;
    private String img;

    public BoardViewModel() {
    }

    public BoardViewModel(String boardTitle, String description, String img) {
        this.boardTitle = boardTitle;
        this.description = description;
        this.img = img;
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
