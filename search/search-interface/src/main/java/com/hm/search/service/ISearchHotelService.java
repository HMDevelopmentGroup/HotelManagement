package com.hm.search.service;

import com.hm.search.pojo.dto.HotelSearchCustomResult;
import com.hm.search.pojo.dto.MessageResult;
import com.hm.search.pojo.po.HotelCustom;
import org.apache.solr.client.solrj.SolrServerException;

import java.io.IOException;
import java.util.List;

public interface ISearchHotelService {

    List<HotelCustom> searchHotel();
    MessageResult importHotel() throws SolrServerException, IOException;

    HotelSearchCustomResult searchIndex(String keyword, Integer pageIndex, Integer pageSize);
}
