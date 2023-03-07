package com.demo02.app.Controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(value = "demo02", tags = "demo02")
public class HelloWorldController {

    @GetMapping("/Hello")
    @ApiOperation(value = "hello", notes = "ApiHello")
    public String Hello(){

        return "HelloWorld";
    }
}
