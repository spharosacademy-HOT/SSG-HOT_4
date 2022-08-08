package com.ssghot.ssg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SsgApplication {

	public static void main(String[] args) {
		SpringApplication.run(SsgApplication.class, args);
	}

}
