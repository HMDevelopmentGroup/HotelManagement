<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>积分商城-商品详情页 </title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link href="${pageContext.request.contextPath}/css/8b224c531fcc4ff2b0298bc38144d922.css" rel="stylesheet"/>


</head>
<body>
<div class="wrapper">

    <!--header-->
    <div class="header">
        <!--top-->
        <div class="top">
            <div class="contain">
                <div class="right client">
                    <li>你好,尊敬的${user.realname}</li>
                </div>
                <div class="logo_nav">
                </div>
                <div class="clear">&nbsp;</div>
            </div>
        </div>
        <!--logo-->
        <div class="logo">
            <div class="contain">
                <div class="left"><a href="/"><img src="${pageContext.request.contextPath}/picture/logo_new.png"/></a>
                </div>
                <div class="clear">&nbsp;</div>
            </div>
        </div>
    </div>

    <!--nav-->
    <div class="nav">
        <div class="contain">
            <div class="clear">&nbsp;</div>
        </div>
    </div>
    <div class="bread">
        <div class="contain">
            <span class="fl">当前位置：</span><a href="${pageContext.request.contextPath}">首页</a><span class="fl">/</span><a
                href="${pageContext.request.contextPath}/shop">积分商城</a>
            <span class="fl">/</span><a href="#">商品详情</a>
        </div>
    </div>
    <div class="gray_bg">
        <div class="padding">
            <!--intro-->
            <div class="contain">
                <div class="intro">
                    <div class="padding">
                        <div class="left">
                            <div id="tsShopContainer" class="show_product">
                                <div id="tsImgS" class="show_img"><img width="300" height="300"
                                                                       src="${pageContext.request.contextPath}/picture/${productItem.productImages}"/>
                                </div>
                                <div id="tsPicContainer" class="scroll_group">
                                    <div id="tsImgSCon" class="scroll_img">
                                        <ul>
                                            <img src="${pageContext.request.contextPath}/picture/${pros.productImages}"
                                                 alt="">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="title">${productItem.productName}</div>
                            <div class="s_title"><font
                                    color="red"><strong>${productItem.productDescription}</strong></font></div>
                            <div class="s_title">当季热销精选</div>
                            <div class="product_details">
                                <form action="${pageContext.request.contextPath}/shop/integralorder" method="post">
                                    <ul>
                                        <li>
                                            <span class="l">商品规格</span>
                                            <div class="choice">
                                                <input type="hidden" name="productId" value="${productItem.productId}"/>
                                                <a href="#"
                                                   class="active">${productItem.productSpecification}<i></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <span class="l"></span>
                                            <div class="choice">
                                                <a href="#" name="price" priceid="1478181" class=" active"
                                                   title="7908 积分">${productItem.productIntegral}积分<i></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            联系电话号码:
                                            <input type="text" placeholder="请输入数字电话号码" id="integralTel"
                                                   name="integralTel" size="50">
                                            <br>
                                            配送地址:
                                            <input type="text" placeholder="请输入您要配送的地址" id="integralAddress"
                                                   name="integralAddress" size="80">
                                        </li>
                                    </ul>
                                    <div class="btn_group">
                                        <input type="submit" value="购买商品"
                                               style="background: lightpink;height: 30px;font-size:20px">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="clear">&nbsp;</div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

</body>
</html>