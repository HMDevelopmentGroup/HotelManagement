package com.hm.service.impl;

import com.hm.dao.RoomMapper;
import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomExample;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RoomServiceImpl implements IRoomService {
    @Autowired
    private RoomMapper dao;
    @Override
    public List<Room> getEmptyRoom() {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("0");
        return dao.selectByExample(example);
    }
}
