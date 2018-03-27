<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>选择城市</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css">
</head>
<form class="layui-form" action="">
<div style="margin: 50px auto; width:580px;">
    <fieldset class="layui-elem-field">
        <legend>选择城市</legend>
        <div class="layui-field-box">
            <div class="layui-input-inline">
            <select name="city" lay-filter="province" lay-verify="" onchange="selectCity(this)">
                <option value="">请选择省市</option>
                <option value="1">上海市</option>
                <option value="2">江苏省</option>
                <option value="3">浙江省</option>
                <option value="4">福建省</option>
                <option value="5">山东省</option>
            </select>
            <select name="city" id="city" lay-filter="city" lay-verify="">
                <option value="">请选择城市</option>
            </select>
            </div>
        </div>
    </fieldset>
</div>
</form>

</body>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script>
    layui.use(['form','jquery','layer'],function() {
        var form = layui.form,
            layer=layui.layer,
            $ = layui.jquery;
        form.on('select(province)', function(data){
            $.post("${pageContext.request.contextPath}/getCity/" +data.value,
                function (data) {
                    creatCityOption(data);
                });
        });
        function creatCityOption(data) {
            var html ="";
            for (var i=0;i<data.data.length;i++){
                html+='<option value='+data.data[i].cname+'>'+data.data[i].cname+'</option>'
            }
            $("#city").append(html);
            form.render();
        }
        form.on('select(city)', function(data){
            parent.$("#cityName").val(data.value);
            var index=parent.layer.getFrameIndex(window.name);
            parent.layer.close(index);
        });
    });

</script>
</html>
