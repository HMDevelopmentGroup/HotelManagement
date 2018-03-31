
$(function () {

    $(".zb_pop_histroy .zb_pop_se").delegate("li", "click", function () {
       
        $("#cityCode").val($(this).find(".pop_code").text());
        $("#cityName").val($(this).find(".pop_pinyin").text());
        window.location = "/list/" + $(this).find(".pop_pinyin").text();
       

    });


    $("#frm").submit(function () {
        if (parseDate($("#beginDate").val()) >= parseDate($("#endDate").val())) {
            alert("离店日期必须大于入住日期");
            return false;
        }
        clearStorage();//清空表单缓存
        return true;
    });
    //点击查询按钮
    $(".list_cx_button input").click(function () {
        
        $("#QuerySource").val("1");
        $('.list_wz_show span').click();
        $("#QuerySource").val("0");
        $(".popup,.list_loading_aa").show();//刷新页面加载动画; 

        try { 
            publicFn(5, "002359", $("#CityNameCn").val());
        } catch (e) {
            LG.log(e);
        }
        setTimeout(function () {
            if (window._gsTracker) {
                _gsTracker.trackSiteSearch($("#home_zbse").val(), null, "utf-8", false);
                var _gsElements = document.querySelectorAll(".list_main");
                if (_gsElements.length > 0) {
                    _gsTracker.monitorSearchResults(_gsElements[0]);
                }
            }
        }, 3000);
        var startTime = $(".list_choose input.start_data").val(),
            endTime = $(".list_choose input.end_data").val();
        $(".skwrap .start_date").html(startTime.substring(5).replace("/", '-')).attr('data-time', startTime.replace("/", '-').replace("/", '-'));
        $(".skwrap .end_date").html(endTime.substring(5).replace("/", '-')).attr('data-time', endTime.replace("/", '-').replace("/", '-'));
    })

    //清空 
    $(".list_wz_all").click(function () {
        switch ($(this).data("type")) {
            case "price":
                $("#priceRage").val('');
                break;
            case "equip":
                $("#device").val('');
                break;
            case "brand":
                $("#Brands").val('');
                break;
            case "item":
                $("#feature").val('');
                break;
            default:
        }
        setClearBtnStyle();
        SubmitQuery(true);
    });
    //清空所有
    $("#clearFilter").click(function () {
        $("#priceRage").val('');
        $("#device").val('');
        $("#SelectArea").val('');
        $("#SignleAreaFilter").val('');
        $("#Brands").val('');
        $("#feature").val('');
        setClearBtnStyle();
        //SubmitQuery(true);
    });
    //切换城市
    $(".zb_pop_se li").click(function () {
        location = "/list/" + $(this).find(".pop_pinyin").text();           
    });
    $("#his li").click(function () {
        location = "/list/" + $(this).find(".pop_pinyin").text();
       
        $("#cityCode").val($(this).find(".pop_code").text());
        $("#cityName").val($(this).find(".pop_pinyin").text());
        loadMainListByAsync();

    });
    $(".citypop").on("click", "li", function () {

        location = "/list/" + $(this).find(".pop_citypinyin").text();
    });
    //异步加载列表 
    //loadMainListByAsync(true);

    //his_looked();

});//End $Function


//初始化未入住订单


function initPagination(totalRow, currentPageIndex) {
   
    $("#listPager").pagination(totalRow, {
        num_edge_entries: 1, //边缘页数
        num_display_entries: 4, //主体页数
        current_page: currentPageIndex,
        items_per_page: 15, //每页显示1项
        callback: function (pageindex, jq) {
            //LG.log(pageindex);
            if (pageindex == currentPageIndex) {
                //LG.log("跳过绑定当前页。");
                return false;
            }
            $("#pageNo").val(parseInt(pageindex) + 1);
            $('html, body').animate({ scrollTop: $('.list_px_fix').offset().top-90 }, 'slow');//点击下一页后回到顶部
            $(".popup").height($(document).height());
            $(".popup,.list_loading_aa").show();//刷新页面加载动画; 

            SubmitQuery(false);
            return false;
        }//回调函数
    });

}
$("#keyDescript").val($("#home_zbse").val());
$(".popup,.list_loading_aa").show();//刷新页面加载动画; 


