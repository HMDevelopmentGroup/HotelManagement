package com.hm.portal.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class IndexController {


    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String toIndex(){
        return "index";
    }

    @RequestMapping(value = "/chooseCity",method = RequestMethod.GET)
    public String toChooseCity(){
        return "chooseCity";
    }


}
