package com.hm.service;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;


public interface IOrderService {

    MessageResult<OrderCustom> selectByPage(Page page, OrderQuery query);

    long countOrders(OrderQuery query);
}
