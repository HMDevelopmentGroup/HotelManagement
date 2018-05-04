package com.hm.action;

import com.hm.pojo.po.Admin;
import com.hm.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;

@Controller
public class AdminController {

    @Autowired
    private IAdminService service;

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public String login(Admin admin, HttpSession session){
        Admin loginAdmin = service.login(admin);
        if (loginAdmin!=null){
            session.setAttribute("admin",loginAdmin);
            return "success";
        }
        return "false";
    }
}
