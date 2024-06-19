package com.attendancemanager.backend.controller;

import com.attendancemanager.backend.dto.EmailSendDto;
import com.attendancemanager.backend.dto.OtpVerificationDto;
import com.attendancemanager.backend.service.EmailVerification.VerifyEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class VerifyEmployeeController {

    private final VerifyEmployeeService verifyEmployeeService;

    @Autowired
    VerifyEmployeeController(VerifyEmployeeService verifyEmployeeService) {
        this.verifyEmployeeService=verifyEmployeeService;
    }

    @PostMapping("/api/emailsend")
    public boolean sendVerificationEmail(@RequestBody EmailSendDto emailSendDto) {
        return this.verifyEmployeeService.sendVerificationEmail(emailSendDto);
    }

    @PostMapping("/api/otpverify")
    public boolean verifyOtp(@RequestBody OtpVerificationDto otpVerificationDto){
        System.out.println(otpVerificationDto.getEmail()+" "+otpVerificationDto.getOtp());
        return this.verifyEmployeeService.verifyOtp(otpVerificationDto);
    }
}
