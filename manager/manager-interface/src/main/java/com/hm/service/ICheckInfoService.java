package com.hm.service;

import com.hm.pojo.po.CheckInfo;

public interface ICheckInfoService {

    int updateCheckinfoRoom(CheckInfo checkInfo);

    void refreshRoomStatus();
}
