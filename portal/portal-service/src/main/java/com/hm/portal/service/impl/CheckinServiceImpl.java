package com.hm.portal.service.impl;

import com.hm.portal.dao.RoomCateMapper;
import com.hm.portal.pojo.dto.RoomUseAge;
import com.hm.portal.pojo.po.*;
import com.hm.portal.service.ICheckinService;
import org.apache.solr.common.util.Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class CheckinServiceImpl implements ICheckinService{
@Autowired
private RoomCateMapper roomCateMapper;

    @Override
    public List<RoomCate> roomCatelsit() {

        List<RoomCate> roomCates = roomCateMapper.roomCateList();
        return roomCates;
    }

    @Override
    public List<Integer> comfirmEmpey() {
        List<Room> rooms = roomCateMapper.emptyRoomList();
        List<Integer> cids = new ArrayList<>();
        int a=0;
        int b=0;
        int c=0;
        int d=0;
        int e=0;
        int f=0;
        int g=0;
        int h=0;
        int i=0;
        int j=0;
        for (Room room :rooms){
            if (room.getCateid()==1){
                a++;
            }
            if (room.getCateid()==2){
                b++;
            }
            if(room.getCateid()==3){
                c++;
            }
            if(room.getCateid()==4){
                d++;
            }
            if(room.getCateid()==5){
                e++;
            }
            if(room.getCateid()==6){
                f++;
            }
            if(room.getCateid()==7){
                g++;
            }
            if(room.getCateid()==8){
                h++;
            }
            if(room.getCateid()==9){
                i++;
            }
            if(room.getCateid()==10){
                j++;
            }
        }
        if(a==0){
                cids.add(1);
        }
        if(b==0){
            cids.add(2);
        }
        if(c==0){
            cids.add(3);
        }
        if(d==0){
            cids.add(4);
        }
        if(e==0){
            cids.add(5);
        }
        if(f==0){
            cids.add(6);
        }
        if(g==0){
            cids.add(7);
        }
        if(h==0){
            cids.add(8);
        }
        if(i==0){
            cids.add(9);
        }
        if(j==0){
            cids.add(10);
        }


        return cids;
    }

    @Override
    public List<Integer> searchRoomCate(String start, String end) {
        List<RoomUseAge> roomUseAges = roomCateMapper.listRoomUseAge();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        List<RoomUseAge> roomUseAges2=new ArrayList<>();
        Date startRequest=null;
        Date endRequest = null;
        try {
             startRequest = simpleDateFormat.parse(start);
            endRequest=simpleDateFormat.parse(end);
        } catch (ParseException e) {

    e.printStackTrace();
        }

        for (RoomUseAge roomUseAge:roomUseAges) {
            String start1 = roomUseAge.getStart();
            String end1 = roomUseAge.getEnd();
            Date startOrder = null;
            Date endOrder = null;
            try {
                startOrder = simpleDateFormat.parse(start1);
                endOrder = simpleDateFormat.parse(end1);
            } catch (ParseException e) {
                e.printStackTrace();
            }

            int i = endRequest.compareTo(startOrder);
            int a = endRequest.compareTo(endOrder);
            int r = startRequest.compareTo(endOrder);
            int b = startRequest.compareTo(startOrder);
            if (((i == 1 || i == 0) && (a == -1 || a == 0)) || ((r == -1 || r == 0) && (b == 1 || b == 0))) {
                roomUseAges2.add(roomUseAge);
            }
        }



        int a=0;
        int b=0;
        int c=0;
        int d=0;
        int e=0;
        int f=0;
        int g=0;
        int h=0;
        int i=0;
        int j=0;
        for (RoomUseAge roomUseAge:roomUseAges2){
            if (roomUseAge.getCateid()==1){
                a++;
            }
            if (roomUseAge.getCateid()==2){
                b++;
            }
            if(roomUseAge.getCateid()==3){
                c++;
            }
            if(roomUseAge.getCateid()==4){
                d++;
            }
            if(roomUseAge.getCateid()==5){
                e++;
            }
            if(roomUseAge.getCateid()==6){
                f++;
            }
            if(roomUseAge.getCateid()==7){
                g++;
            }
            if(roomUseAge.getCateid()==8){
                h++;
            }
            if(roomUseAge.getCateid()==9){
                i++;
            }
            if(roomUseAge.getCateid()==10){
                j++;
            }
        }
        ArrayList<Integer> ints = new ArrayList<Integer>();
        if(a==8){
            ints.add(1);
        }
        if(b==12){
            ints.add(2);
        }
        if(c==8){
            ints.add(3);
        }
        if(d==12){
            ints.add(4);
        }
        if(e==8){
            ints.add(5);
        }
        if(f==4){
            ints.add(6);
        }
        if(g==4){
            ints.add(7);
        }
        if(h==2){
            ints.add(8);
        }
        if(i==2){
            ints.add(9);
        }
        if(j==1){
            ints.add(10);
        }



        return ints;
    }

    @Override
    public void addInternetOrder(Internetorder internetorder) {
        roomCateMapper.addInternetOrder(internetorder);
    }

    @Override
    public void addOrders(Orders order) {
        roomCateMapper.addOrders(order);
    }

    @Override
    public void updateStatusOrder(String ioid) {
        roomCateMapper.updateStatusOrder(ioid);
    }

    @Override
    public void addOrders(String oid) {
        roomCateMapper.updateStatusInternetOrder(oid);
    }

    @Override
    public void addCheckinfo(CheckInfo checkInfo) {
        roomCateMapper.addCheckinfo(checkInfo);
    }

    @Override
    public void updateStatusCheckinfo(String cid) {
        roomCateMapper.updateStatusCheckinfo(cid);
    }

}
