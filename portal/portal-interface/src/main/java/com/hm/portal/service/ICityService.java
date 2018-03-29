package com.hm.portal.service;

import com.hm.portal.pojo.po.City;

import java.util.List;

public interface ICityService {

    List<City> getCity(Integer pid);

    City selectCityByName(String cname);
}
