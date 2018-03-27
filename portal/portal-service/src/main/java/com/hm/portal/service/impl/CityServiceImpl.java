package com.hm.portal.service.impl;

import com.hm.portal.dao.CityMapper;
import com.hm.portal.pojo.po.City;
import com.hm.portal.pojo.po.CityExample;
import com.hm.portal.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService{
    @Autowired
    private CityMapper dao;

    @Override
    public List<City> getCity(int pid) {
        CityExample example = new CityExample();
        CityExample.Criteria criteria = example.createCriteria();
        criteria.andPidEqualTo(pid);
        return dao.selectByExample(example);
    }

    @Override
    public City selectCityByName(String cname) {
        CityExample example = new CityExample();
        CityExample.Criteria criteria = example.createCriteria();
        criteria.andCnameEqualTo(cname);
        List<City> cities = dao.selectByExample(example);
        return cities.get(0);
    }
}
