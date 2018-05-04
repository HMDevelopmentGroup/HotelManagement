package com.hm.sso.dao;

import com.hm.sso.pojo.po.User;

public interface UserMapper {

    User login(User user);
    User selectUserByUsername(String username);
}
