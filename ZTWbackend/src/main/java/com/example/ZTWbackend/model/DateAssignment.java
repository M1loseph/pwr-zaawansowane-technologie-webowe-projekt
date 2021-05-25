package com.example.ZTWbackend.model;

import javax.persistence.*;

@Entity
public class DateAssignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long assigmentDateId;
    @Column(name = "dataAssignment")
    private String assigmentDate;
    @Column(name = "dataDischarge")
    private String dischargeDate;
}
