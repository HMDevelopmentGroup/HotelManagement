; $(function () {
    //test
    //是否为空正则
    var reg = /(^\s*)|(\s*$)/g;
    //手机号码
    var telReg = /^1[34578]\d{9}$/;
    var emailReg = /^[0-9][0-9]{5}$/;
    var re_pwd = /^[\x21-\x7e]{6,20}$/;
    //去掉最后一条虚线
    $(".list_form").find('.item:last').addClass('no_border');
    $(".city_list").find('a:last').addClass('no_border');
    $(".ticket_con .tabs_con .con").find('.item:last').addClass('no_border');
    $(".charge_ticket_info .ticket_con .ticket_form").find('.item:last').addClass('no_border');
    $(".info_con").find('.item:last').addClass('no_border');
    var today = new Date(),
        todayY = today.getFullYear(),
        todayM = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
        todayD = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    $('.start_choose').click(function () {
        $('.start_date').addClass('cur');
        $('.end_date').removeClass('cur');
        $(this).dateChoose({
            dateClass: ".date_box_choose",//日期选择页面
            startClass: ".start_date", //开始日期的class
            endClass: ".end_date", //结束日期
            range: true, //开始日期和结束日期都包括，若为false，则只有开始日期
            divideChoose: true,//结束日期和开始日期是否在两个不同的输入框
            startTxt: "", //开始日期选中之后出现的文字
            endTxt: "",//开始日期选中之后出现的文字
            startDate: "", //日期之后可选
            endDate: todayY + "-" + todayM + "-" + todayD, //日期之前可选
            maxDays: 3,  //之后可点击最大天数,
            Seperate: [],//间隔的日期
            En: false, //是否英文
            callback: ""  //日期选中之后的callback
        });
    })
    $('.end_choose').click(function () {
        $('.start_date').removeClass('cur');
        $('.end_date').addClass('cur');
        $(this).dateChoose({
            dateClass: ".date_box_choose",//日期选择页面
            startClass: ".start_date", //开始日期的class
            endClass: ".end_date", //结束日期
            range: true, //开始日期和结束日期都包括，若为false，则只有开始日期
            divideChoose: true,//结束日期和开始日期是否在两个不同的输入框
            startTxt: "", //开始日期选中之后出现的文字
            endTxt: "",//开始日期选中之后出现的文字
            startDate: $(".start_date").attr('data-time'), //日期之后可选
            endDate: todayY + "-" + todayM + "-" + todayD, //日期之前可选
            maxDays: 3,  //之后可点击最大天数,
            Seperate: [],//间隔的日期
            En: false, //是否英文
            callback: ""  //日期选中之后的callback
        });
    })
    //选择城市
    $(".city_list a").click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });
    //新增常用地址：checkbox选中
    $(".check_like").click(function () {
        var _this = $(this);
        if (_this.hasClass('cur')) {
            _this.removeClass('cur').find('code').html("&#xe61c;");
        }
        else {
            _this.addClass('cur').find('code').html("&#xe61d;");
        }
    });
    //tab选项卡切换
    $(".tab1 a").click(function () {
        var _this = $(this),
            index = _this.index();
        if (_this.hasClass('disabled')) {
            return false;
        }
        else {
            _this.addClass('cur').siblings().removeClass('cur');
            $(".tabs_val_red1 .tabs_con .con").eq(index).addClass('cur').siblings().removeClass('cur');
        }
    });
    $(".tabs a").click(function () {
        var _this = $(this),
            index = _this.index();
        if (_this.hasClass('disabled')) {
            return false;
        }
        else {
            _this.addClass('cur').siblings().removeClass('cur');
            $(".tabs_con .con").eq(index).addClass('cur').siblings().removeClass('cur');
        }
    });
    $(".tab2 a").click(function () {
        var _this = $(this),
            index = _this.index();
        if (_this.hasClass('disabled')) {
            return false;
        }
        else {
            _this.addClass('cur').siblings().removeClass('cur');
            $(".tabs_val_red .tabs_con .con").eq(index).addClass('cur').siblings().removeClass('cur');
        }
    });
    //我的信息:性别修改弹窗
    $(".sex_modify").click(function () {
        $(".pop_sex").show();
        $(".mask").show();
    });
    //我的信息：性别修改
    $(".pop_sex a").click(function () {
        var _this = $(this),
            txt = $(this).find("span").text();

        $.post("/member/myinfoupdate", { sex: txt, address: $('.address_modify').find("span").html(), postcode: $('.post_modify').find("span").html() },
            function (result) {
                if (result.status == 0) {
                    _this.addClass('cur').siblings().removeClass('cur');
                    $(".mask").hide();
                    $('.pop_sex').hide();
                    $(".sex_modify").find('span').text(txt);
                } else {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text(result.msg);
                }
            });



    });
    //点击获取验证码 修改手机号码
    $(".info_tel_modify .btn_get_code").click(function () {
        var _this = $(this);
        if ($(".info_tel").val() == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        } else {
            $.post('/member/myinfo_sendmsg', { mobile: $("#oldmobile").text() },
                function (result) {
                    if (result != null) {

                        //alert(result.msg);

                    }
                });
            if (!_this.hasClass('countdown')) {
                _this.addClass('countdown').html('60秒后重发');
                var seconds = 60;
                var interval = setInterval(function () {
                    seconds--;
                    if (seconds == 0) {
                        clearInterval(interval);
                        _this.removeClass('countdown').html('获取动态密码');
                    }
                    else {
                        _this.html(seconds + "秒后重发");

                    }
                }, 1000);
            }
        }
    });
    //点击获取验证码 修改邮箱
    $(".info_email_modify .btn_get_code").click(function () {
        var _this = $(this);
        if ($(".info_newemail").val() == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("新电子邮箱不能为空");
        } else {
            $.post('/member/MyInfo_SendEmailMsg', { email: $(".info_newemail").val() },
                function (result) {
                    if (result != null) {

                    }
                });
            if (!_this.hasClass('countdown')) {
                _this.addClass('countdown').html('60秒后重发');
                var seconds = 60;
                var interval = setInterval(function () {
                    seconds--;
                    if (seconds == 0) {
                        clearInterval(interval);
                        _this.removeClass('countdown').html('获取动态密码');
                    }
                    else {
                        _this.html(seconds + "秒后重发");

                    }
                }, 1000);
            }
        }
    });
    //弹窗关闭
    $(".mask").click(function () {
        $(this).hide();
        $('.pop_sex').hide();
        $(".pop_hide").hide();
        $('.pop_bottom').hide();
    });
    $("body").on('click', '.pop_mask', function () {
        $(".pop_mask").remove();
        $(".pop_text").hide();
        $(".error_pop").hide();
        $(".pop_set").hide();
    });
    $("body").on('touchend', '.pop_mask', function () {
        $(".pop_mask").remove();
        $(".pop_text").hide();
        $(".error_pop").hide();
        $(".pop_set").hide();
    });
    //输入框清空
    $('.item a.del').click(function () {
        $(this).parents('.item').find('input').val("");
    });

    //弹出删除框
    $(".btn_del").click(function () {

        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });
    //发票管理：删除
    $(".invoicelist .btn_del").click(function () {
        $(".hiddeninvoiceId").val($(this).attr("value"));
        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });
    //删除发票操作
    $(".invoicedelete").click(function () {
        $(this).parents('.pop_unbind').hide();
        $('.pop_mask').remove();
        $.ajax({
            url: "/Member/Del",
            type: 'Get',
            dataType: 'html',
            data: { id: $(".hiddeninvoiceId").val(), type: "Member", UrlQuery: "" },
            success: function (data) {
                $(this).parents('.pop_unbind').parent().find('.item.cur').remove();
                location.reload();
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
                return false;
            }
        });

    });
    $(".pop_unbind  .sure").click(function () {
        $(this).parents('.pop_unbind').hide();
        $('.pop_mask').remove();
        $.ajax({
            type: "POST",
            url: '/Member/AjaxCancelUnionCard',
            data: { "bankNo": $("input[name='H5deleteId']").val() },
            datatype: "json",
            success: function (data) {
                UnionCardListH5();
                $(this).parents('.pop_unbind').parent().find('.item.cur').remove();
            }
        });


    });
    //常用入住人：设置为默认
    $(".person_usually .item").on('click', ".set_default", function () {

        var _this = $(this);
        var item = _this.parents('.item');
        _this.removeClass("set_default").addClass('icon_default').html("默认");
        item.siblings().find(".icon_default").removeClass("icon_default").addClass("set_default").html("设为默认<code class='iconfont'>&#xe635;</code>");

    });

    //我的会员卡：设置为默认
    $(".my_vip .item").on('click', ".set_default", function () {
        var _this = $(this);
        $(this).PopupDialog({
            popupClass: '.pop_set_vip',
            maskLayer: true
        });
        _this.parents('.item').addClass('cur');
    });
    //确认设置为默认
    $(".pop_set .btn_agree").click(function () {
        $(".pop_set").hide();
        $(".pop_mask").remove();
        var itemCur = $(this).parents(".pop_set").parent().find(".address_list .item.cur");
        if ($(this).parents('.pop_set').parent().hasClass('my_vip')) {
            itemCur.find(".set_default").html("默认卡");
        }
        else {
            itemCur.find(".set_default").html("默认");
        }
        itemCur.removeClass("cur").find(".set_default").removeClass("set_default").addClass('icon_default')

        itemCur.siblings(".item").find(".icon_default").removeClass("icon_default").addClass("set_default").html("设为默认<code class='iconfont'>&#xe635;</code>");
    });
    //支付方式更改
    $(".charge_money .pay_item").click(function () {
        $(this).addClass('cur').siblings().removeClass('cur');
    });
    //checkbox模拟
    $(".like_check").click(function () {
        $(this).toggleClass('check');
    });
    //radio模拟
    $(".like_radio").click(function () {
        var _this = $(this);
        if (!_this.hasClass('disabled')) {
            _this.addClass('check').find("code").html("&#xe61b;");
            _this.siblings('.like_radio').removeClass('check').find("code").html("&#xe61a;");
        }

    });
    //支付密码修改
    $(".pwd_modify .btn_sure").click(function () {

        var _this = $(this);
        $(this).PopupDialog({
            popupClass: '.pop_text',
            maskLayer: true
        });
    });
    //我的订单：删除订单
    $(".my_order .btn_cancel").click(function () {
        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });
    //明细查询：明细类别
    $(".query_kind").click(function () {
        $(".pop_kind").show();
        $('.mask').show();
    });
    $(".pop_kind a").click(function () {
        var _this = $(this),
            text = _this.find('p span').text();
        _this.addClass('cur').siblings().removeClass('cur');
        $('.query_kind span').text(text);
        $(".pop_kind").hide();
        $('.mask').hide();
    });
    //时间跨度
    $(".time_range").click(function () {
        $(".pop_range").show();
        $('.mask').show();
    });
    $(".pop_range a").click(function () {
        var _this = $(this),
            text = _this.find('p span').text(),
            month = _this.attr('data-range');
        _this.addClass('cur').siblings().removeClass('cur');
        $('.time_range span').text(text);
        $(".pop_range").hide();
        $('.mask').hide();
        $(".end_choose").find('span').text(todayY + "-" + todayM + "-" + todayD).attr('data-time', todayY + "-" + todayM + "-" + todayD);
        var newTime = new Date(todayY, todayM - 1 - month, todayD),
            newY = newTime.getFullYear(),
            newM = (newTime.getMonth() + 1) < 10 ? "0" + (newTime.getMonth() + 1) : (newTime.getMonth() + 1),
            newD = newTime.getDate() < 10 ? "0" + newTime.getDate() : newTime.getDate();;
        $(".start_choose").find('span').text(newY + "-" + newM + "-" + newD).attr('data-time', newY + "-" + newM + "-" + newD);
    });
    //我要充值：是否需要发票
    $(".charge_money .bg_white .ticket_title a").click(function () {
        $(".pop_ticket").show();
        $(".mask").show();

    });
    ///选择是否需要发票- 我要充值
    $(".pop_ticket a").click(function () {
        var _this = $(this),
            txt = _this.find('span').text(),
            ticket = $(".charge_money .bg_white .ticket_title");
        $(".pop_ticket").hide();
        $(".mask").hide();
        _this.addClass('cur').siblings('a').removeClass('cur');
        ticket.find("a em").text(txt);
        if (txt == "需要发票") {
            ticket.next().show();
            //加载发票信息列表
            ShowInvoice();
        } else {
            var petcardmoney = $("#h5petcardmoney").val();//用户当前余额
            var total = parseInt($("#h5totalrechargeamount").html());
            var kuaidi = parseInt($("#h5kuaidiamount").html());
            $("#h5kuaidiamount").html("0");

            $("#h5totalrechargeamount").html(total);
            $("input[name='h5total_fee']").val(total);
            ticket.next().hide();
        }
    });
    //我要充值 - 文本框金额输入
    //充值金额改变
    $("#h5Recharge_input").change(function () {

        RegExpMoneyH5();
        var kdMoney = $("#h5kuaidiamount").html();
        $("#h5rechargeamount").html($(this).val());
        $("#h5totalrechargeamount").html(parseInt($(this).val()) + parseInt(kdMoney));
        $("#h5total_fee").val(parseInt($(this).val()) + parseInt(kdMoney));
    });

    //说明文字：
    $(".remind_tips").click(function () {
        $('.rule_pop').show();
        $(".mask2").show();
    });
    $('.rule_pop .rule_act').click(function () {
        $('.rule_pop').hide();
        $(".mask2").hide();
    });
    //导航栏
    $('.h5_nav li').click(function () {
        $('.h5_nav li').eq($(this).index()).find('a').addClass('h5_active').parent().siblings().find('a').removeClass('h5_active');
    });
    //我的信息->修改登录密码
    $(".pwd_modify").click(function () {
        $(".info_pwd_modify").stop(true, true).animate({ "left": 0 }, 500);
    });
    //修改登录密码->我的信息
    $(".info_pwd_modify .h5_header_back").click(function () {
        $(".info_pwd_modify").stop(true, true).animate({ "left": '200%' }, 500);
    });
    //修改登录密码：确定
    $(".info_pwd_modify .btn_sure").click(function () {
        var flag = 0;
        var text = '';
        $(this).parents(".info_pwd_modify").find('input').each(function () {
            if ($(this).val().replace(reg, "") == "") {

                flag = 0;
                text = $(this).attr('placeholder');
                return false;
            }
            else if (!re_pwd.test($(this).val())) {
                flag = 0;
                text = "密码格式不符合要求";
                return false;
            }
            else {
                if ($("input[name='REnewpwd']").val() != $("input[name='newpwd']").val()) {
                    flag = 0;
                    text = "两次密码不一致";
                } else {
                    flag = 1;
                }
            }
        });
        if (flag == 1) {
            $.post('/member/ModifyPass', $('#h5frm').serialize(),
                function (result) {
                    if (result.status != '0') {
                        $(this).PopupDialog({
                            popupClass: ".error_pop",
                            maskLayer: true
                        });
                        $(".error_pop p").text(result.msg);
                    } else {
                        $(this).PopupDialog({
                            popupClass: ".pop_text",
                            maskLayer: true
                        });
                        setTimeout(function () {
                            window.location.href = "/member/myinfo";
                        }, 1000)

                    }
                });

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //我的信息->修改手机号码
    $(".tel_modify").click(function () {
        $(".info_tel_modify").stop(true, true).animate({ "left": 0 }, 500);
    });
    //修改手机号码->我的信息
    $(".info_tel_modify .h5_header_back").click(function () {
        $(".info_tel_modify").stop(true, true).animate({ "left": '200%' }, 500);
    });
    //修改手机号码：确定
    $(".info_tel_modify .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".info_tel_modify").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            $.post('/member/myinfoupdatemobile', { oldmobile: $(".h5oldmobile").html(), mobile: $(".info_tel").val(), password: $(".h5oldpassword").val(), vercode: $(".tel_code").val() },
                function (result) {
                    if (result != null) {
                        if (result.status == 0) {
                            $(".info_tel_modify").stop(true, true).animate({ "left": "200%" }, 500);
                        }
                        else {
                            $(".error_pop p").text(result.msg);
                            $(this).PopupDialog({
                                popupClass: ".error_pop",
                                maskLayer: true
                            });

                            //$('.info-error').html(result.msg);
                            //$('.info-error').css('display','inline-block');

                        }
                    }
                });

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //我的信息->修改电子邮箱
    $(".email_modify").click(function () {
        $(".info_email_modify").stop(true, true).animate({ "left": 0 }, 500);
    });
    //修改电子邮箱->我的信息
    $(".info_email_modify .h5_header_back").click(function () {
        $(".info_email_modify").stop(true, true).animate({ "left": '200%' }, 500);
    });
    //修改电子邮箱：确定
    $(".info_email_modify .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".info_email_modify").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            $.post('/member/MyInfoUpdateEmail', { email: $(".info_email_modify .info_newemail").val(), vCode: $(".info_email_modify input[name='h5inputCode']").val(), pwd: $(".info_email_modify input[name='h5inputPwd']").val() },
                function (result) {
                    if (result != null) {

                        if (result.status == 0) {

                            $("#old_Email").html($("#my_info_tk1 input[name='inputMail']").val());
                            $(".info_email_modify").stop(true, true).animate({ "left": "200%" }, 500);
                        }

                        else {
                            $(this).PopupDialog({
                                popupClass: ".error_pop",
                                maskLayer: true
                            });
                            $(".error_pop p").text(result.msg);
                            return;
                        }
                    }
                });

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //我的信息->修改联系地址
    $(".address_modify").click(function () {

        $(".info_address_modify").stop(true, true).animate({ "left": 0 }, 500);
    });
    //修改联系地址->我的信息
    $(".info_address_modify .h5_header_back").click(function () {
        $(".info_address_modify").stop(true, true).animate({ "left": '200%' }, 500);

    });
    //修改联系地址:确定
    $(".info_address_modify .btn_sure").click(function () {
        if ($(this).parents('.info_address_modify').find('input').val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请输入联系地址");
        }
        else {
            modifyMyInfo($(".sex_modify").find("span").html(), $('.address_edit_list').find("input").val(), $('.post_modify').find("span").html(), 0);


        }
    });
    //我的信息->修改邮政编码
    $(".post_modify").click(function () {
        $(".info_post_modify").stop(true, true).animate({ "left": 0 }, 500);
    });
    //修改邮政编码->我的信息
    $(".info_post_modify .h5_header_back").click(function () {
        $(".info_post_modify").stop(true, true).animate({ "left": '200%' }, 500);

    });
    //修改邮政编码:确定
    $(".info_post_modify .btn_sure").click(function () {
        if ($(this).parents('.info_post_modify').find('input').val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请输入邮政编码");
        }
        else if (!emailReg.test($(this).parents('.info_post_modify').find('input').val())) {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请输入合法邮政编码");
        }
        else {
            modifyMyInfo($(".sex_modify").find("span").html(), $(".address_modify").find("span").html(), $('.editpostcode').val(), 1);


        }
    });
    //发票管理->新增发票信息
    $('.ticket_manage a.add').click(function () {

        $(".ticket_info").stop(true, true).animate({ "left": '0%' }, 500);
        $(".ticket_info .btn_sure").attr("value", "0");
        $(".ticket_info .ticket_con .tabs").find("a").removeClass("disabled");
        //清空表单数据
        ClearInvoiceInput();
    });


    //新增发票信息：确定
    $(".ticket_info .btn_sure").click(function () {
        var invoiceId = $(".ticket_info .btn_sure").attr("value");
        var flag = 0;
        var txt = "";
        $(this).parents(".ticket_info").find('.con.cur input').each(function () {
            if ($(this).val().replace(reg, "") == "") {
                if ($(".click_add .readonly").html() == "个人" && $("#select_one").val().replace(reg, "") == "") {
                    //如果是个人，那么可以不填写纳税人识别码
                    flag = 1;
                } else {
                    flag = 0;
                    txt = $(this).siblings("label").text();
                    return false;
                }
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            if ($(this).parents(".ticket_info").find('.con:last').hasClass('cur')) {
                var telTxt = $(".tel_ticket").val();
                if (!(telReg.test(telTxt))) {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text("手机号码格式错误");
                    return false;
                }
            }
            var type = "1";//默认为普通发票
            var invoice_head = $("#h5pt_invoice_head").val();
            var tax_code = "";
            if ($(".click_add .readonly").html() == "公司") {
                tax_code = $("#select_one").val();
            } else {
                tax_code = "";
            }

            var mobile = "";
            var bank_name = "";
            var bank_acc = "";
            var address = "";
            if ($(".ticket_info .ticket_con .tabs").find("a").eq(1).hasClass("cur")) {
                type = "0";//专业发票
                invoice_head = $("#h5invoice_head").val();
                mobile = $("#h5mobile").val();
                if ($("#h5tax_code").val() != "" && $("#h5tax_code").val() != null) {
                    tax_code = $("#h5tax_code").val();
                }
                else {
                    tax_code = $("#h5credit_code").val();
                }
                bank_acc = $("#h5bank_acc").val();
                bank_name = $("#h5bank_name").val();
                address = $("#h5address").val();
            }
            if (invoiceId == "0") {
                AddInvoiceH5(type, invoice_head, mobile, tax_code, bank_name, bank_acc, address);
            } else {
                //编辑发票
                ModifyInvoiceH5(invoiceId, type, invoice_head, mobile, tax_code, bank_name, bank_acc, address);
            }


        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(txt + "不能为空");
        }
    });
    //新增发票信息：发票管理
    $(".ticket_info .h5_header .h5_header_back").click(function () {
        $(".ticket_info").stop(true, true).animate({ "left": "200%" }, 500);
        $("#h5pt_invoice_head").val("");
        $("#h5invoice_head").val("");
        $("#h5mobile").val("");
        $("#h5tax_code").val("");
        $("#h5bank_name").val("");
        $("#h5credit_code").val("");
        $("#h5bank_acc").val("");
        $("#h5address").val("");
    });
    //新增发票-增值税普通发票
    if ($.trim($(this).find('.readonly').html()) == "公司") {
        $('.flag').show();
        $('.company_title').removeClass("no_border");
    } else {
        $('.flag').hide();
        $('.company_title').addClass("no_border");
    }
    $('.click_add').click(function () {
        $('.alert_mask').show();
        $('.select_company').show();
        if ($.trim($(this).find('.readonly').html()) == "公司") {
            $('.select_company div').eq(0).css("color", "#C0191F");
            $('.select_company div').eq(0).find('.iconfont').show();
        } else {
            $('.select_company div').eq(1).css("color", "#C0191F");
            $('.select_company div').eq(1).find('.iconfont').show();
        }
    });
    $('.alert_mask').click(function () {
        $('.alert_mask').hide();
        if ($('.select_company div').eq(1).find('.iconfont').css("display") == "block") {
            $('.click_add').find('.readonly').html("个人");
            $('.flag').hide();
            $('.company_title').addClass("no_border");
        } else {
            $('.click_add').find('.readonly').html("公司");
            $('.flag').show();
            $('.company_title').removeClass("no_border");
        }
        $('.select_company').hide();
    });
    $('.select_company div').click(function () {
        $(this).find('.iconfont').show();
        $(this).css('color', "#C0191F")
        $(this).siblings('div').find('.iconfont').hide();
        $(this).siblings('div').css('color', " #232323")

    })
    //发票管理-编辑发票
    $(".address_list .btn_red").click(function () {
        $(".ticket_info").stop(true, true).animate({ "left": '0%' }, 500);
        var value = $(this).attr("value");
        $(".ticket_info .btn_sure").attr("value", value);
        $.ajax({
            url: "/Member/_Modify",
            type: 'Get',
            dataType: 'json',
            data: { id: value, UrlQuery: "", typeName: "Member" },
            success: function (data) {
                //获取值
                var type = data.invoiceList[0].type;
                var invoice_head = data.invoiceList[0].invoice_head;
                var invoice_id = data.invoiceList[0].invoice_id;
                var tax_code = data.invoiceList[0].tax_code;
                var bank_name = data.invoiceList[0].bank_name;
                var bank_acc = data.invoiceList[0].bank_acc;
                var mobile = data.invoiceList[0].mobile;
                var address = data.invoiceList[0].address;
                $(".ticket_info .ticket_con .tabs a").removeClass("cur").removeClass("disabled");
                $(".ticket_info .ticket_con .tabs_con .con").removeClass("cur");
                //判断是普通发票还是专业发票
                if (type == "1") {
                    $(".ticket_info .ticket_con .tabs a").eq(0).addClass("cur");
                    $(".ticket_info .ticket_con .tabs a").eq(1).addClass("disabled");
                    $(".ticket_info .ticket_con .tabs_con .con").eq(0).addClass("cur");
                    if (tax_code != "" && tax_code != null) {
                        $("#select_one").val(tax_code);
                        $('.click_add').find('.readonly').html("公司");
                        $('.flag').show();
                    }
                    $("#h5pt_invoice_head").val(invoice_head);

                } else {
                    $(".ticket_info .ticket_con .tabs a").eq(1).addClass("cur");
                    $(".ticket_info .ticket_con .tabs a").eq(0).addClass("disabled");
                    $(".ticket_info .ticket_con .tabs_con .con").eq(1).addClass("cur");
                    //$("#pt_invoice").removeAttr("href");
                    //给页面赋值
                    $("#h5invoice_head").val(invoice_head);
                    $("#h5mobile").val(mobile);
                    $("#h5tax_code").val(tax_code);
                    $("#h5bank_name").val(bank_name);
                    $("#h5credit_code").val(tax_code);
                    $("#h5bank_acc").val(bank_acc);
                    $("#h5address").val(address);
                }


            },
            error: function (XmlHttpRequest, textStatus, errorThrown) {
                alert(errorThrown);
                return false;
            }
        });
    })

    //我的钱包->支付密码修改
    $('.my_wallet .h5_header_exp').click(function () {
        $(".wallet_pwd_modify").stop(true, true).animate({ "left": '0%' }, 500);
        reImgH5(1);
    });


    //h5我的积分

    $("#click_jifen").click(function () {
        $(".score_hkl,.score_hkl_main").show();
        console.log(1111)
    })
    $(".score_hkl p").click(function () {
        $(".score_hkl,.score_hkl_main").hide();
        console.log(1111)
    })






    //支付密码修改->我的钱包
    $(".wallet_pwd_modify .h5_header .h5_header_back").click(function () {
        $(".wallet_pwd_modify").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //支付密码修改->确定
    $(".wallet_pwd_modify .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".wallet_pwd_modify").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                if ($(".wallet_pwd_modify input[name='newPwdH5']").val() != $(".wallet_pwd_modify input[name='RenewPwdH5']").val()) {
                    flag = 0;
                    text = "两次密码输入不一致";
                    reImgH5(1)
                    return false;
                } else {
                    flag = 1;
                }
            }
        });
        if (flag == 1) {

            $.post('/Account/ModifyPwd', { "newPwd": $(".wallet_pwd_modify input[name='newPwdH5']").val(), "oldPwd": $(".wallet_pwd_modify input[name='inputPwdH5']").val(), "vCode": $(".wallet_pwd_modify input[name='vCodeH5']").val() }, function (data) {
                if (data.status == "0") {
                    //清空页面数据
                    $(".wallet_pwd_modify .btn_sure").parents(".wallet_pwd_modify").find('input').each(function () {

                        $(this).val("");
                    })
                    alert("修改成功!");
                    $(".wallet_pwd_modify").stop(true, true).animate({ "left": "200%" }, 1000);
                } else {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text(data.msg);
                    reImgH5(1)

                }

            });

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //支付密码修改->忘记支付密码
    $('.wallet_pwd_modify .btn_modify').click(function () {
        $(".wallet_pwd_forget").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //忘记支付密码->支付密码修改
    $('.wallet_pwd_forget .btn_modify').click(function () {
        $(".wallet_pwd_forget").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //忘记支付密码->我的钱包
    $('.wallet_pwd_forget .h5_header .h5_header_back ').click(function () {
        $(".wallet_pwd_forget").stop(true, true).animate({ "left": "200%" }, 500);
        $(".wallet_pwd_modify").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //忘记支付密码-> 确定操作
    $(".wallet_pwd_forget .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        if ($(this).parents(".wallet_pwd_forget").find('input') == "") {
            text = "证件号码不能为空";
            flag = 0;
        } else {
            flag = 1;
        }

        if (flag == 1) {

            $.post('/Account/FindAccountPwd', { "cardNo": $(".wallet_pwd_forget input[name='cardIdH5']").val() }, function (data) {
                if (data.status == "0") {
                    $(".wallet_pwd_forget").stop(true, true).animate({ "left": "200%" }, 500);
                    $(".wallet_pwd_modify").stop(true, true).animate({ "left": "200%" }, 500);
                }
                else {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text(data.msg);
                }
            })

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);

        }
    })


    //支付密码初始化->我的钱包
    $(".wallet_pwd_init .h5_header .h5_header_back").click(function () {
        $(".wallet_pwd_init").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //支付密码初始化：确定
    $(".wallet_pwd_init .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".wallet_pwd_init").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                if ($(".wallet_pwd_init input[name='inputPwdH5']").val() != $(".wallet_pwd_init input[name='newPwdH5']").val()) {
                    flag = 0;
                    text = "两次密码输入不一致";
                    return false;
                } else {
                    flag = 1;
                }
            }
        });
        if (flag == 1) {

            $.post('/Account/InitPwd', { "newPwd": $(".wallet_pwd_init input[name='newPwdH5']").val(), "vCode": $(".wallet_pwd_init input[name='vCodeH5']").val() }, function (data) {
                if (data.status == "0") {

                    $("#my_delete_tip").html("密码初始化成功!");
                    $(".wallet_pwd_init").stop(true, true).animate({ "left": "200%" }, 500);

                }
                else {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text(data.msg);
                    reImgH5(2)
                }
            })

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
            reImgH5(2)
        }
    });
    //我的酒店优惠券->我的酒店优惠券详情
    $('.my_vo .vo_con').on('click', ' .con a', function () {
        var type_id = $(this).attr("value");
        //alert($(this).find(".name").find("text").text());
        //alert($(this).attr("value"));
        $.ajax({
            type: "Get",
            url: '/member/DigitalCoupon_detail',
            data: { "id": type_id, "IsH5": true },
            datatype: "json",
            cache: false,
            success: function (data) {
                if (data.status == "0") {
                    $(".coupondetailtitle").html(data.data.ticket_name);
                    var strArry = data.data.memo.split("\r\n");
                    if (strArry.length > 0) {
                        $(".sysm").html("");
                        var html = "";
                        for (var i = 0; i < strArry.length; i++) {
                            html += "<p>" + strArry[i] + "</p>";
                        }
                        $(".sysm").html(html);
                    }
                    $(".my_vo_detail").stop(true, true).animate({ "left": "0%" }, 500);
                }
            }
        })

    });
    //我的酒店优惠券详情->我的酒店优惠券
    $('.my_vo_detail .h5_header .h5_header_back').click(function () {
        $(".my_vo_detail").stop(true, true).animate({ "left": "200%" }, 500);
    });

    //收藏酒店->删除
    $(".FavoritesList").delegate(".btn_del", "click", function () {
        $(".favoriteshotelcd").val($(this).siblings(".hotelcd").val());
        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });

    //收藏酒店->删除:确定
    $(".favoritessure").click(function () {
        $.get("/Ajax/CollectHotel_Cancel", { hotelCd: $(".favoriteshotelcd").val(), ts: Math.random() },
            function (result) {
                if (result != null && result.Code == "200") {
                    window.location.reload();
                }
            });
    })


    //常用入住人->删除入住人
    $(".h5_main").delegate(".person_usually .item .btn_gray", "click", function () {
        $("#savetypeH5").val("delete");
        $(".sclinkname").val($(this).siblings(".linkname").val());
        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });


    //常用入住人->删除入住人：确定
    $(".h5_main").delegate(".person_usually .pop_unbind .sure", "click", function () {
        SaveFavoritesH5("delete");
    });

    //常用入住人->编辑入住人
    $(".h5_main").delegate(".person_usually .item .btn_red", "click", function () {
        $(".person_edit .address_edit_list .bjlinkname").val($(this).siblings(".linkname").val());
        $(".person_edit .address_edit_list .bjtel").val($(this).siblings(".PhoneNo").val());
        $("#savetypeH5").val("edit");
        $(".person_edit").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //编辑入住人->常用入住人
    $(".person_edit .h5_header .h5_header_back").click(function () {
        $(".person_edit").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //编辑入住人：确定
    $(".person_edit .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".person_edit").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            if (!(telReg.test($(this).parents(".person_edit").find('.bjtel').val()))) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("手机号码格式错误");
                return false;
            }

            SaveFavoritesH5("edit");


        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //常用入住人->新增入住人
    $(".person_usually .item .add").click(function () {

        $("#savetypeH5").val("add");
        $(".person_add").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //新增入住人->常用入住人
    $(".person_add .h5_header .h5_header_back").click(function () {

        $(".person_add").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //新增入住人：确定
    $(".person_add .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".person_add").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            if (!(telReg.test($(this).parents(".person_add").find('.xztel').val()))) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("手机号码格式错误");
                return false;
            }
            SaveFavoritesH5("add");

        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });

    //删除常用地址
    $(".commonaddress_list .btn_del").click(function () {
        $("input[name='deleteIdH5']").val($(this).parent().attr("h5addrid"));
        $(this).parents('.item').addClass('cur');
        $(this).PopupDialog({
            popupClass: ".pop_unbind",
            maskLayer: true
        });
    });

    //常用地址->删除地址 :确定
    $(".deleteaddress").click(function () {
        $.ajax({
            type: "GET",
            url: "/Member/deleteaddress",
            data: { addressId: $("input[name='deleteIdH5']").val(), ts: Math.random() },
            dataType: "json",
            success: function (result) {
                if (result != null && result.Code == "200") {
                    window.location.href = "/member/CommonAddress";
                }
            }
        });
    })

    //常用地址：设置为默认
    $(".address_usually .item").on('click', ".set_default", function () {
        $("input[name='deleteIdH5']").val($(this).parent().siblings().attr("h5addrid"));
        var _this = $(this);
        $(this).PopupDialog({
            popupClass: '.pop_set_address',
            maskLayer: true
        });
        _this.parents('.item').addClass('cur');
    });
    //设置默认地址
    $(".btn_defaulth5").click(function () {
        $.ajax({
            type: "GET",
            url: "/Member/setdefault",
            data: { addressId: $("input[name='deleteIdH5']").val(), ts: Math.random() },
            dataType: "json",
            success: function (result) {
                if (result != null && result.Code == "200") {
                    window.location.href = "/member/CommonAddress";
                }
            }
        });
    })

    //常用地址->编辑地址
    $(".address_usually .item .btn_red").click(function () {
        var id = $(this).parent().attr("h5addrid");
        $.ajax({
            type: "GET",
            url: "/Member/addressdetail",
            data: { id: id },
            dataType: "json",
            success: function (result) {
                if (result != null && result.Code == "0") {

                    $(".address_edit_list .receivername").val(result.Data.receivername);
                    $(".address_edit_list .tel").val(result.Data.receiverphone);
                    $(".address_edit_list .addressshow").html(result.Data.ProName + result.Data.CityName + result.Data.DisName);
                    $(".address_edit_list .showdetailaddress").val(result.Data.address);
                    $(".address_add #id").val(result.Data.id);
                    $(".address_add .hiddenprovince").val(result.Data.ProName);
                    $(".address_add .hiddencity").val(result.Data.CityName);
                    $(".address_add .hiddendistrict").val(result.Data.DisName);
                    $(".address_add input[name='defaultaddress']").val(result.Data.defaultaddress);


                    $(".address_add").stop(true, true).animate({ "left": "0%" }, 500);
                }
            }
        });



        //$(".address_edit").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //编辑地址->常用地址
    $(".address_edit .h5_header .h5_header_back").click(function () {
        $(".address_edit").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //编辑地址：确定
    $(".address_edit .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".address_edit").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            if (!(telReg.test($(this).parents(".address_edit").find('.tel').val()))) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("手机号码格式错误");
                return false;
            }
            $("#frmH5").submit();
            $(".address_edit").stop(true, true).animate({ "left": "200%" }, 500);
        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //常用地址->新增地址
    $(".address_usually .item .add").click(function () {
        $(".address_add").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //新增地址->常用地址
    $(".address_add .h5_header .h5_header_back").click(function () {
        $(".address_edit_list .receivername").val("");
        $(".address_edit_list .tel").val("");
        $(".address_edit_list .addressshow").html("请选择所在地区");
        $(".address_edit_list .showdetailaddress").val("");
        $(".address_add #id").val("");
        $(".address_add .hiddenprovince").val("");
        $(".address_add .hiddencity").val("");
        $(".address_add .hiddendistrict").val("");
        $(".address_add").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //新增地址：确定
    $(".address_add .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".address_add").find(".address_edit_list").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else if ($(this).parents(".address_add").find(".addressshow").html() == "请选择所在地区") {
                flag = 0;
                text = "请选择地区";
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            if (!(telReg.test($(this).parents(".address_add").find('.tel').val()))) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("手机号码格式错误");
                return false;
            }
            $("#frmH5").submit();
            $(".address_add").stop(true, true).animate({ "left": "200%" }, 500);
        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //新增常用地址->选择省市
    $(".address_add .btn_city").click(function () {
        $(".address_add").addClass("cur");
        $(".address_edit").removeClass("cur");
        $(".province_choose").stop(true, true).animate({ "left": "0%" }, 500);
        $("body").addClass('bg_white');
    });
    //编辑常用地址->选择省市
    $(".address_edit .btn_city").click(function () {
        $(".address_add").removeClass("cur");
        $(".address_edit").addClass("cur");
        $(".province_choose").stop(true, true).animate({ "left": "0%" }, 500);
        $("body").addClass('bg_white');
    });
    //发票信息:邮寄地址->选择城市
    $(".ticket_con .item a.ticket_address_choose ").click(function () {
        $(".province_choose").stop(true, true).animate({ "left": "0%" }, 500);
        $("body").addClass('bg_white');
    });
    //选择省市->新增常用地址||编辑常用地址
    $(".province_choose .h5_header .h5_header_back").click(function () {
        $(".province_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $("body").removeClass('bg_white');
    });
    var province = "";
    var city = "";
    var district = "";
    //选择省市->选择城市
    $(".province_choose .city_list a").click(function () {
        var _this = $(this);
        $(".city_choose").stop(true, true).animate({ "left": "0%" }, 500);
        province = _this.find("span").text();
        _this.addClass('cur').siblings().removeClass('cur');
    });
    //选择城市->选择省市
    $(".city_choose .h5_header .h5_header_back").click(function () {
        $(".city_choose").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //选择城市:取消
    $(".address_choose_total .h5_header_right").click(function () {
        $(".province_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $(".city_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $(".district_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $("body").removeClass('bg_white');
    });
    //选择城市->选择地区
    $(".city_choose .city_list a").click(function () {
        var _this = $(this);
        $(".district_choose").stop(true, true).animate({ "left": "0%" }, 500);
        city = _this.find("span").text();
        _this.addClass('cur').siblings().removeClass('cur');
    });
    //选择地区->选择城市
    $(".district_choose .h5_header .h5_header_back").click(function () {
        $(".district_choose").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //选择地区->新增常用地址||编辑常用地址
    $(".district_choose .city_list a").click(function () {
        var _this = $(this);
        $(".district_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $(".province_choose").stop(true, true).animate({ "left": "200%" }, 500);
        $(".city_choose").stop(true, true).animate({ "left": "200%" }, 500);
        district = _this.find("span").text();
        _this.addClass('cur').siblings().removeClass('cur');
        if ($(".address_add").hasClass('cur')) {
            $(".address_add .btn_city").find("input").val(province + " " + city + " " + district);
        }
        if ($(".address_edit").hasClass('cur')) {
            $(".address_edit .btn_city").find("input").val(province + " " + city + " " + district);
        }
        $("body").removeClass('bg_white');

    });
    //我的银联卡->新增银联卡步骤1
    $(".my_bank a.add").click(function () {
        $(".bind_bank_step1").stop(true, true).animate({ "left": "0%" }, 500);
    });
    //新增银联卡步骤1->我的银联卡
    $(".bind_bank_step1 .h5_header_back").click(function () {
        $(".bind_bank_step1").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //新增银联卡步骤1->新增银联卡步骤2 下一步（验证银联卡）
    $(".bind_bank_step1 .btn_sure").click(function () {

        if ($(this).parents(".bind_bank_step1").find('input').val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请输入卡号");
        }
        else {
            VerifyUnionCard($(".unioncardno").val());

        }
    });
    //新增银联卡-点击获取手机验证码
    $(".bind_bank_step2 .btn_get_code").click(function () {
        var _this = $(this);
        if ($(".bind_bank_step2 .tel").val() == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请输入手机号");
        } else {
            VerifyUnionSmsMsg($(".bind_bank_step2 .tel").val());
            if (!_this.hasClass('countdown')) {
                _this.addClass('countdown').html('60秒后重发');
                var seconds = 60;
                var interval = setInterval(function () {
                    seconds--;
                    if (seconds == 0) {
                        clearInterval(interval);
                        _this.removeClass('countdown').html('获取动态密码');
                    }
                    else {
                        _this.html(seconds + "秒后重发");

                    }
                }, 1000);
            }
        }
    });

    //新增银联卡步骤2->新增银联卡步骤1
    $(".bind_bank_step2 .h5_header_back").click(function () {
        $(".bind_bank_step2").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //新增银联卡步骤2:确定
    $(".bind_bank_step2 .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        if ($(".CardTpH5").val().indexOf("贷记卡") > 0) {
            $(this).parents(".bind_bank_step2").find('input').each(function () {
                var _this = $(this);
                if (_this.val().replace(reg, "") == "") {
                    flag = 0;
                    text = _this.attr('placeholder');
                    return false;
                }
                else {
                    flag = 1;
                }
            });
        } else {
            flag = 1;
        }
        if (flag == 1) {
            if (!(telReg.test($(this).parents(".bind_bank_step2").find('.tel').val()))) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("手机号码格式错误");
                return false;
            }

            //新增银联卡操作
            var AccNo = $("input[name='H5AccNo']").val();
            var CVN = null;
            var Date = null;
            var Month = null;
            var Year = null;
            if ($(".CardTpH5").val() == "贷记卡") {
                CVN = $("input[name='H5CVN']").val();
                Date = $("input[name='H5Date']").val().split("/");
                Month = Date[0];
                Year = Date[1];
            }
            var PhoneNo = $("input[name='H5PhoneNo']").val();
            var VerifyNum = $("input[name='H5VerifyNum']").val();
            $.ajax({
                type: "POST",
                url: '/Member/UnionBindCardNext',
                data: { "AccNo": AccNo, "CVN": CVN, "Month": Month, "Year": Year, "PhoneNo": PhoneNo, "VerifyNum": VerifyNum },
                datatype: "json",
                success: function (data) {
                    if (data.IsError) {
                        $(this).PopupDialog({
                            popupClass: ".error_pop",
                            maskLayer: true
                        });
                        $(".error_pop p").text(data.Msg);
                        return false;

                    } else {
                        //成功弹框
                        $(".bind_bank_step2").stop(true, true).animate({ "left": "200%" }, 500);
                        $(".bind_bank_step1").stop(true, true).animate({ "left": "200%" }, 500);
                    }
                }
            });



        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    });
    //我的积分->明细查询
    $('.h5_myIntegral2 .h5_header_exp').click(function () {
        $(".info_query").stop(true, true).animate({ "left": "0%" }, 500);

    });
    //明细查询->我的积分
    $(".info_query .h5_header_back").click(function () {
        $(".info_query").stop(true, true).animate({ "left": "200%" }, 500);

    });

    ///明细查询 -> 条件查询按钮
    $(".info_query .btn_sure").click(function () {

        var beginTime = new Date($(".h5start_date").attr("data-time")).format("yyyyMMdd");
        var endTime = new Date($(".h5end_date").attr("data-time")).format("yyyyMMdd");
        var type = "";
        var typename = $(".query_kind").find("span").html();
        $(".tabs_style a").removeClass('cur');
        $(".scoreshowlist div").removeClass('cur');
        if (typename == "收入明细") {
            type = "add";
            $(".tabs_style a").eq(0).addClass('cur');
            $(".scoreshowlist div").eq(0).addClass('cur');
        } else if (typename == "支出明细") {
            type = "deduct";
            $(".tabs_style a").eq(1).addClass('cur');
            $(".scoreshowlist div").eq(1).addClass('cur');
        } else {
            type = "gq";
            $(".tabs_style a").eq(2).addClass('cur');
            $(".scoreshowlist div").eq(2).addClass('cur');
        }
        ScoreList(1, type, beginTime, endTime);
        $(".info_query").stop(true, true).animate({ "left": "200%" }, 500);

    })

    //我要充值->发票信息
    $(".charge_money .ticket_detail .btn_modify").click(function () {
        var petcardmoney = $("#h5petcardmoney").val();//用户当前余额
        ////修改快递发票信息。如果当前用户余额小于10（快递费），隐藏快递选择栏
        if (parseInt(petcardmoney) < 10) {
            //if ($(".h5kuaidi ").prop('className') == 'kuaidi') {
            $(".h5kuaidi").addClass("disabled")
            // }
        } else {
            $(".h5kuaidi").removeClass("disabled")
        }
        $('.charge_ticket_info ').stop(true, true).animate({ "left": "0%" }, 500);
    });
    //发票信息->我要充值
    $('.charge_ticket_info  .h5_header_back').click(function () {
        $('.charge_ticket_info ').stop(true, true).animate({ "left": "200%" }, 500);

    });
    //我要充值->充值条款
    $(".like_check a").click(function () {
        $('.charge_remind').stop(true, true).animate({ "left": "0%" }, 500);

    });
    //充值条款->我要充值
    $(".charge_remind .h5_header_back").click(function () {
        $('.charge_remind').stop(true, true).animate({ "left": "200%" }, 500);
    });
    //发票信息:确定
    $('.charge_ticket_info  .btn_petcardsure').click(function () {

        if ($("#h5input_invoiceTitle").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("发票抬头不能为空");
            return false;
        }
        if ($("#h5input_recipients").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("收件人不能为空");
            return false;
        }
        if ($("#h5input_invoiceTitle").val().length > 5) {
            if ($("#h5input_tax_code").val().replace(reg, "") == "" && $("#h5input_tax_code1").val().replace(reg, "") == "") {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("纳税人识别码或统一社会信用代码至少输入一项");
                return false;
            }
        }
        if (!telReg.test($("#h5input_phone").val())) {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请填入格式正确的手机号码");
            return false;
        }
        if ($(".ticket_address_choose .addressshow").text() == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("邮寄地址不能为空");
            return false;
        }
        if ($("#h5input_address").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("详细地址不能为空");
            return false;
        }
        if (!emailReg.test($("#h5input_postcode").val())) {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请填入格式正确的邮政编码");
            return false;
        }

        //我要充值，修改发票信息
        H5ModifyInvoice();
    });


    //发票信息:确定
    $('.charge_ticket_info  .btn_petcardpaysure').click(function () {

        if ($("#h5input_invoiceTitle").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("发票抬头不能为空");
            return false;
        }
        if ($("#h5input_recipients").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("收件人不能为空");
            return false;
        }

        if (!telReg.test($("#h5input_phone").val())) {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请填入格式正确的手机号码");
            return false;
        }
        if ($(".ticket_address_choose .addressshow").text() == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("邮寄地址不能为空");
            return false;
        }
        if ($("#h5input_address").val().replace(reg, "") == "") {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("详细地址不能为空");
            return false;
        }
        if (!emailReg.test($("#h5input_postcode").val())) {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请填入格式正确的邮政编码");
            return false;
        }

        //我要充值，修改发票信息
        H5ModifyInvoice_XG();
    });
    //如旅钱包->补开发票
    $(".home_wallet_con .con").on('click', '.open', function () {

        $('.logseq').val($(this).attr("logseq"));
        $('.charge_ticket_info ').stop(true, true).animate({ "left": "0%" }, 500);
    });

    //点击图片获取验证码
    $(".codeImgH52").click(function () {
        reImgH5(2);
    })
    $(".codeImgH51").click(function () {
        reImgH5(1);
    });
    //我要点评：选中
    $(".comment_check a").click(function () {
        if ($(this).html() == "会" || $(this).html() == "不会") {
            $("#bolGuestIdentificationh5").val($(this).attr("data-text"));
        } else {
            $("#intTravelTargeth5").val($(this).attr("data-text"));
        }
        $(this).addClass('cur').siblings().removeClass('cur');
    });
    //我要点评：酒店星级
    $(".want_comment_con .star code").click(function () {
        var _this = $(this),
            em = _this.parent().next(),
            input = _this.parent().siblings("input"),
            index = _this.index();
        _this.removeClass('cur').siblings().removeClass('cur');
        switch (index) {
            case 0:
                em.text('非常不满意');
                input.val("1");
                break;
            case 1:
                em.text('不满意');
                input.val("2");
                break;
            case 2:
                em.text('一般');
                input.val("3");
                break;
            case 3:
                em.text('满意');
                input.val("4");
                break;
            case 4:
                em.text('非常满意');
                input.val("5");
                break;
        }
        _this.parent().find('code').each(function () {
            var $this = $(this),
                $index = $this.index();
            if ($index <= index) {
                $this.addClass('cur');
            }
        });

    });

    //我的点评->我要点评
    $(".my_evaluate").delegate(".address_list .item .info", "click", function () {
        var hotelcd = $(this).attr("hotelcd");
        var orderNo = $(this).attr("orderNo");
        var BookingNo = $(this).attr("bookingno");
        var ArrDate = $(this).attr("arrd");
        var DepDate = $(this).attr("depd");


        $.ajax({
            type: "POST",
            url: '/member/_CommentCreate',
            data: { "hotelCd": hotelcd, "orderNo": orderNo, "BookingNo": BookingNo, "ArrDate": ArrDate, "DepDate": DepDate, "IsH5": true },
            datatype: "json",
            cache: false,

            success: function (data) {
                if (data.status == "0") {
                    $(".hotel_info").attr("href", "/hotel/" + data.data.hHotel.s_HotelCd)
                    $(".want_comment_con .hotel_name").html(data.data.hHotel.s_HotelNm);
                    $(".want_comment_con .address").html(data.data.hHotel.s_Address);
                    $(".want_comment_con .goods .num_style").html(data.data.CommentRateForGood + "%");
                    $(".want_comment_con .grade .num_style").html(data.data.CommentNum);
                    $(".want_comment_con .kind").find("span").eq(0).find(".num_style").html(data.data.hHotel.ShowerGradeAvg);
                    $(".want_comment_con .kind").find("span").eq(1).find(".num_style").html(data.data.hHotel.CleanGradeAvg);
                    $(".want_comment_con .kind").find("span").eq(2).find(".num_style").html(data.data.hHotel.SleepGradeAvg);
                    $(".want_comment_con .kind").find("span").eq(3).find(".num_style").html(data.data.hHotel.ServiceGradeAvg);
                    //页面隐藏域赋值
                    $("#strHotelCdH5").val(data.data.hHotel.s_HotelCd);
                    $("#intOrderNoH5").val(orderNo == "null" ? "0" : orderNo);
                    $("#strCommentIDH5").val(data.data.hHotel.s_HotelCd + BookingNo);
                    $("#datArrDH5").val(ArrDate);
                    $("#datDepDH5").val(DepDate);
                    $("#HotelNameH5").val(data.data.hHotel.s_HotelNm);

                    $(".want_comment").stop(true, true).animate({ "left": "0%" }, 500);
                }
            }
        });


    });
    //我要点评:头部返回按钮
    $(".want_comment .h5_header_back").click(function () {
        $(".want_comment").stop(true, true).animate({ "left": "200%" }, 500);
    });
    //我要点评:确定
    $(".want_comment .btn_sure").click(function () {

        if ($(".strContentH5").val() == "" || $(".strContentH5").val() == "请填写您对该店的建议与意见，谢谢！") {

            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text("请填写您对该店的建议与意见，谢谢！");
        } else {
            //基本点评验证
            //基本点评验证
            $.ajax({
                cache: true,
                type: "POST",
                url: "/member/CommentCreate_BaseSave",
                data: $('#CommentFormH5').serialize(),
                async: false,
                success: function (result) {
                    if (result.status == "110") {
                        $(this).PopupDialog({
                            popupClass: ".error_pop",
                            maskLayer: true
                        });
                        $(".error_pop p").text(result.msg);
                    } else {
                        $(".want_comment").stop(true, true).animate({ "left": "200%" }, 500);
                    }
                }
            });

        }
    });
    //确定取消订单
    $(".cancelorderh5").click(function () {
        $("#h5_mask").show();

        var orderno = $(".hidcancelordernoh5").val();
        var Phone = $(".hidcancelphoneh5").val();
        var Name = $(".hidcancelnameh5").val();

        CancelOrderH5(orderno, Phone, Name);
    });
    //散客订单查询：确定
    $(".visit_query .btn_sure").click(function () {
        var flag = 0;
        var text = "";
        $(this).parents(".visit_query").find('input').each(function () {
            var _this = $(this);
            if (_this.val().replace(reg, "") == "") {
                flag = 0;
                text = _this.attr('placeholder');
                return false;
            }
            else {
                flag = 1;
            }
        });
        if (flag == 1) {
            var nameTxt = $(".visit_query .item").eq(0).find('input').val(),
                orderTxt = $(".visit_query .item").eq(1).find('input').val();
            var re_tel = /^1[3578]\d{9}$/;
            // var re_name = /(^[A-Za-z_]+$)|(^[\u4E00-\u9FA5]$)/;
            var re_name = /\D+/;
            if (re_tel.test(nameTxt) || re_name.test(nameTxt)) {
            }
            else {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("用户名/手机号格式错误");
                return false;
            }
            if (!/^[0-9][0-9]{8}$/.test(orderTxt)) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("订单号码需为9位数字");
                return false;
            }
            else {
                $("#H5FitOrderSelectfrm").submit();
            }
        }
        else {
            $(this).PopupDialog({
                popupClass: ".error_pop",
                maskLayer: true
            });
            $(".error_pop p").text(text);
        }
    })
});

///加载订单信息
var orderIfLast1 = orderIfLast2 = 0;
var orderPageIndex1 = orderPageIndex2 = 2;
//第一次加载h5第一页的订单信息
function orderList(orderlist, type) {
    $("#h5_mask").show();
    loading_hide();
    if (orderlist.length < 8) {
        if (type == 1) {
            orderIfLast1 = 1;
        }
        else {
            orderIfLast2 = 1;
        }
    }
    if (orderlist.length == 0) {
        if (type == 1) {
            $("#tblistH5").append(" <div class='no_content'> <img src='http://images.homeinns.com/image/web/xiaoru_sad_new.png'> <p>您目前还没有订单</p> </div>");
        } else {
            $("#historyorderlistH5").append(" <div class='no_content'> <img src='http://images.homeinns.com/image/web/xiaoru_sad_new.png'> <p>您目前还没有订单</p> </div>");
            $("#h5_mask").hide();
        }

    }
    else {

        var html = "";
        for (var i = 0; i < orderlist.length; i++) {
            var totalprice = 0;
            if (orderlist[i].OutOrders != null && orderlist[i].OutOrders != "") {
                if (orderlist[i].OutOrders[0].OutOrderAmount != "0") {

                    totalprice += parseFloat(orderlist[i].OutOrders[0].OutOrderAmount);
                }

            }
            if (type == 1) {
                html += ' <div class="item box_style"> <div class="info"> <a href="/Member/Detail/' + orderlist[i].OrderNo + "?MemberNo=" + orderlist[i].MemberNo + '" class="order_success"> 预订成功<code class="iconfont"></code> </a>';
            } else {
                html += ' <div class="item box_style"> <div class="info"> <div class="order_his">' + orderlist[i].OrderStatus + '</div>';
            }
            html += ' <div class="text"><p>订单编号：<em class="num_style">' + orderlist[i].OrderNo + '</em></p><p>预订时间：<em class="num_style">' + new Date(orderlist[i].CRSResvDate).format("yyyy/MM/dd hh:mm:ss") + '</em></p></div></div>';
            if (type == 1) {
                if (orderlist[i].PayCd == "11") {
                    html += ' <div class="info"><div class="order_status"><p class="status">已担保</p>';
                } else {
                    html += ' <div class="info"><div class="order_status"><p class="status">' + orderlist[i].paystatus + '</p>';
                }
            }
            else {
                html += ' <div class="info no_border"><div class="order_status">';//<p class="status">' + orderlist[i].paystatus + '</p>
            }
            if (parseInt(orderlist[i].MemberScore) > 0) {
                html += '<p class="price"><em class="num_style">' + orderlist[i].MemberScore + '</em> 积分</p> </div>';
            }
            else {
                totalprice += parseFloat(orderlist[i].totalrate.toFixed(0));
                html += '<p class="price">&yen;<em class="num_style">' + totalprice + '</em></p> </div>';
            }
            html += '<div class="text"> <div class="hotel_name"><a href="/hotel/' + orderlist[i].HotelCd + '">' + orderlist[i].HotelNm + '</a></div><div class="lowest_price">' + orderlist[i].CRSRmType;
            html += '</div><div class="lowest_price"><em class="num_style">' + new Date(orderlist[i].ArrDate).format("MM/dd") + "-" + new Date(orderlist[i].DepDate).format("MM/dd");
            if (new Date(orderlist[i].ArrDate).format("yyyy-MM-dd") == new Date(orderlist[i].DepDate).format("yyyy-MM-dd")) {
                //入住日期离店日期相同则为时租房
                html += '</em>&nbsp;&nbsp;<em class="num_style"></em>  <em class="num_style">4</em>小时</div></div></div>';
            } else {
                html += '</em>&nbsp;&nbsp;<em class="num_style">' + DateDiffH5((new Date(orderlist[i].ArrDate).format("yyyy-MM-dd")), (new Date(orderlist[i].DepDate).format("yyyy-MM-dd"))) + '</em>天  <em class="num_style">' + orderlist[i].RmNum + '</em>间</div></div></div>'
                var toDate = new Date().format("yyyy-MM-dd") //当天日期
                var hour = new Date().getHours() //当天小时
                var ArrDate = new Date(orderlist[i].ArrDate).format("yyyy-MM-dd")//入住日期
                if (type==1 && toDate == ArrDate && hour>=10 ) { //当天未入住日期并且超过10点后可选房
                    html += 
                        '<div class="selfChooseRoom clearfix">' +
                        '<div class="text fl">自助选房</div>' +
                        '<div class="fr rightPart">'
                    if (orderlist[i].RoomNos != null && orderlist[i].RoomNos != "") {
                        var rooms = orderlist[i].RoomNos.split(',');
                        html += "<div class='fl' onclick=window.location.href='/member/SelfChooseRoom?Order=" + orderlist[i].OrderNo +"'>已选房号"
                        for (var j = 0; j < rooms.length; j++) {
                            if (j == rooms.length-1) {
                                html += rooms[j] + '</div>'
                            }
                            else {
                                html += rooms[j] + ','
                            }
                        }
                    }
                    else {
                        html += '<div class="fl"><a class="goChoose" href="/member/SelfChooseRoom?Order=' + orderlist[i].OrderNo + '">去选房</a></div>'
                    }
                        html +='<span class="fl iconfont">&#xe635;</span>' +
                        '</div>' +
                        '</div>'
                }
            }
            if (type == 1) {
                if (orderlist[i].paystatus == "未支付") {
                    html += '<div class="act clearfix"><a href="javascript:" onclick=\"CancelOrderH5Show(' + orderlist[i].OrderNo + ')\" class="btn_gray btn_cancel fl" id="' + orderlist[i].OrderNo + '">取消订单</a><a href="/member/pay/' + orderlist[i].OrderNo + '" class="btn_red fr">立即支付</a></div>';
                }
                else if (orderlist[i].OrderStatus == "退款中") {
                    html += "<div class='act clearfix'><dd style='line-height:24px;'>退款中</dd></div>";
                }
                else {
                    html += '<div class="act clearfix"><a href="javascript:" class="btn_gray btn_cancel fl" onclick=\"CancelOrderH5Show(' + orderlist[i].OrderNo + ')\" id="' + orderlist[i].OrderNo + '">取消订单</a></div>';
                }
            }

            html += '</div>';
        }
        if (type == 1) {
            $("#tblistH5").append(html);
            $("#tblistH5 .no_content").hide();
        } else {
            $("#historyorderlistH5").append(html);
            $("#historyorderlistH5 .no_content").hide();
            $("#h5_mask").hide();
        }
    }
}
function orderListLoad(pageIndex, type) {
    var tabsCon = $('.my_order .tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (type == 1) {
            orderPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberOrderListH5',
                data: { pageIndex: pageIndex, pageSize: 8, type: 1, IsH5: true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (orderIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off("scroll");    //防止重复获取数据
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        orderIfLast1 = 1;

                    }

                    else {
                        if (data.data.length < 8) {
                            orderIfLast1 = 1; //检测是否最后一页
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {

                            html += ' <div class="item box_style"> <div class="info"> <a href="/Member/Detail/' + data.data[i].OrderNo + "?MemberNo=" + data.data[i].MemberNo + '" class="order_success"> 预订成功<code class="iconfont"></code> </a>';

                            html += ' <div class="text"><p>订单编号：<em class="num_style">' + data.data[i].OrderNo + '</em></p><p>预订时间：<em class="num_style">' + new Date(data.data[i].CRSResvDate).format("yyyy/MM/dd hh:mm:ss") + '</em></p></div></div>';

                            if (data.data[i].PayCd == "11") {
                                html += ' <div class="info"><div class="order_status"><p class="status">已担保</p>';
                            } else {
                                html += ' <div class="info"><div class="order_status"><p class="status">' + data.data[i].paystatus + '</p>';
                            }


                            if (parseInt(data.data[i].MemberScore) > 0) {
                                html += '<p class="price"><em class="num_style">' + data.data[i].MemberScore + '</em> 积分</p> </div>';
                            }
                            else {
                                html += '<p class="price">&yen;<em class="num_style">' + data.data[i].totalrate.toFixed(2) + '</em></p> </div>';
                            }
                            html += '<div class="text"> <div class="hotel_name"><a href="/hotel/' + data.data[i].HotelCd + '">' + data.data[i].HotelNm + '</a></div><div class="lowest_price">' + data.data[i].CRSRmType;
                            html += '</div><div class="lowest_price"><em class="num_style">' + new Date(data.data[i].ArrDate).format("MM/dd") + "-" + new Date(data.data[i].DepDate).format("MM/dd");

                            html += '</em>&nbsp;&nbsp;<em class="num_style">' + DateDiffH5((new Date(data.data[i].ArrDate).format("yyyy-MM-dd")), (new Date(data.data[i].DepDate).format("yyyy-MM-dd"))) + '</em>天  <em class="num_style">' + data.data[i].RmNum + '</em>间</div></div></div>' +
                                '<div class="selfChooseRoom clearfix">' +
                                '<div class="text fl">自助选房</div>' +
                                '<div class="fr rightPart">' +
                                '<div class="fl"><a href="/member/SelfChooseRoom?Order="' + data.data[i].OrderNo + '>去选房</a></div>' +
                                //'<div class="fl">已选房号</div>' +
                                //'<div class="fl">1002，</div>' +
                                //'<div class="fl">1003，</div>' +
                                //'<div class="fl">1004</div>' +
                                '<span class="fl iconfont">&#xe635;</span>' +
                                '</div>' +
                                '</div>'

                            if (data.data[i].paystatus == "未支付") {
                                html += '<div class="act clearfix"><a href="javascript:" onclick=\"CancelOrderH5Show(' + data.data[i].OrderNo + ',null,null)\" class="btn_gray btn_cancel fl" id="' + data.data[i].OrderNo + '">取消订单</a><a href="/member/pay/' + data.data[i].OrderNo + '" class="btn_red fr">立即支付</a></div>';
                            }
                            else if (data.data[i].OrderStatus == "退款中") {
                                html += "<div class='act clearfix'><dd style='line-height:24px;'>退款中</dd></div>";
                            }
                            else {
                                html += '<div class="act clearfix"><a href="javascript:" class="btn_gray btn_cancel fl" onclick=\"CancelOrderH5Show(' + data.data[i].OrderNo + ',null,null)\" id="' + data.data[i].OrderNo + '" >取消订单</a></div>';
                            }


                            html += '</div>';
                        }

                        $("#tblistH5").append(html);
                        alert(1)
                        $("#tblistH5 .no_content").hide();
                    }
                    $(".yx_goods").show();
                    $(".yx_roomicon").addClass("minon");
                },
                complete: function () {                      //请求完成，再次绑定下拉刷新方法
                    $(".dropload-down").remove();
                    if (orderIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0) {
                                orderListLoad(orderPageIndex1 + 1, 1);
                            }
                            if (index == 1 && orderIfLast2 != 1) {
                                orderListLoad(orderPageIndex2, 0);
                            }
                        });
                    }
                    else {
                        if (!$("#tblistH5").find('div').hasClass("no_content")) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && orderIfLast2 != 1) {
                                orderListLoad(orderPageIndex2, 0);
                            }
                        });
                    }
                }
            });//ajax请求结束

        }
        else {
            orderPageIndex2 = pageIndex;

            $.ajax({
                type: "POST",
                url: '/member/GetMemberOrderListH5',
                data: { pageIndex: pageIndex, pageSize: 8, type: 0, IsH5: true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (orderIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off("scroll");    //防止重复获取数据
                },
                success: function (data) {

                    if (data.data.length == 0) {
                        orderIfLast2 = 1;

                    }
                    else {
                        if (data.data.length < 8) {
                            orderIfLast2 = 1; //检测是否最后一页
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {

                            html += ' <div class="item box_style"> <div class="info"> <div class="order_his">' + data.data[i].OrderStatus + '</div>';

                            html += ' <div class="text"><p>订单编号：<em class="num_style">' + data.data[i].OrderNo + '</em></p><p>预订时间：<em class="num_style">' + new Date(data.data[i].CRSResvDate).format("yyyy/MM/dd hh:mm:ss") + '</em></p></div></div>';

                            html += ' <div class="info no_border"><div class="order_status">';//<p class="status">' + data.data[i].paystatus + '</p>

                            if (parseInt(data.data[i].MemberScore) > 0) {
                                html += '<p class="price"><em class="num_style">' + data.data[i].MemberScore + '</em> 积分</p> </div>';
                            }
                            else {
                                html += '<p class="price">&yen;<em class="num_style">' + data.data[i].totalrate.toFixed(2) + '</em></p> </div>';
                            }
                            html += '<div class="text"> <div class="hotel_name"><a href="/hotel/' + data.data[i].HotelCd + '">' + data.data[i].HotelNm + '</a></div><div class="lowest_price">' + data.data[i].CRSRmType;
                            html += '</div><div class="lowest_price"><em class="num_style">' + new Date(data.data[i].ArrDate).format("MM/dd") + "-" + new Date(data.data[i].DepDate).format("MM/dd");

                            if (new Date(data.data[i].ArrDate).format("yyyy-MM-dd") == new Date(data.data[i].DepDate).format("yyyy-MM-dd")) {
                                //入住日期离店日期相同则为时租房
                                html += '</em>&nbsp;&nbsp;<em class="num_style"></em>  <em class="num_style">4</em>小时</div></div></div>';
                            } else {
                                html += '</em>&nbsp;&nbsp;<em class="num_style">' + DateDiffH5((new Date(data.data[i].ArrDate).format("yyyy-MM-dd")), (new Date(data.data[i].DepDate).format("yyyy-MM-dd"))) + '</em>天  <em class="num_style">' + data.data[i].RmNum + '</em>间</div></div></div>';
                            }


                            html += '</div>';
                        }

                        $("#historyorderlistH5").append(html);
                        $("#historyorderlistH5 .no_content").hide();

                    }
                    $(".yx_goods").show();
                    $(".yx_roomicon").addClass("minon");
                },
                complete: function () {                      //请求完成，再次绑定下拉刷新方法
                    $(".dropload-down").remove();
                    if (orderIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && orderIfLast1 != 1) {
                                orderListLoad(orderPageIndex1, 1);
                            }
                            if (index == 1) {
                                orderListLoad(orderPageIndex2 + 1, 0);
                            }

                        });
                    }
                    else {
                        if (!$("#historyorderlistH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && orderIfLast1 != 1) {
                                orderListLoad(orderPageIndex2, 0);
                            }
                        });
                    }
                }
            });//ajax请求结束

        }
    };//if判断结束
}



//取消订单
function CancelOrderH5Show(orderno, Phone, Name) {
    $(".hidcancelordernoh5").val(orderno);
    $(".hidcancelphoneh5").val(Phone);
    $(".hidcancelnameh5").val(Name);
    $("#tblistH5 .item").removeClass("cur");
    $("#tblistH5 #" + orderno).parents().parents('.item').addClass('cur');
    $(this).PopupDialog({
        popupClass: ".pop_unbind",
        maskLayer: true
    });

}

function CancelOrderH5(orderno, Phone, Name) {

    $.ajax({
        type: "POST",
        url: '/Member/Order_cancel',
        data: { orderNo: orderno, Phone: Phone, Name: Name },
        cache: false,
        beforeSend: function () {
            $(".loading_box").show();
            $(".noData").hide();
        },
        success: function (data) {

            if (data.Code == 0) {
                $("#tblistH5 .cur").remove();

                $(".pop_text p").text("取消订单成功");
                $("#h5_mask").hide();
                $(this).PopupDialog({
                    popupClass: '.pop_text',
                    maskLayer: true
                });
                //alert("取消订单成功!");

            }
            else {
                $("#h5_mask").hide();
                $(".pop_text p").text(data.Message);
                //$(".pop_text").show();
                $(this).PopupDialog({
                    popupClass: '.pop_text',
                    maskLayer: true
                });
                //alert("!");
            }


        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            $(".pop_text p").text("出现错误");
            $("#h5_mask").hide();
            $(this).PopupDialog({
                popupClass: '.pop_text',
                maskLayer: true
            });
        }
    });
}


///修改用户信息
function modifyMyInfo(sex, address, postcode, type) {
    $.post("/member/myinfoupdate", { sex: sex, address: address, postcode: postcode },
        function (result) {
            if (result.status == 0) {
                if (type == 0) {
                    //修改用户地址
                    $(".address_modify").find("span").html(address);
                    $(".info_address_modify").stop(true, true).animate({ "left": '200%' }, 500);
                } else {
                    $('.post_modify').find("span").html(postcode);
                    $(".info_post_modify").stop(true, true).animate({ "left": '200%' }, 500);
                }

            } else {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text(result.msg);
            }
        });

}
var pageIndex1 = pageIndex2 = pageIndex3 = 2;
var ifLast1 = ifLast2 = ifLast3 = 0;//判断是否为最后一页
//加载用户积分信息
function ScoreList(pageIndex, type, startdate, enddate) {

    //type: add:积分收入明细加载, deduct: //积分支出明细加载, gq://即将过期积分加载
    $.ajax({
        type: "POST",
        url: '/member/GetMemberScoreList',
        data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": startdate, "enddate": enddate, "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            //如果是第一页数据，清空内容。
            if (pageIndex == 1) {
                if (type == "add") {
                    $("#ScoreListH5").html("");
                } else if (type == "deduct") {
                    $("#ExpenditureScoreListH5").html("");
                } else {
                    $("#ExpiredScoreListH5").html("");
                }
            }
            if (data.data.length < 10) {
                if (type == 'add') {
                    ifLast1 = 1;
                }
                else if (type == 'deduct') {
                    ifLast2 = 1;
                }
                else {
                    ifLast3 = 1;
                }
            }
            if (data.data.length == 0) {

                //显示当前没有记录
                if (type == "add") {
                    $("#ScoreListH5").html(' <div class="no_content" ><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                } else if (type == "deduct") {
                    $("#ExpenditureScoreListH5").html(' <div class="no_content" ><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                } else {
                    $("#ExpiredScoreListH5").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                    $("#h5_mask").hide();
                }


            } else {
                var html = "";

                for (var i = 0; i < data.data.length; i++) {
                    var name = data.data[i].name;
                    if (parseFloat(data.data[i].points) > 0) {
                        name += "房费" + data.data[i].points + "分";
                    }
                    html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                    if (data.data[i].opr == "add") {
                        var now = data.data[i].date;
                        var newDate = (parseInt(data.data[i].date.substring(0, 4)) + 2) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                        html += '<p>有效期至：' + newDate + '</p> ';
                    } if (data.data[i].opr == "deduct") {
                        var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                        html += '<p>支出日期：' + newDate + '</p> ';
                    }

                    if (type == "add") {
                        html += '</div><div class="account"> ' + data.data[i].points + '积分 </div> </div>';
                    } else if (type == "deduct") {
                        html += '</div><div class="account reduce"> -' + data.data[i].points + '积分 </div> </div>';
                    } else {
                        html += '</div><div class="account"> +' + data.data[i].points + '积分 </div> </div>';
                    }

                }

                if (type == "add") {
                    $("#ScoreListH5").html(html);
                } else if (type == "deduct") {
                    $("#ExpenditureScoreListH5").html(html);
                } else {
                    $("#ExpiredScoreListH5").html(html);
                    $("#h5_mask").hide();
                }

            }

            $(".tabs_con .con").find('.item:first').addClass('no_border');

        }

    });


}

function ScoreListLoad(pageIndex, type, startdate, enddate, num) {

    //type: add:积分收入明细加载, deduct: //积分支出明细加载, gq://即将过期积分加载
    var tabsCon = $('.tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (type == 'add') {
            pageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberScoreList',
                data: { "pageIndex": pageIndex, "pageSize": num, "type": "add", "startdate": startdate, "enddate": enddate, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (ifLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        ifLast1 = 1;
                    }
                    else {
                        if (data.data.length < num) {
                            ifLast1 = 1; //检测是否最后一页
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var name = data.data[i].name;
                            if (parseFloat(data.data[i].points) > 0) {
                                name += "房费<em class='num_style'>" + data.data[i].points + "</em>分";
                            }
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            var now = data.data[i].date;
                            var newDate = (parseInt(data.data[i].date.substring(0, 4)) + 2) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            html += '<p>有效期至：<span class="num_style">' + newDate + '</span></p> ';
                            html += '</div><div class="account"><span class="num_style"> ' + data.data[i].points + '</span>积分 </div> </div>';
                        }
                        $("#ScoreListH5").append(html);
                    }
                },
                complete: function () {                      //请求完成，再次绑定下拉刷新方法
                    $(".dropload-down").remove();
                    if (ifLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0) {
                                ScoreListLoad(pageIndex1 + 1, "add", "", "", 10);
                            }
                            if (index == 1 && ifLast2 != 1) {
                                ScoreListLoad(pageIndex2, "deduct", "", "", 10);
                            }
                            if (index == 2 && ifLast3 != 1) {
                                ScoreListLoad(pageIndex3, "gq", "", "", 10);
                            }
                        });
                    }
                    else {
                        if (!$("#ScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && ifLast2 != 1) {
                                ScoreListLoad(pageIndex2, "deduct", "", "", 10);
                            }
                            if (index == 2 && ifLast3 != 1) {
                                ScoreListLoad(pageIndex3, "gq", "", "", 10);
                            }
                        });
                    }
                }
            });

        }
        else if (type == "deduct") {
            pageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberScoreList',
                data: { "pageIndex": pageIndex, "pageSize": num, "type": "deduct", "startdate": startdate, "enddate": enddate, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (ifLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        ifLast2 = 1; //检测是否最后一页
                    }
                    else {
                        if (data.data.length < num) {
                            ifLast2 = 1; //检测是否最后一页
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var name = data.data[i].name;
                            if (parseFloat(data.data[i].points) > 0) {
                                name += "房费<em class='num_style'>" + data.data[i].points + "</em>分";
                            }
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            html += '<p>支出日期：' + newDate + '</p> ';
                            html += '</div><div class="account reduce"><span class="num_style"> -' + data.data[i].points + '</span>积分 </div> </div>';
                        }
                        $("#ExpenditureScoreListH5").append(html);
                    }
                },
                complete: function () {                      //请求完成，再次绑定下拉刷新方法
                    $(".dropload-down").remove();
                    if (ifLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && ifLast1 != 1) {
                                ScoreListLoad(pageIndex1, "add", "", "", 10);
                            }
                            if (index == 1) {
                                ScoreListLoad(pageIndex2 + 1, "deduct", "", "", 10);
                            }
                            if (index == 2 && ifLast3 != 1) {
                                ScoreListLoad(pageIndex3, "gq", "", "", 10);
                            }
                        });
                    }
                    else {
                        if (!$("#ExpenditureScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && ifLast1 != 1) {
                                ScoreListLoad(pageIndex1, "add", "", "", 10);
                            }
                            if (index == 2 && ifLast3 != 1) {
                                ScoreListLoad(pageIndex3, "gq", "", "", 10);
                            }
                        });
                    }
                }
            });
        }
        else {
            pageIndex3 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberScoreList',
                data: { "pageIndex": pageIndex, "pageSize": num, "type": type, "startdate": startdate, "enddate": enddate, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (ifLast3 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');

                },
                success: function (data) {
                    if (data.data.length == 0) {
                        ifLast3 = 1;
                    }
                    else {
                        if (data.data.length < num) {
                            ifLast3 = 1; //检测是否最后一页
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var name = data.data[i].name;
                            if (parseFloat(data.data[i].points) > 0) {
                                name += "房费<em class='num_style'>" + data.data[i].points + "</em>分";
                            }
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            html += '</div><div class="account"> <span class="num_style">+' + data.data[i].points + '</span>积分 </div> </div>';
                        }
                        $("#ExpiredScoreListH5").append(html);
                    }
                },
                complete: function () {                      //请求完成，再次绑定下拉刷新方法
                    $(".dropload-down").remove();
                    if (ifLast3 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && ifLast1 != 1) {
                                ScoreListLoad(pageIndex1, "add", "", "", 10);
                            }
                            if (index == 1 && ifLast2 != 1) {
                                ScoreListLoad(pageIndex2, "deduct", "", "", 10);
                            }
                            if (index == 2) {
                                ScoreListLoad(pageIndex3 + 1, "gq", "", "", 10);
                            }
                        });
                    }
                    else {
                        if (!$("#ExpiredScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(2).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }

                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && ifLast2 != 1) {
                                ScoreListLoad(pageIndex2, "deduct", "", "", 10);
                            }
                            if (index == 0 && ifLast1 != 1) {
                                ScoreListLoad(pageIndex1, "add", "", "", 10);
                            }
                        });
                    }
                }
            });
        }
    }
}
var cPageIndex1 = cPageIndex2 = cPageIndex3 = 1;
var cIfLast1 = cIfLast2 = cIfLast3 = 0;
//用户碳积分
function CarbonScoreList(pageIndex, type) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: '/member/_GetMemberCarbonScoreList',
        data: { "pageIndex": pageIndex - 1, "pageSize": 8, "type": type, "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {

            //如果是第一页数据，清空内容。
            if (pageIndex == 1) {
                if (type == "ADD") {
                    $("#ScoreListH5").html("");
                } else if (type == "USE") {
                    $("#ExpenditureScoreListH5").html("");
                } else {
                    $("#ExpiredScoreListH5").html("");
                }
            }

            if (data.data.length < 8) {

                if (type == 'ADD') {
                    cIfLast1 = 1;
                }
                else if (type == "USE") {
                    cIfLast2 = 1;
                }
                else {
                    cIfLast3 = 1;
                }
            }
            if (data.data.length == 0) {
                //显示当前没有记录
                if (type == "ADD") {
                    $("#ScoreListH5").append(' <div class="no_content" ><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                } else if (type == "USE") {
                    $("#ExpenditureScoreListH5").append(' <div class="no_content" ><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                } else {
                    $("#ExpiredScoreListH5").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有积分明细</p> </div>');
                }
                $("#h5_mask").hide();
            } else {
                var html = "";

                for (var i = 0; i < data.data.length; i++) {
                    var name = "";
                    if (type == "ADD") {
                        name = "入账";
                    } else {
                        name = "消耗";
                    }
                    if (i == 0) {
                        html += '<div class="item no_border"> <div class="text"><h4>  ' + name + '</h4> ';
                    }
                    else {
                        html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';

                    }
                    if (data.data[i].type == "ADD") {
                        var now = data.data[i].getDate;
                        var newDate = (parseInt(data.data[i].getDate.substring(0, 4)) + 2) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                        html += '<p>有效期至：' + newDate + '</p> ';
                    } if (data.data[i].type == "USE") {
                        var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                        html += '<p>支出日期：' + newDate + '</p> ';
                    }

                    if (type == "ADD") {
                        html += '</div><div class="account"> ' + data.data[i].score + '积分 </div> </div>';
                    } else if (type == "USE") {
                        html += '</div><div class="account reduce"> -' + data.data[i].score + '积分 </div> </div>';
                    } else {
                        html += '</div><div class="account"> +' + data.data[i].score + '积分 </div> </div>';
                    }

                }

                if (type == "ADD") {
                    $("#ScoreListH5").html(html);
                } else if (type == "USE") {
                    $("#ExpenditureScoreListH5").html(html);
                } else {
                    $("#ExpiredScoreListH5").html(html);
                }
                $("#h5_mask").hide();
            }

        }
    });
}
function carbonListLoad(pageIndex, type) {
    var tabsCon = $('.tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (type == 'ADD') {

            cPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/_GetMemberCarbonScoreList',
                data: { "pageIndex": pageIndex, "pageSize": 8, "type": type, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (cIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        cIfLast1 = 1;
                    } else {
                        if (data.data.length < 8) {
                            cIfLast1 = 1;
                        }
                        var html = "";

                        for (var i = 0; i < data.data.length; i++) {
                            var name = "";
                            name = "入账";
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            if (data.data[i].type == "ADD") {
                                var now = data.data[i].getDate;
                                var newDate = (parseInt(data.data[i].getDate.substring(0, 4)) + 2) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                                html += '<p>有效期至：' + newDate + '</p> ';
                            } if (data.data[i].type == "USE") {
                                var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                                html += '<p>支出日期：' + newDate + '</p> ';
                            }
                            html += '</div><div class="account"> ' + data.data[i].score + '积分 </div> </div>';
                        }
                        $("#ScoreListH5").append(html);
                    }

                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (cIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0) {
                                carbonListLoad(cPageIndex1 + 1, "ADD");
                            }
                            if (index == 1 && cIfLast2 != 1) {
                                carbonListLoad(cPageIndex2, "USE");
                            }
                            if (index == 2 && cIfLast3 != 1) {
                                carbonListLoad(cPageIndex3, "GQ");
                            }
                        });
                    }
                    else {
                        if (!$("#ScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && cIfLast2 != 1) {
                                carbonListLoad(cPageIndex2, "USE");
                            }
                            if (index == 2 && cIfLast3 != 1) {
                                carbonListLoad(cPageIndex3, "GQ");
                            }
                        });
                    }
                }
            });
        }
        else if (type == 'USE') {
            cPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/_GetMemberCarbonScoreList',
                data: { "pageIndex": pageIndex, "pageSize": 8, "type": type, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (cIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {

                    if (data.data.length == 0) {
                        cIfLast2 = 1;
                    } else {
                        if (data.data.length < 8) {
                            cIfLast2 = 1;
                        }
                        var html = "";

                        for (var i = 0; i < data.data.length; i++) {
                            var name = "";
                            name = "消耗";
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            if (data.data[i].type == "ADD") {
                                var now = data.data[i].getDate;
                                var newDate = (parseInt(data.data[i].getDate.substring(0, 4)) + 2) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                                html += '<p>有效期至：' + newDate + '</p> ';
                            } if (data.data[i].type == "USE") {
                                var newDate = (parseInt(data.data[i].getDate.substring(0, 4))) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                                html += '<p>支出日期：' + newDate + '</p> ';
                            }
                            html += '</div><div class="account reduce"> -' + data.data[i].score + '积分 </div> </div>';
                        }
                        $("#ExpenditureScoreListH5").append(html);
                    }

                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (cIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && cIfLast1 != 1) {
                                carbonListLoad(pageIndex1, "ADD");
                            }
                            if (index == 1) {
                                carbonListLoad(pageIndex2 + 1, "USE");
                            }
                            if (index == 2 && cIfLast3 != 1) {
                                carbonListLoad(pageIndex3, "GQ");
                            }
                        });
                    }
                    else {
                        if (!$("#ExpenditureScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && cIfLast1 != 1) {
                                carbonListLoad(cPageIndex1, "ADD");
                            }
                            if (index == 2 && cIfLast3 != 1) {
                                carbonListLoad(cPageIndex3, "GQ");
                            }
                        });
                    }
                }
            });
        }
        else {
            cPageIndex3 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/_GetMemberCarbonScoreList',
                data: { "pageIndex": pageIndex, "pageSize": 8, "type": type, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (cIfLast3 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        cIfLast3 = 1;
                    } else {
                        if (data.data.length < 8) {
                            cIfLast3 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var name = "";
                            name = "消耗";
                            html += '<div class="item"> <div class="text"><h4>  ' + name + '</h4> ';
                            if (data.data[i].type == "ADD") {
                                var now = data.data[i].getDate;
                                var newDate = (parseInt(data.data[i].getDate.substring(0, 4)) + 2) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                                html += '<p>有效期至：' + newDate + '</p> ';
                            } if (data.data[i].type == "USE") {
                                var newDate = (parseInt(data.data[i].getDate.substring(0, 4))) + "-" + data.data[i].getDate.substring(4, 6) + "-" + data.data[i].getDate.substring(6, 8);
                                html += '<p>支出日期：' + newDate + '</p> ';
                            }
                            html += '</div><div class="account"> +' + data.data[i].score + '积分 </div> </div>';
                        }
                        $("#ExpiredScoreListH5").append(html);
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (cIfLast3 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && cIfLast1 != 1) {
                                carbonListLoad(pageIndex1, "ADD");
                            }
                            if (index == 1 && cIfLast2 != 1) {
                                carbonListLoad(pageIndex2, "USE");
                            }
                            if (index == 2) {
                                carbonListLoad(pageIndex3 + 1, "GQ");
                            }
                        });
                    }
                    else {
                        if (!$("#ExpiredScoreListH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(2).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && cIfLast1 != 1) {
                                carbonListLoad(cPageIndex1, "ADD");
                            }
                            if (index == 1 && cIfLast2 != 1) {
                                carbonListLoad(cPageIndex2, "USE");
                            }
                        });
                    }
                }
            });
        }
    }

}
//如旅钱包 钱包密码初始化
function IsFirstUseH5() {
    var hid_IsFirstUse = $("#isFirstUseH5").val();
    reImgH5(2);
    if (hid_IsFirstUse != "NO") {
        //页面刚加载出现支付密码初始化
        $(".wallet_pwd_init").stop(true, true).animate({ "left": "0%" }, 500);
        return false;
    }
    return true;
}
//加载验证码
function reImgH5(num) {

    $(".codeImgH5" + num)[0].src = "/ajax/GetValidateCode?time=" + (new Date()).getTime();
}
//用户钱包数据加载
var petIfLast1 = petIfLast2 = 0;
var petPageIndex1 = petPageIndex2 = 2;
function PetCardList(pageIndex, type) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: '/member/GetMemberPetCardList',
        data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "category": "QB", "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            if (data == "") {
                //显示当前没有记录
                if (type == "add") {
                    $(".czPetcardH5").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                } else {
                    $(".zcPetcardH5").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                    $("#h5_mask").hide();
                }

            }
            else {

                //如果是第一页数据，清空内容。
                if (pageIndex == 1) {
                    if (type == "add") {
                        $(".czPetcardH5").html("");
                    } else {
                        $(".zcPetcardH5").html("");
                    }
                }
                if (data.data.length < 10) {
                    if (type == 'deduct') {
                        petIfLast1 = 1;
                    }
                    else {
                        petIfLast2 = 1;
                    }
                }
                if (data.data.length == 0) {
                    //显示当前没有记录
                    if (type == "add") {
                        $(".czPetcardH5").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                    } else {
                        $(".zcPetcardH5").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                        $("#h5_mask").hide();
                    }

                } else {
                    var html = "";
                    for (var i = 0; i < data.data.length; i++) {
                        var classname = "";
                        if (i == 0) {
                            //第一条是添加单独样式
                            classname = "no_border";
                        }
                        var now = data.data[i].date;
                        var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                        var name = "支出日期：";
                        if (type == "add") {
                            name = "充值日期：";
                        }
                        html += '<div class="item ' + classname + '"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                        if (type == "add") {
                            html += ' <div class="account"><span class="green">&yen;<em class="num_style">' + data.data[i].amt + '</em></span>  ';
                            if (data.data[i].invoice_flag == "1") {
                                html += '<a href="javascript:" class="open" logseq=' + data.data[i].term_seq + '>补开发票</a>';
                            }
                            else if (data.data[i].invoice_flag == "2") {
                                html += '已开发票';
                            }
                            else if (data.data[i].invoice_flag == "3") {
                                html += '已过期';
                            }
                            else if (data.data[i].invoice_flag == "4") {
                                html += '退回发票';
                            }
                            else if (data.data[i].invoice_flag == "5") {
                                html += '已寄发票';
                            }
                            else {
                                html += '';
                            }

                            html += '</div></div>';
                        } else {
                            html += '<div class="account"><span class="red">-&yen;<em class="num_style">' + data.data[i].amt + '</em></span></div> </div>';
                        }
                    }
                    if (type == "add") {
                        $(".czPetcardH5").append(html);
                    } else {
                        $(".zcPetcardH5").append(html);
                        $("#h5_mask").hide();
                    }


                }
            }
        }
    });
}

