package com.hm.portal.service.impl;


import com.hm.portal.dao.ProductMapper;
import com.hm.portal.pojo.po.Product;
import com.hm.portal.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ProductMapper productdao;

    @Override
    public Product selectproductbyid(Integer productId) {
        Product productItem=null;
        try {
            productItem=  productdao.selectByPrimaryKey(productId);
        } catch (Exception e) {
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }

        return productItem;
    }

    public List<Product> selectproductbyall() {
        List<Product> productItems=null;
        try {
            productItems=  productdao.selectByExample(null);
        } catch (Exception e) {
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }

        return productItems;
    }


}
