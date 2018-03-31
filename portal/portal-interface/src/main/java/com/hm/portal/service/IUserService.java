package com.hm.portal.service;


import com.hm.portal.pojo.po.User;

public interface IUserService {

    User findUserByUsername(String username);

    int insertUser(User user);

    int addUser(User user);
}
