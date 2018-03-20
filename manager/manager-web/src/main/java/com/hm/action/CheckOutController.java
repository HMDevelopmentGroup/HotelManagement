package com.hm.action;

import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.Room;
import com.hm.service.ICheckInfoService;
import com.hm.service.IRoomService;
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


    @RequestMapping(value = "page/checkout/checkout.do/{rid}")
    public String checkOutRoom(@PathVariable(value = "rid") Integer rid) {
        Room room=service.selectByRid(rid);
        CheckInfo checkInfo=new CheckInfo();
        checkInfo.setCid(room.getStatue());
        checkInfo.setStatus(5);
        service.checkOutRoom(rid);
        checkinfoService.updateCheckinfoRoom(checkInfo);
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
