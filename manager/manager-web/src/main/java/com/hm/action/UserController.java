package com.hm.action;

import com.hm.pojo.User;
import com.hm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    private IUserService service;

    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String forward1(User user){
        int i = service.addUser(user);
        return "redirect:page/user/addUser";
    }

    @RequestMapping(value = "/checkUsername",method = RequestMethod.POST)
    @ResponseBody
    public String checkUsername(String username){
        if(username!=null){
            User user =service.findUserByUsername(username.trim());
            if(user!=null){
                return "1";
            }
        }
        return "0";
    }
}
