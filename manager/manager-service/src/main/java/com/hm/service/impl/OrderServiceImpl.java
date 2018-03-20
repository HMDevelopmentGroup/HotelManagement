package com.hm.service.impl;

import com.hm.dao.OrderCustomMapper;
import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import com.hm.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private OrderCustomMapper customMapper;

    @Override
    public MessageResult<OrderCustom> selectByPage(Page page, OrderQuery query) {
        MessageResult<OrderCustom> result = new MessageResult<>();
        try {
           List<OrderCustom> customList = customMapper.selectByPage(page,query);
           result.setCode(0);
           result.setCount(countOrders(query));
           result.setMsg("success");
           result.setData(customList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Override
    public long countOrders(OrderQuery query) {
        return customMapper.countOrders(query);
    }
}
