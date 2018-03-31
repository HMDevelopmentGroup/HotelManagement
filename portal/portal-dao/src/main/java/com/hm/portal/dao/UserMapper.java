package com.hm.portal.dao;


import com.hm.portal.pojo.po.User;

public interface UserMapper {

    int insertUser(User user);

    User selectUserByUsername(String username);

    /*int removeUser(String uid);

    int updateUser(User user);

    User selectUserByUid(String uid);

    User selectUserByUsername(String username);

    List<User> selectUserList();

    List<User> selectUserByTelephone(@Param("telephone") String telephone);

    List<User> selectUserByidCard(@Param("idCard") String idCard);

    List<User> selectUserByVagueUsername(@Param("username") String username);

    List<User> selectUserByRealname(@Param("realname") String realname);

    int userNums();

    User selectByTelephone(String telephone);*/

}
