package com.hm.backstage.dao;


import com.hm.backstage.pojo.po.HotelCustom;

public interface HotelSearchCustomMapper {

    HotelCustom selectHotelByHid(int hid);
}
