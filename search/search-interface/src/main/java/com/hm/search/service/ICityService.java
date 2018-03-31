package com.hm.search.service;


import com.hm.search.pojo.po.City;


public interface ICityService {

    City selectCityByName(String cname);
}
