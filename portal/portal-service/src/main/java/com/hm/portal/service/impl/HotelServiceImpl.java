package com.hm.portal.service.impl;

import com.hm.portal.dao.HotelMapper;
import com.hm.portal.dao.HotelMapperCustom;
import com.hm.portal.pojo.po.Hotel;
import com.hm.portal.pojo.po.HotelCustom;
import com.hm.portal.pojo.po.HotelExample;
import com.hm.portal.service.IHotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HotelServiceImpl implements IHotelService{

    @Autowired
    private HotelMapper dao;
    @Autowired
    private HotelMapperCustom customDao;

    @Override
    public List<HotelCustom> listHotelsByCid(Integer cid) {
        return customDao.selectByCid(cid);
    }
}
