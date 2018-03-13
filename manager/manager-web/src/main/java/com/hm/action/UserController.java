package com.hm.action;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;
import com.hm.service.IUserService;
import com.hm.utils.NumberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @RequestMapping(value = "/userNums",method = RequestMethod.GET)
    @ResponseBody
    public int getUserNums(){
        int nums = service.userNums();
        return nums;
    }

    @RequestMapping(value = "/queryUser/{queryInfo}",method = RequestMethod.GET)
    @ResponseBody
    public MessageResult queryUser(@PathVariable("queryInfo") String queryInfo){
        MessageResult mr = new MessageResult();
        List<User> users = service.queryUser(queryInfo);
        mr.setCode(0);
        mr.setMsg("success");
        mr.setCount(users.size());
        mr.setData(users);
        return mr;
    }

    @RequestMapping(value = "/users",method = RequestMethod.GET)
    @ResponseBody
    public MessageResult listUsers(Page page){
        MessageResult mr = new MessageResult();
        List<User> users = service.listByPage(page);
        mr.setCode(0);
        mr.setMsg("success");
        mr.setCount(users.size());
        mr.setData(users);
        return mr;
    }
}
