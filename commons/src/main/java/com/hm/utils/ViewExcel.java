package com.hm.utils;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.web.servlet.view.document.AbstractExcelView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class ViewExcel extends AbstractExcelView {
    private String[] titles;

    //傳入指定的標題頭
    public ViewExcel(String[] titles) {
        this.titles = titles;
    }

    @Override
    protected void buildExcelDocument(Map<String, Object> model,
                                      HSSFWorkbook workbook, HttpServletRequest request,
                                      HttpServletResponse response) throws Exception {
        //獲取數據
        List<Map<String, String>> list = (List<Map<String, String>>) model.get("excelList");
        //在workbook添加一個sheet
        HSSFSheet sheet = workbook.createSheet();
        sheet.setDefaultColumnWidth(15);
        HSSFCell cell = null;
        //遍歷標題
        for (int i = 0; i < titles.length; i++) {
            //獲取位置
            cell = getCell(sheet, 0, i);
            setText(cell, titles[i]);
        }
        //數據寫出
        for (int i = 0; i < list.size(); i++) {
            //獲取每一個map
            Map<String, String> map = list.get(i);
            //一個map一行數據
            HSSFRow row = sheet.createRow(i + 1);
            for (int j = 0; j < titles.length; j++) {
                //遍歷標題，把key與標題匹配
                String title = titles[j];
                //判斷該內容存在mapzhong
                if (map.containsKey(title)) {
                    row.createCell(j).setCellValue(map.get(title));
                }
            }
        }
        //設置下載時客戶端Excel的名稱
        String filename = new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + ".xls";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + filename);
        OutputStream ouputStream = response.getOutputStream();
        workbook.write(ouputStream);
        ouputStream.flush();
        ouputStream.close();
    }
}
