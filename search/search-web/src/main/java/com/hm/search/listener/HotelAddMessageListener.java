package com.hm.search.listener;


import com.hm.search.pojo.vo.HotelCustom;
import com.hm.search.service.IHotelService;
import org.apache.solr.client.solrj.SolrServer;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.common.SolrInputDocument;
import org.springframework.beans.factory.annotation.Autowired;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;
import java.io.IOException;

public class HotelAddMessageListener implements MessageListener {

    @Autowired
    private SolrServer solrServer;
    @Autowired
    private IHotelService hotelService;

    @Override
    public void onMessage(Message message) {

        try {
            TextMessage textMessage = null;

            if (message instanceof TextMessage) {

                textMessage = (TextMessage) message;

            }
            String text = textMessage.getText();
            int hid = Integer.parseInt(text);
            HotelCustom hotelCustom = hotelService.selectHotelByHid(hid);

            SolrInputDocument document = new SolrInputDocument();
            document.addField("id", hotelCustom.getId());
            document.addField("hotel_hname", hotelCustom.getHname());
            document.addField("hotel_address", hotelCustom.getAddress());
            document.addField("hotel_cid", hotelCustom.getCid());
            document.addField("hotel_hcontent", hotelCustom.getHcontent());
            document.addField("hotel_hdesc", hotelCustom.getHdesc());
            document.addField("hotel_hlogo", hotelCustom.getHlogo());
            //写入索引库
            solrServer.add(document);
            solrServer.commit();

        } catch (JMSException e) {
            e.printStackTrace();
        } catch (SolrServerException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
