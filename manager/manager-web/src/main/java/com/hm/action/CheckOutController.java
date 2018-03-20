package com.hm.action;

import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.Room;
import com.hm.service.ICheckinfoService;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class CheckOutController {
    @Autowired
    private IRoomService service;

    @Autowired
    private ICheckinfoService checkinfoService;


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
}
