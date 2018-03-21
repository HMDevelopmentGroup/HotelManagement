<%--
  Created by IntelliJ IDEA.
  User: 陈胜锋
  Date: 2018/3/20
  Time: 20:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>订单支付</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all"/>
</head>
<body>
<table class="layui-table">
    <colgroup>
        <col width="150">
        <col width="200">
        <col>
    </colgroup>
    <thead>
    <tr>
        <th>订单编号</th>
        <th>创建时间</th>
        <th>金额</th>
        <th>支付状态</th>
        <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>${order.oid}</td>
        <td>${order.ordertime}</td>
        <td>${order.price}</td>
        <td>未支付</td>
        <td><button class="layui-btn" id="pay">确认支付</button></td>
    </tr>
    </tbody>

</table>

<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script>
    layui.use(['jquery', 'layer'], function(){
        var $ = layui.$ //重点处
            ,layer = layui.layer;


        $("#pay").click(function(){
            $.ajax({

              url: "${pageContext.request.contextPath}/pay/${order.oid}/${rid}/${cid}",
                type:"get",
             success:   function (data) {
                    if(data!=null){
                        alert("支付成功");
                        location.href="${pageContext.request.contextPath}/page/checkin/checkin";
                    }else{
                        alert("支付失败");
                    }
                },
               dataType:"json"}
            );
        })


    });
</script>
</body>
</html>
