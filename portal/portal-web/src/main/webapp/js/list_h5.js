


$(function () {
    //判断是否是时租房
    if ($("#ActivityCode").val() == "ST") {
        $(".limit_today").removeClass('flag').prev().addClass('flag');
    }
    else {
        $(".limit_today").addClass('flag').prev().removeClass('flag');
    }
    //cookie 取值
    if ($.cookie("exist", { name: 'dateCookie' })) {

        var dateArr = $.cookie("get", {
            name: 'dateCookie'
        })
        var starMnthDay = dateArr.substr(5, 5);
        var endMnthDay = dateArr.substr(-5)
        var starfullDay = dateArr.substr(0, 10).replace('-', '/').replace('-', '/');
        var endfullDay = dateArr.substr(-10).replace('-', '/').replace('-', '/');
        var startGetTime = new Date(starfullDay.split('/')[0], starfullDay.split('/')[1] - 1, starfullDay.split('/')[2]).getTime();
        var endGetTime = new Date(endfullDay.split('/')[0], endfullDay.split('/')[1] - 1, endfullDay.split('/')[2]).getTime();
        var today = new Date();
        var todayGetTime = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
        var tomorrowGetTime = todayGetTime + 24 * 60 * 60 * 1000;
        var tomorrow = new Date(tomorrowGetTime);

        if (startGetTime < todayGetTime) {
            var startYear = today.getFullYear(),
                startMonth = today.getMonth() + 1,
                startDate = today.getDate();
            starMnthDay = (startMonth < 10 ? '0' + startMonth : startMonth) + '-' + (startDate < 10 ? '0' + startDate : startDate);
            starfullDay = startYear + "/" + (startMonth < 10 ? '0' + startMonth : startMonth) + '/' + (startDate < 10 ? '0' + startDate : startDate);
        }
        if (tomorrowGetTime > endGetTime) {
            var endYear = tomorrow.getFullYear(),
                endMonth = tomorrow.getMonth() + 1,
                endDate = tomorrow.getDate();
            endfullDay = endYear + "/" + (endMonth < 10 ? '0' + endMonth : endMonth) + '/' + (endDate < 10 ? '0' + endDate : endDate);
            endMnthDay = (endMonth < 10 ? '0' + endMonth : endMonth) + '-' + (endDate < 10 ? '0' + endDate : endDate);
        }
        $('.start_date').html(starMnthDay.replace('/', '-').replace('/', '-')).attr({ "data-time": starfullDay.replace('/', '-').replace('/', '-') });
        $('.end_date').html(endMnthDay.replace('/', '-').replace('/', '-')).attr({ "data-time": endfullDay.replace('/', '-').replace('/', '-') });
        $('#s_ArrDate').val(starfullDay);
        $('#s_DepDate').val(endfullDay);
        $('#beginDate').val(starfullDay);
        $('#endDate').val(endfullDay);
        var totalDays = DateDiffH5(starfullDay, endfullDay)
        $(".enter_time span.total").html(totalDays + "晚");

        var week = ["一", "二", "三", "四", "五", "六", "日"];
        var startWeek = new Date(starfullDay.split("/")[0], starfullDay.split("/")[1] - 1, starfullDay.split("/")[2]).getDay();
        var endWeek = new Date(endfullDay.split("/")[0], endfullDay.split("/")[1] - 1, endfullDay.split("/")[2]).getDay();
        startWeek = startWeek == 0 ? 7 : startWeek;
        endWeek = endWeek == 0 ? 7 : endWeek;
        //console.log(startWeek);
        $(".list_choose input.start_data").val(starfullDay.replace("-", "/").replace("-", "/")).next().val("周" + week[startWeek - 1]);
        $(".list_choose input.end_data").val(endfullDay.replace("-", "/").replace("-", "/")).next().val("周" + week[endWeek - 1]);

    }
    $(".list_cx_button input").click(function () {
        //cookie 赋值
        $.cookie("delete", {
            name: 'dateCookie'
        });
        $.cookie("set", {
            duration: 0.1,
            name: 'dateCookie',
            value: $("#beginDate").val() + $("#endDate").val()
        });
    });
    //打开页面加载loading图
    $('#h5_mask').show();
    loading_hide()//loading图隐藏;

    $('.main_pc').css('display', 'none');
    $('#h5Main').css('display', 'none');
    // $('body').css({ 'opacity': '1', 'filter': 'alpha(opacity=100)' });

    //改变窗口大小自适应;   
    $(".skwrap").css("height", $(window).height());

    //判断不同页面加载不同页面
    viewWidth();

    //改变窗口大小加载不同页面
    $(window).resize(function () {
        viewWidth();
    });


    //判断是否是IE浏览器，包括Edge浏览器    
    if (($.browser.msie && $.browser.version > 6) || window.navigator.userAgent.indexOf('rv') > 1) {
        //兼容ie
        //判断ie8
        var isIE = !!window.ActiveXObject;
        var isIE8 = isIE && !!document.documentMode;
        //判断ie9
        var userAgent = window.navigator.userAgent.toLowerCase();
        $.browser.msie9 = $.browser.msie && /msie 9\.0/i.test(userAgent);
        //  alert(isIE8);
        if (isIE8 || $.browser.msie9) {
            var ie_span = $('<b>酒店位置/酒店名/品牌</b>');
            $('.seach_City').append(ie_span);
            $('.seach_City b').css({
                position: 'absolute',
                left: 10 + '%',
                top: "9px",
                height: '12px',
                lineHeight: '12px',
                color: '#595757',
                fontSize: "12px",
                fontWeight: 'normal'
            });
            $('.seach_City b').click(function () {
                $('.seach_City b').hide();
                $('.skSeek .seach_City input').focue();

            })
            $('.skSeek .seach_City input').focus(function () {
                $('.seach_City b').hide()
            });
            $('.skSeek .seach_City input').blur(function () {
                $('.seach_City b').show()
            });


        }

        // $('input, textarea').placeholder();

        $('#main').scroll(function () {
            if ($('#main').scrollTop() + $(window).height() - 149 == $('#result').height()) {
                // $('#h5_mask').show();//loading图显示
                if (data_list_flag) {
                    count++;
                    open_refresh();
                }
            }
        });
    } else {
        //其他浏览器
        $('#main').scroll(function () {
            if ($('#main').scrollTop() + $(window).height() - 149 == $('#result').height()) {
                // $('#h5_mask').show();//loading图显示    
                if (data_list_flag) {
                    count++;
                    open_refresh();

                }
            }
        });
    }

    //点击列表页瞬间改变背景色;

    /*===============================================================搜索内容================================================*/
    //搜索内容;   
    //监控输入框的值改变是触发 
    var flag = true;
    var time_bb = null;
    //解决ie刷新页面默认执行;
    if (($.browser.msie && $.browser.version > 6) || window.navigator.userAgent.indexOf('rv') > 1) {
        //兼容ie下默认小叉叉
        $('.seach_City input').width(87 + "%");
        $('.seach_City .h5_close_box').hide();
        //解决ie下刷新页面触发滚动事件
        $('.seach_City input').on("input propertychange", function () {
            //if (flag) {
            //    flag = false;
            //} else {

            if ($('.seach_City input').val() == "") {
                $(".fuzzy_query").empty();
                $('.skSeek .business').show();
                $('.skSeek .fuzzy_query').hide();
                return;
            } else {
                var dataCD = $('.City a').attr('data-cd');
                var keyWord = $('.seach_City input').val();
                keyWord = $.trim(keyWord)
                //酒店搜做  
                //console.log(keyWord)
                clearTimeout(time_bb);
                time_bb = setTimeout(function () {
                    search_hotel(keyWord, dataCD);
                }, 200)
            }

            // }
        })
    } else {
        //其他浏览器
        $('.seach_City input').on("input", function () {

            if ($('.seach_City input').val() == "") {
                $(".fuzzy_query").empty();
                $('.skSeek .business').show();
                $('.skSeek .fuzzy_query').hide();
                return;
            } else {
                var dataCD = $('.City a').attr('data-cd');
                var keyWord = $('.seach_City input').val();
                keyWord = $.trim(keyWord)
                //酒店搜做  
                //console.log(keyWord)
                clearTimeout(time_bb);
                time_bb = setTimeout(function () {
                    search_hotel(keyWord, dataCD);
                }, 200)
            }
        })
    };

    //点击搜索出来的内容
    $('.fuzzy_query').delegate('a', 'click', function () {
        $(".skSeek .h5_header").animate({ "left": 200 + '%' }, 500);
        $("#SelectArea").val('');
        $("#SignleAreaFilter").val('');//行政区,地铁,车站等单选
        var search_val = $(this).text();
        $('.seach_City input').val(search_val);
        $('.h5_search .span2').html(search_val);
        var keycd = null;
        if ($(this).attr('data-keysearchtype')) {
            keycd = $(this).attr('data-keysearchtype') + $(this).attr('data-keycd');
        } else {
            keycd = $(this).attr('data-keycd');
        };
        $('.seach_City input').attr('data-keycd', keycd);
        $('#h5_mask').show();;//loading图显示
        loading_hide()//loading图隐藏;
        search_aa()
    })

    //酒店关键字查询
    var oldkeyword_h5 = "";
    $('.cs_Search').click(function () {
        $('#h5_mask').show();;//loading图显示
        loading_hide()//loading图隐藏;
        $("#SelectArea").val('');
        $("#SignleAreaFilter").val('');//行政区,地铁,车站等单选
        //清楚选择条件
        $('.list_item_select p,.list_item_select p span,.skTerritory_list .list_item p,.skTerritory_list .list_item p span').removeClass('active');
        $('.list_item_select .all_trading,.list_item_select .all_trading span,.skTerritory_list .list_item .all_trading,.skTerritory_list .list_item .all_trading span').addClass('active');
        $('.sktony .tab_cont .tab span,.skTerritory_list .tab_cont .tab span').removeClass('active');

        $('#footer .screen code').html(0);
        $('#footer .screen code').hide();
        $('#footer .screen code').html(0);
        $('#footer .area code').hide();

        //如果筛选条件没变直接返回
        var key = $.trim($('.seach_City input').val());
        if (oldkeyword_h5 == key) {
            $('#h5_mask').hide();//loading图显示
            return;
        };
        oldkeyword_h5 = key;
        if (key == "酒店位置/酒店名/品牌" || key == "" || key == "J酒店位置/酒店名/品牌") {
            $('#h5_mask').hide();
            return;
        };
        $(".skSeek .h5_header").animate({ "left": 200 + '%' }, 500);
        $(this).addClass("click");
        $(".main_content").empty();
        count = 1;
        open_refresh();//打开页面数据请求

    })

    //搜索内容结束;
    /*===============================================================/搜索内容================================================*/
    /*===============================================================筛选页================================================*/
    //搜索选中的相应内容    
    $('.filter_submit_a .btn_total').click(function () {
        //筛选中n项显示与隐藏;
        if ($('.sktony .tab div span.active').length == 0) {
            $('#footer .screen code').hide();
        } else {
            $('#footer .screen code').text($('.sktony .tab div span.active').length);
            $('#footer .screen code').show();
        };
        $(".sktony").animate({ "left": 200 + '%' }, 500);
        //商圈参数获取
        var SQ_arr = [];
        $('.select_shangquan p.active').each(function (i, elem) {
            SQ_arr.push($(elem).find('a').attr('data-cd') + "|")
        });
        var SQ = SQ_arr.join("").substring(0, SQ_arr.join("").length - 1);
        if (SQ == "undefined") {
            $("#SelectArea").val("")
        } else {
            $("#SelectArea").val(SQ)
        }
        $("#SignleAreaFilter").val()
        //行政区参数;
        var XZQ = $('.select_xingzheng p.active a').attr('data-cd');//行政区
        var XL = $('.select_xianlu p.active a').attr('data-cd'); //地铁线路;
        var JD = $('.select_view p.active a').attr('data-cd'); //景点
        if (XZQ == undefined && XL == undefined && JD == undefined) {
            $("#SignleAreaFilter").val("");
        } else if (XZQ == undefined && JD == undefined && XL != undefined) {
            $("#SignleAreaFilter").val("D" + XL)
        } else if (XZQ != undefined && XL == undefined && JD == undefined) {

            $("#SignleAreaFilter").val("X" + XZQ)
        } else if (XZQ == undefined && XL == undefined && JD != undefined) {
            $("#SignleAreaFilter").val("J" + JD)
        }

        //价格
        var price_arr = [];
        $('.select_money p.active').each(function (i, elem) {
            price_arr.push($(elem).attr('data-value'))
        });
        var JG = price_arr.join("_" + "");
        if (JG == "_") {
            $("#priceRage").val('')
        } else {
            $("#priceRage").val(JG)
        };
        //设施
        var SS_arr = [];
        $('.select_other p.active').each(function (i, elem) {
            SS_arr.push($(elem).attr('data-value'))
        });
        var SS = SS_arr.join("");
        if (SS == undefined) {
            $("#device").val('')
        } else {
            $("#device").val(SS)
        }

        //页码   
        $('#h5_mask').show();//loading图显示
        loading_hide()//loading图隐藏;
        $(".main_content").empty();
        count = 1;
        open_refresh();//列表页数据请求函数;
    });

    //重置
    $(".filter_submit_a .reset").click(function () {
        //筛选
        $("#SelectArea").val(""),
            $("#SignleAreaFilter").val(""),//行政区,地铁,车站等单选
            $('#footer .screen code').text(0);
        $('#footer .screen code').hide();

        $(".sktony .tab_cont .tab div span").removeClass("active")
        $(".sktony .tab div span").removeClass("active")
        $(".sktony .area_list span").removeClass("active")
        $(".sktony .area_list").removeClass("active")
        $(".sktony .all_trading").addClass("active")
        $(".sktony .all_trading span").addClass("active")
    });

    //点击商圈去掉行政与线路、景点
    var tab_head = [$('.tab .trading_area'), $(".tab_cont .district"), $(".tab_cont .metro_lines"), $(".tab_cont .scenic_spot")];
    for (var i = 0; i < tab_head.length; i++) {
        tab_head[i].click(function () {
            if ($(this).find('span').hasClass('active')) {
                return;
            }

            var iNow = $(this).index();
            var this_calss = $('.sktony .list_item_select').children().eq($(this).index());
            if ($('.sktony .list_item_select .item_r').eq(iNow).find('.all_trading span.active').length == 0) {

                $('.sktony .list_item_select .item_r').eq(iNow).find(".all_trading span").addClass("active");
                $('.sktony .list_item_select .item_r').eq(iNow).find(".all_trading").addClass("active")
            }
            if (this_calss.find('.area_list.active').length >= 1) {

            } else {
                this_calss.find('.area_list').click(function (iNow) {
                    $('.sktony .tab>div:lt(4)').find('span').removeClass('active');
                    $('.sktony .tab>div').eq($(this).parent().index()).find('span').addClass('active');
                    if ($(this).parent().prop('className') == "item_r trading_area_list active select_shangquan") {
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list').removeClass('active');
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list span.active').removeClass('active');
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list').removeClass('active');
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list span.active').removeClass('active');
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list').removeClass('active');
                        $('.sktony .list_item_select .item_r').eq(1).find('.area_list span.active').removeClass('active');
                        $(this).addClass('active');
                        $(this).find('span').addClass('active');
                    } else {
                        $('.sktony .list_item_select .item_r:lt(4)').find('.area_list').removeClass('active');
                        $('.sktony .list_item_select .item_r:lt(4)').find('.area_list span.active').removeClass('active');

                        $(this).addClass('active');
                        $(this).find('span').addClass('active');
                    }
                })
            }
        })
    };

    //筛选
    $('#footer .screen code').hide(0);
    //品牌
    $('#footer .area code').hide(0);
    //主题
    $('#footer .theme code').hide(0);
    /*===============================================================筛选页================================================*/
    /*===============================================================城市选择================================================*/

    //将城市选中的值放在输入框内;
    $('.sk_selectionCity .business ul').delegate('li', 'click', function () {
        if ($(this).prop('className') == 'seach_more') {
            return;
        };
        $('#h5_mask').show();
        loading_hide()//loading图隐藏;
        $(".sk_selectionCity").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .h5_fixed").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + '%' }, 500);
        $('.City a').html($(this).find('a').html());
        $('.City a').attr('data-pinyin', $(this).find('a').attr('data-pinyin'));
        $('.City a').attr('data-cd', $(this).find('a').attr('data-cd'));
        $('.list2 input').val($(this).find('a').html());
        $("#key").val("")
        parms.key = ""
        window.localStorage.shaixuan = JSON.stringify(parms)
        changeCity($('.City a').attr('data-pinyin'));

    });

    //城市当前位置
    $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-pinyin', $("#cityName").val());
    $('.sk_selectionCity .business .list').eq(0).find('a').attr('data-cd', $("#cityCode").val());
    $('.sk_selectionCity .business .list').eq(0).find('a').html($('#CityNameCn').val());
    $('.soso input').val($('#CityNameCn').val());

    //城市搜索，根据不同的浏览器走不同的方法;

    // var timer_a = null;  

    $('.soso input').on("input propertychange", function () {

        if ($('.soso input').val() == "") {
            $('.selectionCity_cont').show();
            $('.letter').show();
            $('.search_key_city').hide();
            return;
        } else {
            $('.selectionCity_cont').css('display', 'none');
            $('.letter').css('display', 'none');
            $('.search_key_city').css('display', 'block');
            $(".search_key_city  ul").empty();
            if (arr_data != null) {
                //console.log(arr_data)
                city_search(arr_data, $.trim($('.soso input').val()))
            }
        }

    })

    //点击搜索出的城市跳转到相应的链接
    $(".search_key_city  ul").delegate('li', 'click', function () {
        $(".sk_selectionCity").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .h5_fixed").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + '%' }, 500);
        $('#h5_mask').show();
        loading_hide()//loading图隐藏;
        $('.City a').attr('data-pinyin', $(this).find('span.city_pin_h5').attr('data-pinyin'));
        $('.City a').attr('data-cd', $(this).find('span.city_cd_h5').attr('data-CD'))
        $('.City a').html($(this).find('b span').html());
        $("#cityName").val($(this).find('span.city_pin_h5').attr('data-pinyin'));
        $("#cityCode").val($(this).find('span.city_cd_h5').attr('data-CD'));
        window.location.href = $(this).find('span.city_pin_h5').attr('data-pinyin')
    });

    //城市选择	
    $("#sk_selectionCity #sklistUl").delegate("li", "click", function () {
        if ($(this).find("a").prop('className') == "select") {
            $(this).find("a").removeClass("select");
        } else {
            $(this).find("a").addClass("select");
        }
    });

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
            $('.selectionCity_cont').scrollTop(0);
            $('.selectionCity_cont').stop().animate({
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
    /*===============================================================/城市选择================================================*/
    /*===============================================================排序================================================*/
    $('.sort_popUp li').click(function () {
        var order = $(this).attr('data-order');
        //$(this).parent().parent().parent().slideUp();
        $('#h5_mask').show();//loading图显示
        loading_hide()//loading图隐藏;
        $("#orderBy").val(order);
        count = 1;
        $(".main_content").empty();
        open_refresh()


        return false;
    })


    /*===============================================================/排序================================================*/
    /*===============================================================品牌================================================*/
    $('.skTerritory_list .btn_total').click(function () {
        //品牌
        if ($('.skTerritory_list .tab div span.active').length == 0) {
            $('#footer .area code').hide();
        } else {
            $('#footer .area code').text($('.skTerritory_list .tab div span.active').length);
            $('#footer .area code').show();
        }

        $(".skTerritory_list").animate({ "left": 200 + '%' }, 500)
        var str_brands = "";
        $('.skTerritory_list .list_item .area_list').each(function (index, elem) {
            if ($(this).prop('className') == 'area_list active') {
                str_brands += ',' + $(this).attr('data-value');
            }
        });

        $("#Brands").val(str_brands);
        $('#h5_mask').show();//loading图显示
        loading_hide()//loading图隐藏;
        count = 1;
        $(".main_content").empty();
        open_refresh();
    });

    /*===============================================================/品牌================================================*/
    /*===============================================================日期================================================*/
    var today = new Date(),
        todayY = today.getFullYear(),
        todayM = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
        todayD = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    /*入住时间日历*/
    $('.skwrap .enter_time').click(function () {
        $('.skwrap .enter_time').dateChoose({
            dateClass: ".date_box_choose",//日期选择页面
            startClass: ".start_date", //开始日期的class
            endClass: ".end_date", //结束日期
            range: true, //开始日期和结束日期都包括，若为false，则只有开始日期
            divideChoose: false,//结束日期和开始日期是否在两个不同的输入框
            startTxt: "入住", //开始日期选中之后出现的文字
            endTxt: "离住",//开始日期选中之后出现的文字
            startDate: todayY + "-" + todayM + "-" + todayD, //日期之后可选
            endDate: "", //日期之前可选
            maxDays: 365,  //之后可点击最大天数,
            Seperate: [],//间隔的日期
            En: false, //是否英文
            callback: function () { //日期选中之后的callback              
                var s_ArrDate = $(".skwrap .start_date").html();//入店时间
                var s_DepDate = $(".skwrap .end_date").html();//离店时间
                $(".skwrap .start_date").html(s_ArrDate.substring(5));
                $(".skwrap .end_date").html(s_DepDate.substring(5));
                var days = DateDiffH5(s_ArrDate, s_DepDate); //入住几晚
                $("input[name='begdate']").val(s_ArrDate);
                $("input[name='enddate']").val(s_DepDate);
                $(".enter_time span.total").html(days + "晚");
                var week = ["一", "二", "三", "四", "五", "六", "日"];
                var startWeek = new Date(s_ArrDate.split("-")[0], s_ArrDate.split("-")[1] - 1, s_ArrDate.split("-")[2]).getDay();
                var endWeek = new Date(s_DepDate.split("-")[0], s_DepDate.split("-")[1] - 1, s_DepDate.split("-")[2]).getDay();

                $(".list_choose input.start_data").val(s_ArrDate.replace('-', '/').replace('-', '/')).next().val("周" + week[startWeek - 1]);
                $(".list_choose input.end_data").val(s_DepDate.replace('-', '/').replace('-', '/')).next().val("周" + week[endWeek - 1]);

                $("#beginDate").val(s_ArrDate);
                $("#endDate").val(s_DepDate);
                $('#h5_mask').show();//loading图显示
                loading_hide()//loading图隐藏;
                count = 1;
                $(".main_content").empty();
                open_refresh();
            }
        });
    })

    /*===============================================================/日期================================================*/
    //判断是pc访问还是移动访问
    browserRedirect();
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            //alert('手机端访问');  

        } else {
            // alert('电脑端访问');
            $('body').css('fontFamily', '"Arial","Microsoft YaHei","黑体","宋体","sansSerif";');
            $('.sk_selectionCity').css({ 'overflow': 'hidden', overflowY: '' })
            $('.sk_selectionCity .letter').css({ 'width': '18px', right: 20 });
        }
    };

    /*========================list_warp.js==========================================*/
    //排序丶搜索丶筛选丶城市丶点击显示消失
    $(".sort").click(function () { //排序       
        $(".sort_popUp").slideDown(200);
    })
    $(".sort_popUp .hz").click(function () {
        $(this).parent().parent().slideUp(200)
    })
    //筛选
    $(".screen").click(function () {
        $(".sktony").animate({ "left": 0 }, 500);
    })
    $(".sktony .h5_header_back").click(function () {
        $(".sktony").animate({ "left": 200 + '%' }, 500)
    })
    //城市

    $(".City").click(function () {
        $(".sk_selectionCity").animate({ "left": 0 }, 500);
        $(".sk_selectionCity .h5_fixed").animate({ "left": 0 }, 500);
        $(".sk_selectionCity .soso_a").animate({ "left": 0 }, 500);
        $('.selectionCity_cont').show();
        $('.letter').show();
        $('.search_key_city').hide();

        if ($('.selectionCity_cont').css('display') == "block") {
            $(".sk_selectionCity .letter").show();
        };

    })
    $(".sk_selectionCity .h5_header_back").click(function () {
        $(".sk_selectionCity .h5_fixed").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity").animate({ "left": 200 + '%' }, 500)
        $(".sk_selectionCity .letter").hide()
    })
    //搜索
    $(".h5_search").click(function () {
        $(".skSeek").animate({ "left": 0 }, 500);
        $(".skSeek .h5_header").animate({ "left": 0 }, 500);
        $('.fuzzy_query').empty();
        $('.seach_City input').val('');
        $('.fuzzy_query').hide();
        $('.business').show();
        $('.seach_City input').attr('data-keycd', "");
        if ($('.h5_search .span2').html() != '酒店位置/酒店名称') {
            $('#home_zbse_h5').val($('.h5_search .span2').html());
             if ($('.seach_City input').val() == "") {
                $(".fuzzy_query").empty();
                $('.skSeek .business').show();
                $('.skSeek .fuzzy_query').hide();
                return;
            } else {
                var dataCD = $('.City a').attr('data-cd');
                var keyWord = $('.seach_City input').val();
                keyWord = $.trim(keyWord)
                //酒店搜做  
                //console.log(keyWord)
                clearTimeout(time_bb);
                time_bb = setTimeout(function () {
                    search_hotel(keyWord, dataCD);
                }, 200)
            }
        }
        
    })
    $(".skSeek .h5_header_back").click(function () {
        $(".skSeek").animate({ "left": 200 + '%' }, 500);
        $(".skSeek .h5_header").animate({ "left": 200 + '%' }, 500);
    })
    //品牌
    $(".area").click(function () {
        $(".skTerritory_list").animate({ "left": 0 }, 500)
    })
    $(".skTerritory_list .h5_header_back").click(function () {
        $(".skTerritory_list").animate({ "left": 200 + '%' }, 500)
    })
    //赋值高度
    var mask_h = window.screen.availHeight
    $(".sort_popUp").css("height", mask_h)
    //排序
    $(".sort_popUp ul li").each(function () {
        $(this).click(function () {
            $(this).addClass("active").siblings("li").removeClass("active");
            $(this).find("span").addClass("active");
            $(this).siblings("li").find("span").removeClass("active");
            $(this).parent().parent().parent().slideUp(200);
        })
    })
    //搜索
    $(".skSeek .seach_City .close").click(function () {
        $(".skSeek .seach_City input").val("");
        $(".skSeek .business").show()
        $(".fuzzy_query").hide();
        $('.h5_search .span2').html('酒店位置/酒店名称');
        $("#SelectArea").val('')
        open_refresh(true);
    })

    var skSeek_ipt = $(".skSeek .top ul li.list2 input").val()
    $(".fuzzy_query").on("click", "a", function () {
        $(this).addClass("active");
    })
    //筛选、品牌

    TabControl_a($(".skTerritory_list .tab_cont .tab div"), $(".skTerritory_list .tab_cont .item_r"))
    function TabControl_a(tab, tabList) {
        tab.each(function (i, element) {
            $(element).click(function () {
                $(element).addClass("active").siblings().removeClass("active")
                tabList.eq(i).show().siblings().hide();
                TabControl_a($('.skTerritory_list .tab>div').eq(i), $('.skTerritory_list .list_item .item_r').eq(i));
                //filterList_a($(" .tab_cont .trading_area_list"))
            })
        })
    }
    filterList_a($(".tab_cont .trading_area_list"))
    function filterList_a(trading_area_list) {
        trading_area_list.each(function (i, element) {

            $(element).find(".area_list").each(function (j, item) {
                var bl_select = true;
                $(item).click(function () {
                    if (!$(this).find('span').hasClass('active')) {
                        $(this).find("span").addClass("active")
                        $(this).addClass("active");
                    } else {
                        $(this).removeClass("active");
                        $(this).find("span").removeClass("active")
                    }

                    if ($(element).find(".area_list span").hasClass("active")) {
                        $(".tab_cont .checkbox").eq(i).find("span").addClass("active");
                    } else {
                        $(".tab_cont .checkbox").eq(i).find("span").removeClass("active")
                    }

                    if ($(element).find(".area_list.active").length == $(element).find(".area_list").length) {
                        $(element).find(".all_trading").addClass('active');
                        $(element).find(".all_trading span").addClass('active');
                        bl_select = false;
                    } else {
                        $(element).find(".all_trading").removeClass('active');
                        $(element).find(".all_trading span").removeClass('active');
                        bl_select = true;
                    }
                })
                $(element).find(".all_trading").click(function () {
                    if (bl_select) {
                        $(element).find(".area_list").addClass("active");
                        $(element).find(".area_list span").addClass("active");
                        $(this).addClass("active");
                        $(this).find("span").addClass("active");
                        $(".tab_cont .checkbox").eq(i).find("span").addClass("active");
                        bl_select = false;
                    } else {
                        $(".tab_cont .checkbox").eq(i).find("span").removeClass("active");
                        $(this).removeClass("active");
                        $(this).find("span").removeClass("active");
                        $(element).find(".area_list").removeClass("active");
                        $(element).find(".area_list span").removeClass("active");
                        bl_select = true;
                    }

                })

            })
        })
    };
    //重置
    $(".filter_submit_b .reset").click(function () {
        //品牌
        $("#Brands").val("")
        $('#footer .area code').text(0);
        $('#footer .area code').hide();
        $(".skTerritory_list .tab_cont .tab div span").removeClass("active")
        $(".skTerritory_list .tab div span").removeClass("active")
        $(".skTerritory_list .area_list span").removeClass("active")
        $(".skTerritory_list .area_list").removeClass("active")
        $(".skTerritory_list .all_trading span").removeClass("active")
        $(".skTerritory_list .all_trading").removeClass("active")

    })


    //不存在品牌内容隐藏
    var arr_item = [];
    $('.skTerritory_list .list_item .item_r').each(function (i, elem) {
        if ($(this).children().length == 1) {
            $(this).hide();
            $('.skTerritory_list .tab>div').eq(i).hide();
            //TabControl_a($('.skTerritory_list .tab>div').eq(i), $(this));
            //filterList_a($(" .tab_cont .trading_area_list"))//多选
        } else {
            arr_item.push(i)
        }

    });

    $('.skTerritory_list .list_item .item_r').eq(arr_item[0]).css('display', "block");
    $('.skTerritory_list .tab>div').eq(arr_item[0]).addClass('active');
    /*========================list_warp.js==========================================*/

    //地图
    $('#recent').click(function () {
        getCurrentPosition();

    })
    //时租房 与 今夜特惠切换
    //function GetQueryString(name) {
    //    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //    var r = window.location.search.substr(1).match(reg);
    //    if (r != null) return unescape(r[2]); return null;
    //}
    //var arg_tab = GetQueryString('ActivityCode')
    //if (arg_tab == 'ST' || arg_tab == 'YT') {
    //    $('.search_h5 .item1').addClass('flag');
    //    $('.search_h5 .item4').removeClass('flag');
    //} else {
    //    $('.search_h5 .item4').addClass('flag');
    //    $('.search_h5 .item1').removeClass('flag');
    //}


})//$jq结束

