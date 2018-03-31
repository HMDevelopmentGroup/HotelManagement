$(function () {
    //loadShangQuan(); keyword_search.js 已经初始化 无需调用
    var list = $(".list_time"),
         listTop = list.offset().top;
    //搜索栏fixed
    $(window).scroll(function () {
        var windowScrollTop = $(window).scrollTop();
        if (windowScrollTop > listTop) {
            if (!list.hasClass('fixed')) {
                list.addClass('fixed');
                $('.zb_pop').addClass('fixed');
                $('.citypop').addClass('fixed');
                $('.keyword_pop').addClass('fixed');
                $(".keyword_pop_two").addClass('fixed');
                $('.keyword_pop_three').addClass('fixed');
                $('.date_box').addClass('fixed');
                $(".list_wz_box").css({ marginTop: '100px' });
            }
        }
        else {
            list.removeClass('fixed');
            $('.zb_pop').removeClass('fixed');
            $('.citypop').removeClass('fixed');
            $('.keyword_pop').removeClass('fixed');
            $(".keyword_pop_two").removeClass('fixed');
            $('.keyword_pop_three').removeClass('fixed');
            $('.date_box').removeClass('fixed');
            $(".list_wz_box").css({ marginTop: '20px' });

        }
    });
    //点击筛选
    $('.list_time.fixed .list_filter_button input').live('click', function () {
        list.removeClass('fixed');
        $('.zb_pop').removeClass('fixed');
        $('.citypop').removeClass('fixed');
        $('.keyword_pop').removeClass('fixed');
        $(".keyword_pop_two").removeClass('fixed');
        $('.keyword_pop_three').removeClass('fixed');
        $('.date_box').removeClass('fixed');
        $(".list_wz_box").css({ marginTop: '20px' });
        $("html, body").stop(true, true).animate({
            scrollTop: 0
        }, {
            duration: 500,
            easing: "swing"
        });
    });
    //品牌tab选项卡
    $('.list_wz_list .tabs a').click(function () {
        var _this = $(this),
            index = _this.attr("data-bclass");
        _this.addClass('cur').siblings().removeClass('cur');
        _this.parent().next().find('.con[data-bclass="' + index + '"]').addClass('cur').siblings().removeClass('cur');
        brandHide();
    });
    function brandHide() {
        var length = $(".list_wz_list .tabs_con .con.cur .con_inner label").length;
        var width = $(window).width();
        if ((width>=1200&&length>7)||(width<1200&&length>5)) {
            $(".list_wz_list .tabs_con .con.cur").addClass("h60").find(".list_wz_gd").show().find("span").text("更多").siblings().find("i").removeClass("upon");
        }
        else {
            $(".list_wz_list .tabs_con .con.cur").removeClass("h60").find(".list_wz_gd").hide();
        }
    }
    brandHide();
    //筛选两行显示更多
    $('.list_wz_box ').on('click', ".list_wz_gd", function () {
        $(this).siblings(".list_wz_gd").remove(".list_wz_gd")
        if ($(this).find('i').hasClass("upon")) {
            $(this).find('i').removeClass("upon");
            $(this).find("span").html("更多")
            $(this).parent().addClass('h60');
            //点击更多时首旅如家与地图页面对齐
           
          //  pageScorll()
        } else {
            $(this).find('i').addClass("upon");
            $(this).find("span").html("收起");
            $(this).parent().removeClass('h60');
           // pageScorll()
           
        }

    });
   
    $("#city_select").blur(function () {
        var key = $("#city_select").val().trim();
        //为空，或者没有找到结果则还原原来的值
        if (key == "" || key === "中文 / 全拼" || $("#pop2_city li").size() == 0) {
            $("#city_select").val($("#CityNameCn").val());
            return false;
        }
        if ($("#CityNameCn").val() != key && $("#pop2_city li").size() != 0) {

            var equalItem;
            $("#pop2_city li b span").each(function (i, el) {
                if ($(el).text() == key) {
                    equalItem = $(el).parent().parent();
                }
            });

            //找不到完全匹配就取筛选结果的第一个
            if (!equalItem) {
                equalItem = $("#pop2_city li").first();
            }
            var city = equalItem;
            location.href = "/list/" + $(city).children(".pop_citypinyin").text();

        }
    });
   
    //快速查找周边酒店开始

    $("#home_zbjd").click(function () {
        $(".zb_pop").show().css({ "left": $(this).offset().left - 3, "top": $(this).offset().top + 30 });
        $("#city_select").removeClass("csxz");
        $(this).addClass("csxz");
        $(this).addClass("home_zb_w635_searchon");
    });

    $(".zb_pop_close").click(function () {
        $(".zb_pop").hide();
        $("#city_select").removeClass("home_banner_order_cityon");
        $("#home_zbjd").removeClass("home_zb_w635_searchon");
    });

    $(".zb_pop_tab li:first").addClass("zb_pop_tabon");
    $(".zb_pop_list ul").eq(0).show();
    $(".zb_pop_tab li").hover(function () {
        $(this).addClass("zb_pop_tabon").siblings().removeClass("zb_pop_tabon");
        $(".zb_pop_list ul").eq($(this).index()).show().siblings().hide();
    });
    $(".zb_pop_se li a").hover(function () {
       
        $(this).addClass("zb_pop_seon");
    }, function () {
        $(this).removeClass("zb_pop_seon");
    });

    $(".zb_pop_se li a").click(function () {//关键字选择
       
        
        var home_zb_pop_se_z = $(this).html();
        $(".zb_pop").hide();
        $(".csxz").val(home_zb_pop_se_z);
        if ($(".csxz").attr("id") == 'city_select') {
            $("#city_select").removeClass("home_banner_order_cityon");
        }
        if ($(".csxz").attr("id") == 'home_zbjd') {
            $("#home_zbjd").removeClass("home_zb_w635_searchon");
        }
    });
    $(".zb_pop_histroy .zb_pop_se").delegate("li","click",function () {      
        location = "/list/" + $(this).find(".pop_pinyin").text();
        $("#cityCode").val($(this).find(".pop_code").text());
        $("#cityName").val($(this).find(".pop_pinyin").text());
        loadMainListByAsync();

    });

    $(".home_zb_w635_ss li").hover(function () {
        var zb_ss_bgx = $(this).attr("bdx");
        $(this).children("i").css("background-position", zb_ss_bgx + "px -52px");
    }, function () {
        if ($(this).hasClass("home_zb_iconclick")) {
            return;
        } else {
            var zb_ss_bgx = $(this).attr("bdx");
            $(this).children("i").css("background-position", zb_ss_bgx + "px 0px");
        }
    });

    $(".home_around_tab li a:first").addClass("home_around_tabon");
    $(".home_around_change li a:first").addClass("home_around_changeon");
    $(".home_around_change li a").hover(function () {
        $(this).addClass("home_around_changeon");
    }, function () {
        $(this).removeClass("home_around_changeon");
    });

    $(".home_zb_w635_ss li").click(function () {
        var zb_ss_bgx = $(this).attr("bdx");
        if ($(this).hasClass("home_zb_iconclick")) {
            $(this).children("i").css("background-position", zb_ss_bgx + "px 0px");
            $(this).removeClass("home_zb_iconclick");
            $(".home_around").slideUp();
            $(".home_around_sj").hide()
        } else {
            $(".home_zb_w635_ss li").each(function () {
                var zb_ss_bgxt = $(this).attr("bdx");
                $(this).children("i").css("background-position", zb_ss_bgxt + "px 0px");
            });
            $(this).children("i").css("background-position", zb_ss_bgx + "px -52px");
            $(this).addClass("home_zb_iconclick").siblings().removeClass("home_zb_iconclick");
            $(".home_around").slideDown();
            $(".home_around_sj").show().css({ "left": $(this).offset().left + 26, "top": $(".home_around").offset().top - 9 });
        }
    });
    //快速查找周边酒店结束		



    //影藏事件
    $(window).resize(function () {
        $(".popup").height($(document).height());
    })
    $(".popup").height($(document).height());
    $(".popup,.list_loading").show();


    //地图关闭与打开
    $(".list_bigmap_open").click(function () {
        if ($(this).hasClass("list_bigmap_openon")) {
            $(this).removeClass("list_bigmap_openon");
            $(".list_bigmap_right").show();
            $(".list_bigmap_left").css("margin-right", "253px");
        } else {
            $(this).addClass("list_bigmap_openon");
            $(".list_bigmap_right").hide();
            $(".list_bigmap_left").css("margin-right", "0px");
        }
    });

    //地图切换交通查询
    $(".list_bigmap_tab a").click(function () {
        $(this).addClass("list_bigmap_tabon").siblings().removeClass("list_bigmap_tabon");
    });
    //点击线路查询按钮隐藏上部
    $(".list_bigmap_search_btn").click(function () {
        $(".list_bigmap_title").hide();
        $(".list_bigmap_site").hide();
        $(".list_bigmap_seacrh_title").children("a").show();
        $(".list_bigmap_seacrh_title").children("span").show();
    });
    //点击返回显示上部
    $(".list_bigmap_seacrh_title a").click(function () {
        $(".list_bigmap_title").show();
        $(".list_bigmap_site").show();
        $(".list_bigmap_seacrh_title").children("a").hide();
        $(".list_bigmap_seacrh_title").children("span").hide();
    });
    //公交
    $(".list_bigmap_bus_tab a").click(function () {
        $(this).addClass("list_bigmap_bus_tabon").siblings().removeClass("list_bigmap_bus_tabon");
    });

    $(".list_intro_qjtj").click(function () {
        $(".popup").show();
        $(".list_quanjing").show();
        $(".list_quanjing_iframe iframe").attr("src", "http://homeinns.b0.upaiyun.com/1e147881c5b4373a6ab39d296fa632ef/index.html");
    });
    $(".list_quanjing_title span").click(function () {
        $(".popup").hide();
        $(".list_quanjing").hide();
        $(".list_quanjing_iframe iframe").attr("src", "");
    });


    $(document).mouseup(function (e) {
        var _con = $(".zb_pop");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $(".zb_pop").hide();
        }
    });
    $(document).mouseup(function (e) {
        var _con = $(".citypop");
        if (!_con.is(e.target) && _con.has(e.target).length === 0) {
            $(".citypop").hide();
        }
    });




    //导航上移与选中

    $(".nav li").hover(function () {
        $(this).addClass("navon");
    }, function () {
        $(this).removeClass("navon");
    });
    $(".nav li").click(function () {
        $(this).addClass("naon").siblings().removeClass("naon");
    });

    //筛选地铁路线上移
    $('.list_metro_fix').eq(0).show();
    $('.list_metro_top a').eq(0).addClass('metron');
    $('.list_metro_top a').hover(function () {
        $(this).addClass('metron').siblings('a').removeClass('metron');
        $('.list_metro_fix').eq($(this).index()).show().siblings('.list_metro_fix').hide();
    });



    //筛选不限点击
    $(".list_wz_all").on('click', function () {
        var _type = $(this).attr("data-type");
        $(this).addClass("list_wz_boxonow");

        //   if ($(this).siblings(".list_wz_list").find(":checked").size() > 0) {
        $(this).siblings('.list_wz_list').find(":checked").attr('checked', false);
        $(this).siblings('.list_wz_list').find('i.ion').removeClass('ion');
        $(this).parents('.list_wz_top').find('i.ion').removeClass('ion');
        $(this).siblings('.list_wz_list').find('label.redon').removeClass("redon");
        $('.list_wz_show').find('li[data-type="' + _type + '"]').remove();

        $(this).siblings(".list_wz_list").children('label').removeClass("redon");
        //  }
        if (_type == 'position') {

            clearSingleFilter();//清除单选
            clearShangQuan();//清除商圈
        }
        if ($('.list_wz_show li').length == 0) {
            $('.list_wz_show span').hide();
        }
        SubmitQuery();
    });
    //清除筛选上移
    $('.list_wz_show span').hover(function () {
        $(this).addClass('redon');
    }, function () {
        $(this).removeClass('redon');
    });

    //筛选清除两字点击
    $('.list_wz_show span').on('click', function () {
        $(this).hide();
        $('.list_wz_show li').hide();
        $('.list_wz_list').find('input[type="checkbox"]').attr('checked', false);
        $('.list_wz_list i.ion').removeClass("ion");
        $(".list_wz_list label.redon").removeClass("redon");
        $(".list_wz_all").addClass("list_wz_boxonow");
        $(".list_wz_content ul li a").removeClass('navon_on');
        //清除提交内容并提交查询
        clearFilter();

        SubmitQuery(true);
    });

    //筛选商圈上移
    $('.list_wz_content ul:not(:first)').hide();
    $('.list_wz_area li code').eq(0).show();
    $('.list_wz_area li b i').eq(0).addClass('sqion');
    $('.list_wz_area li span').eq(0).addClass('sqon');
    $('.list_wz_area li').click(function () {
        pageScorll()
        if ($(this).children('b').children('i').hasClass('sqion')) {
            $(this).removeClass('cur');
            $('.list_wz_content ul').eq($(this).index()).toggle().siblings("ul").hide();
            $(this).children('code').hide();
            $(this).children('b').children('i').removeClass('sqion');
            $(this).children('span').removeClass('sqon');
        } else {
            $(this).addClass('cur').siblings().removeClass('cur');
            $('.list_wz_content ul').eq($(this).index()).toggle().siblings("ul").hide();
            $('.list_wz_area li').children('code').hide();
            $(this).children('code').show();
            $('.list_wz_area li').children('b').children('i').removeClass('sqion');
            $(this).children('b').children('i').addClass('sqion');
            $('.list_wz_area li').children('span').removeClass('sqon');
            $(this).children('span').addClass('sqon');
        }

    });




    //地铁路线选择
    $('.list_metro_content a').on('click', function () {
        if ($(this).hasClass('lineon')) {
            $(this).removeClass('lineon');
        } else {
            $('.list_metro_content a').removeClass('lineon');
            $(this).addClass('lineon');
            $('.list_wz_location').find('.list_wz_all').removeClass('list_wz_boxonow');
        }
        var _location = $('.list_wz_brand input:checked').length == 0
        var _location1 = $('.list_wz_content ul li a.navon_on').length == 0
        var _location2 = $('.list_metro_content a.lineon').length == 0
        if ($('.list_wz_location input:checked').length > 0) {
            $('.list_wz_location').find('.list_wz_all').removeClass('list_wz_boxonow');
        } else if (_location && _location1 && _location2) {
            $('.list_wz_location').find('.list_wz_all').addClass('list_wz_boxonow');
        }
    });

    //查询上移
    $(".list_cx_button input").hover(function () {
        $(this).addClass("redon");
    }, function () {
        $(this).removeClass("redon");
    });




    //如家推荐
    $('.list_px_left b').hover(function () {
        $(this).addClass('tjon');
    }, function () {
        $(this).removeClass('tjon');
    });
    $('.list_px_left b').click(function () {
        $(this).addClass('tjonn');
    });

    $('.list_px_left a').hover(function () {
        $(this).addClass('pon');
    }, function () {
        $(this).removeClass('pon');
    });

    $('.list_px_left a').click(function () {
        $(this).addClass('ponn').siblings().removeClass('ponn');
        $("#orderBy").val($(this).data('order'));
        SubmitQuery();
    });

    //右侧飘窗
    $(".list_float a").hover(function () {
        $(this).children("code").hide();
        $(this).find("p").show();
    }, function () {
        $(this).children("code").show();
        $(this).find("p").hide();
    });

    $('.list_float a.app_fix').hover(function () {
        $(this).siblings('.app_ewm').show();
    }, function () {
        $(this).siblings('.app_ewm').hide();
    });
    $("#top_back").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });


    //已筛选关闭点击
    $('.list_wz_show').on('click', '.close', function () {
        var _ty = $(this).parent().attr('data-type');
        var _val = $(this).parent().attr('data-value');

        var target = $('.list_wz_box').find('input[type="checkbox"][data-type="' + _ty + '"][value="' + _val + '"]');
        //筛选多选
        if (target.size() != 0) {
            target.parent().removeClass('redon').find("i").removeClass("ion");
            target.attr("checked", false);
            setFilter(target, true);
        } else {
            //筛选单选 
            target = $('.list_wz_content').find('a[data-cd="' + _val + '"][data-type="' + _ty + '"]');
            target.click();
        }

        $(this).parent().remove();
        if ($('.list_wz_show li').length == 0) {
            $('.list_wz_show span').hide();
        }


    });

    //  筛选input框点击 切换筛选列表 筛选上移
    $('.list_wz_box').on('click', 'input[type="checkbox"]', function () {
        inputFilterbind(this)
        setFilter($(this), true);

    });

  

});

