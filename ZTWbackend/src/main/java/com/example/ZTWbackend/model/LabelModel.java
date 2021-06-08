package com.example.ZTWbackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.util.Set;

@Entity
@Table(name = "labels")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "labelId")
public class LabelModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long labelId;
    @Column(name = "title")
    private String title;
    @Column(name = "color")
    @Pattern(regexp = "^#[\\da-fA-F]{6}$")
    private String color;
    @ManyToMany(mappedBy = "categories")
    @JsonBackReference()
    private Set<CardModel> cardList;

    public LabelModel() {
    }

    public long getLabelId() {
        return labelId;
    }

    public void setLabelId(long labelId) {
        this.labelId = labelId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Set<CardModel> getCardList() {
        return cardList;
    }

    public void setCardList(Set<CardModel> cardList) {
        this.cardList = cardList;
    }
}