//异步加载列表 
var loadlist_main = null;
function loadMainListByAsync(firstLoad) {  
    //pageScorll()
    var parms = {
        cityCode: $("#cityCode").val(),
        SelectArea: $("#SelectArea").val(),
        SignleAreaFilter: $("#SignleAreaFilter").val(),//行政区,地铁,车站等单选
        priceRage: $("#priceRage").val(),
        feature: $("#feature").val(),
        cityName: $("#cityName").val(),
        beginDate: $("#beginDate").val(),
        endDate: $("#endDate").val(),
        orderBy: $("#orderBy").val(),
        pageNo: $("#pageNo").val(),
        device: $("#device").val(),
        key: $("#key").val(),
        keyDescript: $("#keyDescript").val(),
        Brands: $("#Brands").val(),
        //ForH5Page:$("#Brands").val();
       
    }
    //判断是否是点击查询按钮
    if ($("#QuerySource").val() == "1") {
        var keywords = $.trim($("#home_zbse").val());

        if ($("#key").val() == "" && keywords != "" && keywords != "请输入酒店名、商圈、地标等") {
            $("#key").val("J" + keywords);
        }
        parms = {
            cityName: $("#cityName").val(),
            cityCode: $("#cityCode").val(),
            key: $("#key").val(),
            keyDescript: $("#keyDescript").val(),
            beginDate: $("#beginDate").val(),
            endDate: $("#endDate").val(),
        }
        $("#QuerySource").val("1");
    }

    var url = "/listasync/" + $("#cityName").val();
    //LG.log(url);
    $(".list_main").empty();
    $(".popup,.list_loading_aa").show();//刷新页面加载动画; 

    window.scroll = null;
    window.onscroll = null;
    if (loadlist_main && loadlist_main.readyState != 4) {
        loadlist_main.abort();
    }
    loadlist_main = $.ajax({
        type: "GET",
        url: url,
        data: parms,
        success: function (result) {
            $(".list_main").html(result);
            $('.list_main').css('height', 'auto');
            asyncLoadList(firstLoad);
            pageScorll()
          
        }
    });


}
//历史搜索城市

//异步列表加载后事件
function asyncLoadList(firstLoad) {
    
    //LG.log("异步加载完成!");  
    $(".popup,.list_loading").hide();
    //$('.list_main').on('mouseover', '.list_boxline', function () {})
    //跳转到详情页
    $(".list_intro_name_tj a,.list_ck_details a").click(function () {
        var url = "/hotel/" + $(this).data("hotelcd");
        $("#frm").attr("action", url).attr("target", "_blank");

        $("#frm").submit();
        return false;
    });
    if (firstLoad) {
        //自动选定品牌
        if ($("#Brands").val() != '') {

            var brandArr = $("#Brands").val().split(',');
            for (var i = 0; i < brandArr.length; i++) {
                var branditem = $("#brand_checkboxlist input:checkbox[value = '" + brandArr[i] + "']")
                    .attr("checked", "checked")
                //.parent().addClass("redon").find("i").addClass("ion").end();

                inputFilterbind(branditem);
                //setFilter(false);
            }


        }
       
    }
    //加载地图定位
    //加载后事件移动到异步页面完成 

}
//设定过滤条件
//移动端可重用  
function setFilter(obj, WithSubmit) {
    var currentArray = [];
    var idBoxSelector = "";
    var spliter = '';
    switch (obj.data("type")) {
        case "sq":
            bindShangQuanClick(obj);
            return;//商圈在 bindShangQuanClick() 中处理

        case "brand":
            idBoxSelector = "#Brands";
            spliter = ',';
            break;
        case "price":
            idBoxSelector = "#priceRage";
            spliter = '_';

            break;
        case "equip":
            idBoxSelector = "#device";
            spliter = 'X';

            break;
        case "item":
            idBoxSelector = "#feature";
            spliter = '|';
            break;
        default:
    }

    currentArray = $(idBoxSelector).val().split(spliter);
    if (currentArray.indexOf(obj.val()) > -1) {
        //存在 移除 
        currentArray.remove(obj.val());
    } else {
        //不存在 添加
        currentArray.push(obj.val());
    }
    $(idBoxSelector).val(currentArray.join(spliter));
    //提交查询
    if (WithSubmit) {
        SubmitQuery(true);
    }
}
//清空选择

