package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountry();  // 👈 Calling your custom method
    }

    public static void displayCountry() {
        // Step 1: Load the Spring XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        // Step 2: Get the bean using its id
        Country country = context.getBean("country", Country.class);

        // Step 3: Log and print the result
        LOGGER.debug("Country : {}", country.toString());
        System.out.println("Country Loaded: " + country);  // Optional, for quick debug
    }
}
