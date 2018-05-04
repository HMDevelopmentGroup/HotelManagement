<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>


    <title>酒店官方网站</title>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>

    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    <link href="${pageContext.request.contextPath}/css/reset.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/iconfont.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public_logos.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/brand.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/home_h5.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public_h5.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/idangerous.swiper.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/time_blue.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/datemobile.css" rel="stylesheet"/>

    <script src="${pageContext.request.contextPath}/js/respond.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/public.js"></script>
    <script src="${pageContext.request.contextPath}/js/jquery.placeholder.js"></script>
    <script src="${pageContext.request.contextPath}/js/brand.js"></script>
    <script src="${pageContext.request.contextPath}/js/time_blue.js"></script>
    <script src="${pageContext.request.contextPath}/js/idangerous.swiper.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/datemobile.js"></script>.
    <script src="${pageContext.request.contextPath}/js/jquery.cookie.js"></script>
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
                                    <a href="http://127.0.0.1:85/sso">登录</a>
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


    <!--新首页-->


    <input type="hidden" id="IsEconomy" value="false"/>
    <div class="banner" id="home_banner">
        <div class="banner_pic">
            <ul class="fix">
                <li style="background: url(images/d34cba17-9f41-485b-97d8-3f7e400c736c.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="0">
                    <a onclick="bannerlog(1317)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/cb606310-7a8d-4bf9-af83-fe671cedac69.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="1">
                    <a onclick="bannerlog(1316)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/13c17105-23c3-459b-86c9-0a565f111733.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="2">
                    <a onclick="bannerlog(1311)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/d365ff9c-cfec-49d9-8250-d7eda7c05c21.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="3">
                    <a onclick="bannerlog(1313)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/1d97d6aa-6c18-4411-9b76-813ed6b6e59d.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="4">
                    <a onclick="bannerlog(1312)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/2ffb96d1-7aa4-4021-838c-15b45cdd1906.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="5">
                    <a onclick="bannerlog(1315)" href="#"
                       target="_blank"></a>
                </li>
                <li style="background: url(images/7a72d6b6-6ea0-4ec0-b595-5573e3ceabd5.jpg) no-repeat center center"
                    gsregion="1" gssnapshot="6">
                    <a onclick="bannerlog(1308)" href="#"
                       target="_blank"></a>
                </li>

            </ul>
            <a class="unslider-arrow06 prev">
                <code class="iconfont arrow" id="al" alt="prev">&#xe621;</code>
            </a>
            <a class="unslider-arrow06 next">
                <code class="iconfont arrow" id="ar" alt="next">&#xe635;</code>
            </a>
        </div>

        <div class="home_book_box">
            <div class="home_book_tab fix">
                <a>酒店预订</a>
            </div>

            <ul class="home_book_content">

                <div class="home_book_list">
                    <form action="#" id="frm" method="post">
                        <div class="home_time">
                            <div class="home_input">
                                <input onclick="chooseCity()"  id="cityName"  type="text" value=""  placeholder="城市名">
                            </div>
                            <div class="home_input_time">
                            </div>
                            <div class="home_input_time">
                            </div>
                            <div class="home_search">
                                <input name="keyDescript" id="keyDescript" autocomplete="off" placeholder="请输入目的地地址">
                            </div>
                            <div class="home_cx_button">
                                <a id="btn_search" onclick="searchHotel()">搜索</a>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </form>
                </div>
            </ul>
        </div>
    </div>

    <div class="home_hotel">
        <div class="home_all_icon"><img src="picture/all_brand_icon.png" width="43"></div>
        <div class="home_logos_tk">
            <code class="iconfont">&#xe73e;</code>
            <div class="list_logos">
                <div class="list_logos_title">首旅如家酒店集团旗下品牌</div>
                <ul class="list_logos_items1 fix">
                    <a target="_blank" href="#">
                        <li class="jianguo_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="lanyuan_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="jinglun_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="xiying_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="feiman_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="lansanxiuxian_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>

                </ul>
                <ul class="list_logos_items2 fix">
                    <a target="_blank" href="#">
                        <li class="hy_zhizun_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="hy_zhishang_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="hy_zhige_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="rj_jingxuan_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="rj_sl_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="yiju_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                </ul>
                <ul class="list_logos_items3 fix">
                    <a target="_blank" href="#">
                        <li class="rujia_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="motai_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="yunshangsiji_jiudian_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a href="#" target="_blank">
                        <li class="yunshangsiji_ms_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="yake_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="xingyandu_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="shiboyun_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="shubo_yun_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>

                    <a target="_blank" href="#">
                        <li class="ruibo_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="paibo_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                </ul>
                <ul class="list_logos_items4 fix">
                    <a href="javascript:">
                        <li class="rujiaxiaozheng_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a href="javascript:">
                        <li class="rujiamohe_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="manquleyuan_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="douhaogongyu_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="qingchaogongyu_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                    <a target="_blank" href="#">
                        <li class="douhaozhijia_logo">
                            <div class="Artboard_logo"></div>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
        <div class="main_w1200">
            <ul class="home_logo_name fix" id="tabs">
                <li TypeClassId="3" class="home_logo_name1">高端商旅/度假型酒店</li>
                <li TypeClassId="4" class="home_logo_name2">中高端商旅型酒店</li>
                <li TypeClassId="5" class="home_logo_name3">商旅型酒店</li>
                <li TypeClassId="6" class="home_logo_name4">休闲度假</li>
                <li TypeClassId="7" class="home_logo_name5">联盟酒店</li>
                <li TypeClassId="8" class="home_logo_name6">长租公寓</li>
                <p id="indicator"></p>
            </ul>
        </div>

        <ul class="home_logo_box">
            <div class="home_logo_fix">
                <div class="main_w1200">
                    <ul class="home_logo_nav" id="logo_nav1">
                        <!--高端商旅-->
                        <li class="home_jianguo_logobg" TypeClassId="3" TypeId="109">
                            <a title="首旅建国酒店" target="_blank" href="#"><span class="home_jianguo_icon"><em
                                    class="em_cm home_jianguo_span"></em></span></a>
                        </li>
                        <li class="home_puyin_logobg" TypeClassId="3" TypeId="107">
                            <a title="璞隐酒店" target="_blank" href="#"><span class="home_puyin_icon"><em
                                    class="em_cm home_puyin_span"></em></span></a>
                        </li>
                        <li class="home_nanyuan_logobg" TypeClassId="3" TypeId="112">
                            <a title="首旅南苑酒店" target="_blank" href="#"><span class="home_nanyuan_icon"><em
                                    class="em_cm home_nanyuan_span"></em></span></a>
                        </li>
                        <li class="home_jinglun_logobg" TypeClassId="3" TypeId="110">
                            <a title="首旅京伦酒店" target="_blank" href="#"><span class="home_jinglun_icon"><em
                                    class="em_cm home_jinglun_span"></em></span></a>
                        </li>
                        <li class="home_feiman_logobg" TypeClassId="3" TypeId="108">
                            <a title="扉缦酒店" target="_blank" href="#"><span class="home_feiman_icon"><em
                                    class="em_cm home_feiman_span"></em></span></a>
                        </li>
                        <li class="home_nanshan_logobg" TypeClassId="3" TypeId="111">
                            <a title="南山休闲会馆" target="_blank" href="#"><span class="home_nanshan_icon"><em
                                    class="em_cm home_nanshan_span"></em></span></a>
                        </li>

                        <!--中高端商旅-->
                        <li class="home_heyi_zhizun_logobg" TypeClassId="4" TypeId="122">
                            <a title="和颐至尊酒店" target="_blank" href="#"><span class="home_heyi_zhizun_icon"><em
                                    class="em_cm home_heyi_zhizun_span"></em></span></a>
                        </li>
                        <li class="home_heyi_zhishang_logobg" TypeClassId="4" TypeId="121">
                            <a title="和颐至尚酒店" target="_blank" href="#"><span
                                    class="home_heyi_zhishang_icon"><em
                                    class="em_cm home_heyi_zhishang_span"></em></span></a>
                        </li>
                        <li class="home_heyi_zhige_logobg" TypeClassId="4" TypeId="120">
                            <a title="和颐至格酒店" target="_blank" href="#"><span
                                    class="home_heyi_zhige_icon"><em class="em_cm home_heyi_zhige_span"></em></span></a>
                        </li>
                        <li class="home_jingxuan_logobg" TypeClassId="4" TypeId="123">
                            <a title="如家精选酒店" target="_blank" href="#"><span class="home_jingxuan_icon"><em
                                    class="em_cm home_jingxuan_span"></em></span></a>
                        </li>
                        <li class="home_shanglv_logobg" TypeClassId="4" TypeId="124">
                            <a title="如家商旅酒店" target="_blank" href="#"><span class="home_shanglv_icon"><em
                                    class="em_cm home_shanglv_span"></em></span></a>
                        </li>
                        <li class="home_yiju_jin_logobg" TypeClassId="4" TypeId="127">
                            <a title="驿居酒店（金）" target="_blank" href="#"><span class="home_yiju_jin_icon"><em
                                    class="em_cm home_yiju_jin_span"></em></span></a>
                        </li>
                        <li class="home_subo_logobg" TypeClassId="4" TypeId="126">
                            <a title="素柏云酒店" target="_blank" href="#"><span class="home_subo_icon"><em
                                    class="em_cm home_subo_span"></em></span></a>
                        </li>
                        <li class="home_ruibo_logobg" TypeClassId="4" TypeId="125">
                            <a title="睿柏云酒店" target="_blank" href="#"><span class="home_ruibo_icon"><em
                                    class="em_cm home_ruibo_span"></em></span></a>
                        </li>

                        <!--商旅-->
                        <li class="home_rujia_logobg" TypeClassId="5" TypeId="115">
                            <a title="如家酒店" target="_blank" href="#"><span class="home_rujia_icon"><em
                                    class="em_cm home_rujia_span"></em></span></a>
                        </li>
                        <li class="home_motai_logobg" TypeClassId="5" TypeId="113">
                            <a title="莫泰酒店" target="_blank" href="#"><span class="home_motai_icon"><em
                                    class="em_cm home_motai_span"></em></span></a>
                        </li>
                        <li class="home_yssj_logobg" TypeClassId="5" TypeId="119">
                            <a title="云上四季酒店" target="_blank" href="#"><span class="home_yssj_icon"><em
                                    class="em_cm home_yssj_span"></em></span></a>
                        </li>
                        <li class="home_yiju_lan_logobg" TypeClassId="5" TypeId="118">
                            <a title="驿居酒店（蓝）" target="_blank" href="#"><span class="home_yiju_lan_icon"><em
                                    class="em_cm home_yiju_lan_span"></em></span></a>
                        </li>
                        <li class="home_xinyandu_logobg" TypeClassId="5" TypeId="116">
                            <a title="欣燕都酒店" target="_blank" href="#"><span class="home_xinyandu_icon"><em
                                    class="em_cm home_xinyandu_span"></em></span></a>
                        </li>
                        <li class="home_yake_logobg" TypeClassId="5" TypeId="117">
                            <a title="雅客e家酒店" target="_blank" href="#"><span class="home_yake_icon"><em
                                    class="em_cm home_yake_span"></em></span></a>
                        </li>
                        <li class="home_paibo_logobg" TypeClassId="5" TypeId="114">
                            <a title="派柏云酒店" target="_blank" href="#"><span class="home_paibo_icon"><em
                                    class="em_cm home_paibo_span"></em></span></a>
                        </li>

                        <!--休闲度假-->
                        <li class="home_hanshe_logobg" TypeClassId="6" TypeId="home_hanshe_logobg">
                            <a title="首旅寒舍酒店" target="_blank" href="#"><span class="home_hanshe_icon"><em
                                    class="em_cm home_hanshe_span em_cm"></em></span></a>
                        </li>
                        <li class="home_jialebi_logobg" TypeClassId="6" TypeId="home_jialebi_logobg">
                            <a title="嘉乐比酒店" target="_blank" href="#"><span class="home_jialebi_icon"><em
                                    class="em_cm home_jialebi_span em_cm"></em></span></a>
                        </li>
                        <li class="home_shiby_logobg" TypeClassId="6" TypeId="home_shiby_logobg">
                            <a title="诗柏云酒店" target="_blank" href="#"><span class="home_shiby_icon"><em
                                    class="em_cm home_shiby_span em_cm"></em></span></a>
                        </li>
                        <li class="home_manqu_logobg" TypeClassId="6" TypeId="home_manqu_logobg">
                            <a title="漫趣乐园酒店" target="_blank" href="#"><span class="home_manqu_icon"><em
                                    class="em_cm home_manqu_span em_cm"></em></span></a>
                        </li>
                        <li class="home_xiaozhen_logobg no_link" TypeClassId="6" TypeId="home_xiaozhen_logobg">
                            <a href="javascript:"><span class="home_xiaozhen_icon"><em
                                    class="em_cm home_xiaozhen_span em_cm"></em></span></a>
                        </li>
                        <li class="home_yssj_minsu_logobg" TypeClassId="6" TypeId="home_yssj_minsu_logobg">
                            <a title="云上四季民宿酒店" target="_blank" href="#"><span class="home_yssj_minsu_icon"><em
                                    class="em_cm home_yssj_minsu_span "></em></span></a>
                        </li>

                        <!--联盟酒店-->
                        <li class="home_rujia_lianmeng_logobg no_link" TypeClassId="7"
                            TypeId="home_rujia_lianmeng_logobg">
                            <a><span class="home_rujia_lianmeng_icon"><em
                                    class="em_cm home_rujia_lianmeng_span spanon"></em></span></a>
                        </li>
                        <li class="home_huayi_logobg no_link" TypeClassId="7" TypeId="home_huayi_logobg">
                            <a><span class="home_huayi_icon"><em class="em_cm home_huayi_span"></em></span></a>
                        </li>

                        <!--长租公寓-->
                        <li class="home_douhao_logobg" TypeClassId="8" TypeId="home_douhao_logobg">
                            <a title="逗号公寓酒店" href="#" target="_blank"><span
                                    class="home_douhao_icon"><em class="em_cm home_douhao_span"></em></span></a>
                        </li>
                        <li class="home_qingchao_logobg" TypeClassId="8" TypeId="home_qingchao_logobg">
                            <a title="青巢公寓酒店" href="#" target="_blank"><span
                                    class="home_qingchao_icon"><em class="em_cm home_qingchao_span"></em></span></a>
                        </li>
                        <li class="home_douhao_zhijia_logobg" TypeClassId="8" TypeId="home_douhao_zhijia_logobg">
                            <a title="逗号之家酒店" href="#" target="_blank"><span
                                    class="home_douhao_zhijia_icon"><em
                                    class="em_cm home_douhao_zhijia_span"></em></span></a>
                        </li>
                        <div class="clear"></div>

                    </ul>
                </div>
                <ul class="home_logo_main">
                    <div class="home_big_img1"
                         style="background: url(images/puyin.jpg) top center no-repeat; height: 550px;" TypeId="107">
                        <a title="璞隐酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>行走间，<br/>为自己留白</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="璞隐酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/feiman.jpg) top center no-repeat; height: 550px;" TypeId="108">
                        <a title="扉缦酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>随性，随行</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="扉缦酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/jianguo.jpg) top center no-repeat; height: 550px;" TypeId="109">
                        <a title="首旅建国酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>都市绿洲<br/>自在建国</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="首旅建国酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/jinglun.jpg) top center no-repeat; height: 550px;" TypeId="110">
                        <a title="首旅京伦酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>京伦的微笑<br/>首都的骄傲</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="首旅京伦酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/nanshan.jpg) top center no-repeat; height: 550px;" TypeId="111">
                        <a title="南山休闲会馆" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>南山休闲会所</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="南山休闲会馆" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/nanyuan.jpg) top center no-repeat; height: 550px;" TypeId="112">
                        <a title="首旅南苑酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>服务创造价值<br/>品质铸就经典</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="首旅南苑酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/motai.jpg) top center no-repeat; height: 550px;" TypeId="113">
                        <a title="莫泰酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>时尚如家</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="莫泰酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/paibo.jpg) top center no-repeat; height: 550px;" TypeId="114">
                        <a title="派柏云酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>有态度<br/>有思想</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="派柏云酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/rujia.jpg) top center no-repeat; height: 550px;" TypeId="115">
                        <a title="如家酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>舒适如家</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="如家酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/xinyandu.jpg) top center no-repeat; height: 550px;" TypeId="116">
                        <a title="欣燕都酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>欣燕都<br/>新体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="欣燕都酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/yake.jpg) top center no-repeat; height: 550px;" TypeId="117">
                        <a title="雅客e家酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>e家空间<br/>雅客共享</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="雅客e家酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/yiju_lan.jpg) top center no-repeat; height: 550px;" TypeId="118">
                        <a title="驿居酒店（蓝）" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>品味驿动旅途</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="驿居酒店（蓝）" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/yssj.jpg) top center no-repeat; height: 550px;" TypeId="119">
                        <a title="云上四季酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>独特地域<br/>风情体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="云上四季酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/heyi_zhige.jpg) top center no-repeat; height: 550px;"
                         TypeId="120">
                        <a title="和颐至格酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>多彩人文<br/>商旅体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="和颐至格酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/heyi_zhishang.jpg) top center no-repeat; height: 550px;"
                         TypeId="121">
                        <a title="和颐至尚酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>人文商旅体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="和颐至尚酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/heyi_zhizun.jpg) top center no-repeat; height: 550px;"
                         TypeId="122">
                        <a title="和颐至尊酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>精致人文<br/>商旅体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="和颐至尊酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/jingxuan.jpg) top center no-repeat; height: 550px;" TypeId="123">
                        <a title="如家精选酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>创意商旅体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="如家精选酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/shanglv.jpg) top center no-repeat; height: 550px;" TypeId="124">
                        <a title="如家商旅酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>品质商旅体验</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="如家商旅酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/ruibo.jpg) top center no-repeat; height: 550px;" TypeId="125">
                        <a title="睿柏云酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>因睿智 显品质</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="睿柏云酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/subo.jpg) top center no-repeat; height: 550px;" TypeId="126">
                        <a title="素柏云酒店" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>寻初心 显真我</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="素柏云酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background: url(images/yiju_jin.jpg) top center no-repeat; height: 550px;" TypeId="127">
                        <a title="驿居酒店（金）" class="home_big_link" href="#" target="_blank"></a>
                        <dl>
                            <dt>品味驿动旅途</dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="驿居酒店（金）" href="/About/yj" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="128">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="129">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="130">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="131">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="132">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="133">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="134">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="135">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link" style="background: url() top center no-repeat; height: 550px;"
                         TypeId="136">
                        <dl>
                            <dt><br/></dt>
                            <dd name="home_big_img1Log"></dd>
                            <dd>
                                <a title="" href="" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>

                    <!--长租-->
                    <div class="home_big_img1"
                         style="background:url(images/douhao.jpg) top center no-repeat; height:550px;"
                         TypeId="home_douhao_logobg">
                        <a title="逗号公寓酒店" href="#" target="_blank"
                           class="home_big_link"></a>
                        <dl>
                            <dt>逗号，<br/>人生最美好的停顿</dt>
                            <dd><a title="逗号公寓酒店" href="#"
                                   target="_blank"><span class="home_douhao_icon"><em
                                    class="em_cm home_douhao_span"></em></span></a></dd>
                            <dd><a title="逗号公寓酒店" href="#" class="btn_detail"
                                   target="_blank">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/qingchao.jpg) top center no-repeat; height:550px;"
                         TypeId="home_qingchao_logobg">
                        <a title="青巢公寓酒店" href="#" target="_blank"
                           class="home_big_link"></a>
                        <dl>
                            <dt>我行我宿<br/>自由自宅</dt>
                            <dd><a title="青巢公寓酒店" href="#" target="_blank"><span
                                    class="home_qingchao_icon"><em class="em_cm home_qingchao_span"></em></span></a>
                            </dd>
                            <dd><a title="青巢公寓酒店" href="#" target="_blank"
                                   class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/douhao_zhijia.jpg) top center no-repeat; height:550px;"
                         TypeId="home_douhao_zhijia_logobg">
                        <a title="逗号之家酒店" href="#" target="_blank"
                           class="home_big_link"></a>
                        <dl>
                            <dt>城市栖居地<br/>未来添助力</dt>
                            <dd><a title="逗号之家酒店" href="#"
                                   target="_blank"><span class="home_douhao_zhijia_icon"><em
                                    class="em_cm home_douhao_zhijia_span"></em></span></a></dd>
                            <dd><a title="逗号之家酒店" href="#" target="_blank"
                                   class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>

                    <!--休闲度假-->
                    <div class="home_big_img1"
                         style="background:url(images/hanshe.jpg) top center no-repeat; height:550px;"
                         TypeId="home_hanshe_logobg">
                        <a title="首旅寒舍酒店" href="#" target="_blank" class="home_big_link"></a>
                        <dl>
                            <dt>乡村院落式<br/>高端精品度假酒店</dt>
                            <dd><a title="首旅寒舍酒店" href="#" target="_blank"><span class="home_hanshe_icon"><em
                                    class="em_cm home_hanshe_span"></em></span></a></dd>
                            <dd><a title="首旅寒舍酒店" href="#" class="btn_detail" target="_blank">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/jialebi.jpg) top center no-repeat; height:550px;"
                         TypeId="home_jialebi_logobg">
                        <a title="嘉乐比酒店" href="#" target="_blank" class="home_big_link"></a>
                        <dl>
                            <dt>嘉乐比，<br/>快乐在一起</dt>
                            <dd><a title="嘉乐比酒店" href="#" target="_blank"><span class="home_jialebi_icon"><em
                                    class="em_cm home_jialebi_span"></em></span></a></dd>
                            <dd><a title="嘉乐比酒店" href="#" target="_blank" class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/shiby.jpg) top center no-repeat; height:550px;"
                         TypeId="home_shiby_logobg">
                        <a title="诗柏云酒店" href="#" target="_blank" class="home_big_link"></a>
                        <dl>
                            <dt>享舒适<br/>品意境</dt>
                            <dd><a title="诗柏云酒店" href="#" target="_blank"><span class="home_shiby_icon"><em
                                    class="em_cm home_shiby_span"></em></span></a></dd>
                            <dd><a title="诗柏云酒店" href="#" target="_blank" class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/manqu.jpg) top center no-repeat; height:550px;"
                         TypeId="home_manqu_logobg">
                        <a title="漫趣乐园酒店" href="#" target="_blank" class="home_big_link"></a>
                        <dl>
                            <dt style="padding:0;">&nbsp;</dt>
                            <dd style="margin:78px 0 58px 0;"><a title="漫趣乐园酒店" href="#"
                                                                 target="_blank"><span class="home_manqu_icon"><em
                                    class="em_cm home_manqu_span"></em></span></a></dd>
                            <dd><a title="漫趣乐园酒店" href="#" target="_blank" class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link"
                         style="background:url(images/xiaozhen.jpg) top center no-repeat; height:550px;"
                         TypeId="home_xiaozhen_logobg">
                        <dl>
                            <dt>趣乡野<br/>享自然</dt>
                            <dd><span class="home_xiaozhen_icon"><em class="em_cm home_xiaozhen_span"></em></span></dd>
                            <dd><a title="如家小镇乡野俱乐部酒店" href="javascript:" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>
                    <div class="home_big_img1"
                         style="background:url(images/yssj_minsu.jpg) top center no-repeat; height:550px;"
                         TypeId="home_yssj_minsu_logobg">
                        <a title="云上四季民宿酒店" href="#" target="_blank" class="home_big_link"></a>
                        <dl>
                            <dt>遇见，<br/>最美的等待</dt>
                            <dd><a title="云上四季民宿酒店" href="#" target="_blank"><span
                                    class="home_yssj_minsu_icon"><em class="em_cm home_yssj_minsu_span"></em></span></a>
                            </dd>
                            <dd><a title="云上四季民宿酒店" href="#" target="_blank" class="btn_detail">了解详情</a>
                            </dd>
                        </dl>
                    </div>

                    <!---联盟酒店-->
                    <div class="home_big_img1 no_link"
                         style="background:url(images/rujia_lianmeng.jpg) top center no-repeat; height:550px;"
                         TypeId="home_rujia_lianmeng_logobg">
                        <dl>
                            <dt>如家联盟</dt>
                            <dd><span class="home_rujia_lianmeng_icon"><em class="em_cm home_rujia_lianmeng_span"></em></span>
                            </dd>
                            <dd><a href="#" class="btn_detail ">了解详情</a></dd>
                        </dl>
                    </div>
                    <div class="home_big_img1 no_link"
                         style="background:url(images/huayi.jpg) top center no-repeat; height:550px;"
                         TypeId="home_huayi_logobg">
                        <dl>
                            <dt>华驿酒店</dt>
                            <dd><span class="home_huayi_icon"><em class="em_cm home_huayi_span"></em></span></dd>
                            <dd><a href="#" class="btn_detail">了解详情</a></dd>
                        </dl>
                    </div>
                </ul>
            </div>
        </ul>
    </div>

    <div class="sub_box fix">

        <div class="main_w1200">
            <dl>
                <dt>人生就是旅行<br/>每一段的风景都是不同的主题</dt>
                <dd>
                    趁年轻去看看外面的世界，<br/>
                    用青春在旅途留下不悔的印记 / 守护并陪伴着Ta成长，<br/>
                    一点一滴中尽享天伦之乐 / 遇见质朴的乡村田野，<br/>
                    寻回那份久违的初心<br/>
                    首旅如家愿伴你走过人生的每一段风景、每一个主题。
                </dd>
                <a href="#">探索更多主题</a>
            </dl>
            <div class="sub_imgbox fl" style="width:675px; margin-left:146px;">
                <ul class="sub_imgL fl" style="margin-right:4px;">
                    <a href="#" target="_blank">
                        <img src="picture/subl2.jpg" width="446" height="446">
                        <span></span>
                        <b>YUNIK-上海中山公园延安西路店</b>
                    </a>

                </ul>

                <ul class="sub_imgR fl">
                    <li style="margin-bottom:5px;">
                        <a href="http://images.homeinns.com/Activity/theme/parent_child/parent_child.html"
                           target="_blank">
                            <img src="picture/subra1.jpg" width="221" height="221">
                            <span class="sp_b"></span>
                            <p>亲子游主题-北京松鹤建国饭店</p>
                        </a>


                    </li>
                    <li>
                        <a href="http://images.homeinns.com/Activity/theme/holidays/holidays.html" target="_blank">
                            <img src="picture/subra2.jpg" width="221" height="221">
                            <span class="sp_b"></span>
                            <p>休闲度假主题-三亚天通建国酒店</p>
                        </a>


                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="hot_tj fix">
        <h3>热门推荐酒店</h3>
        <ul class="main_w1200">
            <li class="fl"
                style="background: url(images/2f7fef48-a829-4762-a701-c19630489bba.jpg) center center no-repeat;">
                <span></span>
                <b>漫趣乐园丨如家上海浦东机场店</b>
                <div class="hot_tmbg"></div>
                <dl>
                    <dt>漫趣乐园<br/>如家上海浦东机场店</dt>
                    <p></p>
                    <dd>特惠价：<code>￥376</code>/晚</dd>
                    <a href="#" target='_blank'>立即预订</a>
                </dl>
            </li>
            <li class="fl"
                style="background: url(images/7f371a4b-1129-4eab-adee-51f0e89e7b1d.jpg) center center no-repeat;">
                <span></span>
                <b>建国酒店丨郑州新华建国酒店</b>
                <div class="hot_tmbg"></div>
                <dl>
                    <dt>建国酒店<br/>郑州新华建国酒店</dt>
                    <p></p>
                    <dd>特惠价：<code>￥194</code>/晚</dd>
                    <a href="#" target='_blank'>立即预订</a>
                </dl>
            </li>
            <li class="fl"
                style="background: url(images/1a5a74d6-c4b6-4509-9f53-c4b591f931d5.jpg) center center no-repeat;">
                <span></span>
                <b>建国饭店丨郑州建国饭店</b>
                <div class="hot_tmbg"></div>
                <dl>
                    <dt>建国饭店<br/>郑州建国饭店</dt>
                    <p></p>
                    <dd>特惠价：<code>￥399</code>/晚</dd>
                    <a href="#" target='_blank'>立即预订</a>
                </dl>
            </li>


        </ul>
    </div>

    <div class="footer_tip">
        <div class="main_w1200">
            <div class="footer_tipL">
                版权所有 © 2017 BellWoll.
                <br/>XX酒店管理有限公司
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>
</body>
<script>
    function chooseCity() {
        layui.use('layer', function(){
            var layer = layui.layer;
            layer.open({
                title: '城市选择'
                ,type:2
                ,area: ['500px', '300px']
                ,content: '${pageContext.request.contextPath}/chooseCity'
            });
        });
    }
    function searchHotel() {
        layui.use(['jquery','layer'], function(){
            var $ = layui.jquery,
            layer = layui.layer;
            var cityName = $("#cityName").val();
            var keyDescript = $("#keyDescript").val();
            if (keyDescript==null || ""==keyDescript){
                location.href="${pageContext.request.contextPath}/listHotel/"+cityName;
            }else{
                location.href="http://www.legna.top/search/searchHotel?cityName="+cityName+"&keyword="+keyDescript;
                //todo
            }

        });
    }
</script>
</html>

