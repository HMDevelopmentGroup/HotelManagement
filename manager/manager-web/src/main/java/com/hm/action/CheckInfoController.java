package com.hm.action;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.*;
import com.hm.pojo.vo.InternetOrderCustom;
import com.hm.service.*;
import com.hm.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Controller
public class CheckInfoController {

    @Autowired
    private ICheckInfoService checkInfoService;

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IRoomService roomService;
    @Autowired
    private IRoomCateService roomCateService;

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/checkinfopage/{rid}")
    public String checkInfoPage(@PathVariable("rid") Integer rid, Model model) {
        model.addAttribute("rid", rid);
        return "/page/checkin/checkinfo";
    }

    @RequestMapping(value = "/membercheckinfopage/{rid}")
    public String memberCheckInfoPage(@PathVariable("rid") Integer rid, Model model) {
        model.addAttribute("rid", rid);
        return "/page/checkin/checkinfomember";
    }


    @RequestMapping(value = "/checkinfo", method = RequestMethod.POST)
    public String checkInfo(CheckInfo checkInfo, Model model) {
        checkInfo.setStatus(1);
        checkInfo.setCid(IdUtils.getUUID());
        Order order = new Order();
        String oid = IdUtils.getUUID();
        order.setOid(oid);
        checkInfo.setOid(oid);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        order.setOrdertime(sdf.format(new Date()).toString());
        Room room = roomService.selectByRid(checkInfo.getRid());
        RoomCate roomCate = roomCateService.selectRoomCate(room.getCateid());
        order.setPrice(roomCate.getPrice() * checkInfo.getDays());
        order.setStatus("0");
        orderService.addOrder(order);
        checkInfoService.addCheckInfo(checkInfo);
        model.addAttribute("order", order);
        model.addAttribute("rid", checkInfo.getRid());
        model.addAttribute("cid", checkInfo.getCid());
        return "page/checkin/orderpay";
    }

    @RequestMapping(value = "/checkinfomember")
    public String checkinfomember(CheckInfo checkInfo, @RequestParam("telephone") String telephone, Model model) {
        User user = userService.findUserByTelephone(telephone);
        checkInfo.setUid(user.getUid());
        checkInfo.setOffer(user.getRealname());
        checkInfo.setOfferid(user.getIdCard());
        checkInfo.setStatus(1);
        checkInfo.setCid(IdUtils.getUUID());
        Order order = new Order();
        String oid = IdUtils.getUUID();
        order.setOid(oid);
        checkInfo.setOid(oid);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        order.setOrdertime(sdf.format(new Date()).toString());
        Room room = roomService.selectByRid(checkInfo.getRid());
        RoomCate roomCate = roomCateService.selectRoomCate(room.getCateid());
        order.setPrice(roomCate.getPrice() * checkInfo.getDays());
        order.setStatus("0");
        orderService.addOrder(order);
        checkInfoService.addCheckInfo(checkInfo);
        model.addAttribute("order", order);
        model.addAttribute("rid", checkInfo.getRid());
        model.addAttribute("cid", checkInfo.getCid());
        return "page/checkin/orderpay";
    }

    @RequestMapping(value = "/pay/{oid}/{rid}/{cid}")
    @ResponseBody
    public String pay(@PathVariable("oid") String oid, @PathVariable("rid") Integer rid, @PathVariable("cid") String cid) {
        int i = orderService.updateStatus("1", oid);
        checkInfoService.confirmPay(cid);
        Room room = new Room();
        room.setRid(rid);
        room.setStatue(cid);
        roomService.confirmPay(room);
        return "1";
    }

    @RequestMapping(value = "/confirmTelepehone")
    @ResponseBody
    public String confirmTelepehone(String telephone) {
        User userByTelephone = userService.findUserByTelephone(telephone);
        System.out.println(telephone);
        if (userByTelephone != null) {
            return "1";
        } else {
            return "0";
        }
    }

    @RequestMapping(value = "/internetorderList")
    @ResponseBody
    public MessageResult<InternetOrderCustom> internetorderList(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = checkInfoService.internetorderList(page);
        MessageResult<InternetOrderCustom> objectMessageResult = new MessageResult<>();
        objectMessageResult.setData(internetOrderCustoms);
        objectMessageResult.setCode(0);
        objectMessageResult.setCount(checkInfoService.internetOrderCount());
        objectMessageResult.setMsg("success");
        return objectMessageResult;
    }

    @RequestMapping(value = "/internetRoom")
    @ResponseBody
    public int internetRoom(@RequestParam("rid") String rid, @RequestParam("ioid") String ioid) {
        int i = checkInfoService.confirmRoom(rid, ioid);
        Room room = new Room();
        int i1 = Integer.parseInt(rid);
        room.setRid(i1);
        room.setStatue(IdUtils.getUUID());
        roomService.confirmPay(room);
        checkInfoService.internetCheckin(ioid);
        return i;
    }


    @RequestMapping(value = "/waitCheckinNum")
    @ResponseBody
    public int waitCheckinNum() {
        List<CheckInfo> checkInfos = checkInfoService.selectWaitCheckin();
        return checkInfos.size();
    }

    @RequestMapping(value = "/deleteInternetOrder/{ioid}")
    @ResponseBody
    public int deleteInternetOrder(@PathVariable("ioid") String ioid) {
        try {
            checkInfoService.deleteInternetOrder(ioid);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }

        return 1;
    }

    @RequestMapping(value = "/internetCheckinConfirm")
    @ResponseBody
    public MessageResult<InternetOrderCustom> internetCheckinConfirm(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = checkInfoService.internetorderListCheckin(page);
        MessageResult<InternetOrderCustom> objectMessageResult = new MessageResult<>();
        objectMessageResult.setData(internetOrderCustoms);
        objectMessageResult.setCode(0);
        objectMessageResult.setCount(checkInfoService.internetOrderCountCheckin());
        objectMessageResult.setMsg("success");
        return objectMessageResult;
    }

    /*互联网订单确认状态
    * */
    @RequestMapping(value = "/internetOrderCompileStatus/{ioid}")
    @ResponseBody
    public int internetOrderCompileStatus(@PathVariable("ioid") String ioid) {
        checkInfoService.internetOrderCompileStatus(ioid);
        return 1;
    }

}
