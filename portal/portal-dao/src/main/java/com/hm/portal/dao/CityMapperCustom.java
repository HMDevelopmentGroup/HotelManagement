package com.hm.portal.dao;

import com.hm.portal.pojo.po.City;

public interface CityMapperCustom {
    City selectByCname(String cname);
}