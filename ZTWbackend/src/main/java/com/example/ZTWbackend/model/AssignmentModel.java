package com.example.ZTWbackend.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
public class AssignmentModel implements Serializable {

    @EmbeddedId
    private AssignmentModelKey assignmentId;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private UserModel user;

    @ManyToOne
    @MapsId("cardId")
    @JoinColumn(name = "card_id")
    private CardModel card;

    @Column(name = "assignment_date")
    private Date assignentDate;

    AssignmentModel() {
    }

    public Date getAssignentDate() {
        return assignentDate;
    }

    public void setAssignentDate(Date assignentDate) {
        this.assignentDate = assignentDate;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public CardModel getCard() {
        return card;
    }

    public void setCard(CardModel card) {
        this.card = card;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AssignmentModel)) return false;
        AssignmentModel that = (AssignmentModel) o;
        return Objects.equals(user, that.user) && Objects.equals(card, that.card);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, card);
    }
}
