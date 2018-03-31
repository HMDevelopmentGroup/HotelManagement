package com.hm.search.service.impl;

import com.hm.jedis.JedisClient;
import com.hm.search.dao.CityMapperCustom;
import com.hm.search.pojo.po.City;
import com.hm.search.service.ICityService;
import com.hm.utils.JsonUtils;
import com.hm.utils.PingyinUtil;
import com.hm.utils.StrKit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements ICityService {
    @Autowired
    private CityMapperCustom customDao;
    @Autowired
    private JedisClient jedis;



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
