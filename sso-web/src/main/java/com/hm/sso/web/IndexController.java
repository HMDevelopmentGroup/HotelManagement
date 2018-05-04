package com.hm.sso.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(value = "/")
    public String toLogin(){
        return "login";
    }

    @RequestMapping(value = "/toIndex")
    public String toIndex(){
        return "toIndex";
    }
}
