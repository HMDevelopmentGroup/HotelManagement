package com.hm.dao;

import com.hm.pojo.po.CheckInfo;

public interface CheckInfoMapperCustom {
    void confirmPay(String cid);

    int checkin(CheckInfo checkInfo);
}
