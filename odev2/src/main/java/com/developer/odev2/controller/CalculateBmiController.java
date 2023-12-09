package com.developer.odev2.controller;

import com.developer.odev2.entity.Bmi;
import com.developer.odev2.entity.CalculateBmi;
import com.developer.odev2.service.CalculateBmiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odev/calculatebmi")
@CrossOrigin
public class CalculateBmiController {
    private final CalculateBmiService calculateBmiService;

    public CalculateBmiController(CalculateBmiService calculateBmiService) {
        this.calculateBmiService = calculateBmiService;
    }

    @GetMapping
    public List<CalculateBmi> findAllcalculateBmis(){
        return calculateBmiService.findBmis();
    }

    @GetMapping("/{id}")
    public Optional<CalculateBmi> findCalculateBmiById(@PathVariable("id") Long id) {
        return calculateBmiService.findById(id);
    }
}
