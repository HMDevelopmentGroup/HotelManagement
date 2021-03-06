<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>首页--layui后台管理模板</title>
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="format-detection" content="telephone=no">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/layui/css/layui.css" media="all" />
	<link rel="stylesheet" href="//at.alicdn.com/t/font_tnyc012u2rlwstt9.css" media="all" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css" media="all" />
</head>
<body class="childrenBody">
	<div class="panel_box row">
		<div class="panel col">
			<a href="javascript:;" data-url="page/checkin/checkin">
				<div class="panel_icon" style="background-color:#FF5722;">
					<i class="iconfont icon-dongtaifensishu" data-icon="icon-dongtaifensishu"></i>
				</div>
				<div class="panel_word ">
					<span>入住</span>
				</div>
			</a>
		</div>
		<div class="panel col">
			<a href="javascript:;" data-url="page/checkin/checkin">
				<div class="panel_icon" style="background-color:#5FB878;">
					<i class="layui-icon" data-icon="&#xe622;">&#xe622;</i>
				</div>
				<div class="panel_word eptRooms">
					<span></span>
					<cite>空房</cite>
				</div>
			</a>
		</div>
		<div class="panel col">
			<a href="javascript:;" data-url="page/user/allUsers">
				<div class="panel_icon" style="background-color:#009688;">
					<i class="layui-icon" data-icon="&#xe613;">&#xe613;</i>
				</div>
				<div class="panel_word userAll">
					<span></span>
					<cite>查看会员</cite>
				</div>
			</a>
		</div>
		<div class="panel col">
			<a href="javascript:;" data-url="page/checkin/internetCheckin">
				<div class="panel_icon" style="background-color:#5FB878;">
					<i class="layui-icon" data-icon="&#xe612;">&#xe612;</i>
				</div>
				<div class="panel_word netOrder">
					<span></span>
					<cite>待入住</cite>
				</div>
			</a>
		</div>
		<div class="panel col">
			<a href="javascript:;" data-url="page/checkout/checkout">
				<div class="panel_icon" style="background-color:#F7B824;">
					<i class="iconfont icon-wenben" data-icon="icon-wenben"></i>
				</div>
				<div class="panel_word checkout">
					<span></span>
					<cite>退房</cite>
				</div>
			</a>
		</div>
        <div class="panel col">
            <a href="javascript:;" data-url="page/room/listrooms">
                <div class="panel_icon" style="background-color:#5FB878;">
                    <i class="layui-icon" data-icon="&#xe62e;">&#xe62e;</i>
                </div>
                <div class="panel_word unclear">
                    <span></span>
                    <cite>待清理</cite>
                </div>
            </a>
        </div>
	</div>
	<div class="row">
		<div class="sysNotice col">
			<blockquote class="layui-elem-quote title">最新公告<i class="iconfont icon-new1"></i></blockquote>
			<table class="layui-table" lay-skin="line">
				<colgroup>
					<col>
					<col width="110">
				</colgroup>
				<tbody class="hot_news"></tbody>
			</table>

			<blockquote class="layui-elem-quote title">系统基本参数</blockquote>
			<table class="layui-table">
				<colgroup>
					<col width="150">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<td>当前版本</td>
						<td class="version"></td>
					</tr>
					<tr>
						<td>开发作者</td>
						<td class="author"></td>
					</tr>
					<tr>
						<td>网站首页</td>
						<td class="homePage"></td>
					</tr>
					<tr>
						<td>服务器环境</td>
						<td class="server"></td>
					</tr>
					<tr>
						<td>数据库版本</td>
						<td class="dataBase"></td>
					</tr>
					<tr>
						<td>最大上传限制</td>
						<td class="maxUpload"></td>
					</tr>
					<tr>
						<td>当前用户权限</td>
						<td class="userRights"></td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>

	<script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/main.js"></script>
</body>
</html>