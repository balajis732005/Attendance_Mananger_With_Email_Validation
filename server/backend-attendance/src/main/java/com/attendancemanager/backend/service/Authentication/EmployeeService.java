package com.attendancemanager.backend.service.Authentication;

import com.attendancemanager.backend.dto.AuthenticationDto;
import com.attendancemanager.backend.dto.ReturnUserNameDto;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {
    ReturnUserNameDto authCheck(AuthenticationDto authenticationDto);
}
