package com.tide.auth.services;

import com.tide.auth.dto.AuthResponseDTO;
import com.tide.auth.dto.LoginRequestDTO;
import com.tide.auth.dto.RegisterRequestDTO;
import com.tide.auth.models.Role;
import com.tide.auth.models.User;
import com.tide.auth.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    
    public AuthResponseDTO register(RegisterRequestDTO request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            return AuthResponseDTO.builder()
                    .success(false)
                    .message("Email already registered")
                    .build();
        }
        
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        
        userRepository.save(user);
        
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        
        return AuthResponseDTO.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .success(true)
                .message("User registered successfully")
                .build();
    }
    
    public AuthResponseDTO login(LoginRequestDTO request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            
            var user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new RuntimeException("User not found"));
            
            var jwtToken = jwtService.generateToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);
            
            return AuthResponseDTO.builder()
                    .token(jwtToken)
                    .refreshToken(refreshToken)
                    .success(true)
                    .message("Login successful")
                    .build();
                    
        } catch (Exception e) {
            return AuthResponseDTO.builder()
                    .success(false)
                    .message("Invalid email or password")
                    .build();
        }
    }
}
