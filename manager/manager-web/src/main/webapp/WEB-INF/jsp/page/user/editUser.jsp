<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>会员编辑--layui后台管理模板</title>
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
<form class="layui-form" style="width:80%;" id="userInfo" action="${pageContext.request.contextPath}/user"
      method="post">
    <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
            <!-- RESTFul风格 -->
            <input type="hidden" name="_method" value="PUT"/>
            <input type="hidden" name="uid" value="${user.uid}"/>
            <input type="text" name="username" id="username" value="${user.username}" lay-verify="username"
                   onblur="checkUsername()" class="layui-input userName"
                   placeholder="请输入用户名" autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
            <input type="password" name="password" id="password" value="" lay-verify="pass"
                   class="layui-input password"
                   placeholder="请输入密码" autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">确认密码</label>
        <div class="layui-input-block">
            <input type="password" name="repassword" value="" lay-verify="rePass" class="layui-input password"
                   placeholder="请再次输入密码" autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">手机号</label>
            <div class="layui-input-inline">
                <input type="tel" name="telephone" value="${user.telephone}" lay-verify="phone"
                       placeholder="请输入手机号" autocomplete="off" class="layui-input">
            </div>
        </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">性别</label>
            <div class="layui-input-inline">
                <select name="sex">
                    <c:if test="${user.sex eq '男'}">

                        <option value="男" selected="selected">男</option>
                        <option value="女">女</option>
                        <option value="保密">保密</option>
                    </c:if>
                    <c:if test="${user.sex eq '女'}">
                        <option value="男">男</option>
                        <option value="女" selected="selected">女</option>
                        <option value="保密">保密</option>
                    </c:if>
                    <c:if test="${user.sex eq '保密'}">
                        <option value="男">男</option>
                        <option value="女">女</option>
                        <option value="保密" selected="selected">保密</option>
                    </c:if>
                </select>
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div class="layui-input-block">
            <button class="layui-btn" lay-submit="">确认</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </div>
</form>

<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/addUser.js"></script>


<script type="text/javascript">
    function checkUsername() {
        layui.use('layer', function () {
            var layer = layui.layer;
            $.ajax({
                url: "${pageContext.request.contextPath}/checkUsername",
                type: "post",
                async: false,
                data: {
                    username: $('#username').val()
                },
                dataType: "html",
                success: function (data) {
                    if (data == 1) {
                        layer.msg("用户名已存在，请重新输入！")
                    }
                }
            });
        });
    }


    window.onload = function () {


        layui.use('form', function () {
            var form = layui.form();

            form.verify({
                username: function (value, item) { //value：表单的值、item：表单的DOM对象
                    if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s·]+$").test(value)) {
                        return '用户名不能有特殊字符';
                    }
                    if (/(^\_)|(\__)|(\_+$)/.test(value)) {
                        return '用户名首尾不能出现下划线\'_\'';
                    }
                    if (/^\d+\d+\d$/.test(value)) {
                        return '用户名不能全为数字';
                    }
                    var msg = '';
                    $.ajax({
                        url: "${pageContext.request.contextPath}/checkUsername",
                        type: "post",
                        async: false,
                        data: {
                            username: $('#username').val()
                        },
                        dataType: "html",
                        success: function (data) {
                            msg = data;
                        }
                    });
                    if (msg == 1 && $('#username').val()!="${user.username}") {
                        return "用户名已存在，请重新输入！";
                    }
                }

                //我们既支持上述函数式的方式，也支持下述数组的形式
                //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
                , pass: function (value, item) {
                    if (!((value!=null ||value!="") && /^[\S]{6,12}$/.test(value))) {
                        return '密码必须6到12位，且不能出现空格';
                    }
                }
                , rePass: function (value) {
                    var pwd = $("#password").val();
                    if (pwd != value) {
                        return '两次密码不相同';
                    }
                }
            });
        });
    }


</script>
</body>
</html>