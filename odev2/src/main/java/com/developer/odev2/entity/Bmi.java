package com.developer.odev2.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "bmi")
public class Bmi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bmi_id")
    private Long bmi_id;
    @Column(name = "bmivalue")
    private String bmivalue;
    @Column(name = "indexresult")
    private String indexresult;

    @Column(name = "indexrange")
    private String indexrange;
    public Bmi() {
    }

    public Bmi(Long bmi_id, String bmivalue, String indexresult, String indexrange) {
        this.bmi_id = bmi_id;
        this.bmivalue = bmivalue;
        this.indexresult = indexresult;
        this.indexrange = indexrange;
    }

    public Long getBmi_id() {
        return bmi_id;
    }

    public void setBmi_id(Long bmi_id) {
        this.bmi_id = bmi_id;
    }

    public String getBmivalue() {
        return bmivalue;
    }

    public void setBmivalue(String bmivalue) {
        this.bmivalue = bmivalue;
    }

    public String getIndexresult() {
        return indexresult;
    }

    public void setIndexresult(String indexresult) {
        this.indexresult = indexresult;
    }

    public String getIndexrange() {
        return indexrange;
    }

    public void setIndexrange(String indexrange) {
        this.indexrange = indexrange;
    }
}
