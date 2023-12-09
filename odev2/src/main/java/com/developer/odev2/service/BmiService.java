package com.developer.odev2.service;

import com.developer.odev2.entity.Bmi;

import java.util.List;
import java.util.Optional;

public interface BmiService {
    List<Bmi> findBmis();
    Optional<Bmi> findById(Long id);
    Bmi saveBmi(Bmi student);
    Bmi updateBmi(Bmi student);
    void deleteBmi(Long id);

}
