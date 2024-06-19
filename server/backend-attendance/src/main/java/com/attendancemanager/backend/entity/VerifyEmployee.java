package com.attendancemanager.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="verifyemployee")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VerifyEmployee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="verifyid")
    private Long id;

    @Column(name="opt")
    private String otp;

    @Column(name="verifyemail")
    private String email;

    @Column(name="validfrom")
    private LocalDateTime validFrom;

    @Column(name="validto")
    private LocalDateTime validTo;

    public VerifyEmployee(String otp, String email, LocalDateTime validFrom, LocalDateTime validTo) {
        this.otp = otp;
        this.email = email;
        this.validFrom = validFrom;
        this.validTo = validTo;
    }
}