function inputFilterbind(obj) {
    var _id = $(obj).val();
    var _ty = $(obj).attr('data-type');

    if (_id) {
        if ($(obj).is(':checked')) {
            var _val = "";
            if (_ty == 'equip' || _ty == 'price' || _ty == 'brand' || _ty == 'act' || _ty == 'theme') {
                _val = $(obj).parent().text();
            } else {
                _val = $(obj).data("name")
            }
            $(".list_wz_show ul").append("<li data-value='" + _id + "' data-type='" + _ty + "'>" + _val + "<code class='icon iconfont close'>&#xe73e;</code></li>");
            $(".list_wz_show span").show();
            $(obj).parent('label').addClass("redon");
            $(obj).siblings().children('i').addClass('ion');
           
            $(".list_wz_show li").hover(function () {
                $(this).css({
                    "color": "#c0191f",
                    "border-color": "#c0191f"
                });
            }, function () {
                $(this).css({
                    "color": "#90704d",
                    "border-color": "#b0b0b0"
                });
            });
        } else {

            $(".list_wz_show").find('li[data-value="' + _id + '"]').remove();
            $(obj).parent('label').removeClass("redon");
            $(obj).siblings().children('i').removeClass('ion');
        }

    }
    //筛选input框全不选 清除两字隐藏
    if ($('.list_wz_box input:checked').length == 0) {
        $('.list_wz_show span').hide();
    }
    setClearBtnStyle();
}


