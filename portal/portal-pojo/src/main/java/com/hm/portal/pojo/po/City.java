package com.hm.portal.pojo.po;

import java.io.Serializable;

public class City implements Serializable {
    private Integer cid;

    private String cname;

    private Integer hotels;

    private Integer pid;

    private static final long serialVersionUID = 1L;

    public City(Integer cid, String cname, Integer hotels, Integer pid) {
        this.cid = cid;
        this.cname = cname;
        this.hotels = hotels;
        this.pid = pid;
    }

    public City() {
        super();
    }

    public Integer getCid() {
        return cid;
    }

    public void setCid(Integer cid) {
        this.cid = cid;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname == null ? null : cname.trim();
    }

    public Integer getHotels() {
        return hotels;
    }

    public void setHotels(Integer hotels) {
        this.hotels = hotels;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }
}