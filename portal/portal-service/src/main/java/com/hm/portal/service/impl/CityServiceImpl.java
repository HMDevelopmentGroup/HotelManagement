package com.hm.portal.service.impl;

import com.hm.jedis.JedisClient;
import com.hm.portal.dao.CityMapper;
import com.hm.portal.dao.CityMapperCustom;
import com.hm.portal.pojo.po.City;
import com.hm.portal.pojo.po.CityExample;
import com.hm.portal.service.ICityService;
import com.hm.utils.JsonUtils;
import com.hm.utils.PingyinUtil;
import com.hm.utils.StrKit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService {
    @Autowired
    private CityMapper dao;
    @Autowired
    private CityMapperCustom customDao;
    @Autowired
    private JedisClient jedis;

    @Override
    public List<City> getCity(Integer pid) {
        try {
            String jsonStr = jedis.hget("CityByPid", pid+"");
            if (StrKit.notBlank(jsonStr)) {
                List<City> cities = JsonUtils.jsonToList(jsonStr, City.class);
                return cities;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        CityExample example = new CityExample();
        CityExample.Criteria criteria = example.createCriteria();
        criteria.andPidEqualTo(pid);
        List<City> cities = dao.selectByExample(example);

        try {
            jedis.hset("CityByPid",pid+"",JsonUtils.objectToJson(cities));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return cities;
    }


    @Override
    public City selectCityByName(String cname) {
        try {
            String jsonStr = jedis.hget("CityByCname", PingyinUtil.getPinyinString(cname));
            if (StrKit.notBlank(jsonStr)) {
                City city = JsonUtils.jsonToPojo(jsonStr, City.class);
                return city;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        City city = customDao.selectByCname(cname);

        try {
            jedis.hset("CityByCname", PingyinUtil.getPinyinString(cname) , JsonUtils.objectToJson(city));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return city;
    }
}
