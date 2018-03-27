package com.hm.portal.dao;

import com.hm.portal.pojo.po.Hotel;
import com.hm.portal.pojo.po.HotelCustom;
import com.hm.portal.pojo.po.HotelExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HotelMapperCustom {
    List<HotelCustom> selectByCid(Integer cid);
}