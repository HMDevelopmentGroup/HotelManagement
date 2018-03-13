package com.hm.dao;

import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;

import java.util.List;

public interface UserMapper {

    int insertUser(User user);

    int removeUser(String uid);

    int updateUser(User user);

    User selectUserByUid(String uid);

    User selectUserByUsername(String username);

    List<User> selectUserList();

    User selectUserByUsername(String username);

    List<User> listByPage(Page page);

    int userNums();
}
