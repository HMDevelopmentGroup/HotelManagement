package com.hm.backstage.dao;


import com.hm.backstage.pojo.po.HotelCustom;

import java.util.List;

public interface HotelCustomMapper {
    List<HotelCustom> selectByCid(Integer cid);

    List<HotelCustom> selectBysearch();
}