package com.hm.dao;

import com.hm.pojo.po.InternetOrder;
import com.hm.pojo.po.InternetOrderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface InternetOrderMapper {
    int countByExample(InternetOrderExample example);

    int deleteByExample(InternetOrderExample example);

    int deleteByPrimaryKey(String ioid);

    int insert(InternetOrder record);

    int insertSelective(InternetOrder record);

    List<InternetOrder> selectByExample(InternetOrderExample example);

    InternetOrder selectByPrimaryKey(String ioid);

    int updateByExampleSelective(@Param("record") InternetOrder record, @Param("example") InternetOrderExample example);

    int updateByExample(@Param("record") InternetOrder record, @Param("example") InternetOrderExample example);

    int updateByPrimaryKeySelective(InternetOrder record);

    int updateByPrimaryKey(InternetOrder record);
}