function PetCardListLoad(pageIndex, type) {
    var tabsCon = $('.tabs_val_red1 .tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (type == 'deduct') {
            petPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberPetCardList',
                data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "category": "QB", "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (petIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        petIfLast1 = 1;
                    } else {
                        if (data.data.length < 10) {
                            petIfLast1 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var now = data.data[i].date;
                            var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            var name = "支出日期：";
                            if (type == "add") {
                                name = "充值日期：";
                            }
                            html += '<div class="item"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                            html += '<div class="account"><span class="red">-&yen;<em class="num_style">' + data.data[i].amt + '</em></span></div> </div>';

                        }
                        $(".zcPetcardH5").append(html);
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (petIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tab1 a.cur').index();
                            if (index == 0) {
                                PetCardListLoad(petPageIndex1 + 1, "deduct");
                            }
                            if (index == 1 && petIfLast2 != 1) {
                                PetCardListLoad(petPageIndex2, "add");
                            }
                        });
                    }
                    else {
                        if (!$(".zcPetcardH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tab1 a.cur').index();

                            if (index == 1 && petIfLast2 != 1) {
                                PetCardListLoad(petPageIndex2, "add");
                            }
                        });
                    }
                }

            });

        }
        else {
            petPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberPetCardList',
                data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (petIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {

                    if (data.data.length == 0) {
                        petIfLast2 = 1;
                    } else {
                        if (data.data.length < 10) {
                            petIfLast2 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {

                            var now = data.data[i].date;
                            var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            var name = "支出日期：";
                            if (type == "add") {
                                name = "充值日期：";
                            }
                            html += '<div class="item"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                            html += ' <div class="account"><span class="green">&yen;<em class="num_style">' + data.data[i].amt + '</em></span>  ';
                            if (data.data[i].invoice_flag == "1") {
                                html += '<a href="javascript:" class="open" logseq=' + data.data[i].term_seq + '>补开发票</a>';
                            }
                            else if (data.data[i].invoice_flag == "2") {
                                html += '已开发票';
                            }
                            else if (data.data[i].invoice_flag == "3") {
                                html += '已过期';
                            }
                            else if (data.data[i].invoice_flag == "4") {
                                html += '退回发票';
                            }
                            else if (data.data[i].invoice_flag == "5") {
                                html += '已寄发票';
                            }
                            else {
                                html += '';
                            }

                            html += '</div></div>';

                        }
                        $(".czPetcardH5").append(html);

                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (petIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tab1 a.cur').index();
                            if (index == 1) {
                                PetCardListLoad(petPageIndex2 + 1, "add");
                            }

                            if (index == 0 && petIfLast1 != 1) {
                                PetCardListLoad(petPageIndex1, "deduct");
                            }
                        });
                    }
                    else {
                        if (!$(".czPetcardH5").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tab1 a.cur').index();

                            if (index == 0 && petIfLast1 != 1) {
                                PetCardListLoad(petPageIndex1, "deduct");
                            }
                        });
                    }
                }

            });
        }

    }
}

