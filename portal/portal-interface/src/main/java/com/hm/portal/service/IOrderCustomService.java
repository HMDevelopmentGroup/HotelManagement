package com.hm.portal.service;


import com.hm.portal.pojo.vo.OrderCustom;
import com.hm.portal.pojo.vo.OrderQuery;
import java.util.List;


public interface IOrderCustomService {

    List<OrderCustom> selectByClause(OrderQuery query);
}
