/*
Author: stan gao;
Date: 2015-04-23;
Descript: 单选，复选框。
*/
jQuery.fn.prettyCheckboxes = function (settings) {
    settings = jQuery.extend({
        checkboxWidth: 17,//模拟图标宽度
        checkboxHeight: 17,//模拟图标高度
        className: 'prettyCheckbox',//模拟图标label名称
        display: 'list'//排版方式，默认是竖版
    }, settings);

    $(this).each(function () {
        //找到input前的那个label
        $label = $(this).prev("label");
        // 在label标签里插入图标节点
        $label.prepend("<span class='holderWrap'><span class='holder'></span></span>");
        // If the checkbox is checked, display it as checked
        if ($(this).is(':checked')) { $label.addClass('checked'); };
        // Assign the class on the label
        $label.addClass(settings.className).addClass($(this).attr('type')).addClass(settings.display);
        // Assign the dimensions to the checkbox display
        $label.find('span.holderWrap').width(settings.checkboxWidth).height(settings.checkboxHeight);
        $label.find('span.holder').width(settings.checkboxWidth);
        // Hide the checkbox
        $(this).addClass('hiddenCheckbox');
        // Associate the click event
        $label.bind('click', function () {

            $(this).next("input").triggerHandler('click');
            if ($(this).next("input").is(':checkbox')) {

                $(this).toggleClass('checked');
                $(this).next("input").checked = true;
                $(this).find('span.holder').css('top', 0);
                return false;//阻止IE7执行两次
            } else {
                $toCheck = $(this).next("input");
                // Uncheck all radio
                $('input[name="' + $toCheck.attr('name') + '"]').each(function () {
                    $('label[for="' + $(this).attr('name') + '"]').removeClass('checked');
                });
                $(this).addClass('checked');
                $toCheck.checked = true;
            };
        });

    });
};

