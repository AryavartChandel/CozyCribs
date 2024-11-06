package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HouseController {
    
    @GetMapping("/api/houses")
    public List<String> getHouses() {
        return Arrays.asList("Cozy Cottage", "Beach House", "Mountain Cabin");
    }
}
