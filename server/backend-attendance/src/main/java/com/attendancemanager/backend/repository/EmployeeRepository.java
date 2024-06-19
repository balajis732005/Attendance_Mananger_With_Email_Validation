package com.attendancemanager.backend.repository;

import com.attendancemanager.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    boolean existsByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);
    Employee findByPassword(String password);
}