//判断不同页面加载不同页面
var ajax_flag = 0;
function viewWidth() {
    if ($(window).width() > 980) {
     
        $('#h5_mask').hide();
        $('.main_pc').css({ 'display': 'block'});
        $('#h5Main').css({ 'display': 'none'});
        ajax_flag = 0;

       
        return;
    } else if ($(window).width() < 980) {
  
        $('.main_pc').css('display', 'none');
        $('#h5Main').css('display', 'block');
        $(".skwrap").css("height", $(window).height());
        ajax_flag++;
        if (ajax_flag == 1) {
            open_refresh();//打开页面数据请求 
            loadShangQuan_h5();//商圈            
            loadCity_a()//城市模糊查询移动端
            
        }

    };
};
//打开页面列表页数据请求
var count = 1;
var data_list_flag = true;
var parms = {}
function open_refresh(reload, city) {
    //cookie 赋值
    $.cookie("set", {
        duration: 0.1,
        name: 'dateCookie',
        value: $("#beginDate").val() + $("#endDate").val()
    });
    if (!$('#isRem').attr('checked')) {
        //alert('刷新')
        parms = {
            cityCode: $("#cityCode").val(),
            SelectArea: $("#SelectArea").val(),
            SignleAreaFilter: $("#SignleAreaFilter").val(),//行政区,地铁,车站等单选
            priceRage: $("#priceRage").val(),
            feature: $("#feature").val(),
            cityName: $("#cityName").val(),
            beginDate: $("#beginDate").val(),
            endDate: $("#endDate").val(),
            orderBy: $("#orderBy").val(),
            pageNo: count,
            device: $("#device").val(),
            key: $("#key").val(),
            keyDescript: $("#keyDescript").val(),
            Brands: $("#Brands").val(),
            ForH5Page: true,
            ActivityCode: $("#ActivityCode").val(),
        };
        console.log(parms)
        window.localStorage.shaixuan = JSON.stringify(parms)
    } else {
        //alert('不刷新')
        parms = JSON.parse(window.localStorage.shaixuan)
        console.log(parms)
        //品牌记忆
        var BrandsSelect = parms.Brands.split(',')
        var trading_area_list = $('.trading_area_list .area_list ')
        for (var i = 0; i < trading_area_list.length; i++) {
            for (var j = 0; j < BrandsSelect.length; j++) {
                if (trading_area_list.eq(i).attr('data-value') == BrandsSelect[j]) {
                    trading_area_list.eq(i).addClass('active')
                    trading_area_list.eq(i).find('.icon').addClass('active')
                }
            }
        }
        //价格排序记忆
        $('#isRem').attr('checked', false)
        for (var i = 0; i < $('.sort_popUp .list ul li ').length; i++) {
            if ($('.sort_popUp .list ul li ').eq(i).attr('data-order') == parms.orderBy) {
                $('.sort_popUp .list ul li,.sort_popUp .list ul li .icon ').removeClass('active')
                $('.sort_popUp .list ul li ').eq(i).addClass('active').find('.icon').addClass('active')
            }
        }

    }


    //点击城市将点击城市赋值给当前城市
    if (!city) {
        $('.City a').attr('data-pinyin', $("#cityName").val());
        $('.City a').attr('data-cd', $("#cityCode").val())
        $('.City a').html($('#CityNameCn').val())
    };

    //判断是否是点击酒店模糊查询按钮
    if ($('.cs_Search').prop('className') == "cs_Search click") {
        $('.cs_Search').removeClass('click')
        var keywords = $.trim($('.seach_City input').val());
        $("#key").val("J" + keywords);
        parms = {
            cityName: $("#cityName").val(),
            cityCode: $("#cityCode").val(),
            key: $("#key").val(),
            // keyDescript: $("#keyDescript").val(),
            beginDate: $("#beginDate").val(),
            endDate: $("#endDate").val(),
            ForH5Page: true,
        };
        $(".skSeek").animate({ "left": 200 + '%' }, 500);
        $('.h5_search span').eq(1).html(keywords);
    }


    var url = "/listasync/" + $("#cityName").val();
    console.log(url)
    if (reload) {
        $(".main_content").empty();
    };

    $.ajax({
        type: "GET",
        url: url,
        data: parms,
        success: function (result) {
             console.log(result)
            if (result != null) {
                $('.more_date').remove(); //清楚加载更多数据标签
                $(".main_content").append(result);

                $('.main_list').click(function () {
                    $('#isRem').attr('checked', 'true');
                })

                var list_len_data = $(".main_content").children('ul').length;
                var sum = $(".main_content input").eq(1).attr('data-hoteltotal');
                $('.skwrap').show()
                if (list_len_data < sum) {
                    $(".main_content").append('<p class="more_date"><span class="iconfont">&#xe6c5;</span>更多数据加载中...</p>');
                } else if (list_len_data == sum) {
                    $(".main_content").append('<p class="more_date"><span class="iconfont">&#xe6c7;</span>数据加载完成</p>');
                    data_list_flag = false;
                };
                //判断列表数据为空时显示loading用户体验好一点;
                if ($(".main_content").html() == "") {

                    $('#h5_mask').show();
                    loading_hide()//loading图隐藏;
                } else {

                    $('#h5_mask').hide();
                }
                //点击相应酒店跳到详情页
                $('#result ul ').click(function () {
                    // $(this).css('background', "#F9F8F6");
                    // $(this).css('background', "");
                    var hotelcd = $(this).find('.hotel_list_icon').data("hotelcd");
                    var url = "/hotel/" + hotelcd;
                    $("#frm").attr("action", url);
                    $("#frm").submit();
                    return false;
                });
                $('#result ul ').hover(function () {
                    $(this).css('background', "#F9F8F6");
                }, function () {
                    $(this).css('background', "");
                })
            }
            //酒店图片不存在使用默认图片
            var banner_arr = [];
            $('#result li').each(function (i, elem) {
                banner_arr.push($('#result li img').attr('src'))
            });
            //调用图片不存在使用默认图片函数
            error_img($('#result li img'), banner_arr);

            var aImg = $('#result ul');
            aImgLoad()
            $('#main').on("scroll", aImgLoad)
            function aImgLoad() {
                aImg.each(function (index, element) {
                    var scrollTop = $('#main').scrollTop();
                    var clientH = $('#main').height() - 100;
                    var Dom_H = $(element).height()
                    var imgTop = Dom_H * index;

                    if (scrollTop + clientH > imgTop) {
                        // console.log(11)
                        $(element).find('img').attr("src", $(element).find('img').attr("_src"));
                    }
                })
            }

            //判断是否是IE浏览器，包括Edge浏览器    
            //if (($.browser.msie && $.browser.version > 6) || window.navigator.userAgent.indexOf('rv') > 1) {
            //    //兼容ie
            //    $('input, textarea').placeholder();


            //    $('#main').scroll(function () {         
            //        if ($('#main').scrollTop() + $(window).height() - 150 == $('#result').height()) {
            //           //// $('#h5_mask').hide();;//loading图显示
            //            if (data_list_flag) {
            //                count++;
            //                open_refresh();
            //            }
            //        }
            //    });
            //} else {
            //    //其他浏览器
            //    $('#main').scroll(function () {          
            //       if ($('#main').scrollTop() + $(window).height() - 149 == $('#result').height()) {
            //          //// $('#h5_mask').hide();;//loading图显示    
            //           if (data_list_flag) {
            //               count++;
            //               open_refresh();
            //           }               
            //        }
            //    });
            //}


        },
        error: function () {
            //console.log('请求异常');
        }
    });
};//打开页面请求数据结束

