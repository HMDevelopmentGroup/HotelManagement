package com.hm.portal.service.impl;


import com.hm.portal.dao.OrderCustomMapper;
import com.hm.portal.pojo.vo.OrderCustom;
import com.hm.portal.pojo.vo.OrderQuery;
import com.hm.portal.service.IOrderCustomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderCustomServiceImpl implements IOrderCustomService {

    @Autowired
    private OrderCustomMapper orderCustomMapper;

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public List<OrderCustom> selectByClause(OrderQuery query) {
        List<OrderCustom> customList = null;
        try {
            customList = orderCustomMapper.selectByClause(query);
        } catch (Exception e) {
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return customList;
    }
}
