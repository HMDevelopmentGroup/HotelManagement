package com.hm.pojo.po;

import java.io.Serializable;

public class Order implements Serializable {
    private String oid;

    private String ordertime;

    private Double price;

    private String status;

    private static final long serialVersionUID = 1L;

    public Order(String oid, String ordertime, Double price, String status) {
        this.oid = oid;
        this.ordertime = ordertime;
        this.price = price;
        this.status = status;
    }

    public Order() {
        super();
    }

    public String getOid() {
        return oid;
    }

    public void setOid(String oid) {
        this.oid = oid == null ? null : oid.trim();
    }

    public String getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(String ordertime) {
        this.ordertime = ordertime == null ? null : ordertime.trim();
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }
}