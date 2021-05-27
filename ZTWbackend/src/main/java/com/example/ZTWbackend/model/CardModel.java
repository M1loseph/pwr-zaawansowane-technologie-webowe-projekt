package com.example.ZTWbackend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cards")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "cardID")
public class CardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cardID;
    @Column(name = "card_title")
    private String cardTitle;
    @Column(name = "data")
    private String data;
    @Column(name = "description")
    private String description;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_board_column_id")
    @JsonBackReference
    private ColumnModel boardColumn;
    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<LabelModel> labelList = new ArrayList<>();
    @OneToMany(mappedBy = "card")
    List<AssignmentModel> assignments;

    public CardModel() {
        super();
    }

    public CardModel(long cardID, String cardTitle, String data, String description, ColumnModel boardColumn, List<LabelModel> labeList) {
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

    public ColumnModel getBoardColumn() {
        return boardColumn;
    }

    public void setBoardColumn(ColumnModel boardColumn) {
        this.boardColumn = boardColumn;
    }

    public List<LabelModel> getLabeList() {
        return labelList;
    }

    public void setLabeList(List<LabelModel> labeList) {
        this.labelList = labeList;
    }

    public List<LabelModel> getLabelList() {
        return labelList;
    }

    public void setLabelList(List<LabelModel> labelList) {
        this.labelList = labelList;
    }

    public List<AssignmentModel> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<AssignmentModel> assignments) {
        this.assignments = assignments;
    }
}
