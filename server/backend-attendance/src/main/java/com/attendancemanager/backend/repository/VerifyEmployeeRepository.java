package com.attendancemanager.backend.repository;

import com.attendancemanager.backend.dto.OtpVerificationDto;
import com.attendancemanager.backend.entity.VerifyEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VerifyEmployeeRepository extends JpaRepository<VerifyEmployee , Long> {
    boolean existsByOtpAndEmail(String otp,String email);
}
