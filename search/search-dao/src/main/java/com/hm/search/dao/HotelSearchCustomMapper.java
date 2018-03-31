package com.hm.search.dao;

import com.hm.search.pojo.vo.HotelCustom;


public interface HotelSearchCustomMapper {

    HotelCustom selectHotelByHid(int hid);
}
