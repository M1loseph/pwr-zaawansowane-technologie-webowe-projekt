package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "labels")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "labelID")
public class Label {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long labelID;
    @Column(name = "label_type")
    private String labelType;
    @Column(name = "description")
    private String description;
    @Column(name = "color")
    private String color;
    @ManyToMany(mappedBy = "labelList")
    private List<Card> cardList = new ArrayList<>();

    public Label() {
    }

    public Label(long labelID, String labelType, String description, String color, List<Card> cardList) {
        super();
        this.labelID = labelID;
        this.labelType = labelType;
        this.description = description;
        this.color = color;
        this.cardList = cardList;
    }

    public long getLabelID() {
        return labelID;
    }

    public void setLabelID(long labelID) {
        this.labelID = labelID;
    }

    public String getLabelType() {
        return labelType;
    }

    public void setLabelType(String labelType) {
        this.labelType = labelType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public List<Card> getCardList() {
        return cardList;
    }

    public void setCardList(List<Card> cardList) {
        this.cardList = cardList;
    }
}
