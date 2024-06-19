package com.attendancemanager.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="employee")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="userid")
    private long id;

    @Column(name="username")
    private String name;

    @Column(name="useremail")
    private String email;

    @Column(name="userpassword")
    private String password;

}
