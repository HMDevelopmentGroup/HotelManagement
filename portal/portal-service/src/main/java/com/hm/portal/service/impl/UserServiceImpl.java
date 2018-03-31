package com.hm.portal.service.impl;

import com.hm.portal.dao.UserMapper;
import com.hm.portal.pojo.po.User;
import com.hm.portal.service.IUserService;
import com.hm.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserMapper dao;

    @Transactional
    @Override
    public int addUser(User user) {
        String uid = IdUtils.getUUID();
        user.setUid(uid);
        user.setIntegration(0);
        user.setState(1);
        return dao.insertUser(user);
    }

    @Override
    public User findUserByUsername(String username){
        return dao.selectUserByUsername(username);
    }

    @Override
    public int insertUser(User user) {
        return dao.insertUser(user);
    }
}
