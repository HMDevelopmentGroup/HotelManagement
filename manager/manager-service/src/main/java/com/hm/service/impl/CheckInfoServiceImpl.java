package com.hm.service.impl;

import com.hm.dao.CheckInfoMapper;
import com.hm.dao.CheckInfoMapperCustom;
import com.hm.dao.InternetOrderCustomMapper;
import com.hm.dao.InternetOrderMapper;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.CheckInfoExample;
import com.hm.pojo.po.InternetOrder;
import com.hm.pojo.po.InternetOrderExample;
import com.hm.pojo.vo.InternetOrderCustom;
import com.hm.service.ICheckInfoService;
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
    private CheckInfoMapperCustom checkInfoCustomMapper;
    @Autowired
    private InternetOrderCustomMapper internetOrderCustomMapper;
    @Autowired
    private InternetOrderMapper internetOrderMapper;

    @Override
    public int updateCheckinfoRoom(CheckInfo checkInfo) {
        return dao.updateByPrimaryKeySelective(checkInfo);
    }

    @Override
    public void confirmPay(String cid) {
        checkInfoCustomMapper.confirmPay(cid);
    }

    @Override
    public List<InternetOrderCustom> internetorderList(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = internetOrderCustomMapper.internetorderList(page);
        return internetOrderCustoms;
    }

    @Override
    public int internetOrderCount() {
        return internetOrderCustomMapper.internetOrderCount();
    }

    @Override
    public int confirmRoom(String rid, String ioid) {
        HashMap<String, String> objectObjectHashMap = new HashMap<>();
        objectObjectHashMap.put("rid",rid);
        objectObjectHashMap.put("ioid",ioid);
        try {
           internetOrderCustomMapper.confirmRoom(objectObjectHashMap);
        }catch (Exception e){
            e.printStackTrace();
            return 2;
        }
        return 1;
    }

    @Override
    public InternetOrder selectInternetOrderByid(String ioid) {
        InternetOrder internetOrder = internetOrderMapper.selectByPrimaryKey(ioid);
        return  internetOrder;
    }

    @Override
    public void deleteInternetOrder(String ioid) {
        internetOrderCustomMapper.deleteInternetOrder(ioid);
    }

    @Override
    public List<InternetOrderCustom> internetorderListCheckin(Page page) {
        List<InternetOrderCustom> internetOrderCustoms = internetOrderCustomMapper.internetorderListCheckin(page);
        return internetOrderCustoms;
    }

    @Override
    public int internetOrderCountCheckin() {
        int i = internetOrderCustomMapper.internetOrderCountCheckin();
        return i;
    }

    @Override
    public void internetOrderCompileStatus(String ioid) {
         internetOrderCustomMapper.internetOrderCompileStatus(ioid);
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

    @Override
    public void addCheckInfo(CheckInfo checkInfo) {
        dao.insertSelective(checkInfo);
    }

}
