package com.example.ZTWbackend.model;


import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "cards")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "cardId")
public class CardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cardId;
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
    @JsonIdentityReference(alwaysAsId = true)
    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<LabelModel> categories;
    @OneToMany(mappedBy = "card", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<AssignmentModel> assignments;

    public CardModel() {
        super();
    }

    public long getCardId() {
        return cardId;
    }

    public void setCardId(long cardId) {
        this.cardId = cardId;
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
        return categories;
    }

    public void setLabeList(List<LabelModel> labeList) {
        this.categories = labeList;
    }

    public List<LabelModel> getCategories() {
        return categories;
    }

    public void setCategories(List<LabelModel> categories) {
        this.categories = categories;
    }

    public Set<AssignmentModel> getAssignments() {
        return assignments;
    }

    public void setAssignments(Set<AssignmentModel> assignments) {
        this.assignments = assignments;
    }
}