function PetCardRed(pageIndex, type) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: '/member/GetMemberPetCardList',
        data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "category": "HB", "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            if (data == "") {
                //显示当前没有记录
                if (type == "add") {
                    $(".czPetcardH4").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有红包明细</p> </div>');
                } else {
                    $(".zcPetcardH4").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有红包明细</p> </div>');
                    $("#h5_mask").hide();
                }

            }
            else {

                //如果是第一页数据，清空内容。
                if (pageIndex == 1) {
                    if (type == "add") {
                        $(".czPetcardH4").html("");
                    } else {
                        $(".zcPetcardH4").html("");
                    }
                }
                if (data.data.length < 10) {
                    if (type == 'deduct') {
                        petIfLast1 = 1;
                    }
                    else {
                        petIfLast2 = 1;
                    }
                }
                if (data.data.length == 0) {
                    //显示当前没有记录
                    if (type == "add") {
                        $(".czPetcardH4").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                    } else {
                        $(".zcPetcardH4").append(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前还没有钱包明细</p> </div>');
                        $("#h5_mask").hide();
                    }

                } else {
                    var html = "";
                    for (var i = 0; i < data.data.length; i++) {
                        var classname = "";
                        if (i == 0) {
                            //第一条是添加单独样式
                            classname = "no_border";
                        }
                        var now = data.data[i].date;
                        var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                        var name = "支出日期：";
                        if (type == "add") {
                            name = "充值日期：";
                        }
                        html += '<div class="item ' + classname + '"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                        if (type == "add") {
                            html += ' <div class="account"><span class="green">&yen;<em class="num_style">' + data.data[i].amt + '</em></span>  ';
                            if (data.data[i].invoice_flag == "1") {
                                html += '<a href="javascript:" class="open" logseq=' + data.data[i].term_seq + '>补开发票</a>';
                            }
                            else if (data.data[i].invoice_flag == "2") {
                                html += '已开发票';
                            }
                            else if (data.data[i].invoice_flag == "3") {
                                html += '已过期';
                            }
                            else if (data.data[i].invoice_flag == "4") {
                                html += '退回发票';
                            }
                            else if (data.data[i].invoice_flag == "5") {
                                html += '已寄发票';
                            }
                            else {
                                html += '';
                            }

                            html += '</div></div>';
                        } else {
                            html += '<div class="account"><span class="red">-&yen;<em class="num_style">' + data.data[i].amt + '</em></span></div> </div>';
                        }
                    }
                    if (type == "add") {
                        $(".czPetcardH4").append(html);
                    } else {
                        $(".zcPetcardH4").append(html);
                        $("#h5_mask").hide();
                    }


                }
            }
        }
    });
}

