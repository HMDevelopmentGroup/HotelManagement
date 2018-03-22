$(function () {
    //搜索商圈,行政区，地铁，机场,酒店模糊查找，城市模糊查找/hover，click事件
    $("body").on("mousedown", ".business .list ul li a,.sk_selectionCity .footTab ul li a,.search_key_city ul li,.fuzzy_query a", function () {
        $(this).addClass('focus');
    }).mouseup(function () {
        $(this).removeClass('focus');
    }).mouseover(function () {
        $(this).addClass('focus');
    }).mouseout(function () {
        $(this).removeClass('focus');
    });
    $("body").on('touchstart', ".business .list ul li a,.sk_selectionCity .footTab ul li a,.search_key_city ul li,.fuzzy_query a", function () {
        $(this).addClass('focus');
        $(this).siblings().removeClass("focus")
    }).on('touchend', ".business .list ul li a,.sk_selectionCity .footTab ul li a,.search_key_city ul li,.fuzzy_query a", function () {
        $(this).removeClass('focus');
    })
    $("body").on("click", ".business .list ul li a,.sk_selectionCity .footTab ul li a,.search_key_city ul li,.fuzzy_query a", function () {
        $(this).removeClass('focus');
    })
    //确定，重置、按钮hover,click效果
    $(".btn_total,.reset").mousedown(function () {
		    $(this).addClass('focus');
		}).mouseup(function(){
		    $(this).removeClass('focus');
		}).mouseover(function(){
		    $(this).addClass('focus');
		}).mouseout(function(){
		    $(this).removeClass('focus');
		});
    $(".btn_total,.reset").on('touchstart', function () {
        $(this).addClass('focus');
    }).on('touchend', function () {
        $(this).removeClass('focus');
    });

      //以下是调用下面的函数
    var mb = myBrowser();
    if ("IE" == mb) {
        $(".list_logos ul li div").addClass("Artboard_logo_ie");
        $(".brands_logo").addClass("brands_logo_ie");
        $(".em_cm").addClass("em_ie");
        $("i").addClass("i_ie")
        $(".image_h5").addClass("image_h5_ie")
    }
    if ("FF" == mb) {

    }
    if ("Chrome" == mb) {

    }
    if ("Opera" == mb) {
    }
    if ("Safari" == mb) {
        $(".list_logos ul li div").removeClass("Artboard_logo_ie");
        $(".brands_logo").removeClass("brands_logo_ie");
        $(".em_cm").removeClass("em_ie");
        $("i").removeClass("i_ie");
        $(".list_logos ul li div").addClass("Artboard_logo_cm")
        $(".image_h5").removeClass("image_h5_ie")
    }
    function myBrowser() {
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    if (isOpera) {
	        return "Opera"
	    }; //判断是否Opera浏览器
	    if (userAgent.indexOf("Firefox") > -1) {
	        return "FF";
	    } //判断是否Firefox浏览器
	    if (userAgent.indexOf("Chrome") > -1) {
	        return "Chrome";
	    }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } //判断是否Safari浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        return "IE";
	    }; //判断是否IE浏览器
}
});

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

////开始日期跟结束日期相差天数
function DateDiffH5(startDate, endDate) {
    var d1 = new Date(startDate.replace(/-/g, "/"));
    var d2 = new Date(endDate.replace(/-/g, "/"));
    var time = d2.getTime() - d1.getTime();
    return parseInt(time / (1000 * 60 * 60 * 24));
}
//loading隐藏
function loading_hide() {
    setTimeout(function () {
        $('#h5_mask').hide();
    },5000)
}