//图片不存在使用默认图片
function error_img(obj, arr) {
    obj.each(function (i, elem) {
        $(this).error(function () {
            $(this).attr('src', "http://images.homeinns.com/image/webH5/list_default.png");
            arr[i] = "http://images.homeinns.com/image/webH5/list_default.png"
        })
    })
};
/*==================================================商圈=================================*/
function loadShangQuan_h5() {
    var cityName = $("#cityName").val();
    //cityName = encodeURIComponent(cityName);
    $.ajax({
        type: "GET",
        url: "/Ajax/GetShangQun_Auto",
        data: { cityName: cityName },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                $('#h5_mask').hide();//loading图显示
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
                    //给筛选页的每一项添加一个不限标签；
                    for (var j = 0; j < ($('.list_item_select .item_r').length - 2); j++) {
                        $('.list_item .item_r').eq(j).prepend('<p class="all_trading active">不限<span class="active icon iconfont">&#xe692;</span></p>');
                        if ($('.list_item .item_r').eq(j).find('p').length <= 1) {
                            $('.list_item .item_r').eq(j).html('<div class="not">暂无内容</div>')
                        }
                    };
                    //商圈下拉菜单;
                    $('.skSeek .list ul').find(".seach_more").remove();

                    $(".skSeek .list").find('ul').append('<li class="seach_more"> <span class="icon iconfont">&#xe665;</span></li>')
                    more_list()//点击展开/收起
                    TabControl($(".sktony .tab_cont .tab div"), $(".sktony .tab_cont .item_r"))//侧边选项卡函数调用
                    filterList($(".sktony .tab_cont .trading_area_list"))//多选调用
                    filter_Radio_List($(".sktony .tab_cont .trading_Radio_list"))//单选调用

                    //商圈记忆
                    var select_shangquan = $('.select_shangquan .area_list ')
                    var AreaSelect = parms.SelectArea.split('|')
                    for (var i = 0; i < select_shangquan.length; i++) {
                        for (var j = 0; j < AreaSelect.length; j++) {
                            if (select_shangquan.eq(i).find('a').attr('data-cd') == AreaSelect[j]) {
                                select_shangquan.eq(i).addClass('active')
                                select_shangquan.eq(i).find('.icon').addClass('active')
                                $('.trading_area span').addClass('active')
                                $('.select_shangquan .all_trading').removeClass('active')
                                $('.select_shangquan .all_trading .icon').removeClass('active')
                            }

                        }
                    }
                    //地铁线路记忆
                    var select_xianlu = $('.select_xianlu .area_list ')
                    var XianluSelect = parms.SignleAreaFilter.substr(1)
                    for (var i = 0; i < select_xianlu.length; i++) {
                        if (select_xianlu.eq(i).find('a').attr('data-cd') == XianluSelect) {
                            select_xianlu.eq(i).addClass('active')
                            select_xianlu.eq(i).find('.icon').addClass('active')
                            $('.metro_lines span ').addClass('active')
                            $('.select_xianlu .all_trading').removeClass('active')
                            $('.select_xianlu .all_trading .icon').removeClass('active')
                        }
                    }
                    //行政区记忆
                    var select_xingzheng = $('.select_xingzheng .area_list ')
                    var XingzhengSelect = parms.SignleAreaFilter.substr(1)
                    for (var i = 0; i < select_xingzheng.length; i++) {
                        if (select_xingzheng.eq(i).find('a').attr('data-cd') == XingzhengSelect) {
                            select_xingzheng.eq(i).addClass('active')
                            select_xingzheng.eq(i).find('.icon').addClass('active')
                            $('.district span ').addClass('active')
                            $('.select_xingzheng .all_trading').removeClass('active')
                            $('.select_xingzheng .all_trading .icon').removeClass('active')
                        }
                    }
                    //景点记忆
                    var select_view = $('.select_view .area_list ')
                    var ViewSelect = parms.SignleAreaFilter.substr(1)
                    for (var i = 0; i < select_view.length; i++) {
                        if (select_view.eq(i).find('a').attr('data-cd') == ViewSelect) {
                            select_view.eq(i).addClass('active')
                            select_view.eq(i).find('.icon').addClass('active')
                            $('.scenic_spot span ').addClass('active')
                            $('.select_view .all_trading').removeClass('active')
                            $('.select_view .all_trading .icon').removeClass('active')
                        }
                    }
                    //车站机场记忆
                    var select_air = $('.select_air .area_list ')
                    var AirSelect = parms.SignleAreaFilter.substr(1)
                    for (var i = 0; i < select_view.length; i++) {
                        if (select_air.eq(i).find('a').attr('data-cd') == AirSelect) {
                            select_air.eq(i).addClass('active')
                            select_air.eq(i).find('.icon').addClass('active')
                            $('.airport span ').addClass('active')
                            $('.select_air .all_trading').removeClass('active')
                            $('.select_air .all_trading .icon').removeClass('active')
                        }
                    }
                    //价格记忆
                    var select_money = $('.select_money .area_list ')
                    var MoneySelect = parms.priceRage.split('|')
                    var maxMoneySelect = MoneySelect[MoneySelect.length - 1]
                    for (var i = 0; i < select_money.length; i++) {
                        if (select_money.eq(i).attr('data-id').replace(/[^0-9]/ig, "") <= maxMoneySelect) {
                            select_money.eq(i).addClass('active')
                            select_money.eq(i).find('span').addClass('active')
                            $('.price span ').addClass('active')
                            $('.select_money .all_trading').removeClass('active')
                            $('.select_money .all_trading .icon').removeClass('active')
                        }
                    }
                    //设备记忆
                    var select_other = $('.select_other .area_list ')
                    var otherSelect = parms.device.split('X');
                    for (var i = 0; i < select_other.length; i++) {
                        for (var j = 0; j < otherSelect.length; j++) {
                            if (select_other.eq(i).attr('data-value').substr(1) == otherSelect[j]) {
                                select_other.eq(i).addClass('active')
                                select_other.eq(i).find('span').addClass('active')
                                $('.facility span').addClass('active')
                                $('.select_other .all_trading').removeClass('active')
                                $('.select_other .all_trading .icon').removeClass('active')
                            }
                        }
                    }
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
            $(".skSeek .h5_header").animate({ "left": 200 + '%' }, 500);
            //筛选
            // $('#footer .screen code').text(0);
            //  $('#footer .screen code').hide();
            //清楚筛选选中项
            $('.sktony .tab>div:lt(4)').find('span').removeClass('active');
            $('.sktony .list_item_select .item_r:lt(4)').find('.area_list').removeClass('active');
            $('.sktony .list_item_select .item_r:lt(4)').find('.area_list span.active').removeClass('active');
            //默认让商圈显示
            $('.sktony .list_item .item_r:lt(8)').css('display', "none");
            $('.sktony .tab>div:lt(8)').removeClass('active');
            $('.sktony .list_item .item_r').eq(0).css('display', "block");
            $('.sktony .tab>div').eq(0).addClass('active');
            //不限默认选中
            $('.sktony .list_item_select .item_r').eq(0).find(".all_trading span").addClass("active");
            $('.sktony .list_item_select .item_r').eq(0).find(".all_trading").addClass("active")

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
            var seach_val = $(this).find('a').html()
            seach_val = seach_val.replace(/\(\w+\)/, "")
            $('.seach_City input').val(seach_val);
            $('.h5_search .span2').html(seach_val);
            //请求选中数据并跳转到详情页
            $('#h5_mask').show();//loading图显示
            loading_hide()//loading图隐藏;
            search_aa();//商圈搜索内容
        });
    })
}//more_list  函数结束;

