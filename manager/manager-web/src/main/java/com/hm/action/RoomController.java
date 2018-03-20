package com.hm.action;

import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomCustom;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class RoomController {
    @Autowired
    private IRoomService service;

    @RequestMapping(value = "page/checkin/checkin", method = RequestMethod.GET)
    public String getEmptyRoom(HttpServletRequest request) {
        List<Room> rooms = service.getEmptyRoom();
        request.setAttribute("rooms",rooms);
        return "page/checkin/checkin";
    }


    @RequestMapping(value = "page/checkout/checkout", method = RequestMethod.GET)
    public String checkout(HttpServletRequest request) {
        List<RoomCustom> rooms = service.checkout();
        request.setAttribute("rooms",rooms);
        return "page/checkout/checkout";
    }

    @RequestMapping(value = "page/room/listrooms", method = RequestMethod.GET)
    public String listrooms(HttpServletRequest request) {
        List<RoomCustom> rooms = service.getRooms();
        request.setAttribute("rooms",rooms);
        return "page/room/listRooms";
    }

    @RequestMapping(value = "page/room/refreshStatus", method = RequestMethod.GET)
    public String refreshStatus() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String rightNow = sdf.format(new Date()).toString();
        service.refreshStatus(rightNow);//todo
        return "page/checkin/checkin";
    }
}
