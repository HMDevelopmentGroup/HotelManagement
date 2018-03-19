package com.hm.dao;

import com.hm.pojo.po.CheckInfo;
import com.hm.pojo.po.CheckInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CheckInfoMapper {
    int countByExample(CheckInfoExample example);

    int deleteByExample(CheckInfoExample example);

    int deleteByPrimaryKey(String cid);

    int insert(CheckInfo record);

    int insertSelective(CheckInfo record);

    List<CheckInfo> selectByExample(CheckInfoExample example);

    CheckInfo selectByPrimaryKey(String cid);

    int updateByExampleSelective(@Param("record") CheckInfo record, @Param("example") CheckInfoExample example);

    int updateByExample(@Param("record") CheckInfo record, @Param("example") CheckInfoExample example);

    int updateByPrimaryKeySelective(CheckInfo record);

    int updateByPrimaryKey(CheckInfo record);
}