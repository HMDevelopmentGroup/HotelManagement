package com.hm.portal.web;

import com.hm.portal.pojo.vo.OrderCustom;
import com.hm.portal.pojo.vo.OrderQuery;
import com.hm.portal.service.IOrderCustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class PortalOrderAction {

    @Autowired
    private IOrderCustomService orderCustomService;

    @RequestMapping(value = "/checkFitOrder",method = RequestMethod.POST)
    @ResponseBody
    public String checkFitOrder(OrderQuery query){

        List<OrderCustom> customList = null;
        try {
            customList = orderCustomService.selectByClause(query);
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (customList!=null && customList.size()!=0){

            return "1";
        }

        return "0";
    }

    @RequestMapping(value = "/Order/FitOrder")
    public String fitOrder(String info, String orderNo, Model model){

        OrderQuery query = new OrderQuery();
        query.setInfo(info);
        query.setOrderNo(orderNo);
        List<OrderCustom> customList = null;
        try {
            customList = orderCustomService.selectByClause(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
        model.addAttribute("customList",customList);

        return "FitOrder";

    }
}
