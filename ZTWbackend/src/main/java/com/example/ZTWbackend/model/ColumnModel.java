package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "board_columns")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "columnId")
public class ColumnModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long columnId;
    @Column(name = "column_title")
    private String title;
    @Column(name = "column_description")
    private String description;
    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_board_id")
    @JsonBackReference
    private BoardModel board;
    @Column(name = "card")
    @OneToMany(mappedBy = "boardColumn", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<CardModel> cards;

    public ColumnModel() {
    }

    public ColumnModel(long boardColumnID, String boardColumnTitle, String description, BoardModel board, Set<CardModel> card) {
        super();
        this.columnId = boardColumnID;
        this.title = boardColumnTitle;
        this.description = description;
        this.board = board;
        this.cards = card;
    }

    public long getColumnId() {
        return columnId;
    }

    public void setColumnId(long columnId) {
        this.columnId = columnId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BoardModel getBoard() {
        return board;
    }

    public void setBoard(BoardModel board) {
        this.board = board;
    }

    public Set<CardModel> getCards() {
        return cards;
    }

    public void setCards(Set<CardModel> cards) {
        this.cards = cards;
    }
}
