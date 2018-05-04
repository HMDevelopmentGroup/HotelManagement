package com.hm.sso.service;

import com.hm.sso.pojo.dto.MessageResult;
import com.hm.sso.pojo.po.User;

public interface IUserService {
    MessageResult login(User user);
}
