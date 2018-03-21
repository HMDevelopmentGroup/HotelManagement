<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>会员入住--layui后台管理模板</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all"/>
    <style type="text/css">
        .layui-form-item .layui-inline {
            width: 33.333%;
            float: left;
            margin-right: 0;
        }

        @media (max-width: 1240px) {
            .layui-form-item .layui-inline {
                width: 100%;
                float: none;
            }
        }
    </style>
</head>
<body class="childrenBody">
<form class="layui-form" style="width:80%;" id="userInfo" action="${pageContext.request.contextPath}/checkinfomember" method="post">
    <div class="layui-form-item">
        <label class="layui-form-label">会员手机号</label>
        <div class="layui-input-block">
            <!-- RESTFul风格 -->
            <input type="hidden" name="_method" value="POST" />
            <input type="hidden" name="rid" value="${rid}">
            <input type="hidden" name="uid" value="0">
            <input type="tel" name="telephone" id="telephone" lay-verify="required|phone"  class="layui-input"
                   placeholder="请输入会员手机号" autocomplete="off">
            <span id="phone" class="layui-field-box" style="color: #e60000"></span>
        </div>
    </div>

    <div class="layui-form-item">
        <label class="layui-form-label">跟随者</label>
        <div class="layui-input-block">
            <input type="text" name="subs"  class="layui-input" placeholder="请输入跟谁者姓名，没有可不填"
                   autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">跟随者身份证</label>
        <div class="layui-input-block">
            <input type="text" name="subids"  class="layui-input" placeholder="请输入跟谁者身份证，没有可不填"
                   autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
    <div class="layui-inline">
        <label class="layui-form-label">开始日期</label>
        <div class="layui-input-block">
            <input type="text"  id="test1" name="start"  class="layui-input" lay-verify="required" autocomplete="off">
        </div>
    </div>
</div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">结束日期</label>
            <div class="layui-input-block">
                <input type="text"  id="test2" name="end"  class="layui-input" lay-verify="required" autocomplete="off" >
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">天数</label>
            <div class="layui-input-block">
                <input type="text"  id="days" name="days"  lay-verify="required"  class="layui-input" autocomplete="off" >
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-submit="" id="sub" >立即提交</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </div>
</form>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/addUser.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script >
    layui.use(['jquery', 'layer'], function(){
        var $ = layui.jquery //重点处
            ,layer = layui.layer;

        $("#telephone").blur(function () {
            $.ajax({
                type:"get",
                data:{"telephone": $("#telephone").val()},
                url:"${pageContext.request.contextPath}/confirmTelepehone",
                success:function (data) {
                    if(data!=1){
                        layer.msg("没有此会员");
                        $("#sub").attr("disabled",true);
                    }else{
                        $("#sub").attr("disabled",false);
                    }
                },
                dataType:"json"

            });
        });

    });

</script>
<script>
    layui.use('laydate', function(){
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
            elem: '#test1'//指定元素s
            ,value: new Date()
            ,min:0
            ,max:0
        });
        laydate.render({
            elem: '#test2'//指定元素s
            ,min:0
            ,done: function(value, date, endDate){
                DateDiff();
            }
        });
    });

    function  DateDiff(){
      var sDate1= document.getElementById("test1").value;
       var sDate2= document.getElementById("test2").value;
        var  aDate,  oDate1,  oDate2,  iDays;
        aDate  =  sDate1.split("-");
        oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);
        aDate  =  sDate2.split("-");
        oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);
        iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24);
        var days=document.getElementById("days");
        days.value=iDays+1;
    }
</script>

</body>
</html>