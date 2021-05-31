package com.example.ZTWbackend.model;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class AssignmentViewModel {

    @NotNull Long user;
    @NotNull Long card;
    @NotNull Date assignmentDate;

    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public Long getCard() {
        return card;
    }

    public void setCard(Long card) {
        this.card = card;
    }

    public Date getAssignmentDate() {
        return assignmentDate;
    }

    public void setAssignmentDate(Date assignmentDate) {
        this.assignmentDate = assignmentDate;
    }
}
