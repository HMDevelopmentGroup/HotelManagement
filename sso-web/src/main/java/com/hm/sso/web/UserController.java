package com.hm.sso.web;

import com.hm.sso.pojo.dto.MessageResult;
import com.hm.sso.pojo.po.User;
import com.hm.sso.service.IUserService;
import com.hm.utils.CookieUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired

    private IUserService service;


    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public MessageResult login(User user, HttpServletRequest request, HttpServletResponse response){
        System.out.println(user.getUsername()+"+++++"+user.getPassword());
        MessageResult messageResult = null;
        try {
            //调用业务逻辑层方法
            messageResult = service.login(user);
            //判断登录是否成功
            if(messageResult.isSuccess()){
                //只有登录成功才会进入到这里
                String uuid = messageResult.getData().toString();
                CookieUtils.setCookie(request,response,"TOKEN",uuid);
                String token = CookieUtils.getCookieValue(request, "TOKEN");
                System.out.println(uuid);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return messageResult;
    }
}
