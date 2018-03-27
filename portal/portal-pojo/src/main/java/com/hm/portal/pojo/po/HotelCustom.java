package com.hm.portal.pojo.po;

import java.io.Serializable;

public class HotelCustom extends Hotel implements Serializable {
    private String hlogo;
    private String hcontent;
    private String hdesc;

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