//主列表加载后绑定事件
function mainlistAffterLoad() {

    //页面滚动
   // $(window).scroll(pageScorl);

    //浪漫蜜月提示
    $(".list_intro_gift li a").hover(function () {
        $(this).addClass("coloron");
    }, function () {
        $(this).removeClass("coloron");
    });
    $(".list_intro_gift li a.langman_tip").hover(function () {
        $(".langman_tip_tk").show().css({ "left": $(this).offset().left - 75, "top": $(this).offset().top - 84 });
    }, function () {
        $(".langman_tip_tk").hide()
    });
    $(".list_intro_gift li a.zero_tip").hover(function () {
        $(".zero_tip_tk").show().css({ "left": $(this).offset().left - 55, "top": $(this).offset().top - 65 });
    }, function () {
        $(".zero_tip_tk").hide()
    });
    $(".list_intro_gift li a.ticket_tip").hover(function () {
        $(".ticket_tip_tk").show().css({ "left": $(this).offset().left - 50, "top": $(this).offset().top - 84 });
    }, function () {
        $(".ticket_tip_tk").hide()
    });
    $(".list_intro_gift li a.group_pay").hover(function () {
        $(".group_pay_tk").show().css({ "left": $(this).offset().left - 55, "top": $(this).offset().top - 84 });
    }, function () {
        $(".group_pay_tk").hide()
    });
    $(".list_intro_gift li a.gaokao_tip").hover(function () {
        $(".gaokao_tip_tk").show().css({ "left": $(this).offset().left - 70, "top": $(this).offset().top - 110 });
    }, function () {
        $(".gaokao_tip_tk").hide()
    });
    $(".list_intro_gift li a.dear_tip").hover(function () {
        $(".dear_tip_tk").show().css({ "left": $(this).offset().left - 70, "top": $(this).offset().top - 100 });
    }, function () {
        $(".dear_tip_tk").hide()
    });
    $(".list_intro_gift li a.ylzflj").hover(function () {
        $(".ylzflj_tk").show().css({ "left": $(this).offset().left - 65, "top": $(this).offset().top - 82 });
    }, function () {
        $(".ylzflj_tk").hide()
    });
    $(".list_intro_gift li a.free_pickup").hover(function () {
        $(".free_pickup_tk").show().css({ "left": $(this).offset().left - 70, "top": $(this).offset().top - 84 });
    }, function () {
        $(".free_pickup_tk").hide()
    });
    $(".list_intro_gift li a.hotel_view").hover(function () {
        $(".hotel_view_tk").show().css({ "left": $(this).offset().left - 60, "top": $(this).offset().top - 82 });
    }, function () {
        $(".hotel_view_tk").hide()
    });
    $(".list_intro_gift li a.free_tea").hover(function () {
        $(".free_tea_tk").show().css({ "left": $(this).offset().left - 74, "top": $(this).offset().top - 48 });
    }, function () {
        $(".free_tea_tk").hide()
    });
    $(".list_intro_gift li a.live_special").hover(function () {
        $(".live_special_tk").show().css({ "left": $(this).offset().left - 65, "top": $(this).offset().top - 46 });
    }, function () {
        $(".live_special_tk").hide()
    });
    $(".list_intro_gift li a.return_100").hover(function () {
        $(".return_100_tk").show().css({ "left": $(this).offset().left - 70, "top": $(this).offset().top - 103 });
    }, function () {
        $(".return_100_tk").hide()
    });
    $(".list_intro_gift li a.give_500").hover(function () {
        $(".give_500_tk").show().css({ "left": $(this).offset().left - 65, "top": $(this).offset().top - 65 });
    }, function () {
        $(".give_500_tk").hide()
    });
    $(".list_intro_gift li a.views_50").hover(function () {
        $(".views_50_tk").show().css({ "left": $(this).offset().left - 55, "top": $(this).offset().top - 85 });
    }, function () {
        $(".views_50_tk").hide()
    });
    //查看详情
    $(".list_ck_details").hover(function () {
        $(this).addClass("detailon");
    }, function () {
        $(this).removeClass("detailon");
    });
    //分页上移
    $(".page a").hover(function () {
        $(this).addClass("pageon");
    }, function () {
        $(this).removeClass("pageon");
    });
    //分页点击滚动至第一条
    $('.page').live('click', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    //收藏
    $('.list_intro_collect').hover(function () {
        if ($(this).children("strong").html() == "收藏") {
            $(this).find("strong").css("color", "#C0191F")
            $(this).find("span").css("color", "#C0191F");
        } else if ($(this).children("strong").html() == "已收藏") {
            $(this).find("span").html("&#xe60d;")
            $(this).find("strong").css("color", "#C0191F")
            $(this).children("strong").html("取消收藏");
        }
    }, function () {
        if ($(this).children("strong").html() == "收藏") {
            $(this).find("strong").css("color", "#979797")
            $(this).find("span").css("color", "#979797");
        } else if ($(this).children("strong").html() == "取消收藏") {
            $(this).find("span").html("&#xe60c;");
            $(this).children("strong").html("已收藏");
        }
    });
    //$('.list_intro_collect').click(function () {
    //    if ($(this).children("strong").html() == "收藏") {
    //        $(this).find("span").css("color", "#c0191f");
    //        $(this).children("strong").html("已收藏");
    //        $(this).children("strong").addClass("spanon")
    //    } else if ($(this).children("strong").html() == "取消收藏") {
    //        $(this).find("span").css("color", "#979797");
    //        $(this).find("span").html("&#xe60d;");
    //        $(this).children("strong").removeClass("spanon");
    //        $(this).children("strong").html("收藏");

    //    }
    //});
    $(".list_intro_collect").click(function () {
        var hotelCd = $(this).attr("hotelCd");
        var login_mk = $(this).data("login_mk");
        if ($(this).children("strong").html() == "收藏") {

            collect_add(this, hotelCd, login_mk);
        }
        else {
            collect_cancel(this, hotelCd, login_mk);

        }
    });

    $(".list_room_edit_cz ul").hover(function () {
        $(this).css("text-decoration", "underline");
    }, function () {
        $(this).css("text-decoration", "none");
    });



    //右侧随着页面滚动
   
    //if ($("#list_start").offset().top == 542) {
    //    $(".list_right_306").css({ "position": "absolute", "top": $("#list_start").offset().top + 60 });

    //} else {
    //    $(".list_right_306").css({ "position": "absolute", "top": $("#list_start").offset().top });

    //}

   $(window).scroll(function () {
       pageScorll();
    })

    //显示与隐藏房型
   $(".list_room_edit_cz ul").click(function () {
      
        if ($(this).hasClass("list_room_edit_czt")) {
            $(this).removeClass("list_room_edit_czt").children("span").html("展开所有房型");
            $(this).parent().parent().parent().siblings(".list_room").hide();
            $(this).children('code').children('i').removeClass('roomon');
            //$(".list_boxline").css("padding-bottom", "10px");
            pageScorll()
            $('.list_main').css('height', 'auto');
        } else {
            $(this).addClass("list_room_edit_czt").children("span").html("收起所有房型");
            $(this).parent().parent().parent().siblings(".list_room").show();
            $(this).children('code').children('i').addClass('roomon');
            //$(".list_boxline").css("padding-bottom", "0");
            loadRomTypeList($(this));
        }
        
       
    });
    //重新加载
    $("body").on("click", ".Refresh", function () {
        var obj = $(this).parents(".list_room").siblings(".list_recommend_intro").find(".list_room_edit_cz ul")
        console.log(obj.data("hotelcd"))
        loadRomTypeList(obj);
    })
    //价格鼠标移上去效果
    $(".list_intro_money_top").hover(function () {
        $(this).parent().siblings(".list_money_po").show()//.css({ "left": $(this).offset().left + 83, "top": $(this).offset().top - 61 });
    }, function () {
        $(this).parent().siblings(".list_money_po").hide()
    });

    //和颐酒店鼠标移动上去高亮
    $(".list_recommend_intro").hover(function () {
        $(this).addClass("list_heyion");
    }, function () {
        $(this).removeClass("list_heyion");
    });
    //莫泰酒店鼠标移动上去高亮
    $(".list_motel").hover(function () {
        $(this).addClass("list_motelon");
    }, function () {
        $(this).removeClass("list_motelon");
    });
    //如家酒店鼠标移动上去高亮
    $(".list_rj").hover(function () {
        $(this).addClass("list_rjon");
    }, function () {
        $(this).removeClass("list_rjon");
    });
    //如家精选酒店鼠标移动上去高亮
    $(".list_plus").hover(function () {
        $(this).addClass("list_pluson");
    }, function () {
        $(this).removeClass("list_pluson");
    });
    //如家云上四季酒店鼠标移动上去高亮
    $(".list_yssj").hover(function () {
        $(this).addClass("list_yssjon");
    }, function () {
        $(this).removeClass("list_yssjon");
    });
    /*全景*/
    $(".list_intro_img a.views_icon").bind("click", function () {//全景
        var overallurl = $(this).data('overallurl');
        var title = $(this).data('title');
        var str = '<iframe id="ifmOverAll" style="width:1000px;height:470px;" src="' + overallurl + '" allowtransparency="true" frameborder="0">' + '</iframe>';

        $(".panorama").show().find('.head .title').html(title);
        $(".ifm").append(str);

    })
    $(".ifm").find(".delete").click(function () {
        $(".panorama").hide();
        $("#ifmOverAll").remove()
    })

}
//商圈点击
function bindShangQuanClick(obj) {
    var currentVal = $("#SelectArea").val();

    var areaArr = currentVal.split('|');
    if (areaArr.indexOf(obj.val()) > -1) {
        //存在 移除 
        areaArr.remove(obj.val());
    } else {
        //不存在 添加
        areaArr.push(obj.val());
    }
    $("#SelectArea").val(areaArr.join('|'));
    clearSingleFilter();
    SubmitQuery();
}
//点击单选时清除商圈筛选
function clearShangQuan() {
    //清空商圈
    $(".list_wz_content [data-signle]:checked").attr('checked', false).parent().removeClass("redon");
    $('.list_wz_show').find('li[data-type="sq"]').remove();
    //隐藏清空按钮
    if ($('.list_wz_show li').length == 0) {
        $('.list_wz_show span').hide();
    }

    $('#SelectArea').val('');//清空商圈保存的值 
}
function setClearBtnStyle() {

    //不限按钮状态
    //var _location = $('.list_wz_brand input:checked').length == 0
    var _location1 = $('.list_wz_content ul li a.navon_on').length == 0
    if ($('.list_wz_location input:checked').length > 0) {
        $('.list_wz_location').find('.list_wz_all').removeClass('list_wz_boxonow');
        //} else if (_location && _location1) {
    } else if (_location1) {
        $('.list_wz_location').find('.list_wz_all').addClass('list_wz_boxonow');
    }
    //品牌 价格 设施
    $(".list_wz_all[data-type!='position']").each(function (i, item) {
        var type = $(this).data("type");
        if ($(".list_wz_list :input[data-type='" + type + "']:checked").size() > 0) {
            $(".list_wz_all[data-type='" + type + "']").removeClass("list_wz_boxonow");
        } else {
            $(".list_wz_all[data-type='" + type + "']").addClass("list_wz_boxonow");
        }
    })


}
function loadShangQuan() {
    var cityName = $("#cityName").val();
    var type = "ch";
    $.ajax({
        type: "GET",
        url: "/Ajax/GetShangQun_Auto",
        data: { cityName: cityName, type: type },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
               
                if (result.data != null && result.data != undefined && result.data != "") {
                    $("#pop_shangquan").empty();
                    $("#pop_xinzheng").empty();
                    $("#pop_xianlu").empty();
                    $("#pop_view").empty();
                    $("#pop_air").empty();

                    $(".keyword_xzq_list,.keyword_metro_list,.keyword_sq_list,keyword_jc_list").empty();
                    var RCount = 0, DCount = 0, ACount = 0;
                    var keyLCount = 0, keyRCount = 0, keyDCount = 0
                    $(result.data).each(function (i) {
                        switch (result.data[i].KeySearchType) {
                            case "L":
                                var obj = $("<label  title='"
                                    + result.data[i].KeyName + "(" + result.data[i].HotelCount +
                                    ")' ><input data-signle='2'  type='checkbox' data-CD='" + result.data[i].KeyCD +
                                     "' value='" + result.data[i].KeyCD +
                                     "' data-id=" + result.data[i].KeyCD +
                                     "' data-name='" + result.data[i].KeyName +
                                     "' data-type='sq'><div class='list_sx_icon'><i></i></div>" +
                                     result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</label>");
                                obj.find(":checkbox").click(function () {
                                    //bindShangQuanClick($(this));

                                });
                                $("#pop_shangquan").append(obj);
                                if (keyLCount < 10) {
                                    $(".keyword_sq_list").append("<li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")' ><a data-type='sq' data-cd='" + result.data[i].KeyCD + "'  >" + result.data[i].KeyName + "</a>(" + result.data[i].HotelCount + ") </li>");
                                    keyLCount++;
                                }
                                break;
                            case "R":
                                $("#pop_xinzheng").append(" <li  title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'><a data-signle='1'  data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD='" + result.data[i].KeyCD + "' data-type='xzq'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                if (keyRCount < 16) {
                                    $(".keyword_xzq_list").append("<li  title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")' ><a data-type='xzq' data-cd='" + result.data[i].KeyCD + "'  >" + result.data[i].KeyName + "</a>(" + result.data[i].HotelCount + ")</li>");
                                    keyRCount++;
                                }

                                RCount++;
                                break;
                            case "D":
                                $("#pop_xianlu").append(" <li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='metro'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a> </li>");

                                $(".keyword_metro_list").append("<li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'><a data-type='metro' data-cd='" + result.data[i].KeyCD + "'  >" + result.data[i].KeyName + "</a>(" + result.data[i].HotelCount + ")</li>");

                                DCount++;
                                break;
                            case "J":
                                $("#pop_view").append(" <li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='view'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");

                                break;
                            case "A":
                                $("#pop_air").append(" <li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'> <a data-signle='1' data-name='" + result.data[i].KeyName + "' data-id='" + result.data[i].KeyCD + "' data-CD=" + result.data[i].KeyCD + " data-type='air'>" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")</a></li>");
                                //if (keyDCount < 20) {
                                //    $(".keyword_metro_list").append('<li class=""><a data-type="metro" data-cd="' + result.data[i].KeyCD + '"  >' + result.data[i].KeyName + '</a></li>');
                                //    keyDCount++;
                                //}
                                $(".keyword_jc_list").append("<li title='" + result.data[i].KeyName + "(" + result.data[i].HotelCount + ")'><a data-type='air' data-cd='" + result.data[i].KeyCD + "'  >" + result.data[i].KeyName + "</a>(" + result.data[i].HotelCount + ")</li>");


                                break;
                            default:
                                break;
                        }
                        //车站机场...

                    });
                    /*文字过长省略号*/
                    ellipsis_L(".keyword_xzq_list li a", 5)
                    $(".clear_fhy").click(function () {
                        $(".popup").hide()
                        $(this).parent().hide()
                    })

                    var more = '<a class="list_wz_gd"><span>更多</span><code><i></i></code></a>';

                    if ($("#pop_xianlu").html() == "") {
                        $('.list_wz_area').find(".xianlu").hide();
                    }
                    if ($("#pop_view").html() == "") {
                        $('.list_wz_area').find(".view").hide();
                    }
                    if ($("#pop_air").html() == "") {
                        $('.list_wz_area').find(".air").hide();
                    }
                    $(".list_wz_content ul").each(function (i, el) {

                        if ($(el).hasClass("list_wz_list")) {
                            if ($(el).find("input").size() > 14) {
                                $(el).addClass("h60").append(more);
                            }
                        } else {
                            if ($(el).find("a").size() > 16) {
                                $(el).addClass("h60").append(more);
                            }
                        }
                    });
                    ////单选上移
                    //$('.list_wz_content ul li').hover(function () {
                    //    $(this).addClass('navon');
                    //}, function () {
                    //    $(this).removeClass('navon');
                    //});

                    //筛选单选

                    bindSignleFilter();

                    // //关键词推荐
                    // $('.keyword_xzq_list li,.keyword_sq_list li,.keyword_jc_list li,.keyword_metro_list li').hover(
                    //function () {
                    //    $(this).addClass('redon');
                    //}, function () {
                    //    $(this).removeClass('redon');
                    //});
                    //$(".keyword_pop_box li a").click(function () {
                    //    $("#home_zbse").val($(this).text());
                    //    var cd = $(this).data("cd");
                    //    var prefix = "";
                    //    switch ($(this).data("type")) {
                    //        case "sq":
                    //            prefix = "S";
                    //            break;
                    //        case "xzq":
                    //            prefix = "X";
                    //            break;
                    //        case "metro":
                    //            prefix = "D";
                    //            break;
                    //        //车站机场 未完成
                    //        case "view":

                    //            prefix = "J";
                    //        case "air": 
                    //            prefix = "A";
                    //                break;
                    //        default:
                    //    }
                    //    $("#key").val(prefix + cd);
                    //    $(".keyword_pop").hide();
                    //});
                }
                else {
                    $("#pop_shangquan").empty();
                    $("#pop_xinzheng").empty();
                    $("#pop_xianlu").empty();
                }
            }
            //else {
            //    alert("没有相关数据");
            //}
        }
    });
}

