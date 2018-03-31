package com.hm.portal.service;

import com.hm.portal.pojo.po.Product;

import java.util.List;

public interface ProductService {
   Product selectproductbyid(Integer productId);

    List<Product> selectproductbyall();
}
