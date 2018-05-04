package com.hm.action;

import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.Order;
import com.hm.pojo.po.Room;
import com.hm.service.ICheckInfoService;
import com.hm.service.IOrderService;
import com.hm.service.IRoomService;
import com.hm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;


@Controller
public class CheckOutController {
    @Autowired
    private IRoomService service;

    @Autowired
    private ICheckInfoService checkinfoService;

    @Autowired
    private IUserService userService;

    @Autowired
    private IOrderService orderService;


    @RequestMapping(value = "page/checkout/checkout.do/{rid}")
    public String checkOutRoom(@PathVariable(value = "rid") Integer rid) {
        Room room=service.selectByRid(rid);
        CheckInfo checkInfo = checkinfoService.selectByPrimaryKey(room.getStatue());
        checkInfo.setCid(room.getStatue());
        checkInfo.setStatus(5);
        service.checkOutRoom(rid);
        checkinfoService.updateCheckinfoRoom(checkInfo);
        Order order = orderService.findOrder(checkInfo.getOid());
        String uid = checkInfo.getUid();
        if (uid !=null && !"".equals(uid)){
            userService.addIntegration(uid,order);
        }

        return "redirect:/page/checkout/checkout";
    }

    @RequestMapping(value = "/checkoutNums")
    @ResponseBody
    public int checkOutRoom() {
        int num = service.checkOutRooms();
        return num;
    }

    @RequestMapping(value = "refreshStatus", method = RequestMethod.GET)
    @ResponseBody
    public String refreshStatus() {
        checkinfoService.refreshRoomStatus();
        return "success";
    }
}
