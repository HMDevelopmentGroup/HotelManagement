package com.hm.service.impl;

import com.hm.dao.RoomCateMapper;
import com.hm.pojo.po.RoomCate;
import com.hm.service.IRoomCateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomCateServiceImpl implements IRoomCateService{
    @Autowired
    private RoomCateMapper dao;
    @Override
    public RoomCate selectRoomCate(Integer cateid) {
        return dao.selectByPrimaryKey(cateid);
    }
}
