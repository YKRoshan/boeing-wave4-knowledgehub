package com.stackroute;

import com.stackroute.NlpService.NlpServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AnalyticServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnalyticServerApplication.class, args);
		NlpServiceImpl nlpService = new NlpServiceImpl();
		nlpService.setParagraph("The Spring Framework provides a comprehensive programming and configuration model " +
				"for modern Java-based enterprise applications - on any kind of deployment platform.");
		nlpService.getAllWords();
		nlpService.removeStopWords();
		nlpService.frequencyOfWords();
	}
}

