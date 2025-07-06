package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.CountryRepository;



@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService service;

    @PostMapping
    public Country add(@RequestBody Country country) {
        return service.addCountry(country);
    }

    @GetMapping("/{code}")
    public Country getByCode(@PathVariable String code) {
        return service.findByCode(code);
    }
}
