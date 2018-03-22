
$(function () {
  
    img_top_H()
    //轮播图不存在使用默认图片;
    var banner_arr = [];
    $('.swiper-container .swiper-wrapper img').each(function (i, elem) {
        banner_arr.push($('.swiper-container .swiper-wrapper img').attr('src'))
    });
    $(".device").find(".swiper-slide").eq("1").find("img").attr("src", $(".device").find(".swiper-slide").eq("1").find("img").attr("_src"))
    setTimeout(function () {
        $('.swiper-container .swiper-wrapper img').error(function () {
            error_img($('.swiper-container .swiper-wrapper img'), banner_arr)
        })
        $(".device").find(".swiper-slide").each(function (i, el) {
            $(el).find("img").attr("src", $(el).find("img").attr("_src"))
        })
    }, 1500)
    //品牌图片加载
    loadbrandImg()
    $(".Brand_carousel ul").eq("0").on("touchmove", function () {
        $(".Brand_carousel ul.active").find("li").each(function (i, el) {
            $(this).find("img").attr("src", $(this).find("img").attr("_src"))
        })
    })
    ////尊享特惠图片加载
    //$(document).ready(function () {
    //    loadingImg()
    //})
    $(window).resize(function () {
        img_top_H()
    })
    //$(window).scroll(function () {
    //    loadingImg()
    //})
    //APP下载
    $(".app_download .fix").click(function () {
        window.location.href = "http://m.homeinns.com/wx/download";
        //var u = navigator.userAgent.toLowerCase();
        //if (/android/.test(u)) {
        //    window.location.href = "http://image-homeinn.b0.upaiyun.com/file/Homeinns-web-v6.2.apk";
        //}
        //else if (/(iphone|ipad|ipod|ios)/.test(u)) {
        //    window.location.href = "https://itunes.apple.com/cn/app/zhang-shang-ru-jia/id435921465?mt=8";
        //}
        //else {
        //    window.location.href = "http://www.bthhotels.com/App/index";
        //}
    });
    //获取当前城市的cityName
    //我的附近

    //我的附近结束
    $(".h5_seach_sub").click(function () {
        $("#cityName").val($(".h5_City_seach").data("pinyin"));
        $("#cityCode").val($(".h5_City_seach").data("cd"));
        var url = "/list/" + $("#cityName").val();
        $("#frm").attr("action", url);
        $("#frm").submit();
    })
    //品牌切换
    $(".tab_cont .h5_tabList").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".Brand_list ul").hide()

        $(".Brand_list ul").eq($(this).index()).find("img").each(function (i, el) {
            var src = $(el).attr("_src")
            $(el).attr("src", src)
        })
        $(".Brand_list ul").eq($(this).index()).fadeIn();
    })


    if (IsPC()) {//是pc打开

    } else {
        $(".h5_tab").css("overflow", "hidden")
        $(".Brand_carousel ul").css("paddingBottom", 33)
    }
    //打电话浮层显示
    $('.h5_tel').click(function () {
        $('#wrapper').css({ "overflow": "auto" })
        $('.h5_tel_a').css("display", "block");
        $('.h5_tel_pub').css("display", "block");
    });
    //打电话浮层隐藏
    $('.h5_tel_a').click(function () {
        $('.h5_tel_a').css("display", "none");
        $('.h5_tel_pub').css("display", "none");
        $('#wrapper').css({ "overflow": "visible" })
    });
    //改变点击部分背景颜色
    $('.h5_tel_pub a').click(function () {
        $(this).parent().parent().parent().css('background', '#F8E8E8');
        $(this).parent().css('background', '#F8E8E8');

    });


    //以下是调用上面的函数
    var mb = myBrowser();
    if ("IE" == mb) {
        $(".login_bad div").addClass("h5_logins_ie");
    }
    if ("FF" == mb) {

    }
    if ("Chrome" == mb) {

    }
    if ("Opera" == mb) {
    }
    if ("Safari" == mb) {
        $(".login_bad div").removeClass("h5_logins_ie");
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

    //判断是否是pc
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    //首页搜索点击显示
    $(".h5_Ct_Search").click(function () {
        var index = "citySelect";
        var url = "/list?index=" + index;
        window.location.href = url;
        //$(this).find("input").blur();
        //$(".h5_home_search").animate({ "left": "0" }, 500)
        //setTimeout(function() {
        //    $(".hotel_front").hide()
        //}, 1000); 
    })
    //
    $(".h5_home_search .h5_header_back").click(function () {
        $(".h5_home_search").animate({ "left": 200 + "%" }, 500)
        $(".hotel_front").show()
    })
    $(".h5_City_seach").click(function () {
        $(this).blur();
        $(".sk_selectionCity .h5_fixed").animate({ "left": "0" }, 500)
        $(".sk_selectionCity .soso_a").animate({ "left": "0" }, 500)
        $(".sk_selectionCity").animate({ "left": "0" }, 500)
        $(".letter").css({ "display": "block" })
    })
    $(".h5_Key_word").click(function () {
        $(".skSeek .h5_header").animate({ "left": "0" }, 500)
        $(this).blur();
        $(".skSeek").animate({ "left": "0" }, 500)
    })
    $(".skSeek .h5_header_back").click(function () {
        $(".skSeek").animate({ "left": 200 + "%" }, 500)
        $(".skSeek .h5_header").animate({ "left": 200 + "%" }, 500)
    })
    $(".sk_selectionCity .h5_header_back").click(function () {
        $(".sk_selectionCity").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .h5_fixed").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + "%" }, 500)
        $(".letter").hide()
    })
    /*===============================================================搜索内容================================================*/
    //搜索内容;   
    //loadShangQuan_h5();
    //监控输入框的值改变是触发 
    $('.seach_City').on('input', function (e) {
        if ($('.seach_City input').val() == "") {
            return;
        } else {
            var dataCD = $('.h5_City_seach').attr('data-cd');
            var keyWord = $('.seach_City input').val();
            search_hotel(keyWord, dataCD);
        }
    });
    //点击搜索
    //$('.cs_Search').click(function () {
    //    $(".skSeek").animate({ "left": 200 + '%' }, 500);
    //    $(".business").show();
    //    $(".fuzzy_query").hide()

    //    var url = "/listasync/" + $("#cityName").val();
    //    $("#key").val($('.seach_City input').attr('data-keycd'))
    //    $(".main_content").empty();
    //    count = 1;
    //    open_refresh(true);//列表页数据请求函数;
    //});

    //失去焦点显示商圈内容
    $('.seach_City input').blur(function () {
        console.log($('.seach_City input').val())
        if ($('.seach_City input').val() == "") {
            $('.skSeek .business').show();
            $('.skSeek .fuzzy_query').hide();
        }
    })
    $(" .skSeek .seach_City .close").click(function () {
        $('.seach_City input').val("")
        $(".fuzzy_query").empty();
        $('.skSeek .fuzzy_query').hide();
        $('.skSeek .business').show();
    })
    $('.seach_City input').focus(function () {
        console.log($('.seach_City input').val())
        if ($('.seach_City input').val() == "") {
            $('.skSeek .business').hide();
            $('.skSeek .fuzzy_query').show();
        }
    })
    //点击搜索出来的内容
    $('.fuzzy_query').delegate('a', 'click', function () {
        var search_val = $(this).text();
        $('.h5_Key_word input').val(search_val);
        $('.h5_Key_word').val(search_val);
        var keycd = null;
        if ($(this).attr('data-keysearchtype')) {
            console.log(11)
            keycd = $(this).attr('data-keysearchtype') + $(this).attr('data-keycd');
        } else {

            keycd = $(this).attr('data-keycd');
            console.log(keycd)
        }
        $('.seach_City input').attr('data-keycd', keycd);
        console.log(999)
        search_aa()
    })
    //清楚请求缓存
    function rd() {
        return Math.random()
    };

    //酒店关键字查询
    var oldkeyword_h5 = "";
    var keywordXhr_h5 = null;
    $('.cs_Search').click(function () {
        intervalMonitorKeyWord_h5()
    })
    function intervalMonitorKeyWord_h5() {
        // $(".citypop").hide();
        var key = $.trim($("#home_zbse_h5").val());
        console.log(key)
        if (oldkeyword_h5 == key) {
            return;
        }
        oldkeyword_h5 = key;
        $("#key").val('');
        $("#keyDescript").val('');
        if (key == "酒店位置/酒店名/品牌" || key == "" || key == "J酒店位置/酒店名/品牌") {
            return;
        }
        if (keywordXhr_h5 && keywordXhr_h5.readyState != 4) {
            keywordXhr_h5.abort();
        }
        keywordXhr_h5 = $.ajax({
            type: "GET",
            url: "/Ajax/SearchHotel",
            data: { name: $.trim(key), cityCD: $("#cityCode").val(), ts: Math.random(), ish5: 1 },
            dataType: "json",
            success: function (result) {
                if (result != null && result.Code == "200") {
                    if (result.data != null &&
                        result.data != undefined &&
                        result.data != "" &&
                        result.data.length != 0) {
                        $('.fuzzy_query').empty();
                        $('.fuzzy_query').show();

                        console.log(result.data)
                        $(result.data).each(function (i) {
                            $('.fuzzy_query').append("<a data-keycd="
                                + result.data[i].KeySearchType + result.data[i].KeyCD
                                + " title=" + result.data[i].BrandDes + "(" + result.data[i].KeyName
                                + "）> " +
                                result.data[i].BrandDes +
                                "（" + result.data[i].KeyName.replace(key,
                                    "<b style='color: #C0191F !important;'>" + key + "</b>") +
                                ") </a>");
                        });

                    } else {
                        $('.fuzzy_query').append("<p class=\"keyword_citynone_title\">您所选的城市没有搜索到 “<b>" + key + "</b>” 相关的酒店</p>");
                    }

                }
            }
        });
    }
    //搜索内容结束;


    /*===============================================================城市选择================================================*/
    //load_city()

    //失去焦点显示城市内容
    $(".soso_a input").blur(function () {
        if ($(this).val() == "") {
            $('.sk_selectionCity .selectionCity_cont .business,.sk_selectionCity .selectionCity_cont .footTab').show();
            $('.sk_selectionCity .search_key_city').hide();
        }
    })
    //将城市选中的值放在输入框内;
    $('.sk_selectionCity .business ul').delegate('li', 'click', function () {
        if ($(this).prop('className') == 'seach_more') {
            return;
        }
        $(".sk_selectionCity").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .h5_header").animate({ "left": 200 + "%" }, 500)
        $("#SelectArea").val("");
        $(".h5_Key_word").val("");
        $('.h5_City_seach').attr("data-cd", $(this).find("a").attr("data-cd"));
        $('.h5_City_seach').attr("data-pinyin", $(this).find("a").attr("data-pinyin"));
        $('.h5_City_seach').val($(this).find("a").html());
        $("#cityName").val($(this).find("a").data("pinyin"))
        $("#cityCode").val($(this).find("a").data("cd"))
        loadShangQuan_h5();
    })
    //城市当前位置
    $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-pinyin', $("#cityName").val());
    $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-cd', $("#cityCode").val());
    $('.sk_selectionCity .business .list').eq(0).find('a').html($('#CityNameCn').val());
    $('.soso input').val($('#CityNameCn').val());
    var bl_a = true;
    $('.soso').on("keydown", function () {

        $('.sk_selectionCity .business').css('display', 'none');
        $('.footTab').css('display', 'none');
        $('.letter').css('display', 'none');
        $('.search_key_city').css('display', 'block');
        //节省资源
        if (bl_a) {
            bl_a = false;
            setTimeout(function () {
                bl_a = true;
                loadCity_a()
            }, 300)
        }
    })
    //模糊查询移动端
    //loadCity_a()
    $(".search_key_city  ul").delegate('li', 'click', function () {
        $(".sk_selectionCity").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + "%" }, 500)
        $(".sk_selectionCity .h5_header").animate({ "left": 200 + "%" }, 500)
        $('.h5_City_seach').val($(this).find('b span').html());
        $("#cityName").val($(this).find('span').eq(1).attr('data-pinyin'));
        $("#cityCode").val($(this).find('span').eq(2).attr('data-CD'));
        $(".h5_Key_word").val("")
        //loadShangQuan_h5();
        //显示城市信息隐藏搜索城市
        $('.sk_selectionCity .business').css('display', 'block');
        $('.footTab').css('display', 'block');
        $('.letter').css('display', 'none');
        $('.search_key_city ul').empty()
        $('.search_key_city').css('display', 'none');
        //城市当前位置
        $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-pinyin', $(this).find('span').attr('data-pinyin'));
        $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-cd', $(this).find('span').attr('data-CD'));
        $('.sk_selectionCity .business .list').eq(0).find('a').html($(this).find('b span').html());
        $('.soso input').val($(this).find('b span').html());


    })
   
    //城市选择	

    $("#sk_selectionCity #sklistUl").delegate("li", "click", function () {

        if ($(this).find("a").prop('className') == "select") {
            $(this).find("a").removeClass("select");
        } else {
            $(this).find("a").addClass("select");
        }

    })
    //点击字母跳转到相应的位置
    var $list = $("#sk_letter").find("li");
    $list.each(function (i, element) {
        $(element).click(function () {
            var num = $(element).find("span").html();
            $(element).find("a").html(num);
            $(element).find("a").fadeIn();
            setTimeout(function () {
                $(element).find("a").fadeOut();
            }, 300)
            $(element).siblings().find("a").fadeOut();

            var $anchor = $(element).find('a');
            $('#sk_selectionCity').scrollTop(0)
            $('#sk_selectionCity').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 95
            }, 500);

            var len = $('#sklistUl li').length;
            for (var i = 0; i < len; i++) {
                if ($('#sklistUl li').eq(i).attr('id') == ($anchor.html().toLowerCase())) {
                    $('#sklistUl li').eq(i).find("a").addClass("select");
                }
            }
        });

    });

    /*===============================================================日期================================================*/
    var Check_week = "周" + "日一二三四五六".charAt(new Date().getDay());
    var Depar_week = "周" + "日一二三四五六".charAt(new Date().getDay() + 1);
    $(".Check_date").html(Check_week + "入住");
    $(".Departure").html(Depar_week + "离店");
    var today = new Date(),
        todayY = today.getFullYear(),
        todayM = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
        todayD = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    /*入住时间日历*/
    $('.enter_time').click(function () {
        $('.enter_time').dateChoose({
            dateClass: ".date_box_choose",//日期选择页面
            startClass: ".start_date", //开始日期的class
            endClass: ".end_date", //结束日期
            range: true, //开始日期和结束日期都包括，若为false，则只有开始日期
            divideChoose: false,//结束日期和开始日期是否在两个不同的输入框
            startTxt: "入住", //开始日期选中之后出现的文字
            endTxt: "离住",//开始日期选中之后出现的文字
            startDate: todayY + "-" + todayM + "-" + todayD, //日期之后可选
            endDate: "", //日期之前可选
            maxDays: 90,  //之后可点击最大天数,
            Seperate: [],//间隔的日期
            En: false, //是否英文
            callback: function () { //日期选中之后的callback
                var s_ArrDate = $(".start_date").html();//入店时间
                var s_DepDate = $(".end_date").html();//离店时间
                $(".start_date").html(s_ArrDate);
                $(".end_date").html(s_DepDate);
                var days = DateDiffH5(s_ArrDate, s_DepDate); //入住几晚
                $("input[name='begdate']").val(s_ArrDate);
                $("input[name='enddate']").val(s_DepDate);
                $(".enter_time .Days").html(days + "晚");
                $("#beginDate").val(s_ArrDate);
                $("#endDate").val(s_DepDate);
                var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
                var check_in = new Date(Date.parse(s_ArrDate.replace(/-/g, "/")));
                var check_out = new Date(Date.parse(s_DepDate.replace(/-/g, "/")));
                $(".Check_date").html(weekDay[check_in.getDay()] + "入住");
                $(".Departure").html(weekDay[check_out.getDay()] + "离店");
            }
        });
    })


    /*===============================================================/日期================================================*/
    //时租房今夜特惠切换
    var home_date = new Date();
    var hh = home_date.getHours();
    var mm = home_date.getMinutes();
    if (hh >= 0 && hh < 16) {
        $('.nearby_specials .h5_nearby1').eq(0).removeClass('h5_nearbyone')
        $('.nearby_specials .h5_nearby1').eq(1).addClass('h5_nearbyone')
    } else if (hh >= 16 && hh < 24) {
        $('.nearby_specials .h5_nearby1').eq(1).removeClass('h5_nearbyone')
        $('.nearby_specials .h5_nearby1').eq(0).addClass('h5_nearbyone')
    }
    setInterval(function () {
        if (hh >= 0 && hh < 16) {
            $('.nearby_specials .h5_nearby1').eq(0).removeClass('h5_nearbyone')
            $('.nearby_specials .h5_nearby1').eq(1).addClass('h5_nearbyone')
        } else if (hh >= 16 && hh < 24) {
            $('.nearby_specials .h5_nearby1').eq(1).removeClass('h5_nearbyone')
            $('.nearby_specials .h5_nearby1').eq(0).addClass('h5_nearbyone')
        }
        
    },1000)
    //$('.nearby_specials .h5_nearby_time').click(function () {
    //    alert('时租房')
    //})
    //$('.nearby_specials .h5_nearby_night').click(function () {
    //    alert('今夜特惠')
    //})

})






