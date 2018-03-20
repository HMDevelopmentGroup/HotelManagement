package com.hm.action;
import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.Order;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import com.hm.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @ResponseBody
    @RequestMapping(value = "/orderList",method = RequestMethod.GET)
    public MessageResult<OrderCustom> queryOrder(Page page, OrderQuery query){
        MessageResult<OrderCustom> result = null;
        System.out.println(query.getStatus());
        try {
            result = orderService.selectByPage(page,query);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
