package com.hm.portal.web;

import com.hm.portal.pojo.po.User;
import com.hm.portal.service.IUserService;
import com.hm.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by Administrator on 2018/3/27.
 * 用户控制层
 */
@Controller
public class UsersController {

    @Autowired
    private IUserService service;


    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public String addUser(User user) {
        int i = 0;
        try {
            i = service.addUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:/";
    }


    @RequestMapping(value = "/checkUsername", method = RequestMethod.POST)
    @ResponseBody
    public String checkUsername(String username) {
        User user = null;
        try {
            if (username != null) {
                user = service.findUserByUsername(username.trim());
                if (user != null) {
                    return "1";
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "0";
    }

}
