(function ($) {
    //将方法dateChoose合并到jQuery的实例对象中
    $.fn.extend({
        "dateChoose": function (options) {
            var defaults = {
                dateClass: ".date_box",//日期选择页面
                startClass: ".start_date", //开始日期的class
                endClass: ".end_date", //结束日期
                range: true, //开始日期和结束日期都包括，若为false，则只有开始日期
                divideChoose: false,
                startTxt: "", //开始日期选中之后出现的文字
                endTxt: "",//开始日期选中之后出现的文字
                startDate: "", //今天日期之后可选
                endDate: "", //今天日期之前可选
                maxDays: "",  //之后可点击最大天数,
                Seperate: [],//间隔的日期
                En: false, //是否英文
                callback: ""  //日期选中之后的callback
            };
            //将options合并到全局对象中去
            //这里true的意思就是深度拷贝，
            //合并前
            /*var result=$.extend( true,  {},  
                { name: "John", location: {city: "Boston",county:"USA"} },  
                { last: "Resig", location: {state: "MA",county:"China"} } ); */

            //合并后
            /*result={name:"John",last:"Resig",
                    location:{city:"Boston",state:"MA",county:"China"}}*/

            var options = $.extend(true, defaults, options);
            //console.log(options);


            return this.each(function () {

                var a_date = [
                    { date: "01-01", festival: "元旦" },
                    { date: "03-08", festival: "妇女节" },
                    { date: "04-05", festival: "清明节" },
                    { date: "05-01", festival: "劳动节" },
                    { date: "06-01", festival: "儿童节" },
                    { date: "07-01", festival: "建党节" },
                    { date: "08-01", festival: "建军节" },
                    { date: "09-10", festival: "教师节" },
                    { date: "10-01", festival: "国庆节" },
                    { date: "12-24", festival: "平安夜" },
                    { date: "12-25", festival: "圣诞节" }
                ];
                var b_date = [
                    { date: "01-01", festival: "春节" },
                    { date: "01-15", festival: "元宵节" },
                    { date: "05-05", festival: "端午节" },
                    { date: "07-07", festival: "情人节" },
                    { date: "07-15", festival: "中元节" },
                    { date: "08-15", festival: "中秋节" },
                    { date: "09-09", festival: "重阳节" },
                    { date: "12-08", festival: "腊八节" },
                    { date: "12-24", festival: "小年" }

                ];
                // console.log(calendar.solar2lunar(2017, 10, 04));
                //补零函数
                function zero(n) {
                    return n < 10 ? "0" + n : "" + n;
                };

                var weekDefine;
                if (options.En == false) {
                    weekDefine = ["日", "一", "二", "三", "四", "五", "六"];
                }
                else {
                    weekDefine = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
                    var monthDefine = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec");
                }
                var thisDate = new Date(),
                    thisYear = thisDate.getFullYear(),  //获取本年
                    thisMonth = thisDate.getMonth() + 1, //获取本月
                    thisDay = thisDate.getDate();  //获取本日

                var startDate = $(options.startClass).attr('data-time');//获取开始日期
                var nowDate = new Date(startDate.split('-')[0], startDate.split('-')[1] - 1, startDate.split('-')[2]),
                    nowYear = nowDate.getFullYear(),  //获取本年
                    nowMonth = nowDate.getMonth() + 1, //获取本月;                    
                    nowDay = nowDate.getDate();  //获取本日
                var nowFirst = new Date(nowYear, nowMonth - 1, 1),//本月第一天
                    nowFirstWeek = nowFirst.getDay(),//本月第一天星期几
                    nextFirst = new Date(nowYear, nowMonth, 1),//当前月的下一页的第一天
                    nextYear = nextFirst.getFullYear(),//下一月的年份
                    nextMonth = nextFirst.getMonth() + 1,//下一月的月份
                    nextFirstWeek = nextFirst.getDay(),//下一月的第一天星期几
                    nowLast = new Date(nextFirst.getTime() - 1000 * 60 * 60 * 24),//本月最后一天的时间戳
                    nowLastData = nowLast.getDate();//本月的最后一天

                $(".date_con").empty();//清空存放日历Div
                //上一月下一月html结构
                var html = '<div class="month_change"> ' +
                    '<a href="javascript:" class="iconfont prev">&#xe6ca;</a> ' +
                    '<a href="javascript:" class="iconfont next">&#xe6cb;</a> ';
                //如果是英文走这里
                if (options.En == true) {
                    html += '<h3> <span>' + monthDefine[parseInt($(options.startClass).attr("data-time").substr(5, 2)) - 1] +
                        '</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>' + $(options.startClass).attr("data-time").substr(0, 4) +
                        '</span> </h3> ' +
                        '</div>';
                }
                //如果是中文走这里   年月头部信息
                else {
                    html += '<h3> <span>' + $(options.startClass).attr("data-time").substr(0, 4) +
                        '</span>年<span>' + $(options.startClass).attr("data-time").substr(5, 2) +
                        '</span>月 </h3> ' +
                        '</div>';
                }
                //周-到周日的html
                html += "<ul class='week'>";
                for (var i = 0; i < weekDefine.length; i++) {
                    html += '<li>' + weekDefine[i] + "</li>";
                }
                html += "</ul>";


                $(options.dateClass).find(".date_con").append(html);//将日历内容放到日期页面的Div里面
                //之后可点击的最大天数

                if (options.maxDays != '') {
                    var maxTime = new Date(thisYear, thisMonth, thisDay + parseInt(options.maxDays)),
                        maxYear = maxTime.getFullYear(),
                        maxMonth = maxTime.getMonth() < 10 ? '0' + maxTime.getMonth() : maxTime.getMonth(),
                        maxDays = maxTime.getDate() < 10 ? '0' + maxTime.getDate() : maxTime.getDate();
                    var max = maxYear + '-' + maxMonth + '-' + maxDays;//最大可选年月日;
                    var startChoose = endChoose = "";

                    if (options.divideChoose != '' && options.startDate != "") {
                        startChoose = options.startDate;
                    }
                }

                var flag = 0;
                var S = {
                    init: function () {
                        $(options.dateClass).stop(true, true).animate({ left: "0%" }, 500);
                        this.createDate(nowYear, nowMonth, nowFirstWeek, nowLastData, nextYear, nextMonth, nextFirstWeek);
                        this.prevMonth();
                        this.nextMonth();
                        this.daysDisabled(startChoose);
                        this.enterClick();
                        this.slide();
                        $(options.dateClass).removeClass('no_signtxt');
                        //选择日期：点击头部返回按钮
                        $(options.dateClass).find(".h5_header_back").on('click', function () {
                            flag = 0;
                            $(options.dateClass).stop().animate({ left: "200%" }, 500);
                        });
                        //如果开始日期和结束日期在一个输入并且结束日期的类名cur存在
                        if (options.divideChoose == true && $(options.endClass).hasClass('cur')) {
                            $('.date_list a[trq="' + startChoose + '"]').css('color', "");
                            $('.date_list a[trq="' + startChoose + '"]').find('span').eq(0).css("top", "-3px")
                            $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                        }
                        if (options.startTxt == "") {
                            $(options.dateClass).addClass('no_signtxt');
                        }
                    },
                    //
                    dateFormat: function (date) {
                        var dateS = date.split('-');
                        return new Date(dateS[0], dateS[1], dateS[2]);
                    },
                    //
                    createDate: function (thisYear, thisMonth, thisFirstWeek, thisLastData, nextYear, nextMonth) {
                        $(".date_list").remove();
                        var data = '<div class="date_list fix">';
                        for (var i = 1; i <= thisLastData; i++) {
                            if (i < 10) {
                                //如果月小于10的话补零
                                if (thisMonth < 10) {
                                    data += "<a trq='" + thisYear + "-0" + thisMonth + "-0" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "'><em>" + i + "</em></a>";
                                }
                                else {
                                    data += "<a trq='" + thisYear + "-" + thisMonth + "-0" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "'><em>" + i + "</em></a>";
                                }
                            }
                            else if (i == thisLastData) {
                                if (thisMonth < 10) {
                                    nextMonth < 10 ?
                                        (data += "<a trq='" + thisYear + "-0" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "' trqn='" + nextYear + "-0" + nextMonth + "-01'" + "><em>" + i + "</em></a>") :
                                        (data += "<a trq='" + thisYear + "-0" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "' trqn='" + nextYear + "-" + nextMonth + "-01'" + "><em>" + i + "</em></a>");
                                }
                                else {
                                    nextMonth < 10 ?
                                        (data += "<a trq='" + thisYear + "-" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "' trqn='" + nextYear + "-0" + nextMonth + "-01'" + "><em>" + i + "</em></a>") :
                                        (data += "<a trq='" + thisYear + "-" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "' trqn='" + nextYear + "-" + nextMonth + "-01'" + "><em>" + i + "</em></a>");
                                }
                            }
                            else {
                                if (thisMonth < 10) {
                                    data += "<a trq='" + thisYear + "-0" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "'><em>" + i + "</em></a>";
                                }
                                else {
                                    data += "<a trq='" + thisYear + "-" + thisMonth + "-" + i + "' txq='" + weekDefine[(thisFirstWeek + i - 1) % 7] + "'><em>" + i + "</em></a>";
                                }
                            }
                        }
                        data += "</div>";
                        $(options.dateClass).find(".date_con").append(data);

                        for (var i = 0; i < weekDefine.length; i++) {
                            if ($(".date_list a").attr("txq") == weekDefine[i]) {
                                var j = i;
                            }
                        }
                        for (var k = 0; k < j; k++) {
                            $(".date_list").prepend("<a class='before'></a>");
                        }
                        if (options.En == true) {
                            $('.month_change h3 span').eq(0).text(monthDefine[parseInt(nowMonth) - 1]);
                            $('.month_change h3 span').eq(1).text(monthDefine[parseInt(nowYear)]);
                        }
                        else {

                            $('.month_change h3 span').eq(0).text(nowYear);
                            $('.month_change h3 span').eq(1).text(nowMonth < 10 ? "0" + nowMonth : nowMonth);
                        }
                        S.b_date();
                    },
                    changeYear: function (num) {
                        nowYear = nowYear + num;
                        nowFirst = new Date(nowYear, nowMonth - 1, 1); //获取本月第一天
                        nextFirst = new Date(nowYear, nowMonth, 1); //获取下月中的第一天
                        nextYear = nextFirst.getFullYear();//获取当前下月年份
                        nextMonth = nextFirst.getMonth() + 1;//获取下月月份
                        nowLast = new Date(nextFirst.getTime() - 1000 * 60 * 60 * 24);//获取本月最后一天
                        nowFirstWeek = nowFirst.getDay();//当月第一天是星期几
                        nextFirstWeek = nextFirst.getDay();//下月第一天是星期几
                        nowLastData = nowLast.getDate();//获取本月最后一天几号
                    },
                    changeMonth: function (num) {
                        nowMonth = nowMonth + num;
                        if (nowMonth < 1) {
                            nowMonth = 12;
                            this.changeYear(-1);
                        }
                        else if (nowMonth > 12) {
                            nowMonth = 1;
                            this.changeYear(1);
                        }
                        nowFirst = new Date(nowYear, nowMonth - 1, 1); //获取本月第一天
                        nextFirst = new Date(nowYear, nowMonth, 1); //获取下月中的第一天
                        nextYear = nextFirst.getFullYear();//获取当前下月年份
                        nextMonth = nextFirst.getMonth() + 1;//获取下月月份
                        nowLast = new Date(nextFirst.getTime() - 1000 * 60 * 60 * 24);//获取本月最后一天
                        nowFirstWeek = nowFirst.getDay();//当月第一天是星期几
                        nextFirstWeek = nextFirst.getDay();//下月第一天是星期几
                        nowLastData = nowLast.getDate();//获取本月最后一天几号
                        this.createDate(nowYear, nowMonth, nowFirstWeek, nowLastData, nextYear, nextMonth, nextFirstWeek);
                    },
                    isPC: function () {
                        var userAgentInfo = navigator.userAgent;
                        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
                        var flag = true;
                        for (var v = 0; v < Agents.length; v++) {
                            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
                        }
                        return flag;
                    },
                    prevMonth: function () {

                        if (!this.isPC()) {
                            $(options.dateClass).find(".prev").on('touchstart', function () {
                                $(this).html("&#xe6c8;");
                            }).on('touchend', function () {
                                $(this).html("&#xe6ca;");
                                S.changeMonth(-1);
                                S.daysDisabled(startChoose);
                                $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                            });
                        }
                        else {
                            $(options.dateClass).find(".prev").mousedown(function () {
                                $(this).html("&#xe6c8;");
                            }).mouseup(function () {
                                $(this).html("&#xe6ca;");
                                S.changeMonth(-1);
                                S.daysDisabled(startChoose);
                                $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                            });
                        }
                    },
                    nextMonth: function () {
                        if (!this.isPC()) {
                            $(options.dateClass).find(".next").on('touchstart', function () {
                                $(this).html("&#xe6c9;");
                            }).on('touchend', function () {
                                $(this).html("&#xe6cb;");
                                S.changeMonth(1);
                                S.daysDisabled(startChoose);
                                $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                            });
                        }
                        else {
                            $(options.dateClass).find(".next").mousedown(function () {
                                $(this).html("&#xe6c9;");
                            }).mouseup(function () {
                                $(this).html("&#xe6cb;");
                                S.changeMonth(1);
                                S.daysDisabled(startChoose);
                                $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                            });
                        }
                    },
                    slide: function () {
                        var touchFlag = 0;
                        $("body").on("touchstart", '.date_list', function (e) {
                            touchFlag = 1;
                            startX = e.originalEvent.changedTouches[0].pageX,
                                startY = e.originalEvent.changedTouches[0].pageY;
                        });
                        $("body").on("touchmove", '.date_list', function (e) {
                            moveEndX = e.originalEvent.changedTouches[0].pageX,
                                moveEndY = e.originalEvent.changedTouches[0].pageY,
                                X = moveEndX - startX,
                                Y = moveEndY - startY;
                            if (touchFlag == 1) {
                                if (Math.abs(X) > Math.abs(Y) && X > 0) {
                                    S.changeMonth(-1);
                                    S.daysDisabled(startChoose);
                                    $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                                }
                                else if (Math.abs(X) > Math.abs(Y) && X < 0) {
                                    S.changeMonth(1);
                                    S.daysDisabled(startChoose);
                                    $('.date_list a[trq="' + startChoose + '"]').addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                                }
                                touchFlag = 0;
                            }
                        });
                    },
                    enterClick: function () {
                        $(options.dateClass).off().on('click', ".date_list a", function (e) {

                            e.preventDefault();
                            var _this = $(this);
                            var trq = _this.attr('trq');
                            var d = S.dateFormat(trq);
                            var trqSplit = trq.split('-'),
                                trqSplitDate = new Date(trqSplit[0], trqSplit[1] - 1, trqSplit[2]);
                            var nextd = trqSplitDate.getTime() + 1000 * 60 * 60 * 24;
                            var nextDate = new Date(nextd);
                            var dYear = nextDate.getFullYear(),
                                dMonth = nextDate.getMonth() + 1 < 10 ? "0" + (nextDate.getMonth() + 1) : nextDate.getMonth() + 1,
                                dDays = nextDate.getDate() < 10 ? "0" + nextDate.getDate() : nextDate.getDate();
                         



                            //取消周六周日默认红色

                            if (_this.attr('txq') == "六" || _this.attr('txq') == "日" || _this.attr('txq') == "Sat" || _this.attr('txq') == "Sun") {
                                _this.css("color", "");
                            };

                            if (!_this.hasClass("disabled") && !_this.hasClass('cur') && _this.text() !=
                                "") {
                                //开始日期和结束日期分别是一个输入框
                                if (options.divideChoose == true) {
                                    setTimeout(function () {
                                        $(options.dateClass).stop(true, true).animate({ left: "200%" });
                                    }, 500);
                                    if ($(options.startClass).hasClass('cur')) {
                                        startChoose = trq;
                                        if (options.En == true) {
                                            $(options.startClass).text(monthDefine[parseInt(startChoose.substr(5, 2)) - 1] + " " + startChoose.substr(8, 2) + "," + startChoose.substr(0, 4)).attr({ "data-time": trq });
                                        }
                                        else {
                                            $(options.startClass).text(trq).attr({ "data-time": trq });
                                        }

                                        if (_this.children().length == 2) {
                                            _this.css("color", "#fff");
                                            _this.find('em').html("");
                                            _this.find('span').css("top", "-3px");
                                            _this.addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                                        } else {
                                            _this.css("color", "#fff");
                                            _this.addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');

                                        }


                                        endChoose = $(options.endClass).attr('data-time');
                                        if (S.dateFormat(startChoose).getTime() >= S.dateFormat(endChoose).getTime()) {
                                            if (options.En == true) {
                                                $(options.endClass).text(monthDefine[parseInt(dMonth) - 1] + " " + dDays + "," + dYear).attr({ "data-time": dYear + "-" + dMonth + "-" + dDays });
                                            }
                                            else {
                                                $(options.endClass).text(dYear + "-" + dMonth + "-" + dDays).attr({ "data-time": dYear + "-" + dMonth + "-" + dDays });
                                            }
                                        }
                                    }
                                    if ($(options.endClass).hasClass('cur')) {
                                        flag = 1;
                                        if (_this.children().length == 2) {
                                            _this.css("color", "#fff");
                                            _this.find('em').html("");
                                            _this.find('span').css("top", "-3px");
                                            _this.addClass('cur').append('<span class="sign">' + options.endTxt + '</span>');
                                        } else {
                                            _this.css("color", "#fff");
                                            _this.addClass('cur').append('<span class="sign">' + options.endTxt + '</span>');

                                        }

                                        endChoose = trq;
                                        if (options.En == true) {
                                            $(options.endClass).text(monthDefine[parseInt(endChoose.substr(5, 2)) - 1] + " " + endChoose.substr(8, 2) + "," + endChoose.substr(0, 4)).attr({ "data-time": trq });
                                        }
                                        else {
                                            $(options.endClass).text(trq).attr({ "data-time": trq });
                                        }
                                        S.rangeRed(startChoose, endChoose);

                                    }
                                }
                                else {
                                    //如果第一次则是点击开始日期
                                    if (flag == 0) {
                                        //判断点击的是不是本月的最后一天，如果是的就自动跳转到下一天
                                        var cur_last_day = $(".date_list a:last").find("em").html();
                                        if (!options.divideChoose) {
                                            if (_this.find('em').html() == cur_last_day) {
                                                if (_this.siblings('.cur').attr("class") == "cur") {

                                                } else {
                                                    S.changeMonth(1);
                                                }
                                            }
                                        }
                                        if (_this.children().length == 2) {
                                            _this.css("color", "#fff");
                                            _this.find('em').html("");
                                            _this.find('span').css("top", "-10px");
                                            _this.addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                                        } else {
                                            _this.css("color", "#fff");
                                            _this.addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');

                                        }


                                        startChoose = trq;
                                        //如果页面是列表页
                                        if (window.location.href.indexOf("/list/")!=-1) {
                                            var max90Time = new Date().getTime()+90*24*60*60*1000,
                                                trqSplitDateTime = trqSplitDate.getTime();
                                            //如果入住日期大于90天
                                            if (max90Time < trqSplitDateTime) {
                                                var tips = "<div class='time_tipsH'>只有高星酒店可预订90天后房间</div>";
                                                $("body").append(tips);
                                                setTimeout(function () {
                                                    $(".time_tipsH").remove();
                                                }, 2000);
                                            }
                                        }
                                        if (options.range == true) {
                                            flag = 1;
                                            S.daysDisabled(startChoose);
                                        }
                                        else {
                                            if (options.En == true) {
                                                $(options.startClass).text(monthDefine[parseInt(startChoose.substr(5, 2)) - 1] + " " + startChoose.substr(8, 2) + "," + startChoose.substr(0, 4)).attr({ "data-time": trq });
                                            }
                                            else {
                                                $(options.startClass).text(trq).attr({ "data-time": trq });
                                            }
                                            setTimeout(function () {
                                                $(options.dateClass).stop(true, true).animate({ left: "200%" });
                                                if (options.callback != '') {
                                                    options.callback();
                                                }

                                            }, 500);
                                            return false;
                                        }
                                    }
                                    //如果是结束日期
                                    else {
                                        //如果大于90天
                                        var startChooseSplit = new Date(startChoose.split('-')[0], startChoose.split('-')[1] - 1, startChoose.split('-')[2]),
                                            endCurSplit = new Date(trq.split('-')[0], trq.split('-')[1] - 1, trq.split('-')[2]);
                                        var startChooseTime = startChooseSplit.getTime(),
                                            endCurTime = endCurSplit.getTime();
                                        if (endCurTime - 30 * 24 * 60 * 60 * 1000 > startChooseTime) {
                                            $(".time_tipsH").remove();
                                            var tips = "<div class='time_tipsH'>最多可连续续订30天</div>";
                                            $("body").append(tips);
                                            setTimeout(function () {
                                                $(".time_tipsH").remove();
                                            }, 2000);
                                        }
                                  
                                        else {
                                            if (_this.children().length == 2) {
                                                _this.css("color", "#fff");
                                                _this.find('em').html("");
                                                _this.find('span').css("top", "-10px");
                                                _this.addClass('cur').append('<span class="sign">' + options.startTxt + '</span>');
                                            } else {
                                                _this.css("color", "#fff");
                                                _this.addClass('cur').append('<span class="sign">' + options.endTxt + '</span>');
                                            }
                                            endChoose = trq;
                                            if (options.En == true) {
                                                $(options.startClass).text(monthDefine[parseInt(startChoose.substr(5, 2)) - 1] + " " + startChoose.substr(8, 2) + "," + startChoose.substr(0, 4)).attr({ "data-time": startChoose });
                                                $(options.endClass).text(monthDefine[parseInt(endChoose.substr(5, 2)) - 1] + " " + endChoose.substr(8, 2) + "," + endChoose.substr(0, 4)).attr({ "data-time": endChoose });
                                            }
                                            else {
                                                $(options.startClass).text(startChoose).attr({ "data-time": startChoose });
                                                $(options.endClass).text(endChoose).attr({ "data-time": endChoose });

                                            }
                                            S.rangeRed(startChoose, endChoose);
                                            setTimeout(function () {
                                                $(options.dateClass).stop(true, true).animate({ left: "200%" });
                                                if (options.callback != '') {
                                                    options.callback();
                                                }
                                            }, 500);
                                            flag = 0;
                                        }
                                    }
                                }
                            }
                        });
                    },
                    daysDisabled: function (start) {
                        if (options.Seperate.length <= 0) {
                            if (options.startDate != "") {
                                $('.date_list a').removeClass("disabled");
                                var todayDate;
                                if (start == "") {
                                    todayDate = new Date(options.startDate.split("-")[0], options.startDate.split("-")[1] - 1, options.startDate.split("-")[2]);
                                }
                                else {
                                    todayDate = new Date(start.split("-")[0], start.split("-")[1] - 1, start.split("-")[2]);
                                }
                                if (options.maxDays != "") {
                                    maxDate = new Date(max.split("-")[0], max.split("-")[1] - 1, max.split("-")[2]);
                                }
                                $('.date_list a').each(function () {
                                    var _this = $(this);
                                    if (_this.text() != "") {
                                        var trq = _this.attr('trq');
                                        var thisDate = new Date(trq.split("-")[0], trq.split("-")[1] - 1, trq.split("-")[2]);
                                        if (thisDate < todayDate) {
                                            $(this).css("color", "")
                                            $(this).addClass('disabled');
                                        }
                                        if (options.maxDays != '') {
                                            if (flag == 0) {
                                                if (options.range == false) {
                                                    if (thisDate > maxDate) {
                                                        $(this).css("color", "")
                                                        $(this).addClass('disabled');
                                                    }
                                                }
                                                else {
                                                    if (thisDate >= maxDate) {
                                                        $(this).css("color", "")
                                                        $(this).addClass('disabled');
                                                    }
                                                }
                                            }
                                            else {
                                                if (thisDate.getTime() >= maxDate.getTime() + 1000 * 60 * 60 * 24) {
                                                    $(this).css("color", "")
                                                    $(this).addClass('disabled');
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                            if (options.endDate != '') {
                                $('.date_list a').removeClass("disabled");
                                var endDate = S.dateFormat(options.endDate);
                                var startDate = "";
                                if (start != "") {
                                    startDate = S.dateFormat(start);
                                }
                                $('.date_list a').each(function () {
                                    var _this = $(this);
                                    if (_this.text() != "") {
                                        var trq = _this.attr('trq');
                                        var thisDate = S.dateFormat(trq);
                                        if (options.divideChoose == false) {
                                            if (flag == 0) {
                                                if (thisDate >= endDate || thisDate < startDate) {
                                                    $(this).css("color", "")
                                                    $(this).addClass('disabled');
                                                }
                                            }
                                            else {
                                                if (thisDate > endDate || thisDate < startDate) {
                                                    console.log(thisDate);
                                                    $(this).css("color", "")
                                                    $(this).addClass('disabled');
                                                }
                                            }
                                        }
                                        else {
                                            var thisDate2 = new Date(trq.split("-")[0], trq.split("-")[1] - 1, trq.split("-")[2]),
                                                endDate2 = new Date(options.endDate.split("-")[0], options.endDate.split("-")[1] - 1, options.endDate.split("-")[2]),
                                                startDate2 = new Date(start.split("-")[0], start.split("-")[1] - 1, start.split("-")[2]);
                                            if ($(options.startClass).hasClass('cur')) {
                                                if (thisDate2 >= endDate2 || thisDate2 < startDate2) {
                                                    $(this).css("color", "")
                                                    $(this).addClass('disabled');
                                                }
                                            }
                                            else {
                                                if (thisDate2.getTime() > endDate2.getTime() || thisDate2 < startDate2) {
                                                    $(this).css("color", "")
                                                    $(this).addClass('disabled');
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }
                        else {
                            for (var i = 0; i < options.Seperate.length; i++) {
                                $(this).css("color", "")
                                $('.date_list a').addClass('disabled');
                                $('.date_list a[trq="' + options.Seperate[i] + '"]').removeClass('disabled');
                            }
                        }
                    },
                    rangeRed: function (start, end) {
                        var startDate = S.dateFormat(start);
                        var endDate = S.dateFormat(end);
                        $('.date_list a').each(function () {
                            var _this = $(this);
                            if (_this.text() != "") {
                                trq = _this.attr('trq');
                                _thisDate = S.dateFormat(trq);
                                if (_thisDate > startDate && _thisDate < endDate) {
                                    _this.addClass('mid');
                                }
                            }
                        })
                    },
                    b_date: function () {

                        $('.date_list a').each(function (index, elme) {
                            if (!$(elme).hasClass("before")) {

                                arr = $(elme).attr('trq').split("-");
                                //农历转换;                              
                                json = calendar.solar2lunar(arr[0], arr[1], arr[2])
                                var str_b = zero(json.lMonth) + "-" + zero(json.lDay);
                                //农历假期添加
                                //周六周日字体变红
                                $('.date_list a[trq="' + startChoose + '"]').addClass('cur');
                                for (var i = 0; i < b_date.length; i++) {
                                    if (str_b == b_date[i].date) {
                                        if ($(elme).prop('className') == 'cur') {
                                            $(elme).css("color", "#fff");
                                            $(elme).find('em').html('')
                                            $(elme).find("em").css({ "line-height": "24px", "display": "inline-block" })
                                            $(elme).append('<span style="display:block;position:relative;top:-10px;font-size:13px;">' + b_date[i].festival + '</span>')
                                        } else {
                                            $(elme).css("color", "#c0191f");
                                            $(elme).find("em").css({ "line-height": "24px", "display": "inline-block" })
                                            $(elme).append('<span style="display:block;position:relative;top:-0px;font-size:13px;">' + b_date[i].festival + '</span>')
                                        }

                                    }
                                };
                                //公历日期添加;
                                var str_a = arr[1] + "-" + arr[2];
                                for (var i = 0; i < a_date.length; i++) {
                                    if (str_a == a_date[i].date) {
                                        if ($(elme).prop('className') == 'cur') {
                                            $(elme).css("color", "#fff");
                                            $(elme).find('em').html('')
                                            $(elme).find("em").css({ "line-height": "24px", "display": "inline-block" })
                                            $(elme).append('<span style="display:block;position:relative;top:-10px;font-size:13px;">' + a_date[i].festival + '</span>')
                                        } else {
                                            $(elme).css("color", "#c0191f");
                                            $(elme).find("em").css({ "line-height": "24px", "display": "inline-block" })
                                            $(elme).append('<span style="display:block;position:relative;top:-0px;font-size:13px;">' + a_date[i].festival + '</span>')
                                        }



                                    }
                                };


                                if ($(elme).attr('txq') == "六" || $(elme).attr('txq') == "日" || $(elme).attr('txq') == "Sat" || $(elme).attr('txq') == "Sun") {
                                    if (!$(elme).hasClass('cur')) {
                                        $(elme).css("color", "#c0191f");
                                    }
                                    else {
                                        $(elme).css("color", "#fff");
                                    }



                                };
                                //



                            }
                        })

                    }

                }
                S.init();




            });
        }
    })
})(jQuery);





