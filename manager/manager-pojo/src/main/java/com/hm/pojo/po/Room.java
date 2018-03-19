package com.hm.pojo.po;

import java.io.Serializable;

public class Room implements Serializable {
    private Integer rid;

    private Integer hid;

    private String rname;

    private Integer cateid;

    private String statue;

    private static final long serialVersionUID = 1L;

    public Room(Integer rid, Integer hid, String rname, Integer cateid, String statue) {
        this.rid = rid;
        this.hid = hid;
        this.rname = rname;
        this.cateid = cateid;
        this.statue = statue;
    }

    public Room() {
        super();
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public Integer getHid() {
        return hid;
    }

    public void setHid(Integer hid) {
        this.hid = hid;
    }

    public String getRname() {
        return rname;
    }

    public void setRname(String rname) {
        this.rname = rname == null ? null : rname.trim();
    }

    public Integer getCateid() {
        return cateid;
    }

    public void setCateid(Integer cateid) {
        this.cateid = cateid;
    }

    public String getStatue() {
        return statue;
    }

    public void setStatue(String statue) {
        this.statue = statue == null ? null : statue.trim();
    }
}