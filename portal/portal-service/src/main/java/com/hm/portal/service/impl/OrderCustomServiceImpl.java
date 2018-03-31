package com.hm.portal.service.impl;


import com.hm.portal.dao.OrderCustomMapper;
import com.hm.portal.pojo.vo.OrderCustom;
import com.hm.portal.pojo.vo.OrderQuery;
import com.hm.portal.service.IOrderCustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderCustomServiceImpl implements IOrderCustomService {

    @Autowired
    private OrderCustomMapper orderCustomMapper;

    @Override
    public List<OrderCustom> selectByClause(OrderQuery query) {
        List<OrderCustom> customList = null;
        try {
            customList = orderCustomMapper.selectByClause(query);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return customList;
    }
}
