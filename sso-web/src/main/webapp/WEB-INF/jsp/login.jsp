<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>酒店前台登录</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/css/login.css" media="all" />
</head>
<body style="background-image: url(${pageContext.request.contextPath}/images/bg.jpg);background-repeat: round;">
	<div class="video_mask"></div>
	<div class="login">
	    <h1>酒店登录</h1>
	    <form class="layui-form" action="#" method="post" onsubmit="return false">
	    	<div class="layui-form-item">
				<input class="layui-input" id="username" name="username" placeholder="用户名" lay-verify="required" type="text" autocomplete="off">
		    </div>
		    <div class="layui-form-item">
				<input class="layui-input" id="password" name="password" placeholder="密码" lay-verify="required" type="password" autocomplete="off">
		    </div>
			<div class="layui-form-item" align="center">
				<button onclick="login()" class="layui-btn">登录</button>
			</div>
		</form>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
</body>
<script>
	function login() {
        layui.use(['form','layer','jquery'],function(){
            var form = layui.form,
                layer = layui.layer,
                $ = layui.jquery;
                $.post(
                    "${pageContext.request.contextPath}/login",
                    {"username":$("#username").val(),"password":$("#password").val()},
                    function (data) {
                        if (data.success==true){
                            location.href = "${pageContext.request.contextPath}/toIndex";
                        }else{
                            layer.msg("用户名或密码错误")
                        }
                    }
                )
        })
    }

</script>
</html>