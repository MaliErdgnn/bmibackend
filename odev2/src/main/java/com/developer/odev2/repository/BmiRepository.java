package com.developer.odev2.repository;

import com.developer.odev2.entity.Bmi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BmiRepository extends JpaRepository<Bmi, Long> {
}

