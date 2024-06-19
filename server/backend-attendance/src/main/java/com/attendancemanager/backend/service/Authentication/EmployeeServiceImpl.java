package com.attendancemanager.backend.service.Authentication;

import com.attendancemanager.backend.dto.AuthenticationDto;
import com.attendancemanager.backend.dto.ReturnUserNameDto;
import com.attendancemanager.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository=employeeRepository;
    }

    @Override
    public ReturnUserNameDto authCheck(AuthenticationDto authenticationDto) {

        if(
                employeeRepository.existsByEmailAndPassword(authenticationDto.getEmail(), authenticationDto.getPassword())
            && employeeRepository.findByEmail(authenticationDto.getEmail()).getId()==employeeRepository.findByPassword(authenticationDto.getPassword()).getId()
        )
        {
            return new ReturnUserNameDto(employeeRepository.findByEmail(authenticationDto.getEmail()).getName());
        }
        return new ReturnUserNameDto();
    }

}
