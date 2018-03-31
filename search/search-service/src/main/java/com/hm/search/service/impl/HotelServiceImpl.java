package com.hm.search.service.impl;

import com.hm.search.dao.HotelSearchCustomMapper;
import com.hm.search.pojo.vo.HotelCustom;
import com.hm.search.service.IHotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HotelServiceImpl implements IHotelService {

    @Autowired
    private HotelSearchCustomMapper hotelMapper;

    @Override
    public HotelCustom selectHotelByHid(int hid) {

        HotelCustom hotelCustom = null;
        try {

            hotelCustom = hotelMapper.selectHotelByHid(hid);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return hotelCustom;
    }
}
