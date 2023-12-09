package com.developer.odev2.controller;

import com.developer.odev2.entity.Bmi;
import com.developer.odev2.service.BmiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/odev/bmi")
@CrossOrigin
public class BmiController {
    private final BmiService bmiService;

    public BmiController(BmiService bmiService) {
        this.bmiService = bmiService;
    }

    @GetMapping
    public List<Bmi> findAllBmis(){
        return bmiService.findBmis();
    }

    @GetMapping("/{id}")
    public Optional<Bmi> findBmiById(@PathVariable("id") Long id) {
        return bmiService.findById(id);
    }

    @PostMapping
    public Bmi saveBmi(@RequestBody Bmi bmi){
        return bmiService.saveBmi(bmi);
    }

    @PutMapping
    public Bmi updateBmi(@RequestBody Bmi student){
        return bmiService.updateBmi(student);
    }

    @DeleteMapping("/{id}")
    public void deleteBmi(@PathVariable("id") Long id){
        bmiService.deleteBmi(id);
    }





}
