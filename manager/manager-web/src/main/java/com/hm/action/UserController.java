package com.hm.action;

import com.hm.pojo.User;
import com.hm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UserController {

    @Autowired
    private IUserService service;

    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String forward1(User user){
        int i = service.addUser(user);
        return "redirect:page/user/addUser";
    }
}