/*
Author: stan gao;
Date: 2015-11-01;
Descript: select框。
*/
//为所有selecct_box类模拟下拉框
jQuery.fn.CRselectBox = function (settings) {

    settings = jQuery.extend({
        selectWidth: 100,//模拟图标宽度
        selectHeight: 20,//模拟图标高度
        iconWidth: 20,//模拟图标宽度
        event: 'click',
        line: 0//排版方式，0是竖版block是竖版，1是横版inline-block
    }, settings);

    $(this).each(function () {
        var _self = $(this);
        /*构建结构*/
        var _parent = _self.parent();

        var wrapHtml = '<div class="CRselectBox"></div>';
        var $wrapHtml = $(wrapHtml).appendTo(_parent);
        var selectedOptionValue = _self.find("option:selected").attr("value");
        var selectedOptionTxt = _self.find("option:selected").text();
        var name = _self.attr("name");
        var id = _self.attr("id");
        var inputHtml = '<input type="hidden" value="' + selectedOptionValue + '" name="' + name + '" id="' + id + '"/>';
        $(inputHtml).appendTo($wrapHtml);
        var inputTxtHtml = '<input type="hidden" value="' + selectedOptionTxt + '" name="' + name + '_CRtext" id="' + id + '_CRtext"/>';
        $(inputTxtHtml).appendTo($wrapHtml);
        var aHtml = '<a class="CRselectValue" href="#">' + selectedOptionTxt + '</a>';
        $(aHtml).appendTo($wrapHtml);
        var ulHtml = '<ul class="CRselectBoxOptions"></ul>';
        var $ulHtml = $(ulHtml).appendTo($wrapHtml);
        var liHtml = "";
        var Timer = null;
        _self.find("option").each(function () {
            if ($(this).attr("selected")) {
                liHtml += '<li class="CRselectBoxItem"><a href="#" class="selected" rel="' + $(this).attr("value") + '">' + $(this).text() + '</a></li>';
            } else {
                liHtml += '<li class="CRselectBoxItem"><a href="#" rel="' + $(this).attr("value") + '">' + $(this).text() + '</a></li>';
            }
        });
        $(liHtml).appendTo($ulHtml);


        //alert(settings.selectHeight);
        $("input#" + id).parent(".CRselectBox").css("height", settings.selectHeight + "px");//设置参数，复选框的高度
        $("input#" + id).parent(".CRselectBox").find(".CRselectValue").css({ "line-height": settings.selectHeight - 6 + "px", "paddingRight": settings.iconWidth + "px" });//设置参数，复选框的高度
        $("input" + "#" + id).parent(".CRselectBox").css("width", settings.selectWidth + "px");//设置参数，复选框的宽度, .CRselectBoxOptions
        $("input" + "#" + id).parent(".CRselectBox").find(".CRselectBoxOptions").css("width", settings.selectWidth + "px");//设置参数，复选框的宽度, 
        if (settings.line) {
            $("input" + "#" + id).parent(".CRselectBox").css({ "display": "inline-block", "float": "left" });//设置参数，设置横向和纵向
        }
        /*添加效果*/
        $($wrapHtml, _parent).hover(function () {
            $(this).addClass("CRselectBoxHover");
        }, function () {
            $(this).removeClass("CRselectBoxHover");
        });
        $(".CRselectBoxItem a", $wrapHtml).click(function () {
            $(this).blur();
            var value = $(this).attr("rel");
            var txt = $(this).text();
            $("#" + id).val(value);
            $("#" + id + "_CRtext").val(txt);
            $(".CRselectValue", $wrapHtml).text(txt);
            $(".CRselectBoxItem a", $wrapHtml).removeClass("selected");
            $(this).addClass("selected");
            $(".CRselectBoxOptions", $wrapHtml).hide();
            return false;
        });

        $(".CRselectValue", $wrapHtml).on(settings.event, function () {
            clearTimeout(Timer);
            $(".CRselectBox").find(".CRselectBoxOptions").hide();
            $(this).blur();
            $(".CRselectBoxOptions", $wrapHtml).show();
            return false;
        });

        $(document).click(function (event) {
            if ($(event.target).attr("class") != "CRselectBox") {
                $(".CRselectBoxOptions", $wrapHtml).hide();
            }
        });

        if (settings.event == 'mouseover') {//判断是否为鼠标经过效果
            $(".CRselectValue", $wrapHtml).mouseout(function () {
                clearTimeout(Timer);
                Timer = setTimeout(function () { $(".CRselectBoxOptions", $wrapHtml).hide() }, 300);
            })
            $(".CRselectBoxOptions").hover(function () {
                clearTimeout(Timer);
            }, function () {
                clearTimeout(Timer);
                Timer = setTimeout(function () { $(".CRselectBoxOptions", $wrapHtml).hide() }, 300);
            })
        }
        _self.remove();
        return _self;
    });
}



