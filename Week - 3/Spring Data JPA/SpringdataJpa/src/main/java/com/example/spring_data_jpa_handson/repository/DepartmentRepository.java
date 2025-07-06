package com.example.spring_data_jpa_handson.repository;

import com.example.spring_data_jpa_handson.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}