function PetCardRedLoad(pageIndex, type) {
    var tabsCon = $('.tabs_val_red .tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (type == 'deduct') {
            petPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberPetCardList',
                data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "category": "HB", "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (petIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        petIfLast1 = 1;
                    } else {
                        if (data.data.length < 10) {
                            petIfLast1 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            var now = data.data[i].date;
                            var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            var name = "支出日期：";
                            if (type == "add2") {
                                name = "充值日期：";
                            }
                            html += '<div class="item"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                            html += '<div class="account"><span class="red">-&yen;<em class="num_style">' + data.data[i].amt + '</em></span></div> </div>';

                        }
                        $(".zcPetcardH4").append(html);
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (petIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tab2 a.cur').index();
                            if (index == 0) {
                                PetCardListLoad(petPageIndex1 + 1, "deduct");
                            }
                            if (index == 1 && petIfLast2 != 1) {
                                PetCardListLoad(petPageIndex2, "add");
                            }
                        });
                    }
                    else {
                        if (!$(".zcPetcardH4").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tab2 a.cur').index();

                            if (index == 1 && petIfLast2 != 1) {
                                PetCardListLoad(petPageIndex2, "add");
                            }
                        });
                    }
                }

            });

        }
        else {
            petPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberPetCardList',
                data: { "pageIndex": pageIndex, "pageSize": 10, "type": type, "startdate": "", "enddate": "", "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (petIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {

                    if (data.data.length == 0) {
                        petIfLast2 = 1;
                    } else {
                        if (data.data.length < 10) {
                            petIfLast2 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {

                            var now = data.data[i].date;
                            var newDate = (parseInt(data.data[i].date.substring(0, 4))) + "-" + data.data[i].date.substring(4, 6) + "-" + data.data[i].date.substring(6, 8);
                            var name = "支出日期：";
                            if (type == "add2") {
                                name = "充值日期：";
                            }
                            html += '<div class="item"><div class="text"><h4>' + data.data[i].name + '</h4><p>' + name + newDate + '</p></div>';
                            html += ' <div class="account"><span class="green">&yen;<em class="num_style">' + data.data[i].amt + '</em></span>  ';
                            if (data.data[i].invoice_flag == "1") {
                                html += '<a href="javascript:" class="open" logseq=' + data.data[i].term_seq + '>补开发票</a>';
                            }
                            else if (data.data[i].invoice_flag == "2") {
                                html += '已开发票';
                            }
                            else if (data.data[i].invoice_flag == "3") {
                                html += '已过期';
                            }
                            else if (data.data[i].invoice_flag == "4") {
                                html += '退回发票';
                            }
                            else if (data.data[i].invoice_flag == "5") {
                                html += '已寄发票';
                            }
                            else {
                                html += '';
                            }

                            html += '</div></div>';

                        }
                        $(".czPetcardH4").append(html);

                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (petIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tab2 a.cur').index();
                            if (index == 1) {
                                PetCardListLoad(petPageIndex2 + 1, "add");
                            }

                            if (index == 0 && petIfLast1 != 1) {
                                PetCardListLoad(petPageIndex1, "deduct");
                            }
                        });
                    }
                    else {
                        if (!$(".czPetcardH4").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tab2 a.cur').index();

                            if (index == 0 && petIfLast1 != 1) {
                                PetCardListLoad(petPageIndex1, "deduct");
                            }
                        });
                    }
                }

            });
        }

    }
}

