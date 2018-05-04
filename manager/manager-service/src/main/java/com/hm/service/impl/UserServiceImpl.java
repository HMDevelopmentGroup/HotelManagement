package com.hm.service.impl;

import com.hm.dao.UserMapper;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.Order;
import com.hm.pojo.po.User;
import com.hm.service.IUserService;
import com.hm.utils.IdUtils;
import com.hm.utils.NumberUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private UserMapper dao;
    private Logger logger = LoggerFactory.getLogger(this.getClass());


    @Transactional
    @Override
    public int addUser(User user) {
        String uid = IdUtils.getUUID();
        int i = 0;
        try {
            user.setUid(uid);
            user.setIntegration(0);
            user.setState(1);
            i = dao.insertUser(user);
        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }

    @Transactional
    @Override
    public int deleteUser(String uid) {
        int i = 0;
        try {
            i = dao.removeUser(uid);
        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    @Transactional
    public int alterUser(User user) {
        int i = 0;
        try {
            i = dao.updateUser(user);
        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public User findUser(String uid) {
        return dao.selectUserByUid(uid);
    }

    @Override
    public List<User> listUsers() {
        return dao.selectUserList();
    }

    @Override
    public User findUserByUsername(String username){
        return dao.selectUserByUsername(username);
    }

    @Override
    public List<User> listByPage(Page page) {
        return dao.listByPage(page);
    }

    @Override
    public int userNums(){
        return dao.userNums();
    }

    @Override
    public List<User> queryUser(String queryInfo) {
        List<User> users = new ArrayList<>();
        if (NumberUtil.isNumber(queryInfo)){
            List<User> users1 = dao.selectUserByTelephone(queryInfo);
            List<User> users2 = dao.selectUserByidCard(queryInfo);
            users.addAll(users1);
            users.addAll(users2);
        }else {
            List<User> users1 = dao.selectUserByVagueUsername(queryInfo);
            List<User> users2 = dao.selectUserByRealname(queryInfo);
            users.addAll(users1);
            users.addAll(users2);
        }
        return  users;
    }

    @Override
    public User findUserByTelephone(String telephone) {
        return dao.selectByTelephone(telephone);
    }

    @Override
    @Transactional
    public int addIntegration(String uid, Order order) {
        User user = null;
        int i = 0;
        try {
            user = dao.selectUserByUid(uid);
            i = dao.updateIntegration(uid,user.getIntegration()+(int)order.getPrice().doubleValue());

        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return i;
    }
}
