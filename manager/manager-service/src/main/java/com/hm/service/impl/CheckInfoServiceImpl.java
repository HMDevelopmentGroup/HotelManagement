package com.hm.service.impl;

import com.hm.dao.*;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.*;
import com.hm.pojo.vo.InternetOrderCustom;
import com.hm.service.ICheckInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class CheckInfoServiceImpl implements ICheckInfoService {
    @Autowired
    private CheckInfoMapper dao;
    @Autowired
    private RoomMapper roomMapper;
    @Autowired
    private CheckInfoMapper checkInfoMapper;
    @Autowired
    private CheckInfoMapperCustom checkInfoCustomMapper;
    @Autowired
    private InternetOrderCustomMapper internetOrderCustomMapper;
    @Autowired
    private InternetOrderMapper internetOrderMapper;

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    @Transactional
    public int updateCheckinfoRoom(CheckInfo checkInfo) {
        int i = 0;
        try{
            i = dao.updateByPrimaryKeySelective(checkInfo);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public CheckInfo selectByPrimaryKey(String cid) {
        return dao.selectByPrimaryKey(cid);
    }

    @Override
    public void confirmPay(String cid) {
        try{
            checkInfoCustomMapper.confirmPay(cid);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
    }

    @Override
    @Transactional
    public List<InternetOrderCustom> internetorderList(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = null;
        try{
            internetOrderCustoms = internetOrderCustomMapper.internetorderList(page);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
        return internetOrderCustoms;
    }

    @Override
    @Transactional
    public int internetOrderCount() {
        int i = 0;
        try{
            i = internetOrderCustomMapper.internetOrderCount();
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    @Transactional
    public int confirmRoom(String rid, String ioid) {
        HashMap<String, String> objectObjectHashMap = new HashMap<>();
        objectObjectHashMap.put("rid", rid);
        objectObjectHashMap.put("ioid", ioid);
        try {
            internetOrderCustomMapper.confirmRoom(objectObjectHashMap);
        } catch (Exception e) {
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
            return 2;
        }
        return 1;
    }

    @Override
    public InternetOrder selectInternetOrderByid(String ioid) {
        InternetOrder internetOrder = internetOrderMapper.selectByPrimaryKey(ioid);
        return internetOrder;
    }

    @Override
    @Transactional
    public void deleteInternetOrder(String ioid) {
        try{
            internetOrderCustomMapper.deleteInternetOrder(ioid);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
    }

    @Override
    public List<InternetOrderCustom> internetorderListCheckin(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = internetOrderCustomMapper.internetorderListCheckin(page);
        return internetOrderCustoms;
    }

    @Override
    @Transactional
    public int internetOrderCountCheckin() {
        int i = 0;
        try{
            i = internetOrderCustomMapper.internetOrderCountCheckin();
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    @Transactional
    public void internetOrderCompileStatus(String ioid) {
        try{
            internetOrderCustomMapper.internetOrderCompileStatus(ioid);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
    }

    @Override
    @Transactional
    public int internetCheckin(String ioid) {
        InternetOrder internetOrder = null;
        Room room = null;
        CheckInfo checkInfo = null;
        int i = 0;
        try{
            internetOrder = internetOrderMapper.selectByPrimaryKey(ioid);
            room = roomMapper.selectByPrimaryKey(internetOrder.getRid());
            checkInfo = new CheckInfo();
            checkInfo.setCid(room.getStatue());
            checkInfo.setIoid(ioid);
            checkInfo.setStatus(3);
            i = checkInfoCustomMapper.checkin(checkInfo);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public List<CheckInfo> selectWaitCheckin() {
        CheckInfoExample example = new CheckInfoExample();
        CheckInfoExample.Criteria criteria = example.createCriteria();
        criteria.andStatusEqualTo(2);
        return dao.selectByExample(example);
    }

    @Override
    @Transactional
    public void refreshRoomStatus() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String rightNow = sdf.format(new Date()).toString();
        try {
            Date now = sdf.parse(rightNow);
            CheckInfoExample example = new CheckInfoExample();
            CheckInfoExample.Criteria criteria = example.createCriteria();
            criteria.andStatusEqualTo(3);
            List<CheckInfo> checkInfos = dao.selectByExample(example);
            for (CheckInfo checkInfo : checkInfos) {
                Date date = sdf.parse(checkInfo.getEnd());
                if (now.getTime() == date.getTime()) {
                    checkInfo.setStatus(4);
                    dao.updateByPrimaryKey(checkInfo);
                }
            }
        } catch (ParseException e) {
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
    }

    @Override
    @Transactional
    public void addCheckInfo(CheckInfo checkInfo) {
        try{
            dao.insertSelective(checkInfo);
        }catch (Exception e){
            logger.debug(e.getMessage(), e);
            e.printStackTrace();
        }
    }

}