/*===============================================================/搜索内容结束================================================*/
function loadShangQuan_h5() {
    var cityName = $("#cityName").val();
    $.ajax({
        type: "GET",
        url: "/Ajax/GetShangQun_Auto",
        data: { cityName: cityName },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                if (result.data != null && result.data != undefined && result.data != "") {
                    // console.log(result.data)
                    //搜索也初始化
                    $(".list_shangquan ul").empty();//移除相应元素内容;
                    $(".list_xingzheng ul").empty();
                    $(".list_xianlu ul").empty();
                    $(".list_view ul").empty();
                    $(".list_air ul").empty();
                    //筛选页最后两项不清空，其余项清空      
                    for (var i = 0; i < ($('.list_item_select .item_r').length - 2); i++) {
                        $('.list_item .item_r').eq(i).empty();
                    };
                    //请求数据分类
                    $(result.data).each(function (i) {
                        switch (result.data[i].KeySearchType) {
                            case "L":
                                //商圈显示列表
                                $(".list_shangquan ul").append("<li class='seach_sq' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")' ><a data-signle='2'  type='checkbox' data-CD='" + result.data[i].KeyCD + "' value='" + result.data[i].KeyCD + "' data-id=" + result.data[i].KeyCD + "' data-name='" + result.data[i].KeyName + "' data-type='sq'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                $(".list_item_select .select_shangquan").append("<p class='area_list' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")' ><a data-signle='2'  type='checkbox' data-CD='" + result.data[i].KeyCD + "' value='" + result.data[i].KeyCD + "' data-id=" + result.data[i].KeyCD + "' data-name='" + result.data[i].KeyName + "' data-type='sq'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a><span class='icon iconfont'>&#xe61d;</span></p>");
                                break;
                            case "R":
                                //行政列表显示
                                $(".list_xingzheng ul").append(" <li  class='seach_sq' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'><a data-signle='1'  data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD='" + result.data[i].KeyCD + "' data-type='xzq'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                $(".list_item_select .select_xingzheng").append(" <p  class='area_list' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'><a data-signle='1'  data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD='" + result.data[i].KeyCD + "' data-type='xzq'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a><span class='icon iconfont'>&#xe692;</span></p>");
                                break;
                            case "D":
                                //线路列表显示
                                $(".list_xianlu ul").append(" <li class='seach_sq' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='metro'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a> </li>");
                                $(".list_item_select .select_xianlu").append(" <p class='area_list' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='metro'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a><span class='icon iconfont'>&#xe692;</span> </p>");
                                break;
                            case "J":
                                $(".pop_view ul").append(" <li  class='seach_sq' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='view'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                $(".list_item_select .select_view").append(" <p  class='area_list' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='view'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a><span class='icon iconfont'>&#xe692;</span></p>");
                                break;
                            case "A":
                                //机场列表显示
                                $(".list_air ul").append(" <li class='seach_sq' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='air'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                $(".list_item_select .select_air").append(" <p class='area_list' title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='air'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a><span class='icon iconfont'>&#xe692;</span></p>");
                                break;
                            default:
                                break;
                        }
                        //车站机场...

                    });//遍历结束
                    //给筛选也得每一项添加一个不限标签；
                    for (var j = 0; j < ($('.list_item_select .item_r').length - 2); j++) {
                        $('.list_item .item_r').eq(j).prepend('<p class="all_trading active">不限<span class="active icon iconfont">&#xe692;</span></p>');
                        if ($('.list_item .item_r').eq(j).find('p').length <= 1) {
                            $('.list_item .item_r').eq(j).html('<div class="not">暂无内容</div>')
                        }
                    };
                    //商圈下拉菜单;
                    $('.skSeek .list ul').find(".seach_more").remove();
                    $(".skSeek .list ul").append(' <li class="seach_more"> <span class="icon iconfont">&#xe665;</a> </li>');
                    more_list()//点击展开/收起
                    TabControl($(".tab_cont .tab div"), $(".tab_cont .item_r"))//侧边选项卡函数调用

                }
                else {
                    //移除相应元素内容;
                    $(".list_shangquan ul").empty();
                    $(".list_xingzheng ul").empty();
                    $(".list_xianlu ul").empty();
                    $(".list_view ul").empty();
                    $(".list_air ul").empty();
                }
            }

        }
    });

};//筛选页数据请求结束


function rd() {
    return Math.random()
};//清楚请求缓存
//搜索酒店
function search_hotel(keyWord, dataCD) {
    $.ajax({
        type: "GET",
        url: '/Ajax/SearchHotel?name=' + keyWord + '&cityCD=' + dataCD + '&ts=' + rd() + '',
        // data: { cityName: cityName },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                $('.fuzzy_query').empty();
                var arr = result.data;
                var s = "";
                for (var i = 0; i < arr.length; i++) {
                    s += ' <a href="javascript:;" class="" data-BrandDes="' + arr[i]['BrandDes'] + '" data-KeyCD="' + arr[i]['KeyCD'] + '"  data-KeySearchType="' + arr[i]['KeySearchType'] + '"> ' + (arr[i]['KeyName'].replace(keyWord, "<span>" + keyWord + "</span>")) + ' </a>'
                }
                $('.fuzzy_query').append(s);
                if ($('.fuzzy_query').children().length == 0) {
                    $('.fuzzy_query').append(' <a href="javasctipt:;"><span>请输入正确酒店名称</span></a>');
                }
                $('.fuzzy_query').delegate('a', 'click', function () {
                    var search_val = $(this).text();
                    $('.seach_City input').val(search_val);
                    $('.h5_search .span2').html(search_val);
                    var keycd = $(this).attr('data-keysearchtype') + $(this).attr('data-keycd')
                    $('.seach_City input').attr('data-keycd', keycd);
                    search_aa()
                })
            }
        }
    })
}
//商圈搜索内容函数
function search_aa() {
    $(".skSeek").animate({ "left": 200 + '%' }, 500);
    $(".skSeek .h5_header").animate({ "left": 200 + "%" }, 500)
    $(".business").show();
    $(".fuzzy_query").hide()
    $("#key").val($('.seach_City input').attr('data-keycd'))
}
//下拉菜单
function more_list() {
    $(".skSeek_con .business .list").each(function (i, element) {
        var seach_len = $(element).find(".seach_sq").length;
        //列表长度小于5条让显示更多按钮隐藏
        if (seach_len <= 5) {
            $(element).find(".seach_more").hide()
        };
        //前五项显示;
        $(element).find(".seach_sq").slice(0, 5).addClass("dis");

        $(element).on("click", ".seach_sq", function () {
            $(this).addClass("active").siblings().removeClass("active")
        });
        //点击显示更多
        var seach_ready = true;
        $(element).on("click", ".seach_more", function () {
            if (seach_ready) {
                $(element).find(".seach_sq").addClass("dis")
                $(element).find(".icon").html("&#xe64b;")
                seach_ready = false
            } else {
                $(element).find(".seach_sq").removeClass("dis")
                $(element).find(".icon").html("&#xe665;")
                $(element).find(".seach_sq").slice(0, 5).addClass("dis");
                seach_ready = true
            }
        });
        //将点击的内容赋值到搜索框;
        $(element).on("click", ".seach_sq", function () {
            if ($(this).parent().parent().prop('className') == "list list_shangquan") {
                $("#SelectArea").val($(this).find('a').attr('data-cd'));

                $("#SignleAreaFilter").val("")
            } else if ($(this).parent().parent().prop('className') == "list list_xingzheng" || $(this).parent().parent().prop('className') == "list list_xianlu") {
                //行政区线路参数;
                var XZQ = $(this).parent().parent('.list_xingzheng').find('.active a').attr('data-cd');
                var XL = $(this).parent().parent('.list_xianlu').find('.active a').attr('data-cd'); //地铁线路;

                if (XZQ == undefined && XL == undefined) {
                    $("#SignleAreaFilter").val("")
                } else if (XZQ == undefined && XL != undefined) {
                    $("#SelectArea").val("");

                    $("#SignleAreaFilter").val("D" + XL)

                } else if (XZQ != undefined && XL == undefined) {
                    $("#SelectArea").val("");

                    $("#SignleAreaFilter").val("X" + XZQ)

                }
            };
            //将选中的值赋值到列表主页的输入框内
            $("#keyDescript").val($(this).find('a').attr('data-name'))
            $(".h5_Key_word").val($(this).find('a').attr('data-name'));
            $("#home_zbse_h5").val("");
            search_aa();

        });

    })
}//more_list  函数结束;
//侧边选项卡
function TabControl(tab, tabList) {
    tab.each(function (i, element) {
        $(element).click(function () {
            $(element).addClass("active").siblings().removeClass("active")
            tabList.eq(i).show().siblings().hide()
        })
    })
}

