package com.hm.search.pojo.dto;

import com.hm.search.pojo.po.HotelCustom;

import java.util.List;

public class HotelSearchCustomResult {
    private long recordCount;
    //总页数
    private long totalPages;
    //指定分页的集合
    private List<HotelCustom> list;

    public long getRecordCount() {
        return recordCount;
    }

    public void setRecordCount(long recordCount) {
        this.recordCount = recordCount;
    }

    public long getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(long totalPages) {
        this.totalPages = totalPages;
    }

    public List<HotelCustom> getList() {
        return list;
    }

    public void setList(List<HotelCustom> list) {
        this.list = list;
    }
}
