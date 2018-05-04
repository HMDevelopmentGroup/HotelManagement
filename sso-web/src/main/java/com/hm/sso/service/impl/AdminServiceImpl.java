package com.hm.sso.service.impl;

import com.hm.jedis.JedisClient;
import com.hm.sso.dao.UserMapper;
import com.hm.sso.pojo.dto.MessageResult;
import com.hm.sso.pojo.po.User;
import com.hm.sso.service.IUserService;
import com.hm.utils.JsonUtils;
import com.hm.utils.StrKit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class AdminServiceImpl implements IUserService {
    @Autowired
    private UserMapper dao;
    @Autowired
    private JedisClient jedisClient;

    @Override
    public MessageResult login(User user) {
        MessageResult messageResult = null;
        try {
            //执行模板查询
            User realUser = dao.selectUserByUsername(user.getUsername());
            //判断集合是否为空
            if (realUser == null ) {
                //用户名不存在
                messageResult = new MessageResult();
                messageResult.setSuccess(false);
                messageResult.setMessage("用户名不存在");
                return messageResult;
            }
            //至少用户名存在
            //将前台传递过来的密码进行一次MD5的加密
            String md5DigestAsHex = DigestUtils.md5DigestAsHex(user.getPassword().getBytes());
            if(!md5DigestAsHex.equals(realUser.getPassword())){
                //密码错误
                messageResult = new MessageResult();
                messageResult.setSuccess(false);
                messageResult.setMessage("用户名或密码错误");
                return messageResult;
            }
            //用户名和密码都是正确的
            //登录信息存放到redis中
            String uuid = StrKit.uuid();
            realUser.setPassword(null);
            //已经将登录信息存放到redis中，key：TOKEN:XXXXX,value:{}
            jedisClient.set("TOKEN:"+ uuid, JsonUtils.objectToJson(realUser));
            //设置有效时间
            jedisClient.expire("TOKEN:" + uuid, 1800);
            //操作完成以后形成messageResult
            messageResult = new MessageResult();
            messageResult.setSuccess(true);
            messageResult.setMessage("登录成功");
            messageResult.setData(uuid);
            return messageResult;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return messageResult;
    }
}