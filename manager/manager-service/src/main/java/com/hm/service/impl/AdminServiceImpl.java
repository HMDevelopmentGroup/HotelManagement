package com.hm.service.impl;

import com.hm.dao.AdminMapper;
import com.hm.pojo.po.Admin;
import com.hm.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements IAdminService{
    @Autowired
    private AdminMapper dao;

    @Override
    public Admin login(Admin admin) {
        return dao.login(admin);
    }
}
