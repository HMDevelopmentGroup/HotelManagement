package com.hm.service.impl;

import com.hm.dao.CheckInfoMapper;
import com.hm.dao.RoomMapper;
import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomExample;
import com.hm.service.ICheckinfoService;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckInfoServiceImpl implements ICheckinfoService {
    @Autowired
    private CheckInfoMapper dao;

    @Override
    public int updateCheckinfoRoom(CheckInfo checkInfo) {
        return dao.updateByPrimaryKeySelective(checkInfo);
    }
}
