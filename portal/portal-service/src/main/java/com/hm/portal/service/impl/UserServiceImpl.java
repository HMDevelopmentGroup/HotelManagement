package com.hm.portal.service.impl;

import com.hm.jedis.JedisClient;
import com.hm.portal.dao.UserMapper;
import com.hm.portal.pojo.po.User;
import com.hm.portal.service.IUserService;
import com.hm.utils.IdUtils;
import com.hm.utils.JsonUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserMapper dao;
    @Autowired
    private JedisClient jedis;

    @Transactional
    @Override
    public int addUser(User user) {
        String uid = IdUtils.getUUID();
        user.setUid(uid);
        user.setIntegration(0);
        user.setState(1);
        int i = 0;
        try {

        }catch (Exception e ){
            i = dao.insertUser(user);
        }
        return i;
    }

    @Override
    public User autoLogin(String token){
        String userJson = jedis.get("TOKEN:" + token);
        User user = JsonUtils.jsonToPojo(userJson, User.class);
        return user;
    }

    @Override
    public User findUserByUsername(String username){
        return dao.selectUserByUsername(username);
    }

    @Override
    @Transactional
    public int insertUser(User user) {
        int i = 0;
        try {

        }catch (Exception e ){
            i =  dao.insertUser(user);
        }
        return i;
    }
}
