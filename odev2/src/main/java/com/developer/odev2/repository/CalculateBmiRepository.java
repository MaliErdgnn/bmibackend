package com.developer.odev2.repository;
import com.developer.odev2.entity.CalculateBmi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalculateBmiRepository extends JpaRepository<CalculateBmi, Long>{
}