function bindSignleFilter() {
    $(".list_wz_content li a[data-signle]").click(function () {
        //绑定选中效果
        var _id = $(this).attr('data-id');
        var _ty = $(this).attr('data-type');
        var _val = $(this).data('cd');

        if ($(this).hasClass('navon_on')) {
            clearSingleFilter();
        } else {
            $('.list_wz_location').find('.list_wz_all').removeClass('list_wz_boxonow');
            $('.list_wz_location label.redon').removeClass('redon');
            $('.list_wz_location i.ion').removeClass("ion")
            var name = $(this).data("name");
            //写入VALUE
            var ValueType = '';
            switch (_ty) {
                case "xzq":
                    ValueType = 'X';
                    break;
                case "metro":
                    ValueType = 'D';
                    break;
                case "view":
                    ValueType = 'J';
                    break;
                case "air":
                    ValueType = 'A';
                    break;
                default:
            }
            clearSingleFilter();
            $(this).addClass('navon_on');
            $(".list_wz_show ul").append("<li data-signle='1' data-value='" + _id + "' data-type='" + _ty + "'>" + name + "<code class='icon iconfont close'>&#xe73e;</code></li>");
            $(".list_wz_show span").show();

            $('#SignleAreaFilter').val(ValueType + _val);

            //LG.log($('#SignleAreaFilter').val())
        }



        //绑定并清空商圈
        clearShangQuan();
        setClearBtnStyle();
        //提交查询
        SubmitQuery(true);
    });
}




