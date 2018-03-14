<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>用户总数--layui后台管理模板</title>
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
    <div class="layui-inline">
        <div class="layui-input-inline">
            <input type="text" value="" id="queryInfo" placeholder="请输入关键字" class="layui-input search_input">
        </div>
        <a class="layui-btn search_btn" onclick="queryUser()">查询</a>
    </div>
    <button class="layui-btn layui-btn-danger" data-type="getCheckData"><i class="layui-icon">&#xe640;</i>批量删除</button>
</div>


<div class="layui-form users_list">
    <table class="layui-hide" id="userList" lay-filter="test"></table>
</div>
<div id="page"></div>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/allUsers.js"></script>
<script type="text/html" id="operateTpl">
    <a class="" lay-event="edit" title="编辑"><i class="layui-icon">&#xe642;</i></a>

    <a class="" lay-event="del" title="删除"><i class="layui-icon">&#x1006;</i></a>
</script>


</body>
</html>