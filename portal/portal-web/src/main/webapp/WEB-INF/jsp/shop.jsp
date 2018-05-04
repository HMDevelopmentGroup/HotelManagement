<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>积分商城-首页 </title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="${pageContext.request.contextPath}/css/4e00fcd5109843afabde12e31bf9d47b.css" rel="stylesheet"/>
    <script src="${pageContext.request.contextPath}/js/7923559a33364e628209048f797651f6.js"></script>
    <!-- Gridsum tracking code begin. -->
    <script type='text/javascript'>
        var _gsq = _gsq || [];
        (function () {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = (location.protocol == 'https:' ? 'https://ssl.' : 'http://static.') + 'gridsumdissector.com/js/Clients/GWD-002359-B69F32/gs.js';
            var    firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(s, firstScript);
        })();
    </script>
    <!--Gridsum tracking code end. -->
</head>
<body onresize="picResize()">
<div class="wrapper">

    <!--header-->
    <div class="header">
        <!--top-->
        <div class="top">
            <div class="contain">
                <div class="right client">
                    <li>你好,尊敬的${user.realname}</li>
                </div>
                <div class="logo_nav"></div>
                <div class="clear">&nbsp;</div>
            </div>
        </div>
        <!--logo-->
        <div class="logo">
            <div class="contain">
                <div class="right"><a href="/member/myinfo"><em class="icon iadd"></em>我的商城</a><a href="/cart"><em class="icon iaddcart"></em>购物车</a><div style="display:none"><span class="cartcount">0</span>件</div></div>
                <div class="left"><a href="/"><img src="${pageContext.request.contextPath}/picture/logo_new.png" /></a></div>
                <div class="clear">&nbsp;</div>
            </div>
        </div>
    </div>

    <!--nav-->
    <div class="nav">
        <div class="contain">
            <div class="search_input right">
                <input type="text" name="keyWords" class="keyWords" placeholder="搜索您想要的产品" value="" />
                <a href="javascript:;" onclick=""><em class="icon isearch"></em></a>
            </div>
            <div class="left">
                <div class="hc_lnav jslist">
                    <div class="drop">
                        <ul>

                            <li id="all_fl">
                                <a href="/product/list" class="red_bg">全部商品分类</a>
                                <ul>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=102">家居日用</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=104">健康食品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=21">个护化妆</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=22">家纺用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=265">洗涤用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=24">生活用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=266">卫浴用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=267">收纳用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=54">厨房用具</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=219">健康饮品</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/byte72/locate">智能生活</a>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=101">数码家电</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=112">生活电器</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=114">影音娱乐</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=71">手机配件</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=72">移动存储</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=81">移动电源</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=103">时尚科技</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=30">厨房电器</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=38">数码配件</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=117">无线设备</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=106">商务出行</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=197">拉杆箱包</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=107">户外用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=146">户外背包</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=147">出行用具</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=148">时尚背包</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=28">运动健康</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=105">保健用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=49">健身用品</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=29">车用车饰</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=99">车辆养护</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=50">车载用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=137">车载工具</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=138">车载电器</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=220">时尚礼品</a>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=109">母婴保健</a>
                                        <ul>
                                            <li>
                                                <a href="/product/list?cId=110">婴儿用品</a>
                                            </li>
                                            <li>
                                                <a href="/product/list?cId=111">儿童娱乐</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=270">虚拟卡券</a>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/list?cId=217">其他</a>
                                    </li>
                                    <li>
                                        <a _fcksavedurl="#" href="/product/birthday">生日特惠</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <span class="menu">
                <a href="/about/xuzhi">兑换须知</a>
                </span>
            </div>
            <div class="clear">&nbsp;</div>
        </div>
    </div>

    <!--content start-->
    <div class="home">
        <!--banner-->
        <div class="banner">
            <div class="index_pic">
                <ul>
                    <li gsregion="1" gssnapshot="1"><a href="http://images.homeinns.com/Activity/hand_trip/index-pc.html" target="_blank" title="初春活动-斯威夫特" ><img src="${pageContext.request.contextPath}/picture/201803151031061002.jpg" alt="初春活动-斯威夫特" title="初春活动-斯威夫特" /></a></li>
                </ul>
            </div>
            <div id="hao">
                <a class="xu"></a>
            </div>
            <div id="prev"></div>
            <div id="next"></div>
        </div>
        <div class="recommend1">
            <div class="contain id_pisition">
                <div id="mq1" class="rcm_list fl">
                    <ul>
                        <li><a href="/act/yoga" target="_blank"><img src="${pageContext.request.contextPath}/picture/jf_pic01.jpg" /></a><div class="list_title">人鱼线马甲线</div></li>
                        <li><a href="/act/hfll" target="_blank"><img src="${pageContext.request.contextPath}/picture/jf_pic03.jpg" /></a><div class="list_title">积分兑换手机话费/上网流量</div></li>
                        <li><a href="/act/fruitday"><img src="${pageContext.request.contextPath}/picture/fruid_jf.jpg" /></a><div class="list_title">积分兑换天天果园30元充值卡</div></li>
                        <li><a href="/act/kangle" target="_blank"><img src="${pageContext.request.contextPath}/picture/pc_index.jpg" /></a><div class="list_title">餐饮康乐兑换券</div></li>
                    </ul>
                    <div style="clear:both;"></div>
                </div>
                <div class="last-li fr">
                    <div class="sign_t">
                        <img class="fl" src="${pageContext.request.contextPath}/picture/gift1.png" />
                        <div class="sgn_btn mt10 fr" id="regist">立即签到</div>
                        <span class="red fr mr10">~ 享 好 礼 ~</span>
                        <div class="clear"></div>
                    </div>
                    <div class="sign_b">
                        <ul>
                            <li>31369<br /><span>正在兑换</span></li>
                            <li class="bd_r"></li>
                            <li>1627188<br /><span>累计兑换</span></li>
                        </ul>
                    </div>
                </div>
                <div style="clear:both;"></div>
            </div>
            <div style="clear:both;"></div>
        </div>

        <!--product-->
        <div class="product" id="p1">
            <div class="title">
                <div class="contain">
                    <div class="padding">
                        <div class="left">
                            <h1>当季热销精选</h1>
                            <span></span>
                        </div>
                        <div class="clear">&nbsp;</div>
                    </div>
                </div>
            </div>
            <div class="red_line"></div>
            <div class="content">
                <div class="contain">
                    <div class="block_all">
                        <c:forEach items="${productItems}" var="pros">
                            <div class="block">
                            <div class="img">
                                <a href="${pageContext.request.contextPath}/shop/productItem/${pros.productId}" target='_blank'>
                                    <img src="${pageContext.request.contextPath}/picture/${pros.productImages}" alt="">
                                 </a>
                            </div>
                                <dl>
                                <dt><a href="${pageContext.request.contextPath}/shop/productItem/${pros.productId}" target='_blank'>${pros.productName}</a></dt>
                                    <dd>
                                    <h2 class="red">${pros.productIntegral}</h2><span class="red">积分</span>
                                    </dd>
                                </dl>
                            <a href="javascript:;" class="addcart"><em class="icon iaddcart"></em>加入购物车</a>
                            </div>
                        </c:forEach>
                        <div class="clear">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="js/8a9bb1f8df004b74976db2c7a178fc2a.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.fly.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/banner.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/magiczoom.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-datepicker.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/picmarquee.js"></script>
</body>
</html>
