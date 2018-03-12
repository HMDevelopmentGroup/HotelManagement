package com.hm.service.impl;

import com.hm.dao.UserMapper;
import com.hm.pojo.User;
import com.hm.service.IUserService;
import com.hm.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserMapper dao;

    @Transactional
    @Override
    public int addUser(User user) {
        String uid = IdUtils.getUUID();
        user.setUid(uid);
        user.setIntegration(0);
        user.setState(0);
        return dao.insertUser(user);
    }

    @Transactional
    @Override
    public int deleteUser(String uid) {
        return dao.removeUser(uid);
    }

    @Override
    @Transactional
    public int alterUser(User user) {
        return dao.updateUser(user);
    }

    @Override
    public User findUser(String uid) {
        return dao.selectUserByUid(uid);
    }

    @Override
    public List<User> listUsers() {
        return dao.selectUserList();
    }
}
