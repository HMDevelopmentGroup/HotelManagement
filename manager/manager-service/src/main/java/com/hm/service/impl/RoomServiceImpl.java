package com.hm.service.impl;

import com.hm.dao.CheckInfoMapper;
import com.hm.dao.RoomMapper;
import com.hm.dao.RoomMapperCustom;
import com.hm.pojo.po.*;
import com.hm.service.IRoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    private Logger logger = LoggerFactory.getLogger(this.getClass());


    @Override
    public Room findRoom(Integer rid) {
        Room room = dao.selectByPrimaryKey(rid);
        return room;
    }

    @Override
    @Transactional
    public void alterRoon(Room room) {
        try{
            dao.updateByPrimaryKey(room);
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }

    }

    @Override
    @Transactional
    public void confirmPay(Room room) {
        try{
            customDao.updateStatus(room);
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
    }

    @Override
    public List<Room> getEmptyRoom() {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("0");
        return dao.selectByExample(example);
    }

    @Override
    public List<Room> getRoomByCateId(int cateid) {
        RoomExample example=new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andCateidEqualTo(cateid);
        List<Room> rooms = dao.selectByExample(example);
        return rooms;
    }


    @Override
    public List<RoomCustom> getRooms() {
        return customDao.selectRooms();
    }

    @Override
    @Transactional
    public List<RoomCustom> checkout() {
        CheckInfoExample example = null;
        CheckInfoExample.Criteria criteria = null;
        List<CheckInfo> checkInfos = null;
        List<RoomCustom> rooms = null;
        try{
            example = new CheckInfoExample();
            criteria = example.createCriteria();
            criteria.andStatusEqualTo(4);
            checkInfos = checkInfoDao.selectByExample(example);
            rooms = new ArrayList<>();
            for (CheckInfo checkInfo:checkInfos) {
                RoomCustom room = customDao.selectByPrimaryKey(checkInfo.getRid());
                rooms.add(room);
            }
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return rooms;
    }


    @Override
    @Transactional
    public int checkOutRoom(Integer rid) {
        Room room=null;
        int i = 0;
        try{
            room=new Room();
            room.setRid(rid);
            room.setStatue("3");
            i = dao.updateByPrimaryKeySelective(room);
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
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
    @Transactional
    public int checkOutRooms() {
        CheckInfoExample example = null;
        CheckInfoExample.Criteria criteria = null;
        List<CheckInfo> checkInfos = null;
        int num = 0;
        try{
            example = new CheckInfoExample();
            criteria = example.createCriteria();
            criteria.andStatusEqualTo(4);
            checkInfos = checkInfoDao.selectByExample(example);
            num = checkInfos.size();
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return num;
    }

    @Override
    public int updateRooms(Room room) {
        int i = 0;
        try{
            i = dao.updateByPrimaryKeySelective(room);
        }
        catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }
}
