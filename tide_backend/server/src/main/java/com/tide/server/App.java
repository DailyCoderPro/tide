package com.tide.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication(scanBasePackages = {
    "com.tide.auth"
})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}