package com.hm.portal.service;

import com.hm.portal.pojo.dto.MessageResult;
import com.hm.portal.pojo.po.City;
import com.hm.portal.pojo.po.HotelCustom;
import org.apache.solr.client.solrj.SolrServerException;

import java.io.IOException;
import java.util.List;

public interface ISearchHotelService {

    List<HotelCustom> searchHotel();
    MessageResult importHotel() throws SolrServerException, IOException;
}