/*
Author: stan gao;
Date: 2015-11-01;
Descript: select框。
*/
//为所有selecct_box类模拟下拉框
jQuery.fn.sjld = function (shenfen, chengshi, quyu) {
    var sfp = shenfen + ' p'
    var csp = chengshi + ' p'
    var qyp = quyu + ' p'
    var sfs = shenfen + ' .m_zlxg2'
    var css = chengshi + ' .m_zlxg2'
    var qys = quyu + ' .m_zlxg2'
    var sfli = shenfen + ' ul li'
    var csli = chengshi + ' ul li'
    var qyli = quyu + ' ul li'
    var This = this;
    var LiminWidth = $(this).find(".m_zlxg").width();
    $('.m_zlxg p').click(function () {
        $(This).find('.m_zlxg2').hide();
        $(this).parent().find('.m_zlxg2').slideDown(200);
    })
    // $('.m_zlxg').mouseleave(function(){
    // 	$(this).find('.m_zlxg2').slideUp(200);
    // })
    var csgsmr = [{ name: 0, val: "请选择" }];
    var qygsmr = [{ name: 0, val: "请选择" }];


    //默认城市
    //for(a=0;a<sfgsmr.length;a++){
    //	var sfmcmr = sfgsmr[a].name;
    //	var sfnrmr = "<li>"+sfmcmr+"</li>";
    //	$(shenfen).find('ul').append(sfnrmr);
    //}
    for (b = 0; b < csgsmr.length; b++) {
        var csmcmr = csgsmr[b];
        var csnrmr = "<li data-name=\"" + csmcmr.name + "\">" + csmcmr.val + "</li>";
        $(chengshi).find('ul').append(csnrmr);

    }
    for (c = 0; c < qygsmr.length; c++) {
        var qymcmr = qygsmr[c];
        var qynrmr = "<li data-name=\"" + qymcmr.name + "\">" + qymcmr.val + "</li>";
        $(quyu).find('ul').append(qynrmr);
    }
    Array.max = function (array) {
        return Math.max.apply(Math, array);
    }
    $(css).width(LiminWidth);

    /*---------------------------------------------------------------------*/

    $(sfli).click(function () {
        var optionsf = $(this);

        var dqsf = $(this).text();
        $(shenfen).find('p').text(dqsf);
        $(shenfen).find('p').attr('title', dqsf);
        var sfnum = $(this).index();
        var provinceId = $(this).data("name");
        $(shenfen).data("name", provinceId);
        $(shenfen).data("text", dqsf);

        var url = "/services/listCityTypes";
        if (provinceId != 0) {
            $.ajax({
                url: url,
                dataType: 'json',
                type: "POST",
                data: encodeURI("name=" + provinceId),
                success: function (result) {
                    var csgs = JSON.parse(result).Results;

                    $(chengshi).find('ul').text('');
                    var csnr = "<li data-name=\"0\">请选择</li>";
                    $(chengshi).find('ul').append(csnr);

                    for (i = 0; i < csgs.length; i++) {
                        var csmc = csgs[i];
                        var csnr = "<li data-name=\"" + csmc.name + "\">" + csmc.val + "</li>";
                        $(chengshi).find('ul').append(csnr);
                    }
                    Array.max = function (array) {
                        return Math.max.apply(Math, array);
                    }
                    $(css).width(LiminWidth);
                    var qygsdqmr = [{ name: 0, val: "请选择" }];
                    $(quyu).find('ul').text('');
                    for (j = 0; j < qygsdqmr.length; j++) {
                        var qymc = qygsdqmr[j];
                        var qynr = "<li data-name=\"" + qymc.name + "\">" + qymc.val + "</li>";
                        $(quyu).find('ul').append(qynr);
                    }
                    $(csp).text($(chengshi).find('ul li').eq(0).text());
                    $(csp).data("name", $(chengshi).find('ul li').eq(0).data("name"));
                    $(qyp).text($(quyu).find('ul li').eq(0).text());
                    $(qyp).data("name", $(quyu).find('ul li').eq(0).data("name"));


                    /*------------------*/
                    $(csli).click(function () {
                        var option = $(this);
                        var dqcs = $(this).text();
                        var cityId = $(this).data("name");
                        $(chengshi).find('p').text(dqcs);
                        $(chengshi).find('p').attr('title', dqcs);
                        $(chengshi).data('name', cityId);
                        $(chengshi).data('text', dqcs);

                        if (cityId != 0) {
                            var url = "/services/listTownTypes";
                            $.ajax({
                                url: url,
                                dataType: 'json',
                                type: "POST",
                                data: encodeURI("name=" + cityId),
                                success: function (result) {
                                    var qygs = JSON.parse(result).Results;
                                    $(quyu).find('ul').text('');
                                    var qynr = "<li data-name=\"0\">请选择</li>";
                                    $(quyu).find('ul').append(qynr);

                                    for (j = 0; j < qygs.length; j++) {
                                        var qymc = qygs[j];
                                        var qynr = "<li data-name=\"" + qymc.name + "\">" + qymc.val + "</li>";
                                        $(quyu).find('ul').append(qynr);
                                    }

                                    $(qyp).text($(quyu).find('ul li').eq(0).text());
                                    $(qyp).data("name", $(quyu).find('ul li').eq(0).data("name"));
                                    $(css).width(LiminWidth);
                                    $(qyli).click(function () {
                                        var dqqy = $(this).text();
                                        $(quyu).find('p').text(dqqy);
                                        $(quyu).find('p').attr('title', dqqy);
                                        $(quyu).data('name', $(this).data("name"));
                                        $(quyu).data('text', dqqy);
                                        $(this).parent().parent().slideUp(200);
                                    })//区级
                                    option.parent().parent().slideUp(200);
                                }
                            });

                        } else {
                            $(quyu).find('ul').text('');
                            var qygsmr = [{ name: 0, val: "请选择" }];
                            for (c = 0; c < qygsmr.length; c++) {
                                var qymcmr = qygsmr[c];
                                var qynrmr = "<li data-name=\"" + qymcmr.name + "\">" + qymcmr.val + "</li>";
                                $(quyu).find('ul').append(qynrmr);
                            }
                            Array.max = function (array) {
                                return Math.max.apply(Math, array);
                            }
                            $(css).width(LiminWidth);
                            $(qyp).text($(quyu).find('ul li').eq(0).text());
                            $(qyp).data("name", $(quyu).find('ul li').eq(0).data("name"));

                            option.parent().parent().slideUp(200);


                        }
                    });

                    /*------------------*/
                    $(qyli).click(function () {
                        var dqqy = $(this).text();
                        $(quyu).find('p').text(dqqy);
                        $(quyu).find('p').attr('title', dqqy);
                        $(quyu).data('name', $(this).data("name"));
                        $(quyu).data('text', dqqy);


                    })//区级
                    optionsf.parent().parent().slideUp(200);
                }

            });

        } else {
            var csgsmr = [{ name: 0, val: "请选择" }];
            var qygsmr = [{ name: 0, val: "请选择" }];

            $(chengshi).find('ul').text('');
            $(quyu).find('ul').text('');
            for (b = 0; b < csgsmr.length; b++) {
                var csmcmr = csgsmr[b];
                var csnrmr = "<li data-name=\"" + csmcmr.name + "\">" + csmcmr.val + "</li>";
                $(chengshi).find('ul').append(csnrmr);

            }
            for (c = 0; c < qygsmr.length; c++) {
                var qymcmr = qygsmr[c];
                var qynrmr = "<li data-name=\"" + qymcmr.name + "\">" + qymcmr.val + "</li>";
                $(quyu).find('ul').append(qynrmr);
            }
            Array.max = function (array) {
                return Math.max.apply(Math, array);
            }
            $(css).width(LiminWidth);
            $(csp).text($(chengshi).find('ul li').eq(0).text());
            $(csp).data("name", $(chengshi).find('ul li').eq(0).data("name"));
            $(qyp).text($(quyu).find('ul li').eq(0).text());
            $(qyp).data("name", $(quyu).find('ul li').eq(0).data("name"));

            optionsf.parent().parent().slideUp(200);

        }



    })//省级
    /*---------------------------------------------------------------------*/

    $('.m_zlxg').click(function () {

        $(this).parent().find('#Lsfdq_tj').val($(sfp).text());
        $(this).parent().find('#Lcsdq_tj').val($(csp).text());
        $(this).parent().find('#Lqydq_tj').val($(qyp).text());
    })//表单传值获取

}


$(document).bind("click", function (e) {
    var target = $(e.target);
    if (target.closest(".m_zlxg").length == 0) {
        $(".m_zlxg2").slideUp(200);
    }
});
