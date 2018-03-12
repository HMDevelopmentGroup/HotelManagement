package com.hm.dao;

import com.hm.pojo.User;

import java.util.List;

public interface UserMapper {

    int insertUser(User user);

    int removeUser(String uid);

    int updateUser(User user);

    User selectUserByUid(String uid);

    List<User> selectUserList();
}
