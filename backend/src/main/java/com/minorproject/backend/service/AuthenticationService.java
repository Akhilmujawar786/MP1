package com.minorproject.backend.service;

import org.springframework.stereotype.Service;

import com.minorproject.backend.dto.JwtAuthenticationResponse;
import com.minorproject.backend.dto.SignUpRequest;
import com.minorproject.backend.dto.SigninRequest;
import com.minorproject.backend.model.User;

@Service
public interface AuthenticationService {
    User signup(SignUpRequest signUpRequest);
    JwtAuthenticationResponse signin(SigninRequest signinRequest);
}
