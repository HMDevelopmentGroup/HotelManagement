package com.hm.portal.pojo.po;

import java.io.Serializable;

public class HotelCustom extends Hotel implements Serializable {
    private Integer id;
    private String hname;
    private String address;
    private Integer rooms;
    private String hlogo;
    private String hcontent;
    private String hdesc;


    @Override
    public String getHname() {
        return hname;
    }

    @Override
    public void setHname(String hname) {
        this.hname = hname;
    }

    @Override
    public String getAddress() {
        return address;
    }

    @Override
    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public Integer getRooms() {
        return rooms;
    }

    @Override
    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHlogo() {
        return hlogo;
    }

    public void setHlogo(String hlogo) {
        this.hlogo = hlogo;
    }

    public String getHcontent() {
        return hcontent;
    }

    public void setHcontent(String hcontent) {
        this.hcontent = hcontent;
    }

    public String getHdesc() {
        return hdesc;
    }

    public void setHdesc(String hdesc) {
        this.hdesc = hdesc;
    }
}