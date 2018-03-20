package com.hm.service.impl;

import com.hm.dao.CheckInfoMapper;
import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.CheckInfoExample;
import com.hm.service.ICheckInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class CheckInfoServiceImpl implements ICheckInfoService {
    @Autowired
    private CheckInfoMapper dao;

    @Override
    public int updateCheckinfoRoom(CheckInfo checkInfo) {
        return dao.updateByPrimaryKeySelective(checkInfo);
    }

    @Override
    public void refreshRoomStatus() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String rightNow = sdf.format(new Date()).toString();
        try {
            Date now = sdf.parse(rightNow);
            CheckInfoExample example = new CheckInfoExample();
            CheckInfoExample.Criteria criteria = example.createCriteria();
            criteria.andStatusEqualTo(3);
            List<CheckInfo> checkInfos = dao.selectByExample(example);
            for (CheckInfo checkInfo:checkInfos) {
                Date date = sdf.parse(checkInfo.getEnd());
                if (now.getTime()==date.getTime()){
                    checkInfo.setStatus(4);
                    dao.updateByPrimaryKey(checkInfo);
                }
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }
}
