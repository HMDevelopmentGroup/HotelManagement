package com.hm.task;

import com.hm.service.ICheckInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class RefeshRoomStatus {

    @Autowired
    private ICheckInfoService service;

    @Scheduled(cron = "0 0 1 * * ?")
    public void refresh() {
        service.refreshRoomStatus();
    }
}
