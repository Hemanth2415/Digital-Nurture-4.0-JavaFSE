package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public Country findByCode(String code) {
        return repository.findByCode(code);
    }

    public Country addCountry(Country country) {
        return repository.save(country);
    }
}