///加载用户发票信息（钱包充值）
function ShowInvoice() {

    $.ajax({
        url: "/member/_PetCardInvoiceList",
        type: 'post',
        datatype: 'json',
        data: { urlquery: "" },
        success: function (data) {
            var petcardmoney = $("#h5petcardmoney").val();//用户当前余额

            //页面显示修改后数据
            $("#h5s_invoicetitle").html(data[0].invoice_head);
            $("#h5s_address").html(data[0].adress);

            ////需要快递发票，如果当前用户余额小于10（快递费），快递栏显示平邮
            if (parseInt(petcardmoney) < 10) {
                $("#h5s_kuaidi").html("平邮(免费)");
            } else {
                if (data[0].express == "02") {
                    $("#h5s_kuaidi").html("快递(<b class=\"num_style\">10</b>元)");

                } else {

                    $("#h5s_kuaidi").html("平邮(免费)");
                }
            }
            //弹框基本信息加载
            $("#h5input_invoiceTitle").val(data[0].invoice_head);
            $("#h5input_recipients").val(data[0].name);
            $("#h5input_phone").val(data[0].mobile);
            $("#h5input_address").val(data[0].adress);
            $("#h5input_postcode").val(data[0].zip_code);
            $("#h5input_invoiceTitle").val(data[0].invoice_head);
            $(".addressshow").html(data[0].province + " " + data[0].city + " " + data[0].district);

            $(".invoice-over-common").show();

            var kdname = $("#h5s_kuaidi").html();

            if (kdname.indexOf("平邮") < 0) {
                $("#h5kuaidiamount").html("10");
                $("#h5totalrechargeamount").html(parseInt($("#h5totalrechargeamount").html()));
                $("input[name='h5total_fee']").val(parseInt($("#h5totalrechargeamount").html()));
            }

        },
        error: function (xmlhttprequest, textstatus, errorthrown) {
            alert(errorthrown);
            return false;
        }
    });
}

