package com.hm.portal.pojo.po;

import java.io.Serializable;

public class CheckInfo implements Serializable {
    private String cid;

    private Integer rid;

    private String oid;

    private String uid;

    private String start;

    private String end;

    private Integer days;

    private String offer;

    private String offerid;

    private String subs;

    private String subids;

    private String ioid;

    private Integer status;

    private static final long serialVersionUID = 1L;

    public CheckInfo(String cid, Integer rid, String oid, String uid, String start, String end, Integer days, String offer, String offerid, String subs, String subids, String ioid, Integer status) {
        this.cid = cid;
        this.rid = rid;
        this.oid = oid;
        this.uid = uid;
        this.start = start;
        this.end = end;
        this.days = days;
        this.offer = offer;
        this.offerid = offerid;
        this.subs = subs;
        this.subids = subids;
        this.ioid = ioid;
        this.status = status;
    }

    public CheckInfo() {
        super();
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid == null ? null : cid.trim();
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }

    public String getOid() {
        return oid;
    }

    public void setOid(String oid) {
        this.oid = oid == null ? null : oid.trim();
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid == null ? null : uid.trim();
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start == null ? null : start.trim();
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end == null ? null : end.trim();
    }

    public Integer getDays() {
        return days;
    }

    public void setDays(Integer days) {
        this.days = days;
    }

    public String getOffer() {
        return offer;
    }

    public void setOffer(String offer) {
        this.offer = offer == null ? null : offer.trim();
    }

    public String getOfferid() {
        return offerid;
    }

    public void setOfferid(String offerid) {
        this.offerid = offerid == null ? null : offerid.trim();
    }

    public String getSubs() {
        return subs;
    }

    public void setSubs(String subs) {
        this.subs = subs == null ? null : subs.trim();
    }

    public String getSubids() {
        return subids;
    }

    public void setSubids(String subids) {
        this.subids = subids == null ? null : subids.trim();
    }

    public String getIoid() {
        return ioid;
    }

    public void setIoid(String ioid) {
        this.ioid = ioid == null ? null : ioid.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}