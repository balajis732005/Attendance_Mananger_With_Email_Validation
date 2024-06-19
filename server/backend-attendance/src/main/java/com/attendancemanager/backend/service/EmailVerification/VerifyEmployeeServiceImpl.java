package com.attendancemanager.backend.service.EmailVerification;

import com.attendancemanager.backend.dto.EmailSendDto;
import com.attendancemanager.backend.dto.OtpVerificationDto;
import com.attendancemanager.backend.entity.VerifyEmployee;
import com.attendancemanager.backend.repository.VerifyEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class VerifyEmployeeServiceImpl implements VerifyEmployeeService {

    private final VerifyEmployeeRepository verifyEmployeeRepository;

    private final JavaMailSender javaMailSender;

    @Autowired
    VerifyEmployeeServiceImpl(VerifyEmployeeRepository verifyEmployeeRepository,
                              JavaMailSender javaMailSender) {
        this.verifyEmployeeRepository=verifyEmployeeRepository;
        this.javaMailSender=javaMailSender;
    }

    private String generateOtp(){
        return String.valueOf(new Random().nextInt(999999));
    }

    public boolean sendVerificationEmail(EmailSendDto emailSendDto) {
        String generatedOtp = generateOtp();
        VerifyEmployee obj = new VerifyEmployee(
                generatedOtp,
                emailSendDto.getEmail(),
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(10)
        );
        verifyEmployeeRepository.save(obj);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("balajifirefuture@gmail.com");
        message.setTo(emailSendDto.getEmail());
        message.setSubject("OTP Verification");
        message.setText("Your OTP is: " + generatedOtp);

        javaMailSender.send(message);

        return true;
    }

    public boolean verifyOtp(OtpVerificationDto otpVerificationDto) {
        return verifyEmployeeRepository.existsByOtpAndEmail(otpVerificationDto.getOtp(), otpVerificationDto.getEmail());
    }

}