//验证输入金额-我要充值
function RegExpMoneyH5() {
    var Recharge_input_hid = $("#h5Recharge_input").val();
    var reg = new RegExp("^[0-9]*$");
    var span_petcardmoney = $("#h5petcardmoney").val();

    if (Recharge_input_hid == "") {
        $(this).PopupDialog({
            popupClass: ".error_pop",
            maskLayer: true
        });
        $(".error_pop p").text("充值金额不能为空");
        $("#h5Recharge_input").val(global_money);
        return;
    }
    if (!reg.test(Recharge_input_hid)) {

        $(this).PopupDialog({
            popupClass: ".error_pop",
            maskLayer: true
        });
        $(".error_pop p").text("请输入数字");
        $("#h5Recharge_input").val(global_money);
        return false;
    }
    if ((parseInt(Recharge_input_hid) + parseInt(span_petcardmoney)) > 5000) {
        $(this).PopupDialog({
            popupClass: ".error_pop",
            maskLayer: true
        });
        $(".error_pop p").text("如旅钱包充值总额5000封顶！");
        $("#h5Recharge_input").val(global_money); return;
    }
    global_money = Recharge_input_hid;

    return true;
}


//补开发票信息
function H5ModifyInvoice() {
    var type = "";
    var kd = "";
    var total = parseInt($("#h5totalrechargeamount").html());
    var petcardmoney = $("#h5petcardmoney").val();//用户当前余额
    var kuaidi = parseInt($("#h5kuaidiamount").html());
    var invoicemoney = "0";
    if ($(".h5pingyou").hasClass("check")) {
        type = "01";
        kd = "平邮(免费)";
        $("#kuaidiamount").html("0");

    }
    else {
        var kdf = parseInt($("#kuaidiamount").html());
        type = "02";
        kd = "快递(10元)";
        invoicemoney = "10";
        $("#kuaidiamount").html("10");

    }
    $("#h5totalrechargeamount").html(total);
    $("input[name='h5total_fee']").val(total);
    var province = $("#ProName").val()
    var city = $("#CityName").val()
    var area = $("#DisName").val()
    var taxt_code = "";
    if ($("#h5input_tax_code").val() != "") {
        taxt_code = $("#h5input_tax_code").val();
    }
    if ($("#h5input_tax_code1").val() != "") {
        taxt_code = $("#h5input_tax_code1").val();
    }

    var data = {
        userName: $("#h5input_recipients").val(),
        province: province,
        city: city,
        area: area,
        address: $("#h5input_address").val(),
        postcode: $("#h5input_postcode").val(),
        title: $("#h5input_invoiceTitle").val(),
        taxt_code: taxt_code,
        Invoice_money: invoicemoney,
        express: type,
        log_seq: $('.logseq').val(),
    };

    $.ajax({
        url: "/member/PetCarduserReceipt",
        type: 'post',
        datatype: 'json',
        data: data,
        success: function (data) {
            if (data.IsError == true) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text(data.Msg);
            } else {
                //页面显示修改后数据
                $("#h5s_invoicetitle").html($("#h5input_invoiceTitle").val());
                $("#h5s_address").html($("#h5input_address").val());
                $("#h5s_kuaidi").html(kd);
                $(".charge_ticket_info").stop(true, true).animate({ "left": "200%" }, 500);
            }
        }
    });
}


