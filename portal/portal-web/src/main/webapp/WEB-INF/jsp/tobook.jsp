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
                    <div class="top_login_txt fl">
                        <span class="icon iconfont login_icon">&#xe60a;</span>
                        <a class="login_txt"
                           href="#">登录家宾会</a>
                        <code>|</code>
                        <dl class="top_login_xl">
                            <dt>
                                <a href="http://120.79.154.236:8088/sso/login">登录</a>
                            </dt>
                            <dd><a href="${pageContext.request.contextPath}/Order/FitOrderSelect">非会员查订单</a></dd>
                        </dl>
                    </div>
                    <a href="${pageContext.request.contextPath}/userRegister" class="login_line fl">注册</a>
                </div>
                <div class="clear"></div>
            </div>
        </div>


    <div style="position: relative;" align="center">


        <div class="list_main" align="center">
            <div class="container" style="width: 1200px">
                <div class="row" >
                    <form class="layui-form" action="${pageContext.request.contextPath}/tobook2/${hid}">
                        <div style="padding-bottom:10px; padding-left:10px;padding-right:10px;padding-top:10px; border-bottom:solid 1px darkgray ; border-left:solid 1px darkgray; border-right:solid 1px darkgray; border-top:solid 1px darkgray;border-radius:5px ;width:1000px; height:80px;line-height:80px">

                            入住
                            <div class="layui-inline">
                            <input type="text" class="layui-input" id="start" name="start" lay-verify="required">
                        </div>

                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;退房
                            <div class="layui-inline">
                                <input type="text" class="layui-input" id="end" name="end" lay-verify="required">
                            </div>


                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                            &nbsp; &nbsp; &nbsp; &nbsp;

                            <button class="layui-btn layui-btn-danger" lay-submit lay-filter="*">确定</button>
                        </div>
                        <br />

                    </form>
                </div>

                <div class="row">
                    <c:forEach items="${roomCates}" var="roomtype">

                        <div style="margin: 20px;padding-bottom:10px; padding-left:10px;padding-right:10px;padding-top:10px;margin: auto; border-bottom:solid 1px darkgray ; border-left:solid 1px darkgray; border-right:solid 1px darkgray; border-top:solid 1px darkgray;border-radius:5px ;overflow:hidden;width:1000px; height:300px;">
                            <div style="height: 165px;">
                                <div style="float: left;">
                                    <img src="${pageContext.request.contextPath}/images/${roomtype.images}"  width="300px" height="150px" style="border-radius: 5px;"/>

                                </div>
                                <div style="float: left;padding-left:10px;padding-top:10px">
                                    <br />
                                    <br />
                                    <br />
                                    <span style="font-family: SimSun;font-size: larger;">${roomtype.cname}</span>
                                    <br />
                                    <br />
                                    <br />
                                    <span style="font-family: SimSun;font-size: small;">最多入住：${roomtype.numlimit}</span>
                                </div>
                                <div style="float: right;">
                                    <br />
                                    <br />
                                    <br />
                                    <span style="font-family: SimSun;font-size:50px;color: red;padding-right:10px;padding-top:10px">￥${roomtype.price}</span>
                                </div>
                            </div>

                            <div>
                                <table class="layui-table" lay-even lay-skin="nob">
                                    <thead>
                                    <tr>
                                        <td></td>
                                        <td>早餐</td>
                                        <td>总房价</td>
                                        <td>房量</td>
                                        <td></td>
                                    </tr>
                                    </thead>
                                    <tr>
                                        <td>预付优惠价</td>
                                        <td>不含早餐</td>
                                        <td>￥${roomtype.price}</td>
                                        <td></td>
                                        <td id="reserve">
                                            <form action="${pageContext.request.contextPath}/addInternetOrder" >
                                                <input name="start" value="${start}" hidden="hidden">
                                                <input name="end" value="${end}" hidden="hidden">
                                                <input name="cid" value="${roomtype.cid}" hidden="hidden">
                                                <input name="price" value="${roomtype.price}" hidden="hidden">

                                            <c:if test="${roomtype.confirmEmpty==999}">
                                            <button class="layui-btn layui-btn-danger" id="reserveButton${roomtype.cid}" style="background-color: #4E5465" disabled="disabled">满房</button>
                                            </c:if>
                                            <c:if test="${roomtype.confirmEmpty!=999}">
                                                <c:if test="${aaa==1}">
                                                <button class="layui-btn layui-btn-danger" id="reserveButton${roomtype.cid}" type="submit" disabled="disabled">预定</button>
                                            </c:if>
                                                <c:if test="${aaa!=1}">
                                                    <button class="layui-btn layui-btn-danger" id="reserveButton${roomtype.cid}" type="submit" >预定</button>
                                                </c:if>
                                            </c:if>

                                            </form>



                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <br />
                        <br />

                    </c:forEach>
                </div>
            </div>
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

'${pageContext.request.contextPath }/department/update?did="+obj1+"'>"
</html>

