package com.tide.server;
import com.tide.auth.configs.SecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
        "com.tide.common",
        "com.tide.server",
        "com.tide.auth"
})
@EntityScan(basePackages = {
        "com.tide.server",
        "com.tide.auth"
})

@EnableJpaRepositories(basePackages = {
        "com.tide.server",
        "com.tide.auth"
})

@Import(SecurityConfig.class)

public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}