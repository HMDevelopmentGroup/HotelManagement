package com.hm.service;

import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;

import java.util.List;

public interface IUserService {
    int addUser(User user);
    int deleteUser(String uid);
    int alterUser(User user);
    User findUser(String uid);
    User findUserByUsername(String username);
    List<User> listUsers();
    List<User> listByPage(Page page);
    int userNums();
    List<User> queryUser(String queryInfo);
    User findUserByTelephone(String telephone);
}
