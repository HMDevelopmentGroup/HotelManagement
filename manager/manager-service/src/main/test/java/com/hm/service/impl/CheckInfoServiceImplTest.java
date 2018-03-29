package com.hm.service.impl;

import com.hm.pojo.dto.Page;
import com.hm.pojo.vo.InternetOrderCustom;
import com.hm.service.ICheckInfoService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-*.xml"})
public class CheckInfoServiceImplTest {
    @Autowired
    private ICheckInfoService checkInfoService;
    @Test
    public void internetorderListCheckin() throws Exception {
        Page page = new Page();
        page.setPage(1);
        page.setLimit(2);
        List<InternetOrderCustom> internetOrderCustoms = checkInfoService.internetorderListCheckin(page);
        System.out.println(internetOrderCustoms);

    }

}