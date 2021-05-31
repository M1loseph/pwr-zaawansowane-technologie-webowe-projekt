package com.example.ZTWbackend.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cards")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "cardID")
public class CardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cardID;
    @Column(name = "card_title")
    private String cardTitle;
    @Column(name = "date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'hh:mm:ss'Z'")
    private Date date;
    @Column(name = "description")
    private String description;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "owner_board_column_id")
    @JsonBackReference
    private ColumnModel boardColumn;
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<LabelModel> labelList;
    @OneToMany(mappedBy = "card", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<AssignmentModel> assignments;

    public CardModel() {
        super();
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    public Set<AssignmentModel> getAssignments() {
        return assignments;
    }

    public void setAssignments(Set<AssignmentModel> assignments) {
        this.assignments = assignments;
    }
}
