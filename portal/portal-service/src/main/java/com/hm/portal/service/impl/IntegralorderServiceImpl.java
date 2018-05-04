package com.hm.portal.service.impl;

import com.hm.portal.dao.IntegralorderMapper;
import com.hm.portal.pojo.po.Integralorder;
import com.hm.portal.service.IntegralorderService;
import com.hm.utils.IdUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class IntegralorderServiceImpl implements IntegralorderService {
    @Autowired
    private IntegralorderMapper integralorderdao;

    private Logger logger = LoggerFactory.getLogger(this.getClass());



    @Override
    @Transactional
    public int addIntegralorder(Integralorder integralorder) {
        String integralorderId = IdUtils.getUUID();
        integralorder.setIntegralorderId(integralorderId);
        integralorder.setUid("48fce4d7c1e04943ab26b11eb79d0710");
        integralorder.setIntegralorderStatus(1);
        int i =0;
        try{
            i =integralorderdao.insert(integralorder);
        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }


}
