package com.hm.portal.service;

import com.hm.portal.pojo.po.Hotel;
import com.hm.portal.pojo.po.HotelCustom;

import java.util.List;

public interface IHotelService {
    List<HotelCustom> listHotelsByCid(Integer cid);
}
