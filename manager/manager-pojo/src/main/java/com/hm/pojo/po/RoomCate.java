package com.hm.pojo.po;

import java.io.Serializable;

public class RoomCate implements Serializable {
    private Integer cid;

    private String cname;

    private Double price;

    private Integer numlimit;

    private static final long serialVersionUID = 1L;

    public RoomCate(Integer cid, String cname, Double price, Integer numlimit) {
        this.cid = cid;
        this.cname = cname;
        this.price = price;
        this.numlimit = numlimit;
    }

    public RoomCate() {
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

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getNumlimit() {
        return numlimit;
    }

    public void setNumlimit(Integer numlimit) {
        this.numlimit = numlimit;
    }
}