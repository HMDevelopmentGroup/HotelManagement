<%--
  Created by IntelliJ IDEA.
  User: wenyi
  Date: 2018/3/17
  Time: 14:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>订单列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all"/>

    <link rel="stylesheet" href="//at.alicdn.com/t/font_tnyc012u2rlwstt9.css" media="all"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/user.css" media="all"/>
</head>

<body class="childrenBody">

<blockquote class="layui-elem-quote news_search">

</blockquote>
<div class="weadmin-block demoTable">
    <div class="layui-form" id="searchItem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        订单号:
        <div class="layui-input-inline">
            <input type="text" value="" id="oid" placeholder="请输入关键字" class="layui-input search_input">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        客户名称:
        <div class="layui-input-inline">
            <input type="text" value="" id="offer" placeholder="请输入关键字" class="layui-input search_input">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        客户身份证:
        <div class="layui-input-inline">
            <input type="text" value="" id="offerid" placeholder="请输入关键字" class="layui-input search_input">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        入住时间:
        <div class="layui-input-inline">
            <input type="date" value="" id="start" placeholder="请输入关键字" class="layui-input search_input">
        </div>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        退房时间:
        <div class="layui-input-inline">
            <input type="date" value="" id="end" placeholder="请输入关键字" class="layui-input search_input">
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        订单状态:
        <div class="layui-input-inline">
            <select id="status">
                <option value="">-------</option>
                <option value="1">待付款</option>
                <option value="2">待入住</option>
                <option value="3">入住</option>
                <option value="4">待退房</option>
                <option value="5">已退房</option>
            </select>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="layui-btn" lay-submit="" lay-filter="search" data-type="reload"><i class="layui-icon">&#xe615;</i></button>
    </div>
</div>


<div class="layui-form oeders_list">
    <table class="layui-hide" id="orderList" lay-filter="test"></table>
</div>
<div id="page"></div>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/orderList.js"></script>
<script type="text/html" id="operateTpl">
    <a class="" lay-event="edit" title="编辑"><i class="layui-icon">&#xe642;</i></a>

    <a class="" lay-event="del" title="删除"><i class="layui-icon">&#x1006;</i></a>
</script>


</body>
</html>
