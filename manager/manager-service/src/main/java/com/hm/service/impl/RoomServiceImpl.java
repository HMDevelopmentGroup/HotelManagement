package com.hm.service.impl;

import com.hm.dao.CheckInfoMapper;
import com.hm.dao.RoomMapper;
import com.hm.dao.RoomMapperCustom;
import com.hm.pojo.po.*;
import com.hm.service.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class RoomServiceImpl implements IRoomService {
    @Autowired
    private RoomMapper dao;
    @Autowired
    private CheckInfoMapper checkInfoDao;
    @Autowired
    private RoomMapperCustom customDao;
    @Override
    public List<Room> getEmptyRoom() {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("0");
        return dao.selectByExample(example);
    }


    @Override
    public List<RoomCustom> getRooms() {
        return customDao.selectRooms();
    }

    @Override
    public List<RoomCustom> checkout() {
        CheckInfoExample example = new CheckInfoExample();
        CheckInfoExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(4);
        List<CheckInfo> checkInfos = checkInfoDao.selectByExample(example);
        List<RoomCustom> rooms = new ArrayList<>();
        for (CheckInfo checkInfo:checkInfos) {
            RoomCustom room = customDao.selectByPrimaryKey(checkInfo.getRid());
            rooms.add(room);
        }
        return rooms;
    }
    @Override
    public int checkOutRoom(Integer rid) {
        Room room=new Room();
        room.setRid(rid);
        room.setStatue("3");
        return dao.updateByPrimaryKeySelective(room);
    }

    @Override
    public Room selectByRid(Integer rid) {
        return dao.selectByPrimaryKey(rid);
    }

    @Override
    public int emptyRooms() {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("0");
        return dao.countByExample(example);
    }

    @Override
    public int dirtyRooms() {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("3");
        return dao.countByExample(example);
    }

    @Override
    public int checkOutRooms() {
        CheckInfoExample example = new CheckInfoExample();
        CheckInfoExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(4);
        List<CheckInfo> checkInfos = checkInfoDao.selectByExample(example);
        int num = checkInfos.size();
        return num;
    }

    @Override
    public int updateRooms(Room room) {
        return dao.updateByPrimaryKeySelective(room);
    }
}
