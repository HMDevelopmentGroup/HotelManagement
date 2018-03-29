package com.hm.dao;

import com.hm.pojo.dto.Page;
import com.hm.pojo.po.InternetOrder;
import com.hm.pojo.po.InternetOrderExample;
import com.hm.pojo.vo.InternetOrderCustom;
import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

public interface InternetOrderCustomMapper {

    List<InternetOrderCustom> internetorderList(Page page);
    int internetOrderCount();

    int confirmRoom(HashMap<String, String> objectObjectHashMap);

    void  deleteInternetOrder(String ioid);

    int internetOrderCountCheckin();

    List<InternetOrderCustom> internetorderListCheckin(Page page);

    int internetOrderCompileStatus(String ioid);
}