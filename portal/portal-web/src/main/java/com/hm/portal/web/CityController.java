package com.hm.portal.web;

import com.hm.portal.pojo.po.City;
import com.hm.portal.pojo.po.Hotel;
import com.hm.portal.pojo.po.HotelCustom;
import com.hm.portal.pojo.vo.ResultMessage;
import com.hm.portal.service.ICityService;
import com.hm.portal.service.IHotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
public class CityController {

    @Autowired
    private ICityService cityService;
    @Autowired
    private IHotelService hotelService;

    @RequestMapping(value = "/getCity/{pid}",method = RequestMethod.POST)
    @ResponseBody
    public ResultMessage<City> toGetCity(@PathVariable("pid") int pid){
        ResultMessage<City> resultMessage = new ResultMessage<>();
        resultMessage.setStatus("200");
        resultMessage.setMessage("result");
        List<City> citys = cityService.getCity(pid);
        resultMessage.setData(citys);
        return resultMessage;
    }

    @RequestMapping(value = "/listHotel/{cname}",method = RequestMethod.GET)
    public String toListCities(@PathVariable("cname") String cname, HttpServletRequest request){
        City city = cityService.selectCityByName(cname);
        List<HotelCustom> hotels = hotelService.listHotelsByCid(city.getCid());
        request.setAttribute("hotels",hotels);
        return "listHotel";
    }
}
