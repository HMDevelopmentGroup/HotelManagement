package com.hm.search.web;

import com.hm.search.pojo.dto.HotelSearchCustomResult;
import com.hm.search.pojo.dto.MessageResult;
import com.hm.search.pojo.po.City;
import com.hm.search.pojo.po.HotelCustom;
import com.hm.search.service.ICityService;
import com.hm.search.service.ISearchHotelService;
import com.hm.utils.PropKit;
import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

@Controller
public class SearchHotelController {
    @Autowired
    private ISearchHotelService service;
    @Autowired
    private ICityService cityService;

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

    @RequestMapping(value = "/searchHotel",method = RequestMethod.GET)
    public String search(String keyword,String cityName, @RequestParam(defaultValue = "1") Integer pageIndex, Model model){
        System.out.println(keyword);
        //pageIndex当前页的页码
        //pageSize每页显示的条数
        Integer pageSize = PropKit.use("db.properties").getInt("search.pageSize");
        //调用业务逻辑层方法
        HotelSearchCustomResult result = service.searchIndex(keyword,pageIndex,pageSize);
        //回显，缺少几个分页的回显内容
        model.addAttribute("result",result);
        model.addAttribute("hotels",result.getList());


        City city = cityService.selectCityByName(cityName);
        int cid = 0;
        if (city!=null){
            cid=city.getCid();
        }
        model.addAttribute("cid",cid);
        //todo
        //转发
        return "listHotel";
    }
}
