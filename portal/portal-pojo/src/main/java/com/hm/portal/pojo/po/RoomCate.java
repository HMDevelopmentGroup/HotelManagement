package com.hm.portal.pojo.po;

import java.io.Serializable;

public class RoomCate implements Serializable{
    private int cid;
    private String cname;
    private double price;
    private  int numlimit;

    private String images;

   private int confirmEmpty;

    public int getConfirmEmpty() {
        return confirmEmpty;
    }

    public void setConfirmEmpty(int confirmEmpty) {
        this.confirmEmpty = confirmEmpty;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getNumlimit() {
        return numlimit;
    }

    public void setNumlimit(int numlimit) {
        this.numlimit = numlimit;
    }
}
