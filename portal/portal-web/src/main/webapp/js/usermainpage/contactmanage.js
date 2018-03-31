$(function () {
    var chnameok = true;
    var ennameok = true;
    var phoneok = true;
    var emailok = true;
    var idok = true;
    var passportok = true;

    $('.contact-add').click(function () {
        $(".contact-flag").val("add");
        $('.contact-chname').val("");
        $('.contact-firstname').val("");
        $('.contact-lastname').val("");
        $('.contact-id-se').val("")
        $('.contact-id').val("");
        $('.contact-passport').val("");
        $('.contact-phone').val("");
        $(".contact-form").removeClass('contact-hide');
    });

    $('.contact-edit').click(function (obj) {
        var dataid = obj.target.getAttribute('data-id');
        var name = "input[name=name_" + dataid + "]";
        var firstname = "input[name=firstname_" + dataid + "]";
        var lastname = "input[name=lastname_" + dataid + "]";
        var identityType = "input[name=identityType_" + dataid + "]";
        var identityNo = "input[name=identityNo_" + dataid + "]";
        var passport = "input[name=passport_" + dataid + "]";
        var phone = "input[name=phone_" + dataid + "]";
        $('.contact-chname').val($(name).val());
        $('.contact-firstname').val($(firstname).val());
        $('.contact-lastname').val($(lastname).val());
        $('.contact-id-se').val($(identityType).val())
        $('.contact-id').val($(identityNo).val());
        $('.contact-passport').val($(passport).val());
        $('.contact-phone').val($(phone).val());
        $(".contact-flag").val("edit");
        $(".contact-editid").val(dataid);
        $(".contact-form").removeClass('contact-hide');
    });

    $('.contact-delete').click(function (obj) {
        var dataid = obj.target.getAttribute('data-id');
        var memberCode = $('.HideMemberCode').val();
        //$(".contact-form").removeClass('contact-hide');
        var param = {
            id: dataid,
            mcMemberCode: memberCode
        };

        $.ajax({
            type: 'POST',
            url: "/services/DeleteContact",
            dataType: 'JSON',
            data: param,
            cache: false,
            success: function (responseData) {
                var result = JSON.parse(responseData);
                if (result.Success) {
                    window.location.reload();
                }
            }
        });
    });

    $('.contact-submit').click(function () {
        $('input[type=text]').blur();
        if (chnameok && ennameok && idok && phoneok && emailok && passportok) {
            if ($(".contact-flag").val() == "edit") {
                var param = {
                    dataid: $(".contact-editid").val(), name: $('.contact-chname').val(), mcMemberCode: $('.HideMemberCode').val(), phone: $('.contact-phone').val(), identityType: $('.contact-id-se').val(), identityNo: $('.contact-id').val(), email: $('.contact-email').val(), enFirstName: $('.contact-firstname').val(), enLastName: $('.contact-lastname').val(), passportNo: $('.contact-passport').val()
                };

                $.ajax({
                    type: 'POST',
                    url: "/services/QueryUpdateContact",
                    dataType: 'JSON',
                    data: param,
                    cache: false,
                    success: function (responseData) {
                        var result = JSON.parse(responseData);
                        if (result.Success) {
                            window.location.reload();
                        }
                    }
                });
            }
            else {
                var param = {
                    enFirstName: $('.contact-firstname').val(), enLastName: $('.contact-lastname').val(), identityNo: $('.contact-id').val(), identityType: $('.contact-id-se').val(), mcMemberCode: $('.HideMemberCode').val(), name: $('.contact-chname').val(), phone: $('.contact-phone').val(), passportNo: $('.contact-passport').val(), email: $('.contact-email').val()
                };

                $.ajax({
                    type: 'POST',
                    url: "/services/QueryAddContact",
                    dataType: 'JSON',
                    data: param,
                    cache: false,
                    success: function (responseData) {
                        var result = JSON.parse(responseData);
                        if (result.Success) {
                            window.location.reload();
                        }
                        else {
                            if (result.code == -5) {
                                var errmsg = "一个会员最多能添加15条常用联系人记录，超过不再添加";
                                if ($('.HideLanguage').val() != "zh-CN") {
                                    errmsg = "Can add up to 15 contact records!";
                                }
                                alert(errmsg);
                            }
                            else {
                                if ($('table') != undefined && $('table').length > 0 && ($('table')[0].rows.length - 1) / 3 == 15) {
                                    var errmsg = "一个会员最多能添加15条常用联系人记录，超过不再添加";
                                    if ($('.HideLanguage').val() != "zh-CN") {
                                        errmsg = "Can add up to 15 contact records!";
                                    }
                                    alert(errmsg);
                                }
                                else {
                                    alert(result.message);
                                }
                            }
                        }
                    }
                });
            }
            
            //$(".contact-form").addClass('contact-hide');
            //$(".contact-chname-al").addClass('contact-hide');
            //$(".contact-id-al").addClass('contact-hide');
        }
    });

    $('.contact-cancel').click(function () {
        $(".contact-form").addClass('contact-hide');
        $(".contact-chname-al").addClass('contact-hide');
        $(".contact-id-al").addClass('contact-hide');
    });

    $('.contact-chname').blur(function () {
        chnameok = true;
        if ($('.contact-chname').val() == "") {
            chnameok = false;
            $(".contact-chname-al").removeClass('contact-hide');
        } else {
            var reg = /^[\u4e00-\u9fa5]{0,}$/;
            if (!reg.test($('.contact-chname').val())) {
                chnameok = false;
                $(".contact-chname-al").removeClass('contact-hide');
            }
            else {
                $(".contact-chname-al").addClass('contact-hide');
            }
        }
    });

    $('.contact-phone').blur(function () {
        phoneok = true;
        if ($('.contact-phone').val() != "") {
            var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!reg.test($('.contact-phone').val())) {
                phoneok = false;
                $(".contact-phone-al").removeClass('contact-hide');
            }
            else {
                $(".contact-phone-al").addClass('contact-hide');
            }
        } else {
            $(".contact-phone-al").addClass('contact-hide');
        }
    });

    $('.contact-firstname').blur(function () {
        ennameok = true;
        if ($('.contact-firstname').val() != "") {
            var reg = /^[A-Za-z]+$/;
            if (!reg.test($('.contact-firstname').val())) {
                ennameok = false;
                $(".contact-enname-al").removeClass('contact-hide');
            }
            else {
                $(".contact-enname-al").addClass('contact-hide');
            }
        } else {
            $(".contact-enname-al").addClass('contact-hide');
        }
    });

    $('.contact-lastname').blur(function () {
        ennameok = true;
        if ($('.contact-lastname').val() != "") {
            var reg = /^[A-Za-z]+$/;
            if (!reg.test($('.contact-lastname').val())) {
                ennameok = false;
                $(".contact-enname-al").removeClass('contact-hide');
            }
            else {
                $(".contact-enname-al").addClass('contact-hide');
            }
        } else {
            $(".contact-enname-al").addClass('contact-hide');
        }
    });

    $('.contact-email').blur(function () {
        emailok = true;
        if ($('.contact-email').val() != "") {
            var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!reg.test($('.contact-email').val())) {
                emailok = false;
                $(".contact-email-al").removeClass('contact-hide');
            }
            else {
                $(".contact-email-al").addClass('contact-hide');
            }
        } else {
            $(".contact-email-al").addClass('contact-hide');
        }
    });

    $('.contact-id').blur(function () {
        idok = true;
        if ($('.contact-id').val() != "") {
            if ($('.contact-id-se').val() == "ID") {
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                var param = {
                    ID: $('.contact-id').val()
                };

                $.ajax({
                    type: 'POST',
                    url: "/services/QueryValidateID",
                    dataType: 'JSON',
                    data: param,
                    cache: false,
                    success: function (responseData) {
                        var result = JSON.parse(responseData);
                        if (!result.Success) {
                            idok = false;
                            $(".contact-id-al").removeClass('contact-hide');
                        }
                        else {
                            $(".contact-id-al").addClass('contact-hide');
                        }
                    }
                });
            }
            else {
                var reg = /^[A-Za-z0-9]+$/;
                if (!reg.test($('.contact-id').val())) {
                    idok = false;
                    $(".contact-id-al").removeClass('contact-hide');
                }
                else {
                    $(".contact-id-al").addClass('contact-hide');
                }
            }
        } else {
            if ($('.contact-id-se').val() == "ID") {
                idok = false;
                $(".contact-id-al").removeClass('contact-hide');
            }
            else {
                $(".contact-id-al").addClass('contact-hide');
            }
        }
    });

    $('.contact-passport').blur(function () {
        passportok = true;
        if ($('.contact-passport').val() != "") {
            var reg = /^[A-Za-z0-9]+$/;
            if (!reg.test($('.contact-passport').val())) {
                passportok = false;
                $(".contact-passport-al").removeClass('contact-hide');
            }
            else {
                $(".contact-passport-al").addClass('contact-hide');
            }
        } else {
            $(".contact-passport-al").addClass('contact-hide');
        }
    });
});