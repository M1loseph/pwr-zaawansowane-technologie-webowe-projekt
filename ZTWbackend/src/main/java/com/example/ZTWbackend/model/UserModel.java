package com.example.ZTWbackend.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "userId")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "preferred_color")
    private Color preferredColor;
    @Column(name = "avatar")
    private String avatar;
    @ManyToMany(mappedBy = "userList", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<BoardModel> boardList = new ArrayList<>();
    @OneToMany(mappedBy = "user")
    private List<AssignmentModel> assignments;

    public UserModel() {
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Color getPreferredColor() {
        return preferredColor;
    }

    public void setPreferredColor(Color preferredColor) {
        this.preferredColor = preferredColor;
    }

    public List<BoardModel> getBoardList() {
        return boardList;
    }

    public void setBoardList(List<BoardModel> boardList) {
        this.boardList = boardList;
    }

    public List<AssignmentModel> getDateAssignment() {
        return assignments;
    }

    public void setDateAssignment(List<AssignmentModel> dateAssignment) {
        this.assignments = dateAssignment;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public List<AssignmentModel> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<AssignmentModel> assignments) {
        this.assignments = assignments;
    }
}