//我要充值，修改发票信息
function H5ModifyInvoice_XG() {
    var type = "";
    var kd = "";
    var total = parseInt($("#h5totalrechargeamount").html());
    var petcardmoney = $("#h5petcardmoney").val();//用户当前余额
    var kuaidi = parseInt($("#h5kuaidiamount").html());
    var invoicemoney = "0";
    if ($(".h5pingyou").hasClass("check")) {
        type = "01";
        kd = "平邮(免费)";
        $("#kuaidiamount").html("0");

    }
    else {
        var kdf = parseInt($("#kuaidiamount").html());
        type = "02";
        kd = "快递(10元)";
        invoicemoney = "10";
        $("#kuaidiamount").html("10");

    }
    $("#h5totalrechargeamount").html(total);
    $("input[name='h5total_fee']").val(total);
    var province = $("#ProName").val()
    var city = $("#CityName").val()
    var area = $("#DisName").val()
    var taxt_code = "";
    if ($("#h5input_tax_code").val() != "") {
        taxt_code = $("#h5input_tax_code").val();
    }
    if ($("#h5input_tax_code1").val() != "") {
        taxt_code = $("#h5input_tax_code1").val();
    }

    var data = {
        userName: $("#h5input_recipients").val(),
        province: province,
        city: city,
        area: area,
        address: $("#h5input_address").val(),
        postcode: $("#h5input_postcode").val(),
        title: $("#h5input_invoiceTitle").val(),
        taxt_code: taxt_code,
        Invoice_money: invoicemoney,
        express: type,
        log_seq: $('.logseq').val(),
    };

    $.ajax({
        url: "/member/PetCardReceiptInsert",
        type: 'post',
        datatype: 'json',
        data: data,
        success: function (data) {
            if (data.IsError == true) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text(data.Msg);
            } else {
                //页面显示修改后数据
                $("#h5s_invoicetitle").html($("#h5input_invoiceTitle").val());
                $("#h5s_address").html($("#h5input_address").val());
                $("#h5s_kuaidi").html(kd);
                $(".charge_ticket_info").stop(true, true).animate({ "left": "200%" }, 500);
            }
        }
    });
}

var couponIfLast1 = couponIfLast2 = couponIfLast3 = 0;
var couponPageIndex1 = couponPageIndex2 = couponPageIndex3 = 1;
//我的优惠券数据
function H5CouponList(status, pageIndex) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: '/member/GetMemberCouponList',
        data: { "status": status, "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            //如果是第一页数据，清空内容。
            if (pageIndex == 1) {
                if (status == "0") {
                    $("#h5NotUsedCouponList").html("");
                } else if (status == "1") {
                    $("#h5UsedCouponList").html("");
                }
                else {
                    $("#h5ExpiredCouponList").html("");
                }
            }

            if (data.data.length < 8 && status == '0') {
                couponIfLast1 = 1;
            }
            if (data.data.length < 8 && status == '1') {
                couponIfLast2 = 1;
            }
            if (data.data.length < 8 && status == '2') {
                couponIfLast1 = 3;
            }
            if (data.data.length == 0) {
                //显示当前没有记录
                if (status == "0") {
                    $("#h5NotUsedCouponList").append(' <div class="no_content box_style"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有优惠券</p> </div>');
                } else if (status == "1") {
                    $("#h5UsedCouponList").append(' <div class="no_content box_style"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有优惠券</p> </div>');
                }
                else {
                    $("#h5ExpiredCouponList").append(' <div class="no_content box_style"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有优惠券</p> </div>');
                }
                $("#h5_mask").hide();
            } else {
                var html = "";
                var myDate = new Date().format("yyyyMMdd");
                var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);


                for (var i = 0; i < data.data.length; i++) {
                    {
                        var startdate = (parseInt(data.data[i].start_date.substring(0, 4))) + "-" + data.data[i].start_date.substring(4, 6) + "-" + data.data[i].start_date.substring(6, 8);
                        var enddate = (parseInt(data.data[i].end_date.substring(0, 4))) + "-" + data.data[i].end_date.substring(4, 6) + "-" + data.data[i].end_date.substring(6, 8);

                        var gq = "";

                        if (new Date(enddate) < new Date(datenow) && status == "0") {
                            gq = '<span>[即将过期]</span>';
                        }
                        html += '<a href="javascript:" class="box_style" value="' + data.data[i].type_id + '">'
                        if (data.data[i].ticket_type == "9") {
                            html += '<span class="money"><em class="num_style">' + data.data[i].value + '</em>'
                        } else {
                            html += '<span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].value) / 100 + '</em>'
                        }
                        html += '<b>' + data.data[i].num + ' 张</b></span>';
                        html += '<div class="vo_info"><code class="iconfont">&#xe635;</code> <div class="vo_text"> <p class="name">' + gq + '<text>' + data.data[i].ticket_name + '</text>' + '</p>';
                        // html += '<b>*' + data.data[i].num + '</b>';
                        html += '<p class="time">有效期: <span class="num_style">' + startdate + '</span>至<span class="num_style">' + enddate + '</span></p> </div></div> </a>';


                    }

                    if (status == "0") {
                        $("#h5NotUsedCouponList").html(html);
                    } else if (status == "1") {
                        $("#h5UsedCouponList").html(html);
                    }
                    else {
                        $("#h5ExpiredCouponList").html(html);
                    }
                }

                $("#h5_mask").hide();
            }
        }
    });
}

function couponListLoad(status, pageIndex) {
    var tabsCon = $('.tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (status == 0) {
            couponPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberCouponList',
                data: { "status": status, "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (couponIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        couponIfLast1 = 1;
                    } else {
                        if (data.data.length < 8) {
                            couponIfLast1 = 1;
                        }
                        var html = "";
                        var myDate = new Date().format("yyyyMMdd");
                        var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);
                        for (var i = 0; i < data.data.length; i++) {
                            {
                                var startdate = (parseInt(data.data[i].start_date.substring(0, 4))) + "-" + data.data[i].start_date.substring(4, 6) + "-" + data.data[i].start_date.substring(6, 8);
                                var enddate = (parseInt(data.data[i].end_date.substring(0, 4))) + "-" + data.data[i].end_date.substring(4, 6) + "-" + data.data[i].end_date.substring(6, 8);
                                var gq = "";
                                if (new Date(enddate) < new Date(datenow) && status == "0") {
                                    gq = '<span>[即将过期]</span>';
                                }

                                html += '<a href="javascript:" class="box_style"  value="' + data.data[i].type_id + '"><span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].value) / 100 + '</em></span>';
                                html += '<div class="vo_info"><code class="iconfont">&#xe635;</code> <div class="vo_text"> <p class="name">' + gq + '<em>' + data.data[i].ticket_name + '</em>' + '</p>';

                                html += '<p class="time">有效期: <span class="num_style">' + startdate + '</span>至<span class="num_style">' + enddate + '</span></p> </div></div> </a>';
                            }
                        }
                        $("#h5NotUsedCouponList").append(html);
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (couponIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0) {
                                couponListLoad("0", couponPageIndex1 + 1);
                            }
                            if (index == 1 && couponIfLast2 != 1) {
                                couponListLoad("1", couponPageIndex2);
                            }
                            if (index == 2 && couponIfLast3 != 1) {
                                couponListLoad("2", couponPageIndex3);
                            }
                        });
                    }
                    else {
                        if (!$("#h5NotUsedCouponList").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && couponIfLast2 != 1) {
                                couponListLoad("1", couponPageIndex2);
                            }
                            if (index == 2 && couponIfLast3 != 1) {
                                couponListLoad("2", couponPageIndex3);
                            }
                        });
                    }
                }
            });
        }
        else if (status == 1) {
            couponPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberCouponList',
                data: { "status": status, "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (couponIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        couponIfLast2 = 1;
                    } else {
                        if (data.data.length < 8) {
                            couponIfLast2 = 1;
                        }
                        var html = "";
                        var myDate = new Date().format("yyyyMMdd");
                        var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);
                        for (var i = 0; i < data.data.length; i++) {
                            {
                                var startdate = (parseInt(data.data[i].start_date.substring(0, 4))) + "-" + data.data[i].start_date.substring(4, 6) + "-" + data.data[i].start_date.substring(6, 8);
                                var enddate = (parseInt(data.data[i].end_date.substring(0, 4))) + "-" + data.data[i].end_date.substring(4, 6) + "-" + data.data[i].end_date.substring(6, 8);
                                var gq = "";
                                if (new Date(enddate) < new Date(datenow) && status == "0") {
                                    gq = '<span>[即将过期]</span>';
                                }

                                html += '<a href="javascript:" class="box_style"  value="' + data.data[i].type_id + '"><span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].value) / 100 + '</em></span>';
                                html += '<div class="vo_info"><code class="iconfont">&#xe635;</code> <div class="vo_text"> <p class="name">' + gq + '<em>' + data.data[i].ticket_name + '</em>' + '</p>';

                                html += '<p class="time">有效期: <span class="num_style">' + startdate + '</span>至<span class="num_style">' + enddate + '</span></p> </div></div> </a>';

                            }
                        }
                        $("#h5UsedCouponList").append(html);

                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (couponIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && couponIfLast1 != 1) {
                                couponListLoad("0", couponPageIndex1);
                            }
                            if (index == 1) {
                                couponListLoad("1", couponPageIndex2 + 1);
                            }
                            if (index == 2 && couponIfLast3 != 1) {
                                couponListLoad("2", couponPageIndex3);
                            }
                        });
                    }
                    else {
                        if (!$("#h5UsedCouponList").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && couponIfLast1 != 1) {
                                couponListLoad("0", couponPageIndex1);
                            }
                            if (index == 2 && couponIfLast3 != 1) {
                                couponListLoad("2", couponPageIndex3);
                            }
                        });
                    }
                }

            });
        }
        else {
            couponPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: '/member/GetMemberCouponList',
                data: { "status": status, "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
                datatype: "json",
                cache: false,
                beforeSend: function () {
                    if (couponIfLast3 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        couponIfLast3 = 1;
                    } else {
                        if (data.data.length < 8) {
                            couponIfLast3 = 1;
                        }
                        var html = "";
                        var myDate = new Date().format("yyyyMMdd");
                        var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);
                        for (var i = 0; i < data.data.length; i++) {
                            {
                                var startdate = (parseInt(data.data[i].start_date.substring(0, 4))) + "-" + data.data[i].start_date.substring(4, 6) + "-" + data.data[i].start_date.substring(6, 8);
                                var enddate = (parseInt(data.data[i].end_date.substring(0, 4))) + "-" + data.data[i].end_date.substring(4, 6) + "-" + data.data[i].end_date.substring(6, 8);

                                var gq = "";

                                if (new Date(enddate) < new Date(datenow) && status == "0") {
                                    gq = '<span>[即将过期]</span>';
                                }
                                html += '<a href="javascript:" class="box_style"  value="' + data.data[i].type_id + '"><span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].value) / 100 + '</em> <b>*' + data.data[i].num + '</b></span>';
                                html += '<div class="vo_info"><code class="iconfont">&#xe635;</code> <div class="vo_text"> <p class="name">' + gq + '<em>' + data.data[i].ticket_name + '</em>' + '</p>';

                                html += '<p class="time">有效期: <span class="num_style">' + startdate + '</span>至<span class="num_style">' + enddate + '</span></p> </div></div> </a>';
                            }
                        }
                        $("#h5ExpiredCouponList").append(html);

                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (couponIfLast3 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && couponIfLast1 != 1) {
                                couponListLoad("0", couponPageIndex1);
                            }
                            if (index == 1 && couponIfLast2 != 1) {
                                couponListLoad("1", couponPageIndex2);
                            }
                            if (index == 2) {
                                couponListLoad("2", couponPageIndex3 + 1);
                            }
                        });
                    }
                    else {
                        if (!$("#h5ExpiredCouponList").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(2).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && couponIfLast1 != 1) {
                                couponListLoad("0", couponPageIndex1);
                            }
                            if (index == 1 && couponIfLast2 != 1) {
                                couponListLoad("1", couponPageIndex2);
                            }
                        });
                    }
                }

            });
        }

    }
}




function H5YXCouponList(pageIndex) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: '/member/GetMemberYXCouponList',
        data: { "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            //如果是第一页数据，清空内容。
            if (pageIndex == 1) {
                $("#h5YXCouponList").html("");
            }

            if (data.data.length < 8 && status == '0') {
                couponIfLast1 = 1;
            }

            if (data.data.length == 0) {
                //显示当前没有记录

                $("#h5YXCouponList").append(' <div class="no_content box_style"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有优选优惠券</p> </div>');

                $("#h5_mask").hide();
            } else {
                var html = "";
                var myDate = new Date().format("yyyyMMdd");
                var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);


                for (var i = 0; i < data.data.length; i++) {
                    {
                        //var startdate = (parseInt(data.data[i].CouponStartDate.substring(0, 4))) + "-" + data.data[i].CouponStartDate.substring(4, 6) + "-" + data.data[i].CouponStartDate.substring(6, 8);
                        //var enddate = (parseInt(data.data[i].CouponEndDate.substring(0, 4))) + "-" + data.data[i].CouponEndDate.substring(4, 6) + "-" + data.data[i].CouponEndDate.substring(6, 8);


                        html += '<a href="javascript:" class="box_style"  value="' + data.data[i].CouponId + '"><span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].CouponAmount) + '</em></span>';
                        html += '<div class="vo_info"><div class="vo_text"> <p class="name"><em>' + data.data[i].CouponName + '</em>' + '</p>';
                        html += '<p class="vo_code">' + data.data[i].CouponCode + data.data[i].CouponId + '</p>';
                        html += '<p class="time">有效期至:<span class="num_style">' + data.data[i].CouponEndDate.substring(0, 10) + '</span></p> </div></div> </a>';
                    }
                }
                $("#h5YXCouponList").append(html).show();
                $("#h5_mask").hide();
            }
        }
    });
}

function yxcouponListLoad(pageIndex) {
    var tabsCon = $('.tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {

        couponPageIndex1 = pageIndex;
        $.ajax({
            type: "POST",
            url: '/member/GetMemberYXCouponList',
            data: { "pageIndex": pageIndex, "pageSize": 8, "IsH5": true },
            datatype: "json",
            cache: false,
            beforeSend: function () {
                if (couponIfLast1 == 1) { }
                else {
                    $(".dropload-down").remove();
                    tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                }
                $(window).off('scroll');
            },
            success: function (data) {
                if (data.data.length == 0) {
                    couponIfLast1 = 1;
                } else {
                    if (data.data.length < 8) {
                        couponIfLast1 = 1;
                    }
                    var html = "";
                    var myDate = new Date().format("yyyyMMdd");
                    var datenow = (parseInt(myDate.substring(0, 4))) + "-" + (parseInt(myDate.substring(4, 6)) + 3) + "-" + (parseInt(myDate.substring(6, 8)) - 1);
                    for (var i = 0; i < data.data.length; i++) {
                        {
                            //var startdate = (parseInt(data.data[i].CouponStartDate.substring(0, 4))) + "-" + data.data[i].CouponStartDate.substring(4, 6) + "-" + data.data[i].CouponStartDate.substring(6, 8);
                            //var enddate = (parseInt(data.data[i].CouponEndDate.substring(0, 4))) + "-" + data.data[i].CouponEndDate.substring(4, 6) + "-" + data.data[i].CouponEndDate.substring(6, 8);


                            html += '<a href="javascript:" class="box_style"  value="' + data.data[i].CouponId + '"><span class="money">&yen;<em class="num_style">' + parseInt(data.data[i].CouponAmount) + '</em></span>';
                            html += '<div class="vo_info"><div class="vo_text"> <p class="name"><em>' + data.data[i].CouponName + '</em>' + '</p>';
                            html += '<p class="vo_code">' + data.data[i].CouponCode + data.data[i].CouponId + '</p>';
                            html += '<p class="time">有效期至:<span class="num_style">' + data.data[i].CouponEndDate.substring(0, 10) + '</span></p> </div></div> </a>';
                        }
                    }
                    $("#h5YXCouponList").append(html).show();
                }
            },
            complete: function () {
                $(".dropload-down").remove();
                if (couponIfLast1 != 1) {
                    $(window).on('scroll', function () {
                        var index = $('.tabs a.cur').index();
                        if (index == 0) {
                            yxcouponListLoad(couponPageIndex1 + 1);
                        }

                    });
                }
                else {
                    if (!$("#h5YXCouponList").find('div').hasClass('no_content')) {
                        tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                    }
                    $(window).on('scroll', function () {
                        var index = $('.tabs a.cur').index();
                        if (index == 1 && couponIfLast2 != 1) {
                            yxcouponListLoad(couponPageIndex2);
                        }
                        if (index == 2 && couponIfLast3 != 1) {
                            yxcouponListLoad(couponPageIndex3);
                        }
                    });
                }
            }
        });

    }
}

