package com.hm.portal.dao;

import com.hm.portal.pojo.po.Integralorder;
import com.hm.portal.pojo.po.IntegralorderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface IntegralorderMapper {
    int countByExample(IntegralorderExample example);

    int deleteByExample(IntegralorderExample example);

    int deleteByPrimaryKey(String integralorderId);

    int insert(Integralorder record);

    int insertSelective(Integralorder record);

    List<Integralorder> selectByExample(IntegralorderExample example);

    Integralorder selectByPrimaryKey(String integralorderId);

    int updateByExampleSelective(@Param("record") Integralorder record, @Param("example") IntegralorderExample example);

    int updateByExample(@Param("record") Integralorder record, @Param("example") IntegralorderExample example);

    int updateByPrimaryKeySelective(Integralorder record);

    int updateByPrimaryKey(Integralorder record);
}