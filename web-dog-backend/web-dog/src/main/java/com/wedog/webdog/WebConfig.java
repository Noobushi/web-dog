//package com.wedog.webdog;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//import java.util.Arrays;
// for Cors disable if you have security dependency

//Solution 2
//@Configuration
//@EnableWebMvc
//public class WebConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedMethods("*")
//                .allowedHeaders("*")
//                .exposedHeaders("*");
//    }
//}
//Solution 1
////	@Bean
////	public CorsConfigurationSource corsConfigurationSource() {
////		CorsConfiguration configuration = new CorsConfiguration();
////		configuration.setAllowedOrigins(List.of("localhost:4200"));
////		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
////		configuration.setAllowedHeaders(Arrays.asList("append","delete","entries","foreach","get","has","keys","set","values","Origin", "Access-Control-Allow-Origin", "Content-Type",
////				"Accept", "Jwt-Token","Jwt-Refresh-Token", "Authorization", "Origin, Accept", "X-Requested-With",
////				"Access-Control-Request-Method", "Access-Control-Request-Headers"));
////		configuration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Jwt-Token","Jwt-Refresh-Token", "Authorization",
////				"Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
////		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////		source.registerCorsConfiguration("/**", configuration);
////		return source;
////	}