//商圈搜索内容函数
function search_aa() {
    $(".skSeek").animate({ "left": 200 + '%' }, 500);
    $(".skSeek .business").show();
    $(".skSeek .fuzzy_query").hide()
    var url = "/listasync/" + $("#cityName").val();
    $("#key").val($('.seach_City input').attr('data-keycd'));
    $('#h5_mask').show();//loading图显示
    loading_hide()//loading图隐藏;
    $(".main_content").empty();
    count = 1;
    open_refresh(true);//列表页数据请求函数;   
}

//搜索酒店
function search_hotel(keyWord, dataCD) {
    var keyWord_a = keyWord
    $.ajax({
        type: "GET",
        url: '/Ajax/SearchHotel?name=' + escape(keyWord) + '&cityCD=' + dataCD + '&ts=' + rd(),
        // data: { cityName: cityName },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                //console.log(result)                   
                $('#h5_mask').hide();//loading图显示
                $('.skSeek .business').hide();
                $('.skSeek .fuzzy_query').show();
                $('.fuzzy_query').empty();
                var arr = result.data
                var s = ""
                for (var i = 0; i < arr.length; i++) {
                    s += ' <a href="javascript:;" class="" data-BrandDes="' + arr[i]['BrandDes'] + '" data-KeyCD="' + arr[i]['KeyCD'] + '"  data-KeySearchType="' + arr[i]['KeySearchType'] + '"> ' + (arr[i]['KeyName'].replace(keyWord_a, "<span>" + keyWord_a + "</span>")) + ' </a>'
                }
                $('.fuzzy_query').append(s);
                //如果没有搜索到合适的酒店显示提示信息
                if ($('.fuzzy_query').children().length == 0) {
                    // $('.fuzzy_query').append(' <a href="javasctipt:;"><span>请输入正确酒店名称</span></a>');
                }
            }
        }
    })
};
//清楚请求缓存
function rd() {
    return Math.random()
};

