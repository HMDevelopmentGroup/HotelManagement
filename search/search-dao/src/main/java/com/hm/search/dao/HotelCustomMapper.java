package com.hm.search.dao;

import com.hm.search.pojo.po.HotelCustom;

import java.util.List;

public interface HotelCustomMapper {
    List<HotelCustom> selectByCid(Integer cid);

    List<HotelCustom> selectBysearch();
}