package com.hm.service;

import com.hm.pojo.User;

import java.util.List;

public interface IUserService {
    int addUser(User user);
    int deleteUser(String uid);
    int alterUser(User user);
    User findUser(String uid);
    List<User> listUsers();
}
