package com.example.ZTWbackend.model;

import java.awt.*;

public class UserViewModel {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Color preferredColor;
    private String avatar;

    public UserViewModel() {
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

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
