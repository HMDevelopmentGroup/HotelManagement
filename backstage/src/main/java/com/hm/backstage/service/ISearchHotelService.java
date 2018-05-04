package com.hm.backstage.service;

import com.hm.backstage.pojo.dto.HotelSearchCustomResult;
import com.hm.backstage.pojo.dto.MessageResult;
import com.hm.backstage.pojo.po.HotelCustom;
import org.apache.solr.client.solrj.SolrServerException;

import java.io.IOException;
import java.util.List;

public interface ISearchHotelService {

    List<HotelCustom> searchHotel();

    MessageResult importHotel() throws SolrServerException, IOException;

}
