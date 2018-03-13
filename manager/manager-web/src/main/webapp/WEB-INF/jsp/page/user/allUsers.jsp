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
    <div class="layui-inline">
        <div class="layui-input-inline">
            <input type="text" value="" id="queryInfo" placeholder="请输入关键字" class="layui-input search_input">
        </div>
        <a class="layui-btn search_btn" onclick="queryUser()">查询</a>
    </div>
    <div class="layui-inline">
        <a class="layui-btn layui-btn-normal usersAdd_btn" href="${pageContext.request.contextPath}/page/user/addUser">添加用户</a>
    </div>
    <div class="layui-inline">
        <a class="layui-btn layui-btn-danger batchDel">批量删除</a>
    </div>
    <div class="layui-inline">
        <div class="layui-form-mid layui-word-aux">　本页面刷新后除新添加的文章外所有操作无效，关闭页面所有数据重置</div>
    </div>
</blockquote>


<div class="layui-form users_list">
    <table class="layui-hide" id="userList"></table>
</div>
<div id="page"></div>


<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script type="text/html" id="operateTpl">
    <a title="编辑" onclick="WeAdminEdit('编辑','./edit', 2, 600, 400)" href="javascript:;">
        <i class="layui-icon">&#xe642;</i>
    </a>
    <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
        <i class="layui-icon">&#xe640;</i>
    </a>
</script>

<script type="text/javascript">
    layui.use('table', function () {
        var table = layui.table;

        //第一个实例
        table.render({
            elem: '#userList'
            , url: '${pageContext.request.contextPath}/users' //数据接口
            , cols: [[ //表头
                {type: 'checkbox'}
                , {field: 'uid', title: 'ID', width: 400, sort: true}
                , {field: 'username', title: '用户名', width: 120}
                , {field: 'realname', title: '真实姓名', width: 120}
                , {field: 'sex', title: '性别', width: 100}
                , {field: 'idCard', title: '身份证号', width: 190}
                , {field: 'telephone', title: '电话', width: 130}
                , {field: 'integration', title: '积分', width: 120}
                , {field: 'operate', title: '操作', width: 80, toolbar: '#operateTpl', unresize: true}
            ]]
        });
    });
</script>
<script type="text/javascript">
    function turnPage(page) {
        layui.use('table', function () {
            var table = layui.table;
            table.render({
                elem: '#userList'
                , url: '${pageContext.request.contextPath}/users?page='+page+'&limit=10'
                , cols: [[ //表头
                    {type: 'checkbox'}
                    , {field: 'uid', title: 'ID', width: 400, sort: true}
                    , {field: 'username', title: '用户名', width: 120}
                    , {field: 'realname', title: '真实姓名', width: 120}
                    , {field: 'sex', title: '性别', width: 100}
                    , {field: 'idCard', title: '身份证号', width: 190}
                    , {field: 'telephone', title: '电话', width: 130}
                    , {field: 'integration', title: '积分', width: 120}
                    , {field: 'operate', title: '操作', width: 80, toolbar: '#operateTpl', unresize: true}
                ]]
            });
        });
    }
    $(document).ready(function () {
        layui.use('laypage', function () {
            var laypage = layui.laypage;
            $.ajax({
                type: "get",
                url: "${pageContext.request.contextPath}/userNums",
                success: function (data) {
                    laypage.render({
                        elem: 'page'
                        , count: Number(data)
                        , limit: 10
                        , jump: function(obj){
                            page=obj.curr;
                            turnPage(page);
                        }
                    });
                }
            });

        });

    });
    function queryUser() {
        var queryInfo = $("#queryInfo").val();
        layui.use(['table','laypage'], function () {
            var table = layui.table,
                laypage = layui.laypage;
            table.render({
                elem: '#userList'
                , url: '${pageContext.request.contextPath}/queryUser/'+queryInfo
                , page : false
                , cols: [[ //表头
                    {type: 'checkbox'}
                    , {field: 'uid', title: 'ID', width: 400, sort: true}
                    , {field: 'username', title: '用户名', width: 120}
                    , {field: 'realname', title: '真实姓名', width: 120}
                    , {field: 'sex', title: '性别', width: 100, sort: true}
                    , {field: 'idCard', title: '身份证号', width: 190}
                    , {field: 'telephone', title: '电话', width: 130}
                    , {field: 'integration', title: '积分', width: 120, sort: true}
                    , {field: 'operate', title: '操作', width: 80, toolbar: '#operateTpl', unresize: true}
                ]]
            });
            laypage.render({
                elem: 'page'
                , count: 0
            });
        });
    }
</script>
</body>
</html>