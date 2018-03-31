package com.hm.search.dao;

import com.hm.search.pojo.dto.HotelSearchCustomResult;
import com.hm.search.pojo.po.HotelCustom;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class SearchHotelIndexDao {
    @Autowired
    private SolrServer solrServer;

    public HotelSearchCustomResult searchIndex(SolrQuery solrQuery, Integer pageSize) {
        HotelSearchCustomResult result = new HotelSearchCustomResult();
        try {
            //获取到查询索引库的响应
            QueryResponse response = solrServer.query(solrQuery);
            //通过响应获取文档域
            SolrDocumentList solrDocumentList = response.getResults();
            //通过响应获取到高亮的结果集
            Map<String, Map<String, List<String>>> highlighting = response.getHighlighting();
            //numFound
            long numFound = solrDocumentList.getNumFound();
            //创建一个空集合 solrDocumentList-->itemList
            List<HotelCustom> hotelList = new ArrayList<HotelCustom>();
            for (SolrDocument document : solrDocumentList) {
                HotelCustom hotel = new HotelCustom();
                //给对象设值
                hotel.setId(Integer.parseInt((String) document.get("id")));
                hotel.setAddress((String) document.get("hotel_address"));
                hotel.setCid((Integer) document.get("hotel_cid"));
                hotel.setHcontent((String) document.get("hotel_hcontent"));
                hotel.setHdesc((String) document.get("hotel_hdesc"));
                hotel.setHlogo((String) document.get("hotel_hlogo"));
                //通过ID获取map
                List<String> stringList = highlighting.get(document.get("id")).get("hotel_hname");
                String hname = "";
                if (stringList != null && stringList.size() > 0) {
                    hname = stringList.get(0);
                }else{
                    hname = (String) document.get("hotel_hname");
                }
                hotel.setHname(hname);
                hotelList.add(hotel);
            }
            //退一进一
            long totalPages = (numFound + pageSize - 1) / pageSize;
            result.setRecordCount(numFound);
            result.setList(hotelList);
            result.setTotalPages(totalPages);
        } catch (SolrServerException e) {
            e.printStackTrace();
        }
        return result;
    }
}
