/*
package com.hm.service.impl;


import com.hm.dao.RoomMapper;
import com.hm.pojo.po.RoomExample;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-*.xml"})
public class RoomServiceImplTest {
    @Autowired
    private RoomMapper dao;
    @Test
    public void getEmptyRoom() throws Exception {
        RoomExample example = new RoomExample();
        RoomExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo("0");
        System.out.println(dao.selectByExample(example).size());
    }

}*/
