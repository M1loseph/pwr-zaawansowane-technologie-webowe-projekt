package com.example.ZTWbackend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cards")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "cardID")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cardID;
    @Column(name ="card_title")
    private String cardTitle;
    @Column(name ="data")
    private String data;
    @Column(name = "description")
    private String description;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_board_column_id")
    @JsonBackReference
    private BoardColumn boardColumn;
    @ManyToMany(fetch = FetchType.LAZY, cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    private List<Label> labelList= new ArrayList<>();

    public Card() {
        super();
    }

    public Card(long cardID, String cardTitle, String data, String description, BoardColumn boardColumn, List<Label> labeList) {
        super();
        this.cardID = cardID;
        this.cardTitle = cardTitle;
        this.data = data;
        this.description = description;
        this.boardColumn = boardColumn;
        this.labelList = labeList;
    }

    public long getCardID() {
        return cardID;
    }

    public void setCardID(long cardID) {
        this.cardID = cardID;
    }

    public String getCardTitle() {
        return cardTitle;
    }

    public void setCardTitle(String cardTitle) {
        this.cardTitle = cardTitle;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BoardColumn getBoardColumn() {
        return boardColumn;
    }

    public void setBoardColumn(BoardColumn boardColumn) {
        this.boardColumn = boardColumn;
    }

    public List<Label> getLabeList() {
        return labelList;
    }

    public void setLabeList(List<Label> labeList) {
        this.labelList = labeList;
    }
}
