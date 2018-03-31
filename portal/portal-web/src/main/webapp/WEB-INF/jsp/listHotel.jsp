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
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap-theme.min.css">
    <link href="${pageContext.request.contextPath}/css/reset.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/list.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/layui/css/layui.css" rel="stylesheet"/>

    <script src="${pageContext.request.contextPath}/js/jquery-1.10.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/public.js"></script>
    <script src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
</head>
<body>
<div class="main_pc">

    <%--首页头--%>
    <div class="top">
        <div class="main_w1200 top_nav">
            <a href="/" class="top_logo">
                <div class="brands_logo"></div>
            </a>
            <ul class="nav">

                <li id="jifenshangcheng"><a href="http://shop.homeinns.com/">积分商城</a></li>

                <li id="about">
                    <a style="cursor:default;">
                        关于首旅如家</a>
                    <div class="nav_con">
                        <a href="/Event">大事记</a>
                        <a href="/About">品牌介绍</a>
                        <a href="/News">集团快讯</a>
                        <a href="/Recruit">招贤纳士</a>
                        <a href="http://images.homeinns.com/Activity/senses.html">微电影</a>
                    </div>
                </li>
            </ul>

            <div class="top_login" style="margin-top: 25px">
                <div class="top_login_txt fl">
                    <span class="icon iconfont login_icon">&#xe60a;</span>
                    <a class="login_txt"
                       href="https://login.bthhotels.com/login/index?returnUrl=http%3a%2f%2fwww.bthhotels.com%2f">登录家宾会</a>
                    <code>|</code>
                    <dl class="top_login_xl">
                        <dt>
                            <a href="https://login.bthhotels.com/login/index?returnUrl=http%3a%2f%2fwww.bthhotels.com%2f">登录</a>
                        </dt>
                        <dd><a href="/Order/FitOrderSelect">非会员查订单</a></dd>
                    </dl>
                </div>
                <a href="https://login.bthhotels.com/Reg" class="login_line fl">注册</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>

    <div style="position: relative;left: 150px">
        <div class="list_main" align="center" style="margin: auto">
            <div class="container" style="width: 1200px">
                <div class="row">
                    <c:forEach items="${hotels}" var="hotel">
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6" style="margin-top: 6px;margin-bottom: 1px;"  onmouseover="show(this)" onmouseout="disshow(this)"><!-- 大屏幕放3张略缩图，pc端放4张，平板和手机放6张-->
                            <div class="thumbnail">
                                <a href="${pageContext.request.contextPath}/toBook/${hotel.id}">
                                <img src="http://${hotel.hlogo}" class="img-responsive">
                                </a>
                                <div class="caption">
                                    <h4><a href="${pageContext.request.contextPath}/toBook/${hotel.id}">${hotel.hname}</a></h4>
                                    <p style="color:red;">
                                        <a href="${pageContext.request.contextPath}/toBook/${hotel.id}">地址：${hotel.address}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </c:forEach>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
<script>
    function show(obj) {
        $(obj).css("margin-top","0px");
        $(obj).css("margin-bottom","1px");
        $(obj).css("box-shadow","0px 0px 6px #2ffff3");

    }
    function disshow(obj) {
        $(obj).css("margin-top","1px");
        $(obj).css("margin-bottom","0px");
        $(obj).css("box-shadow","0px 0px 0px #fff");
    }
</script>
</html>

