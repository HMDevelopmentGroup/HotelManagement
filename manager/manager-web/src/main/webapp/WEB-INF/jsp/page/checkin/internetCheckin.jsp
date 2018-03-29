<%--
  Created by IntelliJ IDEA.
  User: 陈胜锋
  Date: 2018/3/26
  Time: 19:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all"/>
</head>
<body>
<button class="layui-btn" onclick="location.href='${pageContext.request.contextPath}/page/checkin/internetCheckin'">网络订单确认</button>
<button class="layui-btn" onclick="location.href='${pageContext.request.contextPath}/page/checkin/internetCheckinConfirm'">客人确定入住</button>
<div class="layui-form oeders_list">
    <table class="layui-hide" id="orderList" lay-filter="test"></table>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script>
    layui.use(['table','jquery'],function() {
        var table = layui.table,
            $ = layui.jquery;
        table.render({
            elem: '#orderList',
            url: '../../internetorderList',
            cellMinWidth: 80,
            page: true,
            limits: [2,10, 50, 100],
            cols: [[
                {
                    type: 'checkbox'
                }, {
                    field: 'ioid', title: '订单号', sort: true
                }, {
                    field: 'username', title: '客户账号'
                }, {
                    field: 'realname', title: '客户姓名'
                }, {
                    field: 'cname', title: '客房名称'
                }, {
                    field: 'start', title: '入住时间'
                }, {
                    field: 'end', title: '退房时间'
                }, {
                    field: 'days', title: '总天数'
                }, {
                    field: 'price', title: '总金额'
                }, {
                    field: 'i_status', title: '订单状态'
                },{
                field:'compile',title:'选定房间',toolbar:'#compile'
                }
            ]],
            done: function (res, curr, count) {
                $("[data-field='i_status']").children().each(function () {
                    if ($(this).text() == '1') {
                        $(this).text('待付款');
                    } else if ($(this).text() == '2') {
                        $(this).text('已付款');
                    }
                });
            }
        });

        table.on('tool(test)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if(layEvent === 'edit'){
                location.href="${pageContext.request.contextPath}/page/checkin/checkin/"+data.ioid;
            }
            if(layEvent=='cancel'){
                $.ajax({
                    url:"${pageContext.request.contextPath}/deleteInternetOrder/"+data.ioid,
                    success:function (data) {
                        if(data==1){
                        layer.confirm("取消成功",{btn:"确定"},function () {
                            location.reload();
                        });
                            }else{
                            layer.confirm("失败",{btn:"确定"});
                        }
                    }
                })
               
            }

        });
    })

</script>
<script type="text/html" id="compile">
    <a class="layui-btn layui-btn-xs" lay-event="edit">选取房间</a>
    <a class="layui-btn layui-btn-xs" lay-event="cancel">取消订单</a>
</script>
</body>
</html>
