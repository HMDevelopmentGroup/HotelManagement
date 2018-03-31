package com.hm.search.pojo.vo;

import java.io.Serializable;

public class HotelCustom implements Serializable {

    private Integer id;
    private String hname;
    private String address;
    private Integer rooms;
    private Integer cid;
    private String hlogo;
    private String hcontent;
    private String hdesc;

    public HotelCustom() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHname() {
        return hname;
    }

    public void setHname(String hname) {
        this.hname = hname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
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
