package com.developer.odev2.service.impl;

import com.developer.odev2.entity.CalculateBmi;
import com.developer.odev2.repository.CalculateBmiRepository;
import com.developer.odev2.service.CalculateBmiService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CalculateBmiServiceImpl implements CalculateBmiService{
    private CalculateBmiRepository calculateBmiRepository;

    public CalculateBmiServiceImpl(CalculateBmiRepository calculateBmiRepository){this.calculateBmiRepository = calculateBmiRepository;}
    @Override
    public List<CalculateBmi> findBmis() {
        return calculateBmiRepository.findAll();
    }

    @Override
    public Optional<CalculateBmi> findById(Long id) {
        return calculateBmiRepository.findById(id);
    }
}
