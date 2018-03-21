package com.hm.service.impl;

import com.hm.dao.UserMapper;
import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;
import com.hm.service.IUserService;
import com.hm.utils.IdUtils;
import com.hm.utils.NumberUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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
        user.setState(1);
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
}
