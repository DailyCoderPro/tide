package com.tide.auth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class HealthController {
    @GetMapping("/health")
    public String getMethodName() {
        return "Hello";
    }
}