/*==================================================/商圈=================================*/
/*==================================================筛选函数=================================*/

//侧边选项卡
function TabControl(tab, tabList) {
    tab.each(function (i, element) {
        $(element).click(function () {
            $(element).addClass("active").siblings().removeClass("active")
            tabList.eq(i).show().siblings().hide();
        })
    })
}
//多选选则  
function filterList(trading_area_list) {
    trading_area_list.each(function (i, element) {
        $(element).find(".area_list").each(function (j, item) {

            var ready = true;
            $(item).click(function () {
                if (ready) {
                    $(this).find("span").addClass("active")
                    $(this).addClass("active");
                    ready = false
                } else {
                    $(this).removeClass("active");
                    $(this).find("span").removeClass("active")
                    ready = true
                }
                if ($(element).find(".area_list span").hasClass("active")) {
                    $(".tab_cont .checkbox").eq(i).find("span").addClass("active");
                    $(element).find(".all_trading").removeClass("active")
                    $(element).find(".all_trading span").removeClass("active")
                } else {
                    $(element).find(".all_trading").addClass("active")
                    $(element).find(".all_trading span").addClass("active");
                    $(".tab_cont .checkbox").eq(i).find("span").removeClass("active")
                }
            })
            $(element).find(".all_trading").click(function () {
                ready = true;
                $(".tab_cont .checkbox").eq(i).find("span").removeClass("active");
                $(this).addClass("active");
                $(this).find("span").addClass("active");
                $(element).find(".area_list").removeClass("active");
                $(element).find(".area_list span").removeClass("active")
            });
            $(".filter_submit_a .reset,.filter_submit_a .btn_total").click(function () {
                ready = true;
            })
        })
    })
};
//单选选择   
function filter_Radio_List(trading_Radio_list) {
    trading_Radio_list.each(function (i, element) {
        $(element).find(".area_list").each(function (j, item) {
            $(item).click(function () {

                if ($(item).find("span").hasClass("active")) {
                    $(item).removeClass("active");
                    $(this).find("span").removeClass("active");

                } else {
                    $(item).addClass("active");
                    $(this).siblings().removeClass("active");
                    $(this).find("span").addClass("active");
                    $(this).siblings().find("span").removeClass("active");

                }
                if ($(element).find(".area_list span").hasClass("active")) {
                    $(".tab_cont .radio_group").eq(i).find("span").addClass("active");
                    $(element).find(".all_trading").removeClass("active");
                    $(element).find(".all_trading span").removeClass("active")

                } else {
                    $(element).find(".all_trading span").addClass("active");
                    $(element).find(".all_trading").addClass("active");
                    $(".tab_cont .radio_group").eq(i).find("span").removeClass("active")

                }
            })
            $(element).find(".all_trading").click(function () {
                $(".tab_cont .radio_group").eq(i).find("span").removeClass("active")
                $(this).find("span").addClass("active");
                $(this).addClass("active");
                $(element).find(".area_list").removeClass("active");
                $(element).find(".area_list span").removeClass("active")
            })
        })
    })
};
/*==================================================/筛选函数=================================*/
/*=================城市选择========================================================*/
//绑定城市选中链接
function changeCity(cityName) {
    if ($("#ActivityCode").val() == "ST") {
        location.href = "/ShortTime/" + cityName;
    }
    else {
        location.href = "/list/" + cityName;
    }
    //$("#SelectArea").val('');
    //$("#SignleAreaFilter").val('');//行政区;地铁;车站等单选
    //$("#priceRage").val('');
    //$("#feature").val('');
    //$("#orderBy").val('');
    //$("#device").val('');
    //$("#Brands").val('');
    //$("#ForH5Page").val('');
    //$("#pageNo").val('');
    //var url = "/list/" + cityName;
    //$("#frm").attr("action", url);
    //$("#frm").submit();
    return false;
};

