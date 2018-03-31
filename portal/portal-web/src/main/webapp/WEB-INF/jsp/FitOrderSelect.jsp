<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>


    <title>散客订单查询</title>
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

    <div class="top">
        <div class="main_w1200 top_nav">
            <a href="/" class="top_logo">
                <div class="brands_logo"></div>
            </a>
            <ul class="nav">
                <li id="yuding">
                    <a href="/list/shanghai" onclick="publicFn(1, '002359');">酒店预订</a>
                    <div class="nav_con">
                        <a href="/map/">地图预订</a>
                        <a href="http://www.douhaogongyu.com">公寓预订</a>
                        <a href="http://yl.homeinns.com/">银旅卡预订</a>

                    </div>
                </li>
                <li id="cuxiao"><a href="/promotion/index">优惠促销</a></li>
                <li id="jiabinhui">
                    <a href="/Member/MemberIndex">家宾会</a>
                    <div class="nav_con">
                        <a href="/Member/MemberManual">会员手册</a>
                        <a href="/Member/MemberNotice">会员公告</a>
                        <a href="http://login.bthhotels.com/onlinecard/purchase" target="_blank">会员购卡</a>
                    </div>
                </li>
                <li id="jifenshangcheng"><a href="http://shop.homeinns.com/">积分商城</a></li>
                <li id="jingcaishanglv">
                    <a style="cursor:default;">精彩商旅</a>
                    <div class="nav_con">
                        <a href="http://images.homeinns.com/sensual/index.html">商旅生活</a>

                    </div>
                </li>
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
            <div class="right_icon">

                <a href="/en" class="hover_icon english" title="">
                    English

                </a>
                <a href="http://wkf.homeinns.com/robot/rujia.html?sysNum=139577692477010" target="_blank"
                   class="hover_icon Customer_service">
                    <span></span>
                    <code>在线客服</code>
                </a>
                <a target="_blank" href="http://images.homeinns.com/Activity/game_money/index.html"
                   class="hover_icon game_icon">
                    <span></span>
                    <code>游戏大厅</code>
                </a>
                <div class="app_head_box">
                    <code></code>
                    <dl>
                        <dt><img src="${pageContext.request.contextPath}/picture/app_ewm_new.jpg"></dt>
                        <dd>下载APP尊享超值礼包</dd>
                        <a href="/App/index">立即下载</a>
                    </dl>
                </div>

            </div>
            <div class="top_login">
                <div class="top_login_txt fl">
                    <span class="icon iconfont login_icon">&#xe60a;</span>
                    <a class="login_txt"
                       href="https://login.bthhotels.com/login/index?returnUrl=http%3a%2f%2fwww.bthhotels.com%2fOrder%2fFitOrderSelect">登录家宾会</a>
                    <code>|</code>
                    <dl class="top_login_xl">
                        <dt>
                            <a href="https://login.bthhotels.com/login/index?returnUrl=http%3a%2f%2fwww.bthhotels.com%2fOrder%2fFitOrderSelect">登录</a>
                        </dt>
                        <dd><a href="${pageContext.request.contextPath}/Order/FitOrderSelect">非会员查订单</a></dd>
                    </dl>
                </div>
                <a href="https://login.bthhotels.com/Reg" class="login_line fl">注册</a>
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
            <form id="search_form">
                <div class="item error fix">
                    <label id="label"></label>
                    <label>您的姓名/手机号</label>
                    <input type="text" name="info" class="ipt" id="user_name_ipt" maxlength="20">
                    <span id="user_name_sp1">您输入的姓名/手机号格式不对</span>
                </div>
                <div class="item fix">
                    <label>订单号码</label>
                    <input type="text" name="orderNo" class="ipt" id="order_ipt">
                    <span id="order_sp1">您输入的订单号格式不对</span>
                </div>
                <input type="button" value="查询" class="bth" id="submit_btn"/>
            </form>
        </div>
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

<script type="text/javascript">
    $(function () {
        $('#user_name_ipt').blur(function () {
            var user_name_val = $('#user_name_ipt').val();
            var re_tel = /^1[34578]\d{9}$/;
            // var re_name = /(^[A-Za-z_]+$)|(^[\u4E00-\u9FA5]$)/;
            var re_name = /\D+/;
            if (re_tel.test(user_name_val) || re_name.test(user_name_val)) {
                $('#user_name_ipt').css('border', '');
                $('#user_name_sp1').css('display', "none");
            } else if (user_name_val == "") {
                $('#user_name_ipt').css('border', '1px solid #C0191F');
                $('#user_name_sp1').css('display', "block");
                $('#user_name_sp1').html('用户名/手机号不能为空')
            } else {
                $('#user_name_ipt').css('border', '1px solid #C0191F');
                $('#user_name_sp1').css('display', "block");
                $('#user_name_sp1').html('用户名/手机号格式错误')
            }
        });
        var order_Ipt = document.getElementById('order_ipt');
        var order_Sp1 = document.getElementById('order_sp1');
        $('#order_ipt').blur(function () {
            var order_val = $('#order_ipt').val();
            var re_order = /^[A-Za-z0-9]+$/;
            if (re_order.test(order_val)) {
                $('#order_ipt').css('border', '');
                $('#order_sp1').css('display', "none");

            } else if (order_val == "") {
                $('#order_ipt').css('border', '1px solid #C0191F');
                $('#order_sp1').css('display', "block");
                $('#order_sp1').html('订单号为32位字母和数字')
            } else {
                $('#order_ipt').css('border', '1px solid #C0191F');
                $('#order_sp1').css('display', "block");
                $('#order_sp1').html('订单号为32位字母和数字')
            }
        });

    });
    $(document).ready(function () {
        $("#submit_btn").click(function () {
            if ($('#user_name_sp1').css('display') != "block" && $('#order_sp1').css('display') != "block") {
                $.ajax({
                    type: 'post',
                    url: '${pageContext.request.contextPath}/checkFitOrder',
                    data: $("#search_form").serialize(),
                    async: false,
                    dataType: "text",
                    success: function (data) {
                        if (data == '1') {
                            var info = $('#user_name_ipt').val();
                            var orderNo = $('#order_ipt').val();
                            location.href = "${pageContext.request.contextPath}/Order/FitOrder?info=" + info + "&orderNo=" + orderNo
                        } else {
                            $.messager.alert("系统提示", "<font size='3' color='green'>查无此订单！！！！！<font>");

                        }
                    }
                });
            }

        });
    });



</script>


</body>

</html>

