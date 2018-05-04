package com.hm.portal.web;


import com.hm.portal.pojo.po.Product;
import com.hm.portal.pojo.po.User;
import com.hm.portal.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;


@Controller
public class ProductController {
    @Autowired
    private ProductService proservice;


    @RequestMapping(value = "/shop", method = RequestMethod.GET)
    public String toShop(HttpServletRequest request, HttpSession session) {
        User user = null;
        try {
            user = (User) session.getAttribute("user");
            if (user==null) {
                return "toLogin";
            }
            List<Product> productItems = proservice.selectproductbyall();
            request.setAttribute("productItems", productItems);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "shop";
    }


    @RequestMapping(value = "/shop/productItem/{productId}", method = RequestMethod.GET)
    public String toProductItem(HttpServletRequest request, @PathVariable("productId") Integer productId) {
        try {
            Product productItem = (Product) proservice.selectproductbyid(productId);
            request.setAttribute("productItem", productItem);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "productItem";
    }

}