//清除单选筛选
function clearSingleFilter() {
    $("#SignleAreaFilter").val('');
    $('.list_wz_content .navon_on').removeClass('navon_on');
    $('.list_wz_show [data-signle="1"]').remove();

    if ($('.list_wz_show ul li').size() == 0) {
        $('.list_wz_show span').hide();
    }
}


//$('list_right_306').mousemove(pageScorll);
//滚动效果



function pageScorll() {
        $(".list_right_306").show();
    //判断吸不吸顶
      
        var H = $('.resultlist_main').offset().top
        var total_H = $('.list_main').height() + $('.main_pc>.main_w1200').height() + $('.list_brandbox').height() + $('.top').height();
        if ($("#listPager").html() == "") {
            
            if ($(window).scrollTop() + 80 >= H && total_H - $(".list_right_306").height() - 132 > $(window).scrollTop()) {
                $(".list_right_306").css({ "position": "fixed", "top": 85 });
            } else {
                $(".list_right_306").css({ "position": "absolute", "top": 0 });
            }

            if (total_H - $(".list_right_306").height() - 132 < $(window).scrollTop()) {
                $(".list_right_306").css({ "position": "absolute", top: $('.list_main').height() - $(".list_right_306").height() + 5 })
            }

            //当地图页的高度大于酒店内容页时，让酒店内容页等于地图内容的高度
            if ($('.list_main').height() <= $(".list_right_306").height()) {
                $('.list_main').height($(".list_right_306").height())
            } else {
                $('.list_main').css('height', 'auto');
            }
        } else {
            
            if ($(window).scrollTop() + 80 >= H && total_H - $(".list_right_306").height() - 132 > $(window).scrollTop()) {
                $(".list_right_306").css({ "position": "fixed", "top": 85 });
            } else {
                $(".list_right_306").css({ "position": "absolute", "top": 0 });
            }

            if (total_H - $(".list_right_306").height() - 132 < $(window).scrollTop()) {
                $(".list_right_306").css({ "position": "absolute", top: $('.list_main').height() - $(".list_right_306").height() -80 })
            }

            //当地图页的高度大于酒店内容页时，让酒店内容页等于地图内容的高度
            if ($('.list_main').height() <= $(".list_right_306").height()) {
                $('.list_main').height($(".list_right_306").height())
            } else {
                $('.list_main').css('height', 'auto');
            }
        }


        //$(".list_right_306").css({ "position": "absolute", "top": $("#list_start").offset().top });
        // if ($(window).scrollTop() >= $("#list_start").offset().top) {
        //     $(".list_right_306").css({ "position": "fixed", "top": "85px" });
        //} else {
        //     $(".list_right_306").css({ "position": "absolute", "top": $("#list_start").offset().top });
        
        //}
        //    //当地图页的高度大于酒店内容页时，让酒店内容页等于地图内容的高度
        //if ($('.list_main').height() <= $(".list_right_306").height()) {  
        // } else {
        //      $('.list_main').css('height', 'auto');
        // }
        // // 分页器存在于存在的两种情况
        //var H = $('.list_main').height() + $('.main_pc>.main_w1200').height() + $('.list_brandbox').height() + $('.top').height();
        //if ($('.page').height() == null || $('.page').height() == 0 || $('.page').height() == "none") {
        //   if (H <= $(window).scrollTop() + $(".list_right_306").height()) {
        //    $(".list_right_306").css({ "position": "absolute", "top": (H - $(".list_right_306").height() -10) });
        // }
        // } else {     
        //    if (H <= $(window).scrollTop() + $(".list_right_306").height()+132) {
        //         $(".list_right_306").css({ "position": "absolute", "top": (H - $(".list_right_306").height() - 98) });
        //     }
        //  }
        

   
   
    if ($(window).scrollTop() > 50) {//当滚动条距离顶端大于50像素的时候
        $(".list_float").show();//右下角回到顶部显示
    } else {
        $(".list_float").hide();//否则右下角回到顶部影藏
    }
    var browserIE6 = (navigator.userAgent.indexOf("MSIE 6") >= 0) ? true : false;//判断浏览器是不是ie6
    if (browserIE6) {//如果浏览器是ie6的时候执行如下效果		
        $(".list_bigmap").css("top", $(window).scrollTop() + $(window).height() / 2);
        $(".list_float").css("top", $(window).scrollTop() + ($(window).height() - $(".list_float").height()) / 2);
        $(".list_loading").css({ "top": $(window).scrollTop() + ($(window).height() - $(".list_loading").height()) / 2, "margin-top": "0px" });
    }

}

