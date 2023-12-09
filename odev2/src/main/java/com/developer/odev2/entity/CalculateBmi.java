package com.developer.odev2.entity;


import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "calculatebmi")
public class CalculateBmi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "bmiid")
    private Long bmiid;

    @Column(name = "calcdate")
    private Date calcdate;

    public CalculateBmi() {
    }

    public CalculateBmi(Long bmiid, Long id, Date calcdate) {
        this.bmiid = bmiid;
        this.id = id;
        this.calcdate = calcdate;
    }

    public Long getBmiid() {
        return bmiid;
    }

    public void setBmiid(Long bmiid) {
        this.bmiid = bmiid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getCalcdate() {
        return calcdate;
    }

    public void setCalcdate(Date calcdate) {
        this.calcdate = calcdate;
    }
}
