package com.example.spring_data_jpa_handson.repository;

import com.example.spring_data_jpa_handson.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT e FROM Employee e WHERE e.department.name = :dept")
    List<Employee> findByDepartmentName(@Param("dept") String dept);

    @Query("SELECT e FROM Employee e WHERE e.department.name = :dept")
    List<Employee> fetchByHQL(@Param("dept") String dept);

    @Query(value = "SELECT * FROM employee WHERE salary > ?1", nativeQuery = true)
    List<Employee> fetchByNative(double salary);
}