//查看大地图hover
$(".list_right_ck").live({
    mouseover: function () {
        $(this).addClass("ckon");
        $(this).children("code").addClass("codeon");
    },
    mouseout: function () {
        $(this).removeClass("ckon");
        $(this).children("code").removeClass("codeon");
    },
    click: function () {
        $("#frm").attr("action", "/map/" + $("#cityName").val());
        $("#frm").submit();
    }
});


//加载房型
function loadRomTypeList(JQobj) {

    var parms = {
        ArrDate: $("#beginDate").val(),
        DepDate: $("#endDate").val(),
        hotelCd: JQobj.data('hotelcd'),
        forList: true
    }
    var obj = $(JQobj).parent().parent().parent().parent().find(".list_room_box");


    $("#loadingRoomTypes_" + JQobj.data("hotelcd")).show();
    obj.html('');
    var isjjx = $(JQobj).data("jjx");

    if (isjjx == 1) {
        obj.load("/HotelAct/HotelRomList", parms, function () {

            //LG.log("房型列表 加载完成。。");
            $("#loadingRoomTypes_" + JQobj.data("hotelcd")).hide();
            //LG.log("隐藏加载中图标");
            //弹出会员价格 
            promotionTip();
            bindPrice();
            $(".list_room_fix:last-child").css({ "borderBottom": "0 none" });
            $('.list_room_tj_row:last-child').css({ "borderBottom": "0 none" });
            pageScorll()
            $('.list_main').css('height', 'auto');
        });
    } else {

        obj.load("/HotelAct/HotelRomList_JG", parms, function () {
            promotionTip();
            //LG.log("房型列表 加载完成。。");
            $("#loadingRoomTypes_" + JQobj.data("hotelcd")).hide();
            //LG.log("隐藏加载中图标");
            //弹出会员价格 
            bindPrice();
            $(".list_room_fix:last-child").css({ "borderBottom": "0 none" });
            $('.list_room_tj_row:last-child').css({ "borderBottom": "0 none" });
            pageScorll()
            $('.list_main').css('height', 'auto');
        });

    }
   
}
function promotionTip() {
    //返券礼包hover
    $(".price_row_return").hover(function () {
        $(".return_tip_tk").show().css({ "left": $(this).offset().left - 90, "top": $(this).offset().top - 100 });
        if ($(this).data("gr2") == '1') {
            $(".return_tip1").show();
            $(".return_tip2").hide();
        } else {
            $(".return_tip2").show();
            $(".return_tip1").hide();
        }
    }, function () {
        $(".return_tip_tk").hide()
    })
    $(".price_row_gift").hover(function () {
        $(".gift_tip_tk").show().css({ "left": $(this).offset().left - 96, "top": $(this).offset().top - 81 });

    }, function () {
        $(".gift_tip_tk").hide()
    })
    //8折组合支付
    $(".eight_cheap_pay").hover(function () {
        $(".group_pay_tk").show().css({ "left": $(this).offset().left - 94, "top": $(this).offset().top - 81 });

    }, function () {
        $(".group_pay_tk").hide()
    })

}



