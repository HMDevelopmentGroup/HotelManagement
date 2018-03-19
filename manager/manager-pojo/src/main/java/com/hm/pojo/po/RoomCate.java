package com.hm.pojo.po;

import java.io.Serializable;

public class RoomCate implements Serializable {
    private Integer cid;

    private String cname;

    private Double price;

    private Integer limit;

    private static final long serialVersionUID = 1L;

    public RoomCate(Integer cid, String cname, Double price, Integer limit) {
        this.cid = cid;
        this.cname = cname;
        this.price = price;
        this.limit = limit;
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

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }
}