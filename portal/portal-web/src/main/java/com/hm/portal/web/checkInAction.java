package com.hm.portal.web;

import com.hm.portal.pojo.dto.InternetOrderView;
import com.hm.portal.pojo.po.*;
import com.hm.portal.service.ICheckinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Controller
public class checkInAction
{
    @Autowired
    private ICheckinService checkinService;

    @RequestMapping(value = "/toBook/{hid}")
    public String toBook(@PathVariable("hid")Integer hid, Model model){
        List<RoomCate> roomCates = checkinService.roomCatelsit();
        List<Integer> integers = checkinService.comfirmEmpey();
        for (RoomCate roomCate:roomCates){
            for (int a:integers){
                if(a==roomCate.getCid()){
                    roomCate.setConfirmEmpty(999);
                }
            }
        }
        model.addAttribute("roomCates",roomCates);
        model.addAttribute("hid",hid);
        model.addAttribute("aaa","1");
        return "tobook";
    }


    @RequestMapping(value = "/tobook2/{hid}")
    public String toBook2(@PathVariable("hid")Integer hid, Model model,String start,String end){
      List<RoomCate> roomCates= checkinService.roomCatelsit();
        List<Integer> integers = checkinService.searchRoomCate(start,end);
        for (RoomCate roomCate:roomCates){
            for (int a:integers){
                if(a==roomCate.getCid()){
                    roomCate.setConfirmEmpty(999);
                }
            }
        }
        model.addAttribute("roomCates",roomCates);
        model.addAttribute("hid",hid);
        model.addAttribute("start",start);
        model.addAttribute("end",end);
        return "tobook";
    }

    @RequestMapping(value = "/addInternetOrder")
    public String addInternetOrder(InternetOrderView internetOrderView, HttpSession session,Model model){
        Internetorder internetorder = new Internetorder();
        UUID uuid = UUID.randomUUID();
        UUID uuid1 = UUID.randomUUID();
        UUID uuid2 = UUID.randomUUID();
        String s2 = uuid2.toString();
        String s1 = uuid1.toString();
        String s = uuid.toString();
        internetorder.setIoid(s);
        internetorder.setOid(s1);
        internetorder.setStart(internetOrderView.getStart());
        internetorder.setEnd(internetOrderView.getEnd());
        internetorder.setRcate(internetOrderView.getCid());
        User user = (User)session.getAttribute("user");
        if(user!=null) {
            internetorder.setUid(user.getUid());
            internetorder.setOffer(user.getRealname());
            internetorder.setOfferid(user.getIdCard());
        }
        internetorder.setStatus(1);
        checkinService.addInternetOrder(internetorder);

        CheckInfo checkInfo = new CheckInfo();
        checkInfo.setIoid(s);
        checkInfo.setCid(s2);
        checkInfo.setOid(s1);
        checkInfo.setStart(internetOrderView.getStart());
        checkInfo.setEnd(internetOrderView.getEnd());
        checkInfo.setStatus(1);
        if(user!=null) {
            checkInfo.setUid(user.getUid());
            checkInfo.setOffer(user.getRealname());
            checkInfo.setOfferid(user.getIdCard());
        }

        checkinService.addCheckinfo(checkInfo);

        Orders order = new Orders();
        order.setOid(s1);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh-mm-ss");
        order.setOrdertime(simpleDateFormat.format(new Date()));
        order.setStatus("0");
        order.setPrice(internetOrderView.getPrice());

        checkinService.addOrders(order);
        model.addAttribute("oid",s1);
        model.addAttribute("ioid",s);
        model.addAttribute("cid",s2);
        return "payPage";
    }

    @RequestMapping(value = "confirmPay/{oid}/{ioid}/{cid}")
    public String confirmPay(@PathVariable("oid")String oid,@PathVariable("ioid")String ioid,@PathVariable("cid")String cid){
        checkinService.updateStatusOrder(ioid);
        checkinService.updateStatusOrder(oid);
        checkinService.updateStatusCheckinfo(cid);
        return "redirect:/";
    }

}