function clearFilter() {
   
    $("#SelectArea").val('');
    $("#SignleAreaFilter").val('');//行政区;地铁;车站等单选
    $("#priceRage").val('');
    $("#feature").val('');
    $("#orderBy").val('');
    $("#device").val('');
    $("#Brands").val('');

}
function ClearBrands() {
    $("#brand_checkboxlist input:checkbox").removeAttr("checked");
    $("#Brands").val("");
    SubmitQuery(true);
}
//提交页面
function SubmitQuery(resetPage) {

    //获取当前Action
    if (!resetPage) {
    } else {
        $("#pageNo").val('');
    }


    if ($("#city_select").val() == "" || $("#city_select").val() == "中文 / 全拼") {
        $("#city_select").val($("#CityNameCn").val());

    }
    //异步加载页面
    loadMainListByAsync();

}



//获取要跳转的url
function GetUrl(mark) {


    if ($("#keyDescript").val() == "" && $("#key").val() != "") {
        $("#key").val("");
    }


    var click_mark = true;

    if (mark != null && mark != undefined && mark != "") {
        click_mark = false;
    }

    if (click_mark && $("#keyDescript").val() != "" && $("#key").val() != "" && $("#key").val().substring(0, 1) == "M") {
        $("#orderBy").val("3");
    }
    var pageNo = $("#pageNo").val();
    if (!pageNo) {
        //LG.log("页码为空,设置为1");
        pageNo = 1;
    }
    url = "/listasync/" + $("#cityName").val() + "/" + $("#key").val() + "-"
        + $("#Brands").val() + "-" + $("#priceRage").val() + "-"
        + $("#device").val() + "-" + $("#orderBy").val() + pageNo;
    //LG.log(url);
    return url;
}


//
function ReadParemeters() {
    sessionStorage.setItem("hotelListUrl", location.href);
    if (sessionStorage.getItem("selectedBrands") ||
        sessionStorage.getItem("selectedPriceRage") ||
        sessionStorage.getItem("selectedCity") ||
        sessionStorage.getItem("selectedDateRange") ||
        sessionStorage.getItem("selectedArea") ||
        sessionStorage.getItem("selectedFilters")
        ) {
        $("#brand").val(sessionStorage.getItem("selectedBrands"));
        $("#txtpriceRage").val(sessionStorage.getItem("selectedPriceRage"));
        $("#txtCity").val(sessionStorage.getItem("selectedCity"));
        if (sessionStorage.getItem("selectedDateRange")) {
            var dateRange = sessionStorage.getItem("selectedDateRange").split('|');
            if (dateRange.length == 2) {
                $("#txtbeginDate").val(dateRange[0]);
                $("#txtendDate").val(dateRange[1]);
            }
        }
        if (sessionStorage.getItem("selectedArea")) {
            var selectedArea = sessionStorage.getItem("selectedArea").split('|');
            $("#keyDescript").val(selectedArea[1]);
            $("#txtSelectArea").val(selectedArea[1]);
            $("#key").val(selectedArea[0]);
        }
        $("#txtFilter").val(sessionStorage.getItem("selectedFilters"));
        //$("#btnQuery").click();
    }

}
//清理SessionStorage
function clearStorage() {
    sessionStorage.removeItem("selectedBrands");
    sessionStorage.removeItem("selectedPriceRage");
    sessionStorage.removeItem("selectedCity");
    sessionStorage.removeItem("selectedDateRange");
    sessionStorage.removeItem("selectedArea");
    sessionStorage.removeItem("selectedFilters");
}


