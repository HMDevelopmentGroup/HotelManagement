package com.hm.pojo.po;

import java.io.Serializable;

public class InternetOrder implements Serializable {
    private String ioid;

    private String oid;

    private String uid;

    private String start;

    private String end;

    private Integer days;

    private Integer rcate;

    private String offer;

    private String offerid;

    private String subs;

    private String subids;

    private Integer status;

    private Integer rid;

    private static final long serialVersionUID = 1L;

    public InternetOrder(String ioid, String oid, String uid, String start, String end, Integer days, Integer rcate, String offer, String offerid, String subs, String subids, Integer status, Integer rid) {
        this.ioid = ioid;
        this.oid = oid;
        this.uid = uid;
        this.start = start;
        this.end = end;
        this.days = days;
        this.rcate = rcate;
        this.offer = offer;
        this.offerid = offerid;
        this.subs = subs;
        this.subids = subids;
        this.status = status;
        this.rid = rid;
    }

    public InternetOrder() {
        super();
    }

    public String getIoid() {
        return ioid;
    }

    public void setIoid(String ioid) {
        this.ioid = ioid == null ? null : ioid.trim();
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

    public Integer getRcate() {
        return rcate;
    }

    public void setRcate(Integer rcate) {
        this.rcate = rcate;
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

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }
}