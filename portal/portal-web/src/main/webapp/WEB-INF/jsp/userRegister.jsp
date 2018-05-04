<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">


    <title>酒店列表</title>
    <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
    <link href="${pageContext.request.contextPath}/css/reset.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/css/public.css" rel="stylesheet"/>
    <link href="${pageContext.request.contextPath}/layui/css/layui.css" rel="stylesheet"/>

    <script src="${pageContext.request.contextPath}/js/jquery-1.10.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/js/public.js"></script>
</head>
<body>

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

    <div style="position: relative;left: 150px">
                <form class="layui-form" style="width:80%;" id="userInfo"
                      action="${pageContext.request.contextPath}/user" method="post">
                    <div class="layui-form-item">
                        <label class="layui-form-label">用户名</label>
                        <div class="layui-input-block">
                            <!-- RESTFul风格 -->
                            <input type="hidden" name="_method" value="POST"/>
                            <input type="text" name="username" id="username" lay-verify="required|username"
                                   onblur="checkUsername()" class="layui-input userName"
                                   placeholder="请输入用户名" autocomplete="off">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">密码</label>
                        <div class="layui-input-block">
                            <input type="password" name="password" id="password" lay-verify="required|pass"
                                   class="layui-input password"
                                   placeholder="请输入密码" autocomplete="off">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">确认密码</label>
                        <div class="layui-input-block">
                            <input type="password" name="repassword" lay-verify="required|rePass"
                                   class="layui-input password"
                                   placeholder="请再次输入密码" autocomplete="off">
                        </div>
                    </div>
                    <div class="layui-form-item">
                            <label class="layui-form-label">手机号</label>
                            <div class="layui-input-block">
                                <input type="tel" name="telephone" lay-verify="required|phone" placeholder="请输入手机号"
                                       autocomplete="off" class="layui-input">
                            </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">真实姓名</label>
                        <div class="layui-input-block">
                            <input type="text" name="realname" lay-verify="required" class="layui-input"
                                   placeholder="请输入真实姓名"
                                   autocomplete="off">
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label class="layui-form-label">身份证</label>
                        <div class="layui-input-block">
                            <input type="text" name="idCard" lay-verify="required|identity" class="layui-input"
                                   placeholder="请输入身份证号"
                                   autocomplete="off">
                        </div>
                    </div>
                    <div class="layui-form-item">
                            <label class="layui-form-label">性别</label>
                            <div class="layui-input-block">
                                <select name="sex">
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                    <option value="保密">保密</option>
                                </select>
                            </div>
                    </div>
                    <div class="layui-form-item">
                        <div class="layui-input-block">
                            <button class="layui-btn" lay-submit="">立即提交</button>
                            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                        </div>
                    </div>
                </form>
    </div>
</body>

<script src="${pageContext.request.contextPath}/layui/layui.all.js"></script>
<script type="text/javascript">
    function checkUsername() {
        layui.use('layer', function () {
            var layer = layui.layer;
            $.ajax({
                url: "${pageContext.request.contextPath}/checkUsername",
                type: "post",
                async: false,
                data: {
                    username:$('#username').val()
                },
                dataType: "html",
                success: function (data) {
                    if (data==1){
                        layer.msg("用户名已存在，请重新输入！")
                    }
                }
            });
        });
    }


    window.onload=function(){


        layui.use('form', function () {
            var form = layui.form;
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
                            username:$('#username').val()
                        },
                        dataType: "html",
                        success: function (data) {
                            msg = data;
                        }
                    });
                    if(msg==1){return "用户名已存在，请重新输入！";}
                }

                //我们既支持上述函数式的方式，也支持下述数组的形式
                //数组的两个值分别代表：[正则匹配、匹配不符时的提示文字]
                , pass: [
                    /^[\S]{6,12}$/
                    , '密码必须6到12位，且不能出现空格'
                ]
                , rePass:function (value) {
                    var pwd = $("#password").val();
                    if (pwd!=value) {
                        return '两次密码不相同';
                    }
                }
            });
        });
    }


</script>
</html>

