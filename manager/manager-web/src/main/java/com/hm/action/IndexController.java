package com.hm.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String toIndex(){
        return "Bindex";
    }

    @RequestMapping(value = "/page/{filename}",method = RequestMethod.GET)
    public String forward1(@PathVariable String filename){
        return "page/"+filename;
    }


    @RequestMapping(value = "/page/{dname}/{filename}",method = RequestMethod.GET)
    public String forward2(@PathVariable String dname,@PathVariable String filename){
        return "page/"+dname+"/"+filename;
    }
}
