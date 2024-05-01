package com.minorproject.backend.service.impl;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import javax.print.attribute.HashPrintJobAttributeSet;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.minorproject.backend.model.User;
import com.minorproject.backend.service.JWTService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JWTServiceImpl implements JWTService {
    
    public String generateToken(UserDetails userdetails) {
        return Jwts.builder().setSubject(userdetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
        .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    public String extractUserName(String token) {
        return extractClaim(token, Claims::getSubject);
    }
    private<T> T extractClaim(String token,Function<Claims,T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Key getSignKey() {
        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }

  
    public String generateRefreshToken(Map<String, Object> extraClaims, UserDetails userdetails) {
        return Jwts.builder().setClaims(extraClaims).setSubject(userdetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 700000000))
        .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }
}
