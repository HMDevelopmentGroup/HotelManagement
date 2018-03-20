package com.hm.service;

import com.hm.pojo.po.Room;
import com.hm.pojo.po.RoomCustom;

import java.util.List;

public interface IRoomService {
    List<Room> getEmptyRoom();

    int refreshStatus(String rightNow);

    List<RoomCustom> getRooms();

    List<RoomCustom> checkout();

    int checkOutRoom(Integer rid);

    Room selectByRid(Integer rid);
}
