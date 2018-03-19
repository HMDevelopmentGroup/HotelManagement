package com.hm.dao;

import com.hm.pojo.po.RoomCate;
import com.hm.pojo.po.RoomCateExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface RoomCateMapper {
    int countByExample(RoomCateExample example);

    int deleteByExample(RoomCateExample example);

    int deleteByPrimaryKey(Integer cid);

    int insert(RoomCate record);

    int insertSelective(RoomCate record);

    List<RoomCate> selectByExample(RoomCateExample example);

    RoomCate selectByPrimaryKey(Integer cid);

    int updateByExampleSelective(@Param("record") RoomCate record, @Param("example") RoomCateExample example);

    int updateByExample(@Param("record") RoomCate record, @Param("example") RoomCateExample example);

    int updateByPrimaryKeySelective(RoomCate record);

    int updateByPrimaryKey(RoomCate record);
}