package com.wedog.webdog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class WebDogApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebDogApplication.class, args);
	}
	// for Cors disable if you have security dependency
//	@Bean
//	public CorsConfigurationSource corsConfigurationSource() {
//		CorsConfiguration configuration = new CorsConfiguration();
//		configuration.setAllowedOrigins(List.of("localhost:4200"));
//		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
//		configuration.setAllowedHeaders(Arrays.asList("append","delete","entries","foreach","get","has","keys","set","values","Origin", "Access-Control-Allow-Origin", "Content-Type",
//				"Accept", "Jwt-Token","Jwt-Refresh-Token", "Authorization", "Origin, Accept", "X-Requested-With",
//				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
//		configuration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Jwt-Token","Jwt-Refresh-Token", "Authorization",
//				"Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
//		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//		source.registerCorsConfiguration("/**", configuration);
//		return source;
//	}
}
