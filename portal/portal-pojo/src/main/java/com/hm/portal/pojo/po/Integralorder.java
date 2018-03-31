package com.hm.portal.pojo.po;

import java.io.Serializable;

public class Integralorder implements Serializable {
    private String integralorderId;

    private String uid;

    private Integer productId;

    private String integralTel;

    private Integer integralorderStatus;

    private String integralAddress;

    private static final long serialVersionUID = 1L;

    public Integralorder(String integralorderId, String uid, Integer productId, String integralTel, Integer integralorderStatus, String integralAddress) {
        this.integralorderId = integralorderId;
        this.uid = uid;
        this.productId = productId;
        this.integralTel = integralTel;
        this.integralorderStatus = integralorderStatus;
        this.integralAddress = integralAddress;
    }

    public Integralorder() {
        super();
    }

    public String getIntegralorderId() {
        return integralorderId;
    }

    public void setIntegralorderId(String integralorderId) {
        this.integralorderId = integralorderId == null ? null : integralorderId.trim();
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid == null ? null : uid.trim();
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getIntegralTel() {
        return integralTel;
    }

    public void setIntegralTel(String integralTel) {
        this.integralTel = integralTel == null ? null : integralTel.trim();
    }

    public Integer getIntegralorderStatus() {
        return integralorderStatus;
    }

    public void setIntegralorderStatus(Integer integralorderStatus) {
        this.integralorderStatus = integralorderStatus;
    }

    public String getIntegralAddress() {
        return integralAddress;
    }

    public void setIntegralAddress(String integralAddress) {
        this.integralAddress = integralAddress == null ? null : integralAddress.trim();
    }
}