function setLoactions() {
    var hlocations = eval($("#hlocations").val());
    //设定地图标记
    SetPoints(hlocations);
    map.setFitView();
    if (map.getZoom() > 14) {
        map.setZoom(14);//500m
    }
}
//刷新创建所有覆盖物;
var markers = [];
markers.length = 15;
var marker3 = null;
function SetPoints(hlocations) {
    $(hlocations).each(function (i, item) {
        var bg = $('.list_boxline').eq(i).find('.list_intro_name_tj a span').css('backgroundImage');
        marker3 = new AMap.Marker({
            map: map,
            content: "<span class='MapMark' style='background:" + bg + "'>" + (i + 1) + "<span>",
            position: item,
            offset: new AMap.Pixel(-12, -36)
        });
        markers[i] = marker3;

    });

}
//刷新创建带有描边效果的所有覆盖物;

//function SetPoints_a(hlocations) {
//    $(hlocations).each(function (i, item) {
//        var bg = $('.list_boxline').eq(i).find('.list_intro_name_tj a span').css('backgroundImage');
//        var color_a=$('.list_boxline').eq(i).find('.list_intro_name_tj a').css('color')
//        var arr = bg.substring(4, bg.length - 2).split('/');
//        var str = arr[arr.length - 1].substring(0, arr[arr.length - 1].length - 4);
//        bg = bg.replace(str, str + "_map");
        
//        marker3 = new AMap.Marker({
//            map: map,
//            content: "<span class='strong' style='background:" + bg + ";color:" + color_a + ";'>" + (i + 1) + "<span>",
//            position: item,
//            offset: new AMap.Pixel(-12, -36)
//        });
//        markers[i] = marker3;

//    });

//}
var outExcute = null;
var marker4 = 0;

//划入移到对应覆盖物位置;
function moveto(lon, lat) {
    map.setZoom(14);//500m
    map.panTo([lon, lat]);
    var hlocations = eval($("#hlocations").val());
    $(hlocations).each(function (i, item) {
        var bg = $('.list_boxline').eq(i).find('.list_intro_name_tj a span').css('backgroundImage');
        if (lon == item[0]) {
            var arr = bg.substring(4, bg.length - 2).split('/');
            var str = arr[arr.length - 1].split(".");
            bg = bg.replace(str[0], (str[0] + "2"));
            try {
                map.clearMap();
                map.remove(marker4);
                SetPoints(hlocations);
                marker4 = new AMap.Marker({
                    map: map,
                    content: "<span class='strong' style='background:" + bg + "'><span class='set_font'>" + (i + 1) + "<span><span>",
                    position: item,
                    offset: new AMap.Pixel(-15, -40)
                });

                marker4.setAnimation('AMAP_ANIMATION_DROP');

                map.remove(markers[i]);

            }catch(e){}
      
        }
    });
}

//function timeOutMove(lon, lat) {
   
    // map.setZoom(14);//500m
    //map.panTo([lon, lat]);
//}

//最近浏览
function his_looked() {
    var ul_id = 'his_looked';
    $.ajax({
        type: "GET",
        url: "/Ajax/GetMyLookedHotel",
        data: { ts: Math.random() },
        dataType: "json",
        success: function (result) {
            if (result != null && result.Code == "200") {
                if (result.data != null && result.data != undefined && result.data != "") {
                       // console.log(reault.data)

                    $("#" + ul_id).empty();

                    $(result.data).each(function (i) {
                        var cd = result.data[i].HotelCd;
                        var name = result.data[i].HotelName;
                        if (name.length > 16) {
                            name = result.data[i].HotelName.substring(0, 16) + "...";
                        }

                        var price = result.data[i].LowestPrice;
                        var type = result.data[i].Type;

                        var titlename = result.data[i].HotelName.length > 16 ? result.data[i].HotelName : result.data[i].HotelName.substring(0, 16) + "...";

                        $("#" + ul_id).append("<a href='/hotel/" + cd + "' title='" + titlename + "'>" + name + "</a>");
                    });
                }
            }
        }
    });
}


//=======================================================================================================================
