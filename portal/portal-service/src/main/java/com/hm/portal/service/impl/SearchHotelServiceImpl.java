package com.hm.portal.service.impl;

import com.hm.portal.dao.HotelMapperCustom;
import com.hm.portal.pojo.dto.MessageResult;
import com.hm.portal.pojo.po.HotelCustom;
import com.hm.portal.service.ISearchHotelService;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrInputDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class SearchHotelServiceImpl implements ISearchHotelService{
    @Autowired
    private HotelMapperCustom dao;
    @Autowired
    private SolrServer solrServer;

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
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return mr;
    }
}
