<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/3/19
  Time: 21:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>办理入住</title>
</head>
<style type="text/css">

    .style3 {
        color: #FF0000;
        font-weight: bold;
        text-decoration: underline;
    }

    .ts {
        font-size: 14px;
        color: #FF7200;
        text-decoration: none;
        height: 40px;
        width: 480px;
        background-color: #FDF7CB;
        border-top: 1px solid #6FB16E;
        border-right: 1px solid #6FB16E;
        border-bottom: 1px solid #6FB16E;
        border-left: 1px solid #6FB16E;
        padding-left: 5px;
        padding-right: 5px;
        letter-spacing: 0em;
        margin-left: 10px;
        word-spacing: 0em;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    .big {
        border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: #333333;
    }

    #dhbt1 {
        background-image: url(${pageContext.request.contextPath}/images/an_1.gif);
        background-repeat: no-repeat;
        height: 20px;
        width: 100px;
        font-size: 12px;
        color: #000000;
        text-decoration: none;
        float: left;
        text-align: center;
        padding-top: 5px;
    }

    #dhbt1 a {
        font-size: 13px;
        line-height: 20px;
    }

    #dhbt2 a {
        font-size: 13px;
        line-height: 20px;
    }

    #dhbt1 a:hover {
        color: #F66200;
        text-decoration: none
    }

    #dhbt1 a:link {
        color: #000000;
        text-decoration: none
    }

    #dhbt1 a:visited {
        color: #000000;
        text-decoration: none
    }

    #dhbt2 {
        background-image: url(${pageContext.request.contextPath}/images/an_2.gif);
        background-repeat: no-repeat;
        height: 20px;
        width: 100px;
        font-size: 12px;
        color: #F66200;
        text-decoration: none;
        float: left;
        text-align: center;
        padding-top: 5px;
        font-weight: bold;
    }

    #dhbt2 a:hover {
        color: #F66200;
        text-decoration: none
    }

    #dhbt2 a:link {
        color: #F66200;
        text-decoration: none
    }

    #dhbt2 a:visited {
        color: #F66200;
        text-decoration: none
    }

    #fj_new01 {
        background-image: url(${pageContext.request.contextPath}/images/fj_new01.gif);
        height: 90px;
        width: 90px;
        float: left;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    #fj_new02 {
        background-image: url(${pageContext.request.contextPath}/images/fj_new02.gif);
        height: 90px;
        width: 90px;
        float: left;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    #fj_new02_s {
        background-image: url(${pageContext.request.contextPath}/images/fj_new02_s.gif);
        height: 90px;
        width: 90px;
        float: left;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    #fj_new03 {
        background-image: url(${pageContext.request.contextPath}/images/fj_new03.gif);
        height: 90px;
        width: 90px;
        float: left;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    #fj_new04 {
        background-image: url(${pageContext.request.contextPath}/images/fj_new04.gif);
        height: 90px;
        width: 90px;
        float: left;
        margin-top: 3px;
        margin-bottom: 15px;
    }

    #ps {
        height: 60px;
        font-size: 25px;
        width: 90px;
        text-align: center;
        overflow: hidden;
    }

    .ps_txt_div {
        padding-top: 20px;
    }

    .ps_txt {
        height: 50px;
        font-size: 15px;
        width: 90px;
        text-align: center;
        line-height: 20px;
        overflow: hidden;
    }

    .ps_txt:link {
        font-family: "宋体";
        font-size: 23px;
        line-height: 20px;
        color: #000000;
        text-decoration: none;
    }

    .ps_txt:visited {
        font-family: "宋体";
        font-size: 23px;
        line-height: 20px;
        color: #000000;
        text-decoration: none;
    }

    .ps_txt:active {
        font-family: "宋体";
        font-size: 23px;
        line-height: 20px;
        color: #000000;
        text-decoration: none;
    }

    .ps_txt:hover {
        font-family: "宋体";
        font-size: 23px;
        line-height: 20px;
        color: #ffff00;
        text-decoration: none;
    }

    #wz {
        height: 30px;
        text-align: center;
    }

    .wz_txt {
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: #FFFFFF;
        text-decoration: none;
        overflow: hidden;
    }

    .wz_txt:link {
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: #FFFFFF;
        text-decoration: none;
    }

    .wz_txt:visited {
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: #FFFFFF;
        text-decoration: none;
    }

    .wz_txt:active {
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: #FFFFFF;
        text-decoration: none;
    }

    .wz_txt:hover {
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        width: 90px;
        text-align: center;
        font-weight: bold;
        color: #ffff00;
        text-decoration: none;
    }
</style>
<body>
<c:forEach items="${rooms}" var="room">
    <div id="fj_new02">
        <div id="ps">
            <div style="position:absolute; height:33px; z-index:50;float: left;">
                <a href="#" onclick="checkout('${room.rid}')">
                <img src="${pageContext.request.contextPath}/images/sj.gif" alt="到期提醒" border="0">
                </a>
            </div>
            <div class='ps_txt_div'>
                <a href='#' onclick="checkout('${room.rid}')" class='ps_txt'>
                        ${room.rname}<br>
                <span style='font-size:12px;color:#666666;'>
                    <c:if test="${room.cateid==1}">
                        单人房
                    </c:if>
                    <c:if test="${room.cateid==2}">
                        大床房
                    </c:if>
                    <c:if test="${room.cateid==3}">
                        双床房
                    </c:if>
                    <c:if test="${room.cateid==4}">
                        商务房A
                    </c:if>
                    <c:if test="${room.cateid==5}">
                        商务房B
                    </c:if>
                    <c:if test="${room.cateid==6}">
                        青年房
                    </c:if>
                    <c:if test="${room.cateid==7}">
                        套房A
                    </c:if>
                    <c:if test="${room.cateid==8}">
                        套房B
                    </c:if>
                    <c:if test="${room.cateid==9}">
                        至尊情侣房
                    </c:if>
                    <c:if test="${room.cateid==10}">
                        总统套房
                    </c:if>
                    </span></a>
            </div>
        </div>
        <div id="wz">
            <a href='#' onclick="checkout('${room.rid}')" class='wz_txt'>${room.offer}</a>
        </div>
    </div>
</c:forEach>

</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script>
    function checkout(rid) {
        layui.use('layer', function () {
            var layer = layui.layer;
            layer.confirm("确认要退房吗？",function () {
                location.href="${pageContext.request.contextPath}/page/checkout/checkout.do/"+rid;
            })
        });
    }
</script>
</html>
