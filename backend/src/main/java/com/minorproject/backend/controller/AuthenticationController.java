package com.minorproject.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minorproject.backend.dto.JwtAuthenticationResponse;
import com.minorproject.backend.dto.SignUpRequest;
import com.minorproject.backend.dto.SigninRequest;
import com.minorproject.backend.model.User;
import com.minorproject.backend.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody SignUpRequest signUpRequest) {
        //TODO: process POST request
        
        return ResponseEntity.ok(authenticationService.signup(signUpRequest));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest) {
        //TODO: process POST request
        return ResponseEntity.ok(authenticationService.signin(signinRequest));
    }
    
    
}
