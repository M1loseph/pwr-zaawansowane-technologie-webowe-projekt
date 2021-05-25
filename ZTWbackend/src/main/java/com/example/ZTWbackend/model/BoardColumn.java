package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "board_columns")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "boardColumnID")
public class BoardColumn {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardColumnID;
    @Column(name = "board_column_title")
    private String boardColumnTitle;
    @Column(name = "description")
    private String description;
    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_board_id")
    @JsonBackReference
    private Board board;
    @Column(name = "card")
    @OneToMany(mappedBy = "boardColumn",cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Card> cardList;

    public BoardColumn() {
    }

    public BoardColumn(long boardColumnID, String boardColumnTitle, String description, Board board, List<Card> card) {
        super();
        this.boardColumnID = boardColumnID;
        this.boardColumnTitle = boardColumnTitle;
        this.description = description;
        this.board = board;
        this.cardList = card;
    }

    public long getBoardColumnID() {
        return boardColumnID;
    }

    public void setBoardColumnID(long boardColumnID) {
        this.boardColumnID = boardColumnID;
    }

    public String getBoardColumnTitle() {
        return boardColumnTitle;
    }

    public void setBoardColumnTitle(String boardColumnTitle) {
        this.boardColumnTitle = boardColumnTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public List<Card> getCardList() {
        return cardList;
    }

    public void setCardList(List<Card> cardList) {
        this.cardList = cardList;
    }
}