//城市模糊查询
var arr_data = null;

//城市模糊查询缓存函数；
function city_search(arr_data, keyWord) {

    city_select(arr_data)//城市赋值
    var so_val = $.trim($(".soso input").val());
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
                    $(".search_key_city  ul").append("<li><b><span  class='city_zm' >" + (Descript.replace(keyWord, "<span>" + keyWord + "</span>")) + "</span></b><span class='city_pin_h5' data-pinyin='" + Pinyin + "'></span><span class='city_cd_h5' data-CD='" + CD + "'></span></li>");
                };
            } else {
                $('.sk_selectionCity .business .list').eq(1).find('ul').append("<li><a href='javascript:;' data-pinyin='" + Pinyin + "' data-CD='" + CD + "'>" + Descript + "</a></li>")
            };
        } else {
            $('.selectionCity_cont ').css('display', 'block');
            // $('.letter').css('display', 'block');
            $('.search_key_city').css('display', 'none');
            $("#currentCityNotFound_a").hide();
        }
    };
    //城市选项超过5个选项隐藏
    $('#sk_selectionCity .list ul li.seach_more').remove()
    $('#sk_selectionCity .list').eq(2).find('ul').append('<li class="seach_more" style="display: none;"> <span class="icon iconfont">&#xe665;</span></li>')
    $('#sk_selectionCity .list ul').each(function (i, elem) {
        var len = $(this).find('li').length;
        if (len > 5) {
            $(this).find('li:gt(4)').hide();
            $(this).find('li:last').show();
        }
        var bl = true;
        $(elem).find('li.seach_more').click(function () {
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
    });

}
function loadCity_a(keyWord) {
    $.ajax({
        type: "GET",
        url: "/Ajax/GetCity_All",
        data: { ts: Math.random() },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {

                $('#h5_mask').hide();//loading图显示
                arr_data = result.data;
                city_search(arr_data, keyWord)
            }

        }
    });
}

