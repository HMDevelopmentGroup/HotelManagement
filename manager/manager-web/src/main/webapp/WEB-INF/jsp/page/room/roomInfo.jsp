<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>房间信息</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all"/>
    <style type="text/css">
        .layui-form-item .layui-inline {
            width: 33.333%;
            float: left;
            margin-right: 0;
        }

        @media (max-width: 1240px) {
            .layui-form-item .layui-inline {
                width: 100%;
                float: none;
            }
        }
    </style>
</head>
<body class="childrenBody">
<form class="layui-form" style="width:80%;" id="userInfo" action="#">
    <div class="layui-form-item">
        <label class="layui-form-label">房间号</label>
        <div class="layui-input-block">
            <input type="text" name="rname" id="rname" value="${room.rname}" class="layui-input" readonly="readonly">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">房间类型</label>
        <div class="layui-input-block">
            <input type="text" name="roomCate" id="roomCate" value="${roomCate.cname}" class="layui-input" readonly="readonly">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">入住用户</label>
        <div class="layui-input-block">
            <input type="text" name="offer" id="offer" value="${checkInfo.offer}" class="layui-input" readonly="readonly">
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">入住时间</label>
            <div class="layui-input-inline">
                <input type="text" name="start" id="start" value="${checkInfo.start}" class="layui-input" readonly="readonly">
                至<input type="text" name="end" id="end" value="${checkInfo.end}" class="layui-input" readonly="readonly">
            </div>
        </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">价格</label>
            <div class="layui-input-inline">
                <input type="text" name="price" id="price" value="${checkInfo.days * roomCate.price}" class="layui-input" readonly="readonly">
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">状态</label>
            <div class="layui-input-inline">
                <c:if test="${checkInfo.status==1}">
                    <input type="text" name="status" id="status" value="待付款" class="layui-input" readonly="readonly">
                </c:if>
                <c:if test="${checkInfo.status==2}">
                    <input type="text" name="status" id="status" value="待入住" class="layui-input" readonly="readonly">
                </c:if>
                <c:if test="${checkInfo.status==3}">
                    <input type="text" name="status" id="status" value="入住" class="layui-input" readonly="readonly">
                </c:if>
                <c:if test="${checkInfo.status==4}">
                    <input type="text" name="status" id="status" value="待退房" class="layui-input" readonly="readonly">
                </c:if>
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <div class="layui-input-inline" align="center">
                <input type="button" onclick="closeTip()"  value="关闭" class="layui-btn layui-btn-normal" >
            </div>
        </div>
    </div>
</div>
</form>

<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/addUser.js"></script>
</body>
<script>
    function closeTip() {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    }
</script>
</html>