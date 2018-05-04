<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>


    <title>散客订单列表</title>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
    <meta name="description"/>
    <meta name="keywords"/>

    <link href="${pageContext.request.contextPath}/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    <link href="${pageContext.request.contextPath}/css/reset.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/iconfont.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public.css" rel="stylesheet"/>

    <link href="${pageContext.request.contextPath}/css/myhome.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/reset.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/iconfont.css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/public_h5.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/myhome_h5.css">


    <link rel="stylesheet" type="text/css"
          href="${pageContext.request.contextPath}/easyui/jquery-easyui-1.5/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css"
          href="${pageContext.request.contextPath}/easyui/jquery-easyui-1.5/themes/icon.css">
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/easyui/jquery-easyui-1.5/jquery.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/easyui/jquery-easyui-1.5/jquery.easyui.min.js"></script>
    <script type="text/javascript"
            src="${pageContext.request.contextPath}/easyui/jquery-easyui-1.5/locale/easyui-lang-zh_CN.js"></script>

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
            <a href="#">散客订单</a>
            <a class="breadon" href=""></a>
        </div>
    </div>

    <div style="margin-left:80px;margin-top:10px;margin-bottom:80px;font-size:20px ">
        <table  style="margin-top: 20px;font-family: 宋体 " cellpadding="0" cellspacing="0" >
            <tr style="background-color: #626262;color: red">
                <td style="padding: 5px;">订单号</td>
                <td style="padding-left: 60px">入住人</td>
                <td style="padding-left: 70px">身份证</td>
                <td style="padding-left: 30px">房间号</td>
                <td style="padding-left: 40px">开始时间</td>
                <td style="padding-left: 40px">退房时间</td>
                <td style="padding-left: 40px">总天数</td>
                <td style="padding-left: 60px">总金额</td>
            </tr>
            <c:forEach items="${customList}" var="custom">
            <tr style="font-family: '黑体';color: #8d602e">
                <td>${custom.oid}</td>
                <td style="padding-left: 60px">${custom.offer}</td>
                <td style="padding-left: 30px">${custom.offerid}</td>
                <td style="padding-left: 30px">${custom.rid}</td>
                <td style="padding-left: 25px">${custom.start}</td>
                <td style="padding-left: 35px">${custom.end}</td>
                <td style="padding-left: 55px">${custom.days}</td>
                <td style="padding-left: 70px">${custom.price}</td>
            </tr>
            </c:forEach>
        </table>
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
                            <img src="${pageContext.request.contextPath}/picture/appqrcode_new.png" width="135"/>
                            <p>下载APP尊享超值礼包</p>
                        </div>
                        <div class="footerR_r">
                            <img src="${pageContext.request.contextPath}/picture/public_signal.png" width="135"/>
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
                版权所有 © 2014 Homeinns Co.,Ltd All Rights Reserved.
                <br/>和美酒店管理（上海）有限公司 沪ICP备15017896号-8号
            </div>
            <div class="footer_tipR">
                <dl>
                    <dt class="gs_icon"><i></i></dt>
                    <dd class="gs_name">上海工商</dd>
                </dl>
                <dl>
                    <dt class="wj_icon"><i></i></dt>
                    <dd>上海网警<br/>网络110</dd>
                </dl>
                <dl>
                    <dt class="wl_icon"><i></i></dt>
                    <dd>网络社会<br/>征信网</dd>
                </dl>
                <dl>
                    <dt class="icp_icon"><i></i></dt>
                    <dd>沪ICP备<br/>15017896号-8</dd>
                </dl>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</div>

</body>

</html>