function city_select(city_data) {
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
        };
        aLi.append('<span>' + en_arr[i].toUpperCase() + '</span>');
        aLi.append(s);
        $('#sklistUl').append(aLi);
    };
    //将城市选中的值放在输入框内;
    $('#sklistUl li a').click(function () {
        $('#h5_mask').show();
        loading_hide()//loading图隐藏;
        $(".sk_selectionCity").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .h5_fixed").animate({ "left": 200 + '%' }, 500);
        $(".sk_selectionCity .soso_a").animate({ "left": 200 + '%' }, 500);
        $('.City a').html($(this).html());
        $('.City a').attr('data-pinyin', $(this).attr('data-pinyin'));
        $('.City a').attr('data-cd', $(this).attr('data-cd'));
        $('.list2 input').val($(this).html());
        changeCity($('.City a').attr('data-pinyin'));
    });
}
/*=================/城市选择========================================================*/




function getCurrentPosition() {
    if (!map_h5) {
        map_h5 = new AMap.Map("map_h5");
    }
    //添加定位组件，用于获取用户当前的精确位置
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //不显示组件的定位按钮
        timeout: 5000 //浏览器定位超时时间5s
    });
    geolocation.getCurrentPosition(function (status, result) {
        if (status == 'complete') {
            //onLocateSuccess(result) //定位成功
            var point = 'M' + result.position.lng + '_' + result.position.lat;
            var url = "/list/" + $("#myCity").val();
            //是否当前城市
            if ($("#myCity").val() != $("#cityName").val()) {
                window.location = url + "?Key=" + point;
                return false;
            }
            $("#key").val(point);
            open_refresh(true);
        } else if (status == 'error') {
            //定位失败
            //if (result.message.indexOf('Geolocation permission denied.') !== -1) {
            //    //Geolocation permission denied.表示用户禁用了浏览器或者APP的定位权限或者关闭了手机的定位服务
            //    //或者当前页面为非安全页面,Chrome或者IOS10等系统会禁用非安全页面的定位请求
            //    //如果您的页面还没有支持HTTPS请尽快升级
            //    //安全页面指的是支持HTTPS的Web站点，而且是通过https协议打开的页面。安全页面也包括本地页面
            //    alert('您好，请在系统的隐私设置中打开当前应用的定位权限。');
            //} else {
            //    // alert('无法获取精确位置,将定位您所在的城市。');              
            //}
            alert("定位失败,你可以通过设置中开启定位服务,开启Wifi，以提高定位成功率");
            //if ($("#myCity").val() != $("#cityName").val()) {
            //    window.location.href = "/list/" + $("#myCity").val();
            //}
            //onLocateFailed();
        }
    });


}
var onLocateSuccess = function (result) {
    //自定义定位标记 
    var point = 'M' + result.position.lng + '_' + result.position.lat;

    $("#key").val(point);

    open_refresh(true);
};

$(function () {
    //$('.foot_h5 li span code').show()
    var ftMarkCookie = ""
    if (window.localStorage.shaixuan != undefined && window.localStorage.shaixuan != "" || window.localStorage.shaixuan != null) {
        ftMarkCookie = JSON.parse(window.localStorage.shaixuan)
    }
    var count1 = 0
    var count2 = 0
    if (ftMarkCookie.SelectArea) {
        count1++
        $('.foot_h5 ul li.screen code').html(count1).show()
    }
    if (ftMarkCookie.SignleAreaFilter) {
        count1++
        $('.foot_h5 ul li.screen code').html(count1).show()
    }
    if (ftMarkCookie.priceRage) {
        count1++
        $('.foot_h5 ul li.screen code').html(count1).show()
    }
    if (ftMarkCookie.device) {
        count1++
        $('.foot_h5 ul li.screen code').html(count1).show()
    }
    if (ftMarkCookie.Brands) {
        count2 = ftMarkCookie.Brands.split(',').length - 1
        $('.foot_h5 ul li.area code').html(count2).show()
    }

})
