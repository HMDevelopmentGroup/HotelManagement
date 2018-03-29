package com.hm.action;

import com.hm.pojo.po.InternetOrder;
import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomCustom;
import com.hm.service.ICheckInfoService;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class RoomController {
    @Autowired
    private IRoomService service;
    @Autowired
    private ICheckInfoService checkinfoService;


    @RequestMapping(value = "page/checkin/checkin", method = RequestMethod.GET)
    public String getEmptyRoom(HttpServletRequest request) {
        List<Room> rooms = service.getEmptyRoom();
        request.setAttribute("rooms",rooms);
        return "page/checkin/checkin";
    }

    @RequestMapping(value = "page/checkin/checkin/{ioid}", method = RequestMethod.GET)
    public String getEmptyRoom2(HttpServletRequest request,@PathVariable("ioid") String ioid) {
        InternetOrder internetOrder = checkinfoService.selectInternetOrderByid(ioid);
        List<Room> rooms = service.getRoomByCateId(internetOrder.getRcate());
        request.setAttribute("rooms",rooms);
        request.setAttribute("ioid",ioid);
        return "page/checkin/checkin2";
    }


    @RequestMapping(value = "page/checkout/checkout", method = RequestMethod.GET)
    public String checkout(HttpServletRequest request) {
        checkinfoService.refreshRoomStatus();
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



    @RequestMapping(value = "page/room/clearRoom/{rid}", method = RequestMethod.GET)
    public String clearRoom(@PathVariable("rid") Integer rid) {
        Room room=new Room();
        room.setRid(rid);
        room.setStatue("0");
        try {
            service.updateRooms(room);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:/page/room/listrooms";
    }

    @RequestMapping(value = "/emptyRooms", method = RequestMethod.GET)
    @ResponseBody
    public int emptyRooms() {
        int num = service.emptyRooms();
        return num;
    }

    @RequestMapping(value = "/dirtyRooms", method = RequestMethod.GET)
    @ResponseBody
    public int dirtyRooms() {
        int num = service.dirtyRooms();
        return num;
    }

}
