package com.hm.service;

import com.hm.pojo.dto.Page;
import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.InternetOrder;
import com.hm.pojo.vo.InternetOrderCustom;

import java.util.List;

public interface ICheckInfoService {

    int updateCheckinfoRoom(CheckInfo checkInfo);

    CheckInfo selectByPrimaryKey(String cid);

    void refreshRoomStatus();

    void  addCheckInfo(CheckInfo checkInfo);

    void  confirmPay(String cid);

     List<InternetOrderCustom> internetorderList(Page page);

     int internetOrderCount();

    int confirmRoom(String rid, String ioid);

    InternetOrder selectInternetOrderByid(String ioid);

    void deleteInternetOrder(String ioid);

    List<InternetOrderCustom> internetorderListCheckin(Page page);
    int internetOrderCountCheckin();
    void  internetOrderCompileStatus(String ioid);

    int internetCheckin(String ioid);

    List<CheckInfo> selectWaitCheckin();
}