/*===============================================================城市选择================================================*/
function loadCity_a() {
    $.ajax({
        type: "GET",
        url: "/Ajax/GetCity_All",
        data: { ts: Math.random() },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                var arr_data = result.data;
                var so_val = $(".soso input").val();
                //console.log(arr_data)
                $(".search_key_city  ul").empty();
                $('.sk_selectionCity .business .list').eq(1).find('ul').empty();
                for (var i = 0; i < arr_data.length; i++) {
                    //模糊查询关键字
                    if ($(".soso input").val() != "") {
                        $("#currentCityNotFound_a").hide();
                        var Descript = arr_data[i].Descript;
                        var Pinyin = arr_data[i].Pinyin;
                        var CD = arr_data[i].CD;
                        var FirstPinyin = arr_data[i].FirstPinyin;
                        var Hotelnum = arr_data[i].Hotelnum;
                        var Type = arr_data[i].Type;

                        if (Type == null) {
                            if (Descript.indexOf(so_val) >= 0 || Pinyin.indexOf(so_val) >= 0 || FirstPinyin.toLowerCase().indexOf(so_val) >= 0 || FirstPinyin.indexOf(so_val) >= 0) {
                                $(".search_key_city  ul").append("<li><b><span  class='city_zm' >" + Descript + "</span></b><span data-pinyin='" + Pinyin + "'></span><span data-CD='" + CD + "'></span></li>");
                                //$(".search_key_city  ul").append("<li><a href='javascript:;'>" + Descript + "</a></li>");

                            };
                        } else {
                            $('.sk_selectionCity .business .list').eq(1).find('ul').append("<li><a href='javascript:;' data-pinyin='" + Pinyin + "' data-CD='" + CD + "'>" + Descript + "</a></li>")
                        }

                    } else {
                        $("#currentCityNotFound_a").show();
                    }
                };
                //城市选项超过5个选项隐藏
                $('#sk_selectionCity .list ul li.seach_more').remove()
                $('#sk_selectionCity .list').find('ul').append('<li class="seach_more" style="display: none;"> <span class="icon iconfont">&#xe665;</span></li>')
                $('#sk_selectionCity .list ul').each(function (i, elem) {
                    var len = $(this).find('li').length;
                    if (len > 5) {
                        $(this).find('li:gt(4)').hide();
                        $(this).find('li:last').show();

                    }
                    var bl = true;
                    $(elem).find('li.seach_more').click(function () {
                        //$('#sk_selectionCity .list ul li.seach_more').click(function () {
                        if (bl) {
                            $(this).parent().find('li:gt(4)').show();
                            $(this).find('span').html('&#xe64b;')
                            bl = false;
                        } else {
                            $(this).parent().find('li:gt(4)').hide();
                            $(this).show();
                            $(this).find('span').html('&#xe665;');
                            bl = true;
                        }

                    })
                })
            }

        }
    });

}
function load_city() {
    $.ajax({
        type: "GET",
        url: "/ajax/GetCity_All",
        // data: { ts: Math.random() },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                var city_data = result.data;
                $('#sklistUl').html("");
                var en_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'w', 'x', 'y', 'z']
                for (var i = 0; i < en_arr.length; i++) {
                    var aLi = $('<li id="' + en_arr[i] + '"></li>');
                    var s = "";
                    for (var j = 0; j < city_data.length; j++) {
                        var re = city_data[j]['Pinyin'].substring(0, 1);
                        if (re == en_arr[i]) {
                            s += '<a href="javascript:;" data-pinyin="' + city_data[j]['Pinyin'] + '" data-cd="' + city_data[j]['CD'] + '">' + city_data[j]["Descript"] + '</a>'
                        }
                    }
                    aLi.append('<span>' + en_arr[i].toUpperCase() + '</span>');
                    aLi.append(s);
                    $('#sklistUl').append(aLi);
                };
                //将城市选中的值放在输入框内;
                $('#sklistUl li a').click(function () {
                    $(".sk_selectionCity").animate({ "left": 200 + "%" }, 500)
                    $(".sk_selectionCity .soso_a").animate({ "left": 200 + "%" }, 500)
                    $(".sk_selectionCity .h5_header").animate({ "left": 200 + "%" }, 500)
                    $("#SelectArea").val("");
                    $(".h5_Key_word").val("");
                    $('.h5_City_seach').val($(this).html());
                    //$('#cityName').val($(this).data('pinyin'));
                    //$('#cityCode').val($(this).data('cd'));
                    loadShangQuan_h5();
                })
            }
        }
    });
}

