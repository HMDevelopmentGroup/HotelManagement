// JavaScript Document
$(function () {

    //模拟单选框和复选框
    $('.invoice_head  input[type=radio]').prettyCheckboxes({ 'checkboxWidth': 14, 'checkboxHeight': 30, 'display': 'inline' });

    $("#card_Invoice").CRselectBox({ 'selectWidth': '113', 'selectHeight': '30', 'line': '1' });



    $("#invoice_adress").sjld("#Lshenfen", "#Lchengshi", "#Lquyu");

    $("#invoice_adress").click(function () { $(".invoice_singel").find(".tipText").slideUp(200); });

    //发票切换
    $(".invoice_head").find(".radio").eq(0).click(function () {
        //$(".invoice_main").find("input[name=invoice_title],input[name=invoice_adress_info],input[name=invoice_zipCode]").attr("data-rule", "required");
        $(".invoice_main").slideDown(200);
    });
    $(".invoice_head").find(".radio").eq(1).click(function () {
        //$(".invoice_main").find("input[name=invoice_title],input[name=invoice_adress_info],input[name=invoice_zipCode]").attr("data-rule", "");
        $(".invoice_main").slideUp(200);

    });


    $('.card_submit input[type=checkbox]').prettyCheckboxes({});

    /*提交订单弹层*/
    $(".card_submit .prettyCheckbox").click(function () {
        $(this).toggleClass("tk_on");
        $(this).parent().find(".unsure").toggleClass("sure");
        if ($(this).hasClass("tk_on")) {
            $(".card_submit").find(".notice_tip").css("display", "none");
        } else {
            $(".card_submit").find(".notice_tip").css("display", "block");
        }

    });

    $('.validate_input').blur(function () {
        if ($(this).attr('name') == "invoice_zipCode") {
            if ($(this).val() == "") {
                $(this).next().html("必填");
                $(this).next().removeClass("hide");
            }
            else {
                var re = /^[0-9]{6}$/
                if (!re.test($(this).val())) {
                    $(this).next().html("邮政编码格式不正确！");
                    $(this).next().removeClass("hide");
                }
                else {
                    $(this).next().addClass("hide");
                }
            }

        }
        else if ($(this).attr('name') == "consignee") {
            if ($(this).val() == "") {
                $(this).next().html("必填");
                $(this).next().removeClass("hide");
            }
            else {
                $(this).next().addClass("hide");
            }
        }
        else if ($(this).attr('name') == "consigneePhone") {
            if ($(this).val() == "") {
                $(this).next().html("必填");
                $(this).next().removeClass("hide");
            }
        else {
                var re = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (!re.test($(this).val())) {
                    $(this).next().html("联系方式格式不正确！");
                    $(this).next().removeClass("hide");
                }
                else {
                    $(this).next().addClass("hide");
                }
            }
        }
        else {
            if ($(this).val() == "") {
                $(this).next().removeClass("hide");
            }
            else {
                $(this).next().addClass("hide");
            }
        }
    });
});

function beforeSubmit() {
    var flag = false;
    var validateInputs = $("input:visible");
    validateInputs.each(function () {

        $(this).focus();
        $(this).blur();

    });
    flag = $("input:visible.n-invalid").length == 0;

    if ($("#Lshenfen:visible").length > 0 && !$(".some_adress label").hasClass("checked") && $("#Lshenfen").data("name") != 35 && ($("#Lshenfen").data("name") == 0 || $("#Lchengshi").data("name") == 0 || $("#Lquyu").data("name") == 0
        || $("#Lshenfen").data("name") == undefined || $("#Lchengshi").data("name") == undefined || $("#Lquyu").data("name") == undefined)) {
        $(".invoice_singel").find(".tipText").show();
        flag = false;
    } else {
        $(".invoice_singel").find(".tipText").hide();
        if ($("#Lshenfen:visible").length > 0) {
            $(".data").find("input").eq(0).val($("#Lshenfen").data("text"));
            $(".data").find("input").eq(1).val($("#Lchengshi").data("text"));
            $(".data").find("input").eq(2).val($("#Lquyu").data("text"));
            $(".data").find("input").eq(3).val($("input[name='invoice_adress_info']").val());
            $(".data").find("input").eq(4).val($("input[name='invoice_zipCode']").val());
            $(".data").find("input").eq(5).val($("input[name='invoice_title']").val());
            $(".data").find("input").eq(6).val($("#card_Invoice").val());
            $(".data").find("input").eq(8).val($("#Lshenfen").data("name"));
            $(".data").find("input").eq(9).val($("#Lchengshi").data("name"));
            $(".data").find("input").eq(10).val($("#Lquyu").data("name"));
            $(".data").find("input").eq(12).val($("input[name='consignee']").val());
            $(".data").find("input").eq(13).val($("input[name='consigneePhone']").val());
        }
    }
    $(".data").find("input").eq(11).val($(".prettyCheckbox.checked").attr("tabindex"));
    $(".data").find("input").eq(7).val($(".submit_btn").hasClass("sure"));
    if (flag) {
        if (!$(".submit_btn").hasClass("sure")) {
            $(".card_submit").find(".notice_tip").css("display", "block");
            return false;

        } else {
            $(".card_submit").find(".notice_tip").css("display", "none");
            var validateInputs = $("input:visible");
            return flag;

        }
    } else return false;
}