///我的会员卡数据加载
function MemberCardListH5() {

    $.ajax({
        type: "POST",
        url: '/member/GetMemberCardList',
        data: { "status": "0", "pageIndex": 0, "pageSize": 10, "IsH5": true },
        datatype: "json",
        cache: false,
        success: function (data) {
            $(".address_list").html("");
            if (data.data.length == 0) {
                //显示当前没有记录
                $(".address_list").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有会员卡</p> </div>');
            } else {
                var html = "";
                for (var i = 0; i < data.data.length; i++) {
                    {
                        var statusname = '有效';
                        if (data.data[i].card_stat != "0") {
                            statusname = "已注销";
                        }
                        html += '<div class="item box_style"><div class="info"><a href="javascript:" class="set_default">' + statusname + '</a><div class="text"><h3>' + data.data[i].card_type_name + '</h3>';
                        html += '<p class="num_style">' + data.data[i].card_no + '</p>  </div></div></div>';

                    }
                    $(".address_list").html(html)

                }
            }
        }
    });
}
//我的银行卡数据加载
function UnionCardListH5() {
    $.ajax({
        type: "POST",
        url: '/Member/GetUnionCardPartialView',
        data: { "pageIndex": "0", "pageSize": 10, "IsH5": true },
        datatype: "json",
        success: function (data) {
            $(".unioncardlist").html("");
            if (data.data.length == 0) {
                //显示当前没有记录
                //$(".unioncardlist").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有银行卡</p> </div>');
            } else {
                var html = "";
                for (var i = 0; i < data.data.length; i++) {
                    {
                        var statusname = '有效';
                        if (data.data[i].card_stat != "0") {
                            statusname = "已注销";
                        }
                        html += '<div class="item box_style"><div class="info"><span class="bank_name">' + data.data[i].BankName + '</span>';
                        html += '<div class="bank_info"><span class="num">尾号<em class="num_style">' + data.data[i].BankNo.substr(data.data[i].BankNo.length - 4) + '</em></span> </div></div>';//<span class="kind">信用卡</span>
                        html += ' <div class="act clearfix"><a href="javascript:" class="btn_red btn_del btn_total fr" onclick="CancelUnionBind(' + data.data[i].BankNo + ')">解除绑定</a> </div> </div>';


                    }
                    $(".unioncardlist").html(html)

                }
            }

        }
    });

}

//新增银联卡，下一步（验证银联卡）
function VerifyUnionCard(UnionCardNo) {
    $.ajax({
        type: "POST",
        url: '/Member/AjaxVerifyUnionCard',
        data: { "bankNo": UnionCardNo },
        datatype: "json",
        success: function (data) {
            if (data.IsError) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text(data.Msg);
            } else {
                if (data.Msg != '') {
                    $(this).PopupDialog({
                        popupClass: ".error_pop",
                        maskLayer: true
                    });
                    $(".error_pop p").text(data.Msg);
                } else {
                    $("input[name='H5AccNo']").val(UnionCardNo);
                    UnionCardNo = UnionCardNo.substring(0, 4) + "…" + UnionCardNo.substring(UnionCardNo.length - 3);
                    $(".showunioncardno").html(UnionCardNo);
                    $(".bind_bank_step2").stop(true, true).animate({ "left": "0%" }, 500);
                }
            }
        }
    });
}

//新增银联卡，发送手机验证码
function VerifyUnionSmsMsg(PhoneNo) {
    $.ajax({
        type: "POST",
        url: '/Member/AjaxVerifyUnionSmsMsg',
        data: { "PhoneNo": PhoneNo, "accNo": $("input[name='H5AccNo']").val() }, //"phone=" + $("#Phone").val(),
        datatype: "json",

        success: function (data) {
            if (data.IsError) {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text(data.Msg);
            } else {

            }
        }
    });
}
//解除绑定
function CancelUnionBind(AccNo) {
    $("input[name='H5deleteId']").val(AccNo);
    $(this).parents('.item').addClass('cur');
    $(this).PopupDialog({
        popupClass: ".pop_unbind",
        maskLayer: true
    });
}


//我的常用入住人数据加载
function FavoritesLinkmanH5() {
    $.ajax({
        type: "POST",
        url: '/Member/_GetMemberFavoriteLinkman',
        data: { "pageIndex": "0", "pageSize": 10, "IsH5": true },
        datatype: "json",
        success: function (data) {
            $(".FavoritesLinkmanlist").html("");
            if (data.data.length == 0) {
                //显示当前没有记录
            } else {
                var html = "";
                for (var i = 0; i < data.data.length; i++) {
                    {
                        var statusname = '有效';
                        if (data.data[i].card_stat != "0") {
                            statusname = "已注销";
                        }

                        html += ' <div class="item box_style"><div class="info"><div class="text">';
                        html += ' <h3><span>' + data.data[i].linkName + '</span><em class="num_style">' + data.data[i].PhoneNo + '</em></h3></div></div><div class="act clearfix">';
                        html += '<input type="hidden" value="' + data.data[i].linkName + '" class="linkname"/><input type="hidden" value="' + data.data[i].PhoneNo + '" class="PhoneNo"/>';
                        html += ' <a href="javascript:" class="btn_gray btn_del fl" >删除</a><a href="javascript:" class="btn_red btn_total fr" >编辑</a> </div></div>';

                    }
                    $(".FavoritesLinkmanlist").html(html)

                }
            }

        }
    });
}
//操作常用入住人
function SaveFavoritesH5(type) {
    var name = "";
    var phone = "";
    if (type == "edit") {
        name = $(".h5_main .address_edit_list .bjlinkname").val();
        phone = $(".h5_main .address_edit_list .bjtel").val();
    }
    else if (type == "add") {
        name = $(".h5_main .address_edit_list .xzlinkname").val();
        phone = $(".h5_main .address_edit_list .xztel").val();
    } else {
        name = $(".sclinkname").val();
    }
    var savetype = $("#savetypeH5").val();
    var data = { Linkman: name, Phone: phone, type: savetype };
    $.post('/member/FavoritesLinkman_add', data, function (result) {
        if (result != null && result.status == 0) {
            if (type == "edit") {
                FavoritesLinkmanH5();
                $(".person_edit").stop(true, true).animate({ "left": "200%" }, 100);
            } else if (type == "add") {
                FavoritesLinkmanH5();
                $(".person_add").stop(true, true).animate({ "left": "200%" }, 100);
            }
            else {
                FavoritesLinkmanH5();
                $(".pop_unbind").hide();
            }

        } else {
            if (type == "edit") {
                FavoritesLinkmanH5();
                $(".person_edit").stop(true, true).animate({ "left": "200%" }, 100);
            } else if (type == "add") {
                FavoritesLinkmanH5();
                $(".person_add").stop(true, true).animate({ "left": "200%" }, 100);
            } else {
                FavoritesLinkmanH5();
                $(".pop_unbind").hide();
            }
        }
    });
}



//收藏酒店
function FavoritesHotelH5() {
    $.ajax({
        type: "POST",
        url: '/Member/GetMemberFavoriteHotel_H5',
        data: { "pageIndex": "0", "pageSize": 10, "IsH5": true },
        datatype: "html",
        beforeSend: function () {
            $("#tblist").html("");
        },
        success: function (data) {
            $(".myhome_loading").hide();
            if ($(data).html() == null) {
                $(".FavoritesList").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有收藏酒店</p> </div>');
            } else {
                $(".FavoritesList").append(data);

            }

            //success: function (data) {
            //$(".FavoritesList").html("");//暂时注释掉的
            //if (data.data.length == 0) {
            //    //显示当前没有记录
            //    $(".FavoritesList").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有收藏酒店</p> </div>');
            //} else {
            //    var html = "";
            //    for (var i = 0; i < data.data.length; i++) {
            //        {

            //            html += '  <div class="item box_style"> <a href="/hotel/' + data.data[i].hHotel.s_HotelCd + '" class="info"><code class="iconfont icon_turn">&#xe635;</code>';
            //            html += ' <div class="text"><div class="hotel_name">' + data.data[i].hHotel.s_HotelNm + '</div>';
            //            html += '<div class="lowest_price">今日最低价<span><em class="num_style">' + data.data[i].LowestPrice.split('.')[0] + '</em></span></div> </div> </a>';
            //            html += ' <div class="act clearfix"><input type="hidden" value="' + data.data[i].hHotel.s_HotelCd + '" class="hotelcd" /><a href="javascript:" class="btn_gray btn_del fl">删除</a>';
            //            html += '  <a href="/hotel/' + data.data[i].hHotel.s_HotelCd + '" class="btn_red btn_total fr">立即预订</a></div></div>';
            //        }
            //        // $(".FavoritesList").html(html)//暂时注释掉的

            //    }
            //}


        }
    });
}
//新增发票信息
function AddInvoiceH5(type, invoice_head, mobile, tax_code, bank_name, bank_acc, address) {

    $.ajax({
        url: "/Member/AddProfessionalInvoice",
        type: 'POST',
        dataType: 'json',
        data: { type: type, invoice_head: invoice_head, mobile: mobile, tax_code: tax_code, bank_name: bank_name, bank_acc: bank_acc, address: address, typeName: "Member", UrlQuery: "", IsH5: true },
        success: function (data) {
            if (data.status == "0") {
                window.location.href = "/member/invoice";
                $(".ticket_info").stop(true, true).animate({ "left": "200%" }, 500);
            }
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
            return false;
        }
    });
}
function ModifyInvoiceH5(invoice_id, type, invoice_head, mobile, tax_code, bank_name, bank_acc, address) {
    $.ajax({
        url: "/Member/Modify",
        type: 'POST',
        dataType: 'json',
        data: { invoice_id: invoice_id, type: type, invoice_head: invoice_head, mobile: mobile, tax_code: tax_code, bank_name: bank_name, bank_acc: bank_acc, address: address, typeName: "Member", UrlQuery: "", IsH5: true },
        success: function (data) {
            if (data.status == "0") {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("修改成功");
                window.location.href = "/member/invoice";
            }
            else {
                $(this).PopupDialog({
                    popupClass: ".error_pop",
                    maskLayer: true
                });
                $(".error_pop p").text("修改失败!" + data.msg);

            }
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
            return false;
        }
    });
}
var commentPageIndex1 = commentPageIndex2 = 1;
var commentIfLast1 = commentIfLast2 = 0;
//我的点评数据加载
function OrdertoCommentH5(status) {
    $("#h5_mask").show();
    loading_hide();
    $.ajax({
        type: "POST",
        url: "/member/GetMemberCommentList",
        data: { "status": status, "pageIndex": 0, "pageSize": 10, "IsH5": true },
        datatype: "json",

        success: function (data) {
            if (status == "1") {
                $(".OrdertoCommentList").html("");
            } else {
                $(".yOrdertoCommentList").html("");
            }
            if (data.data.length < 10) {
                status == 1 ? commentIfLast1 = 1 : commentIfLast2 = 1;
            }
            if (data.data.length == 0) {
                //显示当前没有记录
                if (status == "1") {
                    $(".OrdertoCommentList").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有待点评的酒店</p> </div>');
                } else {
                    $(".yOrdertoCommentList").html(' <div class="no_content"><img src="http://images.homeinns.com/image/web/xiaoru_sad_new.png"><p>您目前没有已点评的酒店</p> </div>');
                }
                $("#h5_mask").hide();
            } else {
                var html = "";
                for (var i = 0; i < data.data.length; i++) {
                    {
                        html += '<div class="item box_style">';
                        if (status == "2") {
                            html += ' <a href="/hotel/' + data.data[i].HotelCd + '#user_reviews" class="info">';
                        } else {
                            html += ' <a href="javascript:" class="info" hotelCd="' + data.data[i].HotelCd + '" orderNo="' + data.data[i].OrderNo + '" BookingNo="' + data.data[i].BookingNo + '" ArrD="' + data.data[i].ArrD + '" DepD="' + data.data[i].DepD + '">';
                        }
                        html += '<code class="iconfont icon_turn"></code> ';
                        html += ' <div class="text"> <div class="hotel_name">' + data.data[i].HotelNm + '</div> ';
                        //<p>' + data.data[i].RmTp + '</p>
                        html += ' <p><span class="num_style">' + new Date(data.data[i].ArrD).format("yyyy-MM-dd") + '</span>入住    <span class="num_style">' + new Date(data.data[i].DepD).format("yyyy-MM-dd") + '</span>退房</p> </div></a> </div>';






                    }
                    if (status == "1") {
                        $(".OrdertoCommentList").html(html);
                    } else {
                        $(".yOrdertoCommentList").html(html);
                    }
                }

                $("#h5_mask").hide();
            }

        }
    });

}
function commentLoad(status, pageIndex) {
    var tabsCon = $('.tabs_con');
    if ($(document).scrollTop() + $(window).height() >= $(document).height() - 40) {
        if (status == "1") {
            commentPageIndex1 = pageIndex;
            $.ajax({
                type: "POST",
                url: "/member/GetMemberCommentList",
                data: { "status": status, "pageIndex": pageIndex, "pageSize": 10, "IsH5": true },
                datatype: "json",
                beforeSend: function () {
                    if (commentIfLast1 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {

                    if (data.data.length == 0) {
                        commentIfLast1 = 1;
                    } else {
                        if (data.data.length < 10) {
                            commentIfLast1 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            {
                                html += '<div class="item box_style">';
                                if (status == "2") {
                                    html += ' <a href="/hotel/' + data.data[i].HotelCd + '#user_reviews" class="info">';
                                } else {
                                    html += ' <a href="" class="info">';
                                }
                                html += '<code class="iconfont icon_turn"></code> ';
                                html += ' <div class="text"> <div class="hotel_name">' + data.data[i].HotelNm + '</div> ';
                                //<p>' + data.data[i].RmTp + '</p>
                                html += ' <p><span class="num_style">' + new Date(data.data[i].ArrD).format("yyyy-MM-dd") + '</span>入住    <span class="num_style">' + new Date(data.data[i].DepD).format("yyyy-MM-dd") + '</span>退房</p> </div></a> </div>';
                            }
                            $(".OrdertoCommentList").append(html);
                        }
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (commentIfLast1 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0) {
                                commentLoad(1, commentPageIndex1 + 1);
                            }
                            if (index == 1 && commentIfLast2 != 1) {
                                commentLoad(2, commentPageIndex2);
                            }
                        });
                    }
                    else {
                        if (!$(".OrdertoCommentList").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(0).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 1 && commentIfLast2 != 1) {
                                commentLoad(2, commentPageIndex2);
                            }
                        });
                    }
                }
            });

        }
        else {
            commentPageIndex2 = pageIndex;
            $.ajax({
                type: "POST",
                url: "/member/GetMemberCommentList",
                data: { "status": status, "pageIndex": pageIndex, "pageSize": 10, "IsH5": true },
                datatype: "json",
                beforeSend: function () {
                    if (commentIfLast2 == 1) { }
                    else {
                        $(".dropload-down").remove();
                        tabsCon.append("<div class='dropload-down'><div class='dropload-load '><div class='loading'></div>加载中。。。</div></div>")
                    }
                    $(window).off('scroll');
                },
                success: function (data) {
                    if (data.data.length == 0) {
                        commentIfLast2 = 1;
                    } else {
                        if (data.data.length < 10) {
                            commentIfLast2 = 1;
                        }
                        var html = "";
                        for (var i = 0; i < data.data.length; i++) {
                            {
                                html += '<div class="item box_style">';
                                if (status == "2") {
                                    html += ' <a href="/hotel/' + data.data[i].HotelCd + '#user_reviews" class="info">';
                                } else {
                                    html += ' <a href="" class="info">';
                                }
                                html += '<code class="iconfont icon_turn"></code> ';
                                html += ' <div class="text"> <div class="hotel_name">' + data.data[i].HotelNm + '</div> ';
                                //<p>' + data.data[i].RmTp + '</p>
                                html += ' <p><span class="num_style">' + new Date(data.data[i].ArrD).format("yyyy-MM-dd") + '</span>入住    <span class="num_style">' + new Date(data.data[i].DepD).format("yyyy-MM-dd") + '</span>退房</p> </div></a> </div>';
                            }
                            $(".yOrdertoCommentList").append(html);
                        }
                    }
                },
                complete: function () {
                    $(".dropload-down").remove();
                    if (commentIfLast2 != 1) {
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && commentIfLast1 != 1) {
                                commentLoad(1, commentPageIndex1);
                            }
                            if (index == 1) {
                                commentLoad(2, commentPageIndex2 + 1);
                            }
                        });
                    }
                    else {
                        if (!$(".yOrdertoCommentList").find('div').hasClass('no_content')) {
                            tabsCon.find(".con").eq(1).append("<div class='dropload-nodata'>没有更多数据了~</div>");
                        }
                        $(window).on('scroll', function () {
                            var index = $('.tabs a.cur').index();
                            if (index == 0 && commentIfLast1 != 1) {
                                commentLoad(1, commentPageIndex1);
                            }
                        });
                    }
                }
            });
        }
    }


}

function ClearInvoiceInput() {
    $("#h5pt_invoice_head").val("");
    $("#select_one").val("");

    $("#h5invoice_head").val("");
    $("#h5mobile").val("");
    $("#h5tax_code").val("");
    $("#h5credit_code").val("");
    $("#h5bank_acc").val("");
    $("#h5bank_name").val("");
    $("#h5address").val("");
    $('.click_add').find('.readonly').html("个人");
    $('.flag').hide();
}
