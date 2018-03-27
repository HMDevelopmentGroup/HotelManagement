package com.hm.portal.pojo.po;

import java.io.Serializable;

public class Province implements Serializable {
    private Integer pid;

    private String pname;

    private static final long serialVersionUID = 1L;

    public Province(Integer pid, String pname) {
        this.pid = pid;
        this.pname = pname;
    }

    public Province() {
        super();
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getPname() {
        return pname;
    }

    public void setPname(String pname) {
        this.pname = pname == null ? null : pname.trim();
    }
}