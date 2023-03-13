package com.example.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LeftMenusController {

    @RequestMapping(value = "/leftmenus", method = RequestMethod.GET)
    public String leftMenus(){
        return "leftMenus";
    }
}
