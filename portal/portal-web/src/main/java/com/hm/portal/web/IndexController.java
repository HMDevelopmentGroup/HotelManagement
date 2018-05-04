package com.hm.portal.web;

import com.hm.portal.pojo.po.User;
import com.hm.portal.service.IUserService;
import com.hm.utils.CookieUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@Controller
public class IndexController {
    @Autowired
    private IUserService service;


    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String toIndex(HttpServletRequest request, HttpSession session){
        Cookie[] cookies = null;
        String token = "";
        User user = null;
        token = CookieUtils.getCookieValue(request, "TOKEN");
//        cookies = request.getCookies();
//        if (cookies!=null){
//            System.out.println("cookie不为空");
//            for (Cookie cookie:cookies) {
//                System.out.println(cookie.getName());
//                if ("TOKEN".equals(cookie.getName())){
//                    System.out.println("tokenCookie存在");
//                    token = cookie.getValue();
//                }
//            }
//        }

        if (token!=null && !"".equals(token)){
            System.out.println(token);
            user = service.autoLogin(token);
        }
        if (user != null){
            session.setAttribute("user",user);
            System.out.println("已经存入session域");
        }

        return "index";
    }

    @RequestMapping(value = "/chooseCity",method = RequestMethod.GET)
    public String toChooseCity(){
        return "chooseCity";
    }


    @RequestMapping(value = "/userMainPage",method = RequestMethod.GET)
    public String toUserMainPage(){
        return "userMainPage";
    }

    @RequestMapping(value = "/userRegister",method = RequestMethod.GET)
    public String toUserRegister(){
        return "userRegister";
    }

    @RequestMapping(value = "/Order/FitOrderSelect")
    public String FitOrderSelect(){

        return "FitOrderSelect";
    }

}
