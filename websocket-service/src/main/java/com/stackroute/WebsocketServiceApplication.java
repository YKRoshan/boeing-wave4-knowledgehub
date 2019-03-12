package com.stackroute;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class WebsocketServiceApplication {

	/*
	This is web socket main class which runsthe web socket service applications.
	*/
	public static void main(String[] args) {
		SpringApplication.run(WebsocketServiceApplication.class, args);
	}

}
