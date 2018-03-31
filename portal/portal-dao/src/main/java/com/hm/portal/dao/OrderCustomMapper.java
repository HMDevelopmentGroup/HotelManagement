package com.hm.portal.dao;


import com.hm.portal.pojo.vo.OrderCustom;
import com.hm.portal.pojo.vo.OrderQuery;
import java.util.List;


public interface OrderCustomMapper {

    List<OrderCustom> selectByClause(OrderQuery query);


}