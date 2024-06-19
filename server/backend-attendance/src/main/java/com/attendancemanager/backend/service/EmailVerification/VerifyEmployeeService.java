package com.attendancemanager.backend.service.EmailVerification;

import com.attendancemanager.backend.dto.EmailSendDto;
import com.attendancemanager.backend.dto.OtpVerificationDto;
import org.springframework.stereotype.Service;

@Service
public interface VerifyEmployeeService {
    boolean sendVerificationEmail(EmailSendDto emailSendDto);
    boolean verifyOtp(OtpVerificationDto otpVerificationDto);
}
