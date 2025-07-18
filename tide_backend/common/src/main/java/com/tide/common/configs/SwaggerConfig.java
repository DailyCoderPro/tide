package com.tide.common.configs;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Tide APIs")
                        .version("0.0.1")
                        .description("Documentation for Whole Applications")
                        .contact(new Contact()
                                .name("Support")
                                .url("http://dailycoder.in")
                                .email("dailycoder.in@gmail.com")))
                .servers(List.of(
                        new Server()
                                .url("http://localhost:8085")
                                .description("Local Dev Server")));
    }
}
