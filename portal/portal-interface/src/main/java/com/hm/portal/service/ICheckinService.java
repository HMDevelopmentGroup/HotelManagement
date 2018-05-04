package com.hm.portal.service;

import com.hm.portal.pojo.po.CheckInfo;
import com.hm.portal.pojo.po.Internetorder;
import com.hm.portal.pojo.po.Orders;
import com.hm.portal.pojo.po.RoomCate;

import java.util.List;

public interface ICheckinService {
    List<RoomCate>  roomCatelsit();
    List<Integer> comfirmEmpey();

    List<Integer> searchRoomCate(String start, String end);

    void addInternetOrder(Internetorder internetorder);

    void addOrders(Orders order);

    void updateStatusOrder(String ioid);

    void addOrders(String oid);

    void addCheckinfo(CheckInfo checkInfo);

    void updateStatusCheckinfo(String cid);
}
