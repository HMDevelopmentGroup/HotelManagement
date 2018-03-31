package com.hm.search.dao;


import com.hm.search.pojo.po.City;

public interface CityMapperCustom {
    City selectByCname(String cname);
}