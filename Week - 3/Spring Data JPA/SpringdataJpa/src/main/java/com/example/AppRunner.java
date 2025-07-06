package com.example;

import com.example.spring_data_jpa_handson.model.Department;
import com.example.spring_data_jpa_handson.model.Employee;
import com.example.spring_data_jpa_handson.repository.DepartmentRepository;
import com.example.spring_data_jpa_handson.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppRunner implements CommandLineRunner {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public void run(String... args) throws Exception {
        Department dept = new Department("Finance");

        Employee emp1 = new Employee("Alice", 50000);
        emp1.setDepartment(dept);

        Employee emp2 = new Employee("Bob", 60000);
        emp2.setDepartment(dept);

        dept.setEmployees(List.of(emp1, emp2));

        departmentRepository.save(dept); 
        System.out.println("All Employees in Finance:");
        employeeRepository.findByDepartmentName("Finance").forEach(System.out::println);

        System.out.println("HQL Query:");
        employeeRepository.fetchByHQL("Finance").forEach(System.out::println);

        System.out.println("Native Query:");
        employeeRepository.fetchByNative(55000).forEach(System.out::println);
    }
}
