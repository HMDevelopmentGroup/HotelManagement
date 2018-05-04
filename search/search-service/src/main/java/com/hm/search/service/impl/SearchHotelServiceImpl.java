package com.hm.search.service.impl;

import com.hm.search.dao.HotelCustomMapper;
import com.hm.search.dao.SearchHotelIndexDao;
import com.hm.search.pojo.dto.HotelSearchCustomResult;
import com.hm.search.pojo.dto.MessageResult;
import com.hm.search.pojo.po.HotelCustom;
import com.hm.search.service.ISearchHotelService;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrInputDocument;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class SearchHotelServiceImpl implements ISearchHotelService {
    @Autowired
    private SearchHotelIndexDao searchIndexDao;
    @Autowired
    private HotelCustomMapper dao;
    @Autowired
    private SolrServer solrServer;

    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public List<HotelCustom> searchHotel() {
        return dao.selectBysearch();
    }

    @Override
    public MessageResult importHotel()  {
        MessageResult mr = new MessageResult();
        mr.setSuccess(false);
        mr.setMessage("导入失败");
        //采集数据
        List<HotelCustom> hotels = dao.selectBysearch();
        //采集数据遍历
        try{
            for (HotelCustom hotel : hotels) {
                //拿到solr的文档域
                SolrInputDocument document = new SolrInputDocument();
                //向文档对象中添加域：对应schema.xml配置文件中的域名
                document.addField("id", hotel.getId());
                document.addField("hotel_hname", hotel.getHname());
                document.addField("hotel_address", hotel.getAddress());
                document.addField("hotel_cid", hotel.getCid());
                document.addField("hotel_hcontent", hotel.getHcontent());
                document.addField("hotel_hdesc", hotel.getHdesc());
                document.addField("hotel_hlogo", hotel.getHlogo());
                //写入索引库
                solrServer.add(document);
            }
            solrServer.commit();
            mr.setSuccess(true);
            mr.setMessage("一键导入成功");
            mr.setData(hotels);
        } catch (SolrServerException e) {
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        } catch (IOException e) {
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return mr;
    }

    @Override
    public HotelSearchCustomResult searchIndex(String keyword, Integer pageIndex, Integer pageSize) {
        HotelSearchCustomResult result = null;
        try {
            //创建solrquery
            SolrQuery solrQuery = new SolrQuery();
            //设置查询内容
            solrQuery.setQuery(keyword);
            //设置分页的条件
            solrQuery.setStart((pageIndex - 1) * pageSize);
            solrQuery.setRows(pageSize);
            //设置查询字段
            solrQuery.set("df","hotel_keywords");
            //设置高亮
            solrQuery.setHighlight(true);
            solrQuery.addHighlightField("hotel_hname");
            solrQuery.setHighlightSimplePre("<span style='color:red;'>");
            solrQuery.setHighlightSimplePost("</span>");
            //调用DAO层方法
            //list recordCounts totalPages
            result = searchIndexDao.searchIndex(solrQuery,pageSize);
        }catch (Exception e){
            logger.debug(e.getMessage(),e);
            e.printStackTrace();
        }
        return result;
    }
}