function bindPrice() {
    //早点未登录
    $(".break_ago").hover(function () {
        $(".list_room_break").show();//.css({ "left": $(this).offset().left - 546, "top": $(this).offset().top - 846 });
    }, function () {
        $(".list_room_break").hide();
    });
    //专享价提示
    $('.list_room_w154 span').hover(function () {
        var _this = $(this),
            brown = _this.parent().siblings('.tips_brown');
        var width = _this.width(),
            left = _this.offset().left - _this.parents('.list_room_fix').offset().left,
            brownWidth = brown.width();
        brown.show().css({ left: left + width / 2 - brownWidth / 2 - 13 });//.css({ "left": $(this).offset().left - 134, "top": $(this).offset().top - 620 });
    }, function () {
        $(this).parent().siblings(".tips_brown").hide()
    });

    //房型图片放大
    $(".list_room_img").mouseover(function (e) {
        if ($(".room_bigon").size() == 0) {
            $(".main_pc").append('<div class="room_bigon"><ul></ul></div>');
        }
        $(".room_bigon").show().css({ "left": (e.pageX + 5) + "px", "top": (e.pageY + 5) + "px" });
        img_src = "<img width='336' height='225' src='" + $(this).attr('src_img') + "'/>";
        $(".room_bigon ul").append(img_src);
    }).mouseout(function (e) {
        $(".room_bigon").hide().children("ul").empty();
    }).mousemove(function (e) {
        $(".room_bigon").css({ "left": (e.pageX + 5) + "px", "top": (e.pageY + 5) + "px" });
    });


    ////弹出会员价格未登录
    $(".price_row a").hover(function () {
        $(this).parent().parent('.list_room_w345').siblings(".list_room_money").show();//.css({ "left": $(this).offset().left - 225, "top": $(this).offset().top - 611 });
    }, function () {
        $(this).parent().parent('.list_room_w345').siblings(".list_room_money").hide();
    });
    //弹出会员价格已登录
    $(".price_row a").hover(function () {

        var dateFlow = $(this).parent().parent('.list_room_w345').siblings(".list_login_money").show();
        var itemcount = dateFlow.data("itemcount");
        var width = 459;
        var aWidth = $(this).width();
        if ($(this).data("hover") == 1) {

        } else {
            var aLeft = $(this).offset().left - $(this).parents('.list_room_fixbox').offset().left;
        }
        
        if (itemcount < 7) {

            width = 459 / 7 * itemcount;
            //
        }
        dateFlow.css({ "width": width, "left": aLeft + aWidth / 2 - 6 - width / 2 - 105 }) //.css({ "left": $(this).offset().left - 105, "top": $(this).offset().top - 611 });
        itemcount
    }, function () {
        $(this).parent().parent('.list_room_w345').siblings(".list_login_money").hide();
    });

   // $(".popup,.list_loading").show();
}

//文字过长...
function ellipsis_L(item,leng) {
    $(item).each(function (i, el) {
        if ($(el).html().length > leng) {
            var text = $(el).html().substr("0", leng)
            $(el).html(text + "...")
        }

    })
}

