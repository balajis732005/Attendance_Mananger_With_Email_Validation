package com.attendancemanager.backend.controller;

import com.attendancemanager.backend.dto.AuthenticationDto;
import com.attendancemanager.backend.dto.ReturnUserNameDto;
import com.attendancemanager.backend.service.Authentication.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/api/auth")
    public ReturnUserNameDto authCheck(@RequestBody AuthenticationDto authenticationDto) {
        return employeeService.authCheck(authenticationDto);
    }

}
