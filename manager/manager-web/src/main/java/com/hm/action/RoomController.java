package com.hm.action;

import com.hm.pojo.po.Room;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
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
}
