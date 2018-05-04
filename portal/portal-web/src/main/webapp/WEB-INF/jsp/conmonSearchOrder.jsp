<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />


    <title>散客订单查询</title>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    <meta name="description" />
    <meta name="keywords" />

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


    <!--Gridsum tracking code begin. -->
    <script type='text/javascript'>
        var _gsq = _gsq || [];
        (function () {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = (location.protocol == 'https:' ? 'https://ssl.' : 'http://static.') + 'gridsumdissector.com/js/Clients/GWD-002359-B69F32/gs.js';
            var firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(s, firstScript);
        })();
    </script>
    <!--Gridsum tracking code end. -->


    <!-- GrowingIO Analytics code version 2.1 -->
    <!-- Copyright 2015-2017 GrowingIO, Inc. More info available at http://www.growingio.com -->
    <script type='text/javascript'>
        !function (e, t, n, g, i) { e[i] = e[i] || function () { (e[i].q = e[i].q || []).push(arguments) }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag) }(window, document, "script", "assets.growingio.com/2.1/gio.js", "gio");
        gio('init', 'aad63812051a3dc2', { 'setImp': 'false' });

        //custom page code begin here


        //custom page code end here

        gio('send');
    </script>
    <!-- End GrowingIO Analytics code version: 2.1 -->

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





    <div class="main_w1200">
        <div class="list_location">
            当前位置：
            <a href="/">首页</a>/
            <a href="#">散客订单查询</a>
            <a class="breadon" href=""></a>
        </div>
    </div>

    <div class="main_w1200">
        <div class="novip_form">
            <form action="/Order/FitOrderSelect" id="frm" method="post">            <div class="item error fix">
                <label>您的姓名/手机号</label>
                <input type="text" name="info" class="ipt" id="user_name_ipt" maxlength="20">
                <span id="user_name_sp1">您输入的姓名/手机号格式不对</span>
            </div>
                <div class="item fix">
                    <label>订单号码</label>
                    <input type="text" name="orderNo" class="ipt" id="order_ipt">
                    <span id="order_sp1">您输入的订单号格式不对</span>
                </div>
                <input type="submit" value="查询" class="bth" id="submit_btn"/>
            </form>    </div>
    </div>


    <div class="footer">
        <div class="main_w1200 fix">
            <div class="footerL">
                <dl>
                    <dt>酒店预订</dt>
                    <dd><a href="/map/">地图预订</a></dd>

                    <dd><a href="/home/enterprise">企业卡申请</a></dd>
                    <dd><a href="/sitemap">目录预订</a></dd>
                </dl>
                <dl>
                    <dt>家宾会</dt>
                    <dd><a href="/Member/MemberManual">会员手册</a></dd>
                    <dd><a href="/Member/MemberNotice">会员公告</a></dd>
                    <dd><a href="http://shop.homeinns.com/">积分商城</a></dd>
                </dl>
                <dl>
                    <dt>加盟合作</dt>
                    <dd><a href="/join/ytel_investment">招商会行程</a></dd>
                    <dd><a href="/join/ytelfee">加盟收费</a></dd>
                    <dd><a href="/join/yssjms">加入云上四季民宿</a></dd>
                    <dd><a href="/join/HEBarnd">加盟高端酒店品牌</a></dd>

                </dl>
                <dl>
                    <dt>首旅如家酒店集团</dt>
                    <dd><a href="/culture">企业文化</a></dd>
                    <dd><a href="/Event">大事记</a></dd>
                    <dd><a href="/About">品牌介绍</a></dd>
                    <dd><a href="/News">集团快讯</a></dd>
                    <dd><a href="http://images.homeinns.com/sensual/index.html">精彩商旅</a></dd>
                    <dd><a href="/Contact">联系我们</a></dd>
                    <dd><a href="/Recruit">招贤纳士</a></dd>
                    <dd><a href="http://caigou.bthhotels.com/" target="_blank">工程招标</a></dd>
                </dl>
            </div>
            <div class="footerR">
                <ul>

                    <li>
                        <div class="footerR_l">
                            <img src="picture/appqrcode_new.png" width="135" />
                            <p>下载APP尊享超值礼包</p>
                        </div>
                        <div class="footerR_r">
                            <img src="picture/public_signal.png" width="135" />
                            <p>关注微信公众号领取好礼</p>
                        </div>
                    </li>
                    <li class="footerR_aboutus">
                        <p>酒店预订电话</p>
                        <p><span>400 820 3333  或  1010 3333</span></p>
                        <p style="font-size:14px; color:#535353; margin-top:-1px;">服务时间为7点-凌晨1点</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer_tip">
        <div class="main_w1200">
            <div class="footer_tipL">
                版权所有 ©  2014 Homeinns Co.,Ltd All Rights Reserved.
                <br />和美酒店管理（上海）有限公司    沪ICP备06046495号
            </div>
            <div class="footer_tipR">
                <dl>
                    <dt class="gs_icon"><i></i></dt>
                    <dd class="gs_name">上海工商</dd>
                </dl>
                <dl>
                    <dt class="wj_icon"><i></i></dt>
                    <dd>上海网警<br />网络110</dd>
                </dl>
                <dl>
                    <dt class="wl_icon"><i></i></dt>
                    <dd>网络社会<br />征信网</dd>
                </dl>
                <dl>
                    <dt class="icp_icon"><i></i></dt>
                    <dd>沪ICP备<br />06046495</dd>
                </dl>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
<div id="h5Main">







    <div class="h5_main">
        <form action="/Order/FitOrderSelect" id="H5FitOrderSelectfrm" method="post">    <div class="visit_query">
            <div class="h5_header">
                <a href="javascript:" class="h5_header_back iconfont"></a>
                <h1 class="h5_header_title">散客订单查询</h1>
            </div>
            <div class="pwd_init_con">
                <div class="pwd_form">
                    <div class="item">
                        <input type="text" name="info" placeholder="请输入您的姓名/手机号">
                    </div>
                    <div class="item">
                        <input type="text"  name="orderNo"  placeholder="请输入订单号码">
                    </div>
                </div>s


                <a href="javascript:" class="btn_sure btn_total">确定</a>
            </div>
            <div class="error_pop">
                <p></p>
            </div>
        </div>
        </form></div>


</div>





<script>
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-96352022-1', 'auto');
    ga('send', 'pageview');

</script>

<script>
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e41df8e86d2b75cbf4deb050012658c9";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

</script>





</body>
</html>
<!--19-->

