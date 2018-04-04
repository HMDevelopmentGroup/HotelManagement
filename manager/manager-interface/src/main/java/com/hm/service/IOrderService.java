package com.hm.service;

import com.hm.pojo.dto.MessageResult;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.Order;
import com.hm.pojo.vo.OrderCustom;
import com.hm.pojo.vo.OrderQuery;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.util.List;
import java.util.Map;


public interface IOrderService {

    MessageResult<OrderCustom> selectByPage(Page page, OrderQuery query);

    long countOrders(OrderQuery query);

    void  addOrder(Order order);

    Order findOrder(String oid);

    int updateStatus(String status,String oid);

    public List<Map<String, String>> exportOrder();


}
