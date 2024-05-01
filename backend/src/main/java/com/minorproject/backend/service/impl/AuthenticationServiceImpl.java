package com.minorproject.backend.service.impl;

import java.util.HashMap;
import java.util.UUID;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.minorproject.backend.dto.JwtAuthenticationResponse;
import com.minorproject.backend.dto.SignUpRequest;
import com.minorproject.backend.dto.SigninRequest;
import com.minorproject.backend.model.Role;
import com.minorproject.backend.model.User;
import com.minorproject.backend.repository.UserRepository;
import com.minorproject.backend.service.AuthenticationService;
import com.minorproject.backend.service.JWTService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;

    private final JWTService jwtService;
    public User signup(SignUpRequest signUpRequest){
        User user = new User();
        String Id = UUID.randomUUID().toString().split("-")[0];
        // Set the task ID
        user.setId(Id);
        user.setFirstname(signUpRequest.getFirstname());
        user.setLastname(signUpRequest.getLastname());
        user.setEmail(signUpRequest.getEmail());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        return userRepository.save(user);
    }

    //login

    public JwtAuthenticationResponse signin(SigninRequest signinRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), 
        signinRequest.getPassword()));

        var user = userRepository.findByEmail(signinRequest.getEmail()).orElseThrow(
            ()->new IllegalArgumentException("invalid email or pass"));
        var jwt =  jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(new HashMap<>(),user);
        JwtAuthenticationResponse jwtAuthenticationResponse = new JwtAuthenticationResponse();

        jwtAuthenticationResponse.setToken(jwt);
        jwtAuthenticationResponse.setRefreshToken(refreshToken);
        return jwtAuthenticationResponse;
    }
}
