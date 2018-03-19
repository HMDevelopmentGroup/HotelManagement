/*
package com.hm.dao;


import com.hm.pojo.po.Room;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-*.xml"})
public class RoomMapperTest {
    @Autowired
    private RoomMapper dao;
    @Test
    public void insert() throws Exception {
        Room room = new Room();
        for (Integer rid = 1509;rid<=1510;rid++){
        room.setCateid(9);
        room.setHid(101);
        room.setRid(rid);
        room.setRname(rid.toString());
        room.setStatue(0);
        dao.insert(room);
        }
    }

}*/
