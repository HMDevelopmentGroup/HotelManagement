<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">


    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>


    <title>酒店列表</title>


    <link href="${pageContext.request.contextPath}/css/reset2.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public.css" rel="stylesheet"/>

    <link href="${pageContext.request.contextPath}/layui/css/layui.css" rel="stylesheet"/>

    <script src="${pageContext.request.contextPath}/js/jquery-1.10.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
</head>
<body>


<div class="main_pc">

    <%--首页头--%>
        <%--首页头--%>
        <div class="top">
            <div class="main_w1200 top_nav">
                <a href="/" class="top_logo">
                    <div class="brands_logo"></div>
                </a>
                <ul class="nav">

                    <li id="jifenshangcheng"><a href="${pageContext.request.contextPath}/shop">积分商城</a></li>

                    <li id="about">
                        <a style="cursor:default;">
                            关于首旅如家</a>
                        <div class="nav_con">
                            <a href="#">大事记</a>
                            <a href="#">品牌介绍</a>
                            <a href="#">集团快讯</a>
                            <a href="#">招贤纳士</a>
                            <a href="#">微电影</a>
                        </div>
                    </li>
                </ul>

                <div class="top_login" style="margin-top: 25px">
                    <c:if test="${empty user}">
                        <div class="top_login_txt fl">
                            <span class="icon iconfont login_icon">&#xe60a;</span>
                            <a class="login_txt"
                               href="http://www.legna.top/login">登录家宾会</a>
                            <code>|</code>
                            <dl class="top_login_xl">
                                <dt>
                                    <a href="http://www.legna.top/login">登录</a>
                                </dt>
                                <dd><a href="${pageContext.request.contextPath}/Order/FitOrderSelect">非会员查订单</a></dd>
                            </dl>
                        </div>
                        <a href="${pageContext.request.contextPath}/userRegister" class="login_line fl">注册</a>
                    </c:if>
                    <c:if test="${!empty user}">
                        <div class="top_login_txt fl">
                            欢迎您，${user.realname}
                        </div>
                        <a href="${pageContext.request.contextPath}/userInfo" class="login_line fl">个人中心</a>
                    </c:if>
                </div>
                <div class="clear"></div>
            </div>
        </div>


    <div style="position: relative;left: 150px">

            <div style="text-align: center;">
                <img src="${pageContext.request.contextPath}/images/zfb.jpg" >
            </div>

        <div style="clear:both "></div>
        <div style="text-align: center;" >
            <img src="${pageContext.request.contextPath}/images/ewm.jpg">
        </div>
        <div style="text-align: center; padding-top: 50px" >
            <button class="layui-btn layui-btn-danger" onclick="location.href='${pageContext.request.contextPath}/confirmPay/${oid}/${ioid}/${cid}'">已确认付款</button>
        </div>


    </div>
</div>

<div class="footer_tip">
    <div class="main_w1200">
        <div class="footer_tipL">
            版权所有 © 2014 Homeinns Co.,Ltd All Rights Reserved.
            <br/>和美酒店管理（上海）有限公司 沪ICP备06046495号
        </div>
        <div class="clear"></div>
    </div>
</div>

</body>

<script>
    layui.use('form', function(){
        var form = layui.form;

        //各种基于事件的操作，下面会有进一步介绍
    });
</script>
<script>
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#start' //指定元素
        });

        laydate.render({
            elem: '#end' //指定元素
        });
    });
</script>


</html>

