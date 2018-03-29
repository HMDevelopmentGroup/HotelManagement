package com.hm.portal.web;

import com.hm.portal.pojo.dto.MessageResult;
import com.hm.portal.service.ISearchHotelService;
import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

@Controller
public class SearchHotelController {
    @Autowired
    private ISearchHotelService service;

    @RequestMapping("/importHotels")
    public String toImport(){
        return "importHotels";
    }

    @RequestMapping(value = "/search/hotel/import",method = RequestMethod.POST)
    @ResponseBody
    public MessageResult importItemList() throws SolrServerException, IOException {
        MessageResult mr = service.importHotel();
        return mr;
    }
}