//附近酒店
function getCurrentPosition() {
    //添加定位组件，用于获取用户当前的精确位置
    var geolocation = new AMap.Geolocation({
        showCircle: false, //不显示定位结果的圆
        showMarker: false, //不显示定位结果的标记
        showButton: false, //不显示组件的定位按钮
        timeout: 5000 //浏览器定位超时时间5s
    });
    geolocation.getCurrentPosition(function (status, result) {
        if (status == 'complete') {
            onLocateSuccess(result) //定位成功
        } else if (status == 'error') {
            //定位失败
            if (result.message.indexOf('Geolocation permission denied.') !== -1) {
                //Geolocation permission denied.表示用户禁用了浏览器或者APP的定位权限或者关闭了手机的定位服务
                //或者当前页面为非安全页面,Chrome或者IOS10等系统会禁用非安全页面的定位请求
                //如果您的页面还没有支持HTTPS请尽快升级
                //安全页面指的是支持HTTPS的Web站点，而且是通过https协议打开的页面。安全页面也包括本地页面
                //showTip('您好，请在系统的隐私设置中打开当前应用的定位权限。');
            } else {
                // showTip('无法获取精确位置,将定位您所在的城市。');
            }
            //alert("定位失败,你可以通过设置中开启定位服务,开启wifi，以提高定位成功率；")
   
            var url = "/list/" + $("#MycityName").val() ;
            window.location = url;
            $("#h5_mask").hide()
            //onLocateFailed();
        }
    })
}
var onLocateSuccess = function (result) {
    $("#h5_mask").hide();
    var city = result.addressComponent.city;
    //map_h5.setCenter(result.position);
    //自定义定位标记 
    var point = 'M' + result.position.lng + '_' + result.position.lat;
    $("#cityName").val($("#MycityName").val())
    $("#key").val(point);
    var url = "/list/" + $("#cityName").val() + "?Key=" + point;
    window.location = url;

};
////会员特惠图片加载
//function loadingImg() {
//    if ($(window).height() + $(window).scrollTop() >= $(".h5_prefer_main_cont").offset().top) {
//        $(".h5_prefer_box").each(function (i, el) {
//            $(el).find("img").attr("src", $(el).find("img").attr("_src"))
//        })
//    }
//}
//品牌图片加载
function loadbrandImg() {
    if (IsPC()) {
        $(".Brand_carousel ul.active").find("li").each(function (i, el) {
            $(this).find("img").attr("src", $(this).find("img").attr("_src"))
        })
    } else {
        $(".Brand_carousel ul.active").find("li").each(function (i, el) {
            if ($(el).offset().left < $(window).width()) {
                $(this).find("img").attr("src", $(this).find("img").attr("_src"))
            }
        })
    }

}
//轮播图不存在时，使用默认图片;
function error_img(obj, arr) {
    obj.each(function (i, elem) {
        $(this).error(function () {
            $(this).attr('src', "http://images.homeinns.com/image/webH5/public.png");
            arr[i] = "http://images.homeinns.com/image/webH5/public.png"
        })
    })
};
//首页图片自适应高度
function img_top_H() {
    var aLi_W = $('.swiper-wrapper .swiper-slide').width();
    var scale = aLi_W / 750
    var aLi_H = scale * 352;

    //console.log(aLi_W)
    // var aLi_H = $('.h5_hotelImg .h5_img ul li').height(); 
    $('swiper-wrapper .swiper-slide').width(aLi_W);
    $('.swiper-wrapper .swiper-slide').height(aLi_H);
    $('.swiper-wrapper').height(aLi_H);
    $('.swiper-wrapper .swiper-slide img').height(aLi_H);
    $('.swiper-wrapper .swiper-slide img').width(100 + "%");

}
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}