package com.minorproject.backend.service;

import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.minorproject.backend.model.User;

@Service
public interface JWTService {
   
    String extractUserName(String token);
    String generateToken(UserDetails userdetails);
    boolean isTokenValid(String token, UserDetails userDetails);
   String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userdetails);
}
