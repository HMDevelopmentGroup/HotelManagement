package com.hm.action;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import com.hm.service.IOrderService;
//import com.hm.utils.ViewExcel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;
import java.util.Map;


@Controller
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @ResponseBody
    @RequestMapping(value = "/orderList", method = RequestMethod.GET)
    public MessageResult<OrderCustom> queryOrder(Page page, OrderQuery query) {
        MessageResult<OrderCustom> result = null;
        System.out.println(query.getStatus());
        try {
            result = orderService.selectByPage(page, query);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

//    @RequestMapping("/export")
//    public ModelAndView export(ModelMap map) {
//        List<Map<String, String>> list = orderService.exportOrder();
//        String[] titles = {"订单号", "客户名称", "身份证", "房间号", "入住时间", "退房时间","总天数","总金额","状态"};
//        ViewExcel excel = new ViewExcel(titles);
//        map.put("excelList", list);
//        return new ModelAndView(excel, map);
//    }

}
