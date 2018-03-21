package com.hm.dao;
import com.hm.pojo.dto.Page;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface OrderCustomMapper {

    List<OrderCustom> selectByPage(@Param("page") Page page, @Param("query") OrderQuery query);

    long countOrders(@Param("query") OrderQuery query);


    void updateStatus(Map<String,String> map);
}