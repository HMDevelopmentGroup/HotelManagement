package com.hm.action;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.jms.*;

@Controller
public class HotelController {

    @Autowired
    private JmsTemplate jmsTemplate;
    @Resource
    private Destination topicDestination;

    @RequestMapping(value = "/addHotel",method = RequestMethod.POST)
    public String addHotel(){
        int hid = 108;
        jmsTemplate.send(topicDestination, new MessageCreator() {
            @Override
            public Message createMessage(Session session) throws JMSException {

                TextMessage textMessage = session.createTextMessage(hid+"");

                return textMessage;
            }
        });
        return "";
    }
}
