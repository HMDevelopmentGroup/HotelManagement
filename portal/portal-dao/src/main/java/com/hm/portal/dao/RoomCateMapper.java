package com.hm.portal.dao;

import com.hm.portal.pojo.dto.RoomUseAge;
import com.hm.portal.pojo.po.*;

import java.util.List;

public interface RoomCateMapper {
    List<RoomCate> roomCateList();
    List<Room> emptyRoomList();
    List<RoomUseAge> listRoomUseAge();

    void addInternetOrder(Internetorder internetorder);

    void addOrders(Orders order);
    void  updateStatusInternetOrder(String ioid);
    void  updateStatusOrder(String oid);

    void addCheckinfo(CheckInfo checkInfo);

         void    updateStatusCheckinfo(String cid);
}
