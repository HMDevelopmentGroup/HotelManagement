package com.hm.portal.web;

import com.hm.portal.pojo.po.Integralorder;
import com.hm.portal.pojo.po.Product;
import com.hm.portal.service.IntegralorderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import javax.servlet.http.HttpServletRequest;

@Controller
public class IntegralorderController {
    @Autowired
    private IntegralorderService integralservice;

    @RequestMapping(value = "/shop/integralorder" ,method=RequestMethod.POST)
    public String toIntointegralorder(HttpServletRequest request, Integralorder integralorder) {

        try {
           int i = integralservice.addIntegralorder(integralorder);

        } catch (Exception e) {
            e.printStackTrace();
        }
        request.setAttribute("i",integralorder);

        return "integralorder";
    }



}
