package com.hm.dao;

import com.hm.pojo.dto.Page;
import com.hm.pojo.po.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {

    int insertUser(User user);

    int removeUser(String uid);

    int updateUser(User user);

    User selectUserByUid(String uid);

    User selectUserByUsername(String username);

    List<User> selectUserList();


    List<User> listByPage(Page page);

    List<User> selectUserByTelephone(@Param("telephone") String telephone);

    List<User> selectUserByidCard(@Param("idCard") String idCard);

    List<User> selectUserByVagueUsername(@Param("username") String username);

    List<User> selectUserByRealname(@Param("realname") String realname);

    int userNums();

}
