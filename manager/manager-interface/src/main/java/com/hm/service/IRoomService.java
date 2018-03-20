package com.hm.service;

import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomCustom;

import java.util.List;

public interface IRoomService {
    List<Room> getEmptyRoom();


    List<RoomCustom> getRooms();

    List<RoomCustom> checkout();

    int checkOutRoom(Integer rid);

    int updateRooms(Room room);

    Room selectByRid(Integer rid);

    int emptyRooms();

    int dirtyRooms();

    int checkOutRooms();
}
