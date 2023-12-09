package com.developer.odev2.service;

import com.developer.odev2.entity.CalculateBmi;

import java.util.List;
import java.util.Optional;
public interface CalculateBmiService {
    List<CalculateBmi> findBmis();
    Optional<CalculateBmi> findById(Long id);
}
