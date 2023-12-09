package com.developer.odev2.service.impl;

import com.developer.odev2.entity.Bmi;
import com.developer.odev2.repository.BmiRepository;
import com.developer.odev2.service.BmiService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BmiServiceImpl implements BmiService {
    private BmiRepository bmiRepository;

    public BmiServiceImpl(BmiRepository bmiRepository) {
        this.bmiRepository = bmiRepository;
    }

    @Override
    public List<Bmi> findBmis() {
        return bmiRepository.findAll();
    }

    @Override
    public Optional<Bmi> findById(Long id) {
        return bmiRepository.findById(id);
    }

    @Override
    public Bmi saveBmi(Bmi bmi) {
        return bmiRepository.save(bmi);
    }

    @Override
    public Bmi updateBmi(Bmi bmi) {
        return bmiRepository.save(bmi);
    }

    @Override
    public void deleteBmi(Long id) {
        bmiRepository.deleteById(id);
    }
}
