package com.hm.service.impl;

import com.hm.dao.OrderCustomMapper;
import com.hm.dao.OrderMapper;
import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.Order;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import com.hm.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private OrderCustomMapper customMapper;
    @Autowired
    private OrderMapper orderMapper;


    @Override
    public MessageResult<OrderCustom> selectByPage(Page page, OrderQuery query) {
        MessageResult<OrderCustom> result = new MessageResult<>();
        try {
            List<OrderCustom> customList = customMapper.selectByPage(page, query);
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
    public void addOrder(Order order) {
        int insert = orderMapper.insertSelective(order);

    }

    @Override
    public Order findOrder(String oid) {
        Order order = orderMapper.selectByPrimaryKey(oid);
        return order;
    }

    @Override
    public int updateStatus(String status, String oid) {
        Map<String, String> objectObjectMap = new HashMap<>();
        objectObjectMap.put("status", status);
        objectObjectMap.put("oid", oid);
        customMapper.updateStatus(objectObjectMap);
        return 1;
    }


    @Override
    public long countOrders(OrderQuery query) {
        return customMapper.countOrders(query);
    }

    @Override
    public List<Map<String, String>> exportOrder() {
        List<OrderCustom> list = customMapper.selectApartInfo();
        List<Map<String, String>> mapList = new ArrayList<>();
        for (OrderCustom orderCustom : list) {
            Map<String, String> map = new HashMap<>();
            map.put("订单号", orderCustom.getOid() + "");
            map.put("客户名称", orderCustom.getOffer()+"");
            map.put("身份证", orderCustom.getOfferid()+"");
            map.put("房间号", orderCustom.getRid()+"");
            map.put("入住时间", orderCustom.getStart()+"");
            map.put("退房时间", orderCustom.getEnd()+"");
            map.put("总天数", orderCustom.getDays()+"");
            map.put("总金额", orderCustom.getPrice()+"");
            map.put("状态", orderCustom.getStatus()+"");
            mapList.add(map);
        }
        return mapList;
    }
}
