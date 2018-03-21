package com.hm.dao;

import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomCustom;
import com.hm.pojo.po.RoomExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RoomMapperCustom {
   List<RoomCustom> selectRooms();
   RoomCustom selectByPrimaryKey(Integer rid);
   int updateRooms(Room room);

   void updateStatus(Room room);
}