package com.demo02.app.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LoginController {

    @GetMapping ("/login")
    public String UserLogin() {
        return "LoginPage";
    }
}
