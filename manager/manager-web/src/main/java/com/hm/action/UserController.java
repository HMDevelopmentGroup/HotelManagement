package com.hm.action;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;
import com.hm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private IUserService service;

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public String forward1(User user) {
        int i = 0;
        try {
            String md5pass = DigestUtils.md5DigestAsHex(user.getPassword().getBytes());
            user.setPassword(md5pass);
            i = service.addUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:page/user/addUser";
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

    @RequestMapping(value = "/userNums", method = RequestMethod.GET)
    @ResponseBody
    public int getUserNums() {
        int nums = 0;
        try {
            nums = service.userNums();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return nums;
    }

    @RequestMapping(value = "/queryUser/{queryInfo}", method = RequestMethod.GET)
    @ResponseBody
    public MessageResult queryUser(@PathVariable("queryInfo") String queryInfo) {
        MessageResult mr = new MessageResult();
        List<User> users = null;
        try {
            users = service.queryUser(queryInfo);
            mr.setCode(0);
            mr.setMsg("success");
            mr.setCount(users.size());
            mr.setData(users);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return mr;
    }

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    @ResponseBody
    public MessageResult listUsers(Page page) {
        MessageResult mr = new MessageResult();
        List<User> users = null;
        try {
            users = service.listByPage(page);
            mr.setCode(0);
            mr.setMsg("success");
            mr.setCount(users.size());
            mr.setData(users);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return mr;
    }

    @RequestMapping(value = "/delUser", method = RequestMethod.POST)
    @ResponseBody
    public int delUser(@RequestParam("uid") String uid) {
        int i = 0;
        try {
            i = service.deleteUser(uid);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return i;
    }


    @RequestMapping(value = "/user/batch", method = RequestMethod.POST)
    @ResponseBody
    public int batchDelUser(@RequestParam("ids[]") String[] ids) {
        int i = 0;
        try {
            for (String uid:ids) {
                i += service.deleteUser(uid);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return i;
    }



    @RequestMapping(value = "/editUser",method = RequestMethod.GET)
    public String toEditUser(@RequestParam("uid") String uid, HttpServletRequest request){
        User user = null;
        try {
            user = service.findUser(uid);
            request.setAttribute("user",user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "page/user/editUser";
    }


    @RequestMapping(value = "/user",method = RequestMethod.PUT)
    public String updateUser(User user){
        int i = 0;
        try {
            i = service.alterUser(user);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:page/user/allUsers";
    }


}
