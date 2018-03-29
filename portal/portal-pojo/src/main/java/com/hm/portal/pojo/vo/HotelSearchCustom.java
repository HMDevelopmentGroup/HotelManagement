package com.hm.portal.pojo.vo;

import java.io.Serializable;

public class HotelSearchCustom implements Serializable {
    private Integer hid;

    private Integer cid;

    private String hname;

    private String address;

    private Integer rooms;

    private static final long serialVersionUID = 1L;

    public HotelSearchCustom(Integer hid, Integer cid, String hname, String address, Integer rooms) {
        this.hid = hid;
        this.cid = cid;
        this.hname = hname;
        this.address = address;
        this.rooms = rooms;
    }

    public HotelSearchCustom() {
        super();
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getHname() {
        return hname;
    }

    public void setHname(String hname) {
        this.hname = hname == null ? null : hname.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }
}