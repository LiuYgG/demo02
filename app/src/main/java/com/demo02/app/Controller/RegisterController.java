package com.demo02.app.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {


    @GetMapping("/register")
    public String AdminUserRegister() {
        return "registerPage";
    }
}
