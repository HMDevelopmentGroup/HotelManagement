// JavaScript Document
;;;
$(function(){
 addExchangeBox();  
});
// JavaScript Document
$(function(){      
    navigation();      
});
 

function addExchangeBox(){
	//var Timerchange = null;
	var popExchangemian = '<div class="exchangeBox">'
								 +'<div class="exchangeBoxArrow"></div>'
								 +'<div class="exchangeBoxMain">'
									  +'<a href="#">礼品兑换</a>'
									 +' <a href="#" class="last">旅游产品兑换</a>'
								 +'</div>'
							+'</div>'
	$("#exchangeBtn").parent().attr("style","position: relative;");
	//$("#exchangeBtn").parent().append(popExchangemian);
	
	$("#exchangeBtn,.exchangeBox").mouseover(function(){
		//clearTimeout(Timerchange);								 
		$("#exchangeBtn").parent().find(".exchangeBox").show();
	});
	$("#exchangeBtn,.exchangeBox").mouseout(function(){
		$("#exchangeBtn").parent().find(".exchangeBox").hide();							
    });
}
;;;;;;;;
/*********************************
轮播
 调用方法 
 1. $(".slideBox").carousel();
 2. $(".slideBox").carousel({
        'btn' : ".slideBtn ul li",
        'pic' : ".slidePic a span",
        'index': "false",//主页临时补丁，一般页面请默认
        'timeLong': 4000
    });
*********************************/
(function($) {
    $.fn.carousel = function(options) {
        var opt = {
            'btn': ".slidebar ul li",
            'pic': ".fouce a span",
            'index': "false",
            'timeLong': 4000
        };
        var extOpt = $.extend(opt, options);
        $(this).each(function() {
            var $this = $(this);
            var aSlideBtn = $this.find(extOpt.btn),
                aSlidePic = $this.find(extOpt.pic),
                timer = null,
                curNow = 0,
                iNow = 0,
                loaded = false;

            if(opt.index == "true"){
                var oUlWidth = aSlideBtn.parent(),
                    aBtnLen = aSlideBtn.length;
                aBtnWidth = Math.floor(oUlWidth.width() / aBtnLen - 1);
                aSlideBtn.css("width", aBtnWidth);
            }
            var play = function() {
                timer = null;
                clearInterval(timer);
                timer = setInterval(function() {
                    tab(++curNow);
                }, extOpt.timeLong);
            };
            var stop = function() {
                clearInterval(timer);
            };
            
            //鼠标移入 轮播区域 停止
            aSlidePic.mouseenter(function() {
                stop();
            }).mouseleave(function() {
                play();
            });

            //点击按钮切换轮播
            aSlideBtn.mouseenter(function() {
                stop();
                var btnIndex = $(this).index();
                if (btnIndex != curNow) {
                    tab(btnIndex);
                }
            }).mouseleave(function() {
                play();
            });

            function tab(index) {
                aSlidePic.css({ "opacity": 0.0 });
                if (index == aSlideBtn.length) {
                    index = 0;
                }
                curNow = index;
                aSlideBtn.removeClass("active");
                aSlideBtn.eq(index).addClass("active");
                aSlidePic.removeClass("active");
                aSlidePic.eq(index).css({opacity: 0.0}).addClass("active").stop().animate({opacity: 1.0
                }, 1000, function() {
                    loaded = true;
                });
            }
            play();
        });
    };
})(jQuery);

$(function(){


});

/* *
 * 全局空间 Vcity
 * */
var Vcity = {};
/* *
 * 静态方法集
 * @name _m
 * */
Vcity._m = {
    /* 选择元素 */
    $:function (arg, context) {
        var tagAll, n, eles = [], i, sub = arg.substring(1);
        context = context || document;
        if (typeof arg == 'string') {
            switch (arg.charAt(0)) {
                case '#':
                    return document.getElementById(sub);
                    break;
                case '.':
                    if (context.getElementsByClassName) return context.getElementsByClassName(sub);
                    tagAll = Vcity._m.$('*', context);
                    n = tagAll.length;
                    for (i = 0; i < n; i++) {
                        if (tagAll[i].className.indexOf(sub) > -1) eles.push(tagAll[i]);
                    }
                    return eles;
                    break;
                default:
                    return context.getElementsByTagName(arg);
                    break;
            }
        }
    },

    /* 绑定事件 */
    on:function (node, type, handler) {
        node.addEventListener ? node.addEventListener(type, handler, false) : node.attachEvent('on' + type, handler);
    },

    /* 获取事件 */
    getEvent:function(event){
        return event || window.event;
    },

    /* 获取事件目标 */
    getTarget:function(event){
        return event.target || event.srcElement;
    },

    /* 获取元素位置 */
    getPos:function (node) {
        var scrollx = document.documentElement.scrollLeft || document.body.scrollLeft,
            scrollt = document.documentElement.scrollTop || document.body.scrollTop;
        var pos = node.getBoundingClientRect();
        return {top:pos.top + scrollt, right:pos.right + scrollx, bottom:pos.bottom + scrollt, left:pos.left + scrollx }
    },

    /* 添加样式名 */
    addClass:function (c, node) {
        if(!node)return;
        node.className = Vcity._m.hasClass(c,node) ? node.className : node.className + ' ' + c ;
    },

    /* 移除样式名 */
    removeClass:function (c, node) {
        var reg = new RegExp("(^|\\s+)" + c + "(\\s+|$)", "g");
        if(!Vcity._m.hasClass(c,node))return;
        node.className = reg.test(node.className) ? node.className.replace(reg, '') : node.className;
    },

    /* 是否含有CLASS */
    hasClass:function (c, node) {
        if(!node || !node.className)return false;
        return node.className.indexOf(c)>-1;
    },

    /* 阻止冒泡 */
    stopPropagation:function (event) {
        event = event || window.event;
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    },
    /* 去除两端空格 */
    trim:function (str) {
        return str.replace(/^\s+|\s+$/g,'');
    }
};

/* 所有城市数据,可以按照格式自行添加（北京|beijing|bj），前16条为热门城市 */
Vcity._template = [
            '<p class="tip">支持中文/英文/简拼输入</p>',
            '<b class="close"></b>',
            '<ul>',
            '<li class="on">热门城市</li>',
            '<li>ABCDE</li>',
            '<li>FGHIJ</li>',
            '<li>KLMNO</li>',
            '<li>PQRST</li>',
            '<li>UVWXYZ</li>',
            //'<li>海外</li>',
            '</ul>'
];

Vcity.allCity = ['上海|shanghai|sh','南京|nanjing|nj','苏州|suzhou|sz','北京|beijing|bj','石家庄|shijiazhuang|sjz','常州|changzhou|cz','武汉|wuhan|wh','宁波|ningbo|nb','烟台|yantai|yt','盐城|yancheng|yc','东莞|guan|dg','威海|weihai|wh','镇江|zhenjiang|zj','济南|jinan|jn','西宁|xining|xn','乌镇|wuzhen|wz','襄阳|xiangyang|xy','福鼎|fuding|fd','大庆|daqing|dq','深圳|zhen|sz','泰安|taian|ta','兰州|lanzhou|lz','西安|xian|xa','洛阳|luoyang|ly','昆明|kunming|km','嘉峪关|jiayuguan|jyg','沈阳|shenyang|sy','无锡|wuxi|wx','成都|chengdu|cd','乌鲁木齐|wulumuqi|wlmq','扬州|yangzhou|yz','南昌|nanchang|nc','汕头|shantou|st','贵阳|guiyang|gy','荆门|jingmen|jm','南通|nantong|nt','厦门|xiamen|xm','张家港|zhangjiagang|zjg','象山县|xiangshanxian|xsx','太原|taiyuan|ty','广州|guangzhou|gz','佛山|foshan|fs','嘉兴|jiaxing|jx','渭南|weinan|wn','黄山|huangshan|hs','珠海|zhuhai|zh','哈尔滨|haerbin|heb','包头|baotou|bt','蓬莱|penglai|pl','惠州|huizhou|hz','大连|dalian|dl','曲阜|qufu|qf','西双版纳|xishuangbanna|xsbn','晋城|jincheng|jc','南宁|nanning|nn','中山|zhongshan|zs','晋中|jinzhong|jz','三亚|sanya|sy','大同|datong|dt','福州|fuzhou|fz','江阴|jiangyin|jy','常熟|changshu|cs','青岛|qingdao|qd','郑州|zhengzhou|zz','信阳|xinyang|xy','济宁|jining|jn','伦敦|lundun|ld','赣州|ganzhou|gz','蚌埠|bangbu|bb','井冈山|jinggangshan|jgs','莆田|putian|pt','鄂尔多斯|eerduosi|eeds','吴江|wujiang|wj','迁安|qianan|qa','日照|rizhao|rz','巴黎|bali|bl','延安|yanan|ya','喀什|kashi|ks','榆林|yulin|yl','莱阳|laiyang|ly','重庆|zhongqing|zq','温州|wenzhou|wz','唐山|tangshan|ts','张家界|zhangjiajie|zjj','自贡|zigong|zg','都江堰|dujiangyan|djy','曲靖|qujing|qj','太仓|taicang|tc','宜昌|yichang|yc','海宁|haining|hn','柏林|bailin|bl','湖州|huzhou|hz','呼和浩特|huhehaote|hhht','天津|tianjin|tj','杭州|hangzhou|hz','合肥|hefei|hf','长春|changchun|cc','长沙|changsha|cs','昆山|kunshan|ks','徐州|xuzhou|xz','临沂|linyi|ly','舟山|zhoushan|zs','泰州|taizhou|tz','里昂|liang|la','淄博|zibo|zb','宿迁|suqian|sq','张家口|zhangjiakou|zjk','潍坊|weifang|wf','十堰|shiyan|sy','连云港|lianyungang|lyg','宝鸡|baoji|bj','慈溪|cixi|cx','廊坊|langfang|lf','银川|yinchuan|yc','泉州|quanzhou|qz','清远|qingyuan|qy','秦皇岛|qinhuangdao|qhd','淮安|huaian|ha','保定|baoding|bd','锦州|jinzhou|jz','乌兰察布|wulanchabu|wlcb','诸暨|ji|zj','商丘|shangqiu|sq','宜兴|yixing|yx','枣庄|zaozhuang|zz','芜湖|wuhu|wh','滨州|binzhou|bz','松原|songyuan|sy','天台县|tiantaixian|ttx','鹰潭|yingtan|yt','句容|jurong|jr','拉萨|lasa|ls','淮北|huaibei|hb','浦江县|pujiangxian|pjx','九江|jiujiang|jj','抚顺|fushun|fs','通化|tonghua|th','巢湖|chaohu|ch','新乡|xinxiang|xx','扬中|yangzhong|yz','乌兰浩特|wulanhaote|wlht','绵阳|mianyang|my','东台|dongtai|dt','宜春|yichun|yc','安阳|anyang|ay','本溪|benxi|bx','景德镇|jingdezhen|jdz','伊春|yichun|yc','铜陵|tongling|tl','周口|zhoukou|zk','漯河|luo|lh','荷泽|heze|hz','浏阳|liu|ly','普罗旺斯|puluowangsi|plws','鹤壁|hebi|hb','桂林|guilin|gl','霸州|bazhou|bz','营口|yingkou|yk','安康|ankang|ak','咸宁|xianning|xn','溧阳|liyang|ly','义乌|yiwu|yw','淮南|huainan|hn','胶州|jiaozhou|jz','靖江|jingjiang|jj','安庆|anqing|aq','盘锦|panjin|pj','平遥县|pingyaoxian|pyx','宿州|suzhou|sz','尼斯|nisi|ns','开封|kaifeng|kf','荆州|jingzhou|jz','运城|yuncheng|yc','诸城|zhucheng|zc','桐庐县|tongluxian|tlx','衡水|hengshui|hs','长治|changzhi|cz','临海|linhai|lh','沧州|cangzhou|cz','海口|haikou|hk','台州|taizhou|tz','攀枝花|panzhihua|pzh','宣城|xuancheng|xc','绍兴|shaoxing|sx','南阳|nanyang|ny','肇庆|zhaoqing|zq','东营|dongying|dy','金华|jinhua|jh','朝阳|chaoyang|cy','许昌|xuchang|xc','龙岩|longyan|ly','马赛|masai|ms','通辽|tongliao|tl','武夷山|wuyishan|wys','聊城|liaocheng|lc','胶南|jiaonan|jn','天水|tianshui|ts','德州|dezhou|dz','焦作|zuo|jz','梅州|meizhou|mz','延边朝鲜|yanbianchaoxian|ybcx','汉中|hanzhong|hz','马鞍山|maanshan|mas','九寨沟|jiuzhaigou|jzg','玉山县|yushanxian|ysx','丽江|lijiang|lj','岳阳|yueyang|yy','阜新|fuxin|fx','承德|chengde|cd','首尔|shouer|se','柳州|liuzhou|lz','永康|yongkang|yk','宜宾|yibin|yb','吉安|jian|ja','上饶|shangrao|sr','鞍山|anshan|as','吉林|jilin|jl','莱芜|laiwu|lw','温岭|wenling|wl','邢台|xingtai|xt','德阳|deyang|dy','株洲|zhuzhou|zz','波尔多|boerduo|bed','阜阳|fuyang|fy'];

Vcity.hotCity_2=['上海','北京','南京','苏州','武汉','西安','天津','厦门','杭州','成都','广州','深圳','沈阳','无锡','青岛','郑州','重庆','三亚','哈尔滨','太原'];

/* 正则表达式 筛选中文城市名、拼音、首字母 */

Vcity.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;
Vcity.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;

/* *
 * 格式化城市数组为对象oCity，按照a-h,i-p,q-z,hot热门城市分组：
 * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{i:[1.2.3],j:[1,2,3]},QRSTUVWXYZ:{}}
 * */

(function () {
    var citys = Vcity.allCity, match, letter,
        regEx = Vcity.regEx,
        reg2 = /^[a-h]$/i, reg3 = /^[i-p]$/i, reg4 = /^[q-z]$/i;
    if (!Vcity.oCity) {
        Vcity.oCity = {hot:{},ABCDEFGH:{}, IJKLMNOP:{}, QRSTUVWXYZ:{}};
        //console.log(citys.length);
        for (var i = 0, n = citys.length; i < n; i++) {
            match = regEx.exec(citys[i]);
            letter = match[3].toUpperCase();
            if (reg2.test(letter)) {
                if (!Vcity.oCity.ABCDEFGH[letter]) 
				    Vcity.oCity.ABCDEFGH[letter] = [];
                    Vcity.oCity.ABCDEFGH[letter].push(match[1]);
            } else if (reg3.test(letter)) {
                if (!Vcity.oCity.IJKLMNOP[letter])
			        Vcity.oCity.IJKLMNOP[letter] = [];
                    Vcity.oCity.IJKLMNOP[letter].push(match[1]);
            } else if (reg4.test(letter)) {
                if (!Vcity.oCity.QRSTUVWXYZ[letter]) Vcity.oCity.QRSTUVWXYZ[letter] = [];
                Vcity.oCity.QRSTUVWXYZ[letter].push(match[1]);
            }
            /* 热门城市 前16条 */
            if(i<Vcity.hotCity_2.length){
                if(!Vcity.oCity.hot['hot']) Vcity.oCity.hot['hot'] = [];
                Vcity.oCity.hot['hot'].push(Vcity.hotCity_2[i]);
            }
        }
    }
})();


/* *
 * 城市控件构造函数
 * @CitySelector
 * */

Vcity.CitySelector = function () {
    this.initialize.apply(this, arguments);
};

Vcity.CitySelector.prototype = {

    constructor:Vcity.CitySelector,

    /* 初始化 */

    initialize :function (options) {
        var input = options.input;
        this.input = Vcity._m.$('#'+ input);
        this.inputEvent();
    },

    /* *
     * @createWarp
     * 创建城市BOX HTML 框架
     * */

    createWarp:function(){
        var inputPos = Vcity._m.getPos(this.input);
        var div = this.rootDiv = document.createElement('div');
        var that = this;

        // 设置DIV阻止冒泡
        Vcity._m.on(this.rootDiv,'click',function(event){
            Vcity._m.stopPropagation(event);
        });

        // 设置点击文档隐藏弹出的城市选择框
        Vcity._m.on(document, 'click', function (event) {
            event = Vcity._m.getEvent(event);
            var target = Vcity._m.getTarget(event);
            if(target == that.input) return false;
            //console.log(target.className);
            if (that.cityBox)Vcity._m.addClass('hide', that.cityBox);
            if (that.ul)Vcity._m.addClass('hide', that.ul);
            if(that.myIframe)Vcity._m.addClass('hide',that.myIframe);
        });
        div.className = 'citySelector';
        div.style.position = 'absolute';
        div.style.left = inputPos.left + 'px';
        div.style.top = inputPos.bottom + 'px';
        div.style.zIndex = 999999;

        // 判断是否IE6，如果是IE6需要添加iframe才能遮住SELECT框
        var isIe = (document.all) ? true : false;
        var isIE6 = this.isIE6 = isIe && !window.XMLHttpRequest;
        if(isIE6){
            var myIframe = this.myIframe =  document.createElement('iframe');
            myIframe.frameborder = '0';
            myIframe.src = 'about:blank';
            myIframe.style.position = 'absolute';
            myIframe.style.zIndex = '-1';
            this.rootDiv.appendChild(this.myIframe);
        }

        var childdiv = this.cityBox = document.createElement('div');
        childdiv.className = 'cityBox';
        childdiv.id = 'cityBox';
        childdiv.innerHTML = Vcity._template.join('');
        var hotCity = this.hotCity =  document.createElement('div');
        hotCity.className = 'hotCity';
        childdiv.appendChild(hotCity);
        div.appendChild(childdiv);
        this.createHotCity();
		$(".cityBox .close").click(function(){Vcity._m.addClass('hide',that.cityBox);});	
    },

    /* *
     * @createHotCity
     * TAB下面DIV：hot,a-h,i-p,q-z 分类HTML生成，DOM操作
     * {HOT:{hot:[]},ABCDEFGH:{a:[1,2,3],b:[1,2,3]},IJKLMNOP:{},QRSTUVWXYZ:{}}
     **/

    createHotCity:function(){
        var odiv,odl,odt,odd,odda=[],str,key,ckey,sortKey,regEx = Vcity.regEx,
            oCity = Vcity.oCity;
        for(key in oCity){
            odiv = this[key] = document.createElement('div');
            // 先设置全部隐藏hide
            odiv.className = key + ' ' + 'cityTab hide';
            sortKey=[];
            for(ckey in oCity[key]){
                sortKey.push(ckey);
                // ckey按照ABCDEDG顺序排序
                sortKey.sort();
            }
            for(var j=0,k = sortKey.length;j<k;j++){
                odl = document.createElement('dl');
                odt = document.createElement('dt');
                odd = document.createElement('dd');
                odt.innerHTML = sortKey[j] == 'hot'?'&nbsp;':sortKey[j];
                odda = [];
                for(var i=0,n=oCity[key][sortKey[j]].length;i<n;i++){
                    str = '<a href="javascript:">' + oCity[key][sortKey[j]][i] + '</a>';
                    odda.push(str);
                }
                odd.innerHTML = odda.join('');
                odl.appendChild(odt);
                odl.appendChild(odd);
                odiv.appendChild(odl);
            }

            // 移除热门城市的隐藏CSS
            Vcity._m.removeClass('hide',this.hot);
            this.hotCity.appendChild(odiv);
        }
        document.body.appendChild(this.rootDiv);
        /* IE6 */
        this.changeIframe();

        this.tabChange();
        this.linkEvent();
		
    },

    /* *
     *  tab按字母顺序切换
     *  @ tabChange
     * */

    tabChange:function(){
        var lis = Vcity._m.$('li',this.cityBox);
        var divs = Vcity._m.$('div',this.hotCity);
        var that = this;
        for(var i=0,n=lis.length;i<n;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var j=0;j<n;j++){
                    Vcity._m.removeClass('on',lis[j]);
                    Vcity._m.addClass('hide',divs[j]);
                }
                Vcity._m.addClass('on',this);
                Vcity._m.removeClass('hide',divs[this.index]);
                /* IE6 改变TAB的时候 改变Iframe 大小*/
                that.changeIframe();
            };
        }
    },

    /* *
     * 城市LINK事件
     *  @linkEvent
     * */

    linkEvent:function(){
        var links = Vcity._m.$('a',this.hotCity);
        var that = this;
        for(var i=0,n=links.length;i<n;i++){
            links[i].onclick = function(){
                that.input.value = this.innerHTML;
                Vcity._m.addClass('hide',that.cityBox);
                /* 点击城市名的时候隐藏myIframe */
                Vcity._m.addClass('hide',that.myIframe);
            }
        }
    },

    /* *
     * INPUT城市输入框事件
     * @inputEvent
     * */

    inputEvent:function(){
        var that = this;
        Vcity._m.on(this.input,'click',function(event){
            event = event || window.event;
            if(!that.cityBox){
                that.createWarp();
            }else if(!!that.cityBox && Vcity._m.hasClass('hide',that.cityBox)){
                // slideul 不存在或者 slideul存在但是是隐藏的时候 两者不能共存
                if(!that.ul || (that.ul && Vcity._m.hasClass('hide',that.ul))){
                    Vcity._m.removeClass('hide',that.cityBox);

                    /* IE6 移除iframe 的hide 样式 */
                    //alert('click');
                    Vcity._m.removeClass('hide',that.myIframe);
                    that.changeIframe();
                }
            }
        });
        Vcity._m.on(this.input,'focus',function(){
            that.input.select();
            if (that.input.value == '城市名称' || that.input.value == 'City Name') that.input.value = '';
        });
        Vcity._m.on(this.input,'blur',function(){
            if(that.input.value == '' && lang_val == "zh-CN") that.input.value = '城市名称';
            if(that.input.value == '' && lang_val == "en") that.input.value = 'City Name';
        });
        Vcity._m.on(this.input,'keyup',function(event){
            event = event || window.event;
            var keycode = event.keyCode;
            Vcity._m.addClass('hide', that.cityBox);



            that.createUl();

            /* 移除iframe 的hide 样式 */
            Vcity._m.removeClass('hide',that.myIframe);

            // 下拉菜单显示的时候捕捉按键事件
            if(that.ul && !Vcity._m.hasClass('hide',that.ul) && !that.isEmpty){
                that.KeyboardEvent(event,keycode);
            }
        });
    },

    createUl: function () {
        //console.log('createUL');
        var str;
        var oCityHtml;
        var value = Vcity._m.trim(this.input.value);
        // 当value不等于空的时候执行
        if (value !== '') {
            //var reg = new RegExp("^" + value + "|\\|" + value, 'gi');

            // for (var i = 0, n = Vcity.allCity.length; i < n; i++) {
            //     if (reg.test(Vcity.allCity[i])) {
            //         var match = Vcity.regEx.exec(Vcity.allCity[i]);
            //         if (searchResult.length !== 0) {
            //             str = '<li><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
            //         } else {
            //             str = '<li class="on"><b class="cityname">' + match[1] + '</b><b class="cityspell">' + match[2] + '</b></li>';
            //         }
            //         searchResult.push(str);
            //     }
            // }
            var param = {
                "language": "zh-cn",
                "linkageWord": value
            }
            var that = this;

            $.ajax({
                type: 'POST',
                url: '/service/queryEsCity',
                dataType: 'json',
                data: param,
                async: false,
                cache: false,
                success: function (data) {
                    var result = JSON.parse(data);
                    //console.log(result);
                    if (result && result.Success && result.List && result.List.length > 0 && result.HotelList && result.HotelList.length > 0) {
                        var oCityHtml = that.createSearchCityStr(result);
                        var str = that.createSearchHotelStr(result);
                        that.createSearchCityUI(str, oCityHtml, result, value);

                    }
                    else if (result && result.Success && result.List && result.List.length > 0 && result.HotelList && result.HotelList.length == 0) {
                        var oCityHtml = that.createSearchCityStr(result);
                        var str = "";
                        that.createSearchCityUI(str, oCityHtml, result, value);

                    }
                    else if (result && result.Success && result.List && result.List.length == 0 && result.HotelList && result.HotelList.length > 0) {
                        var array = new Array();
                        for (var i = 0; i < result.HotelList.length; i++) {
                            if ($.inArray(result.HotelList[i].cityNameValueZH, array) < 0) {
                                result.List.push({ "nameValueEN": result.HotelList[i].cityNameValueEN, "nameValueJA": result.HotelList[i].cityNameValueJA, "nameValueZH": result.HotelList[i].cityNameValueZH, "latitude": "", "longitude": "", "simpleSpell": "" })
                                array.push(result.HotelList[i].cityNameValueZH);
                            }
                        }
                        var oCityHtml = that.createSearchCityStr(result);
                        var str = that.createSearchHotelStr(result);
                        that.createSearchCityUI(str, oCityHtml, result, value);
                        //var city = {"nameValueEN":"shangrao","nameValueJA":"上饒","nameValueZH":"上饶","latitude":"","longitude":"","simpleSpell":""};
                    }
                    else {
                        //var oCityHtml = that.createSearchCityStr(result);
                        //var str = that.createSearchHotelStr(result);
                        that.createSearchCityUI("", "", result, value);
                        //var param = {
                        //    city: "",
                        //    word: value,
                        //    language: $("#contextLanguage").val()
                        //    //language: 'zh-CN' //TODO: temp haard code
                        //};
                        //$.ajax({
                        //    type: 'POST',
                        //    url: "/service/queryEsKeyword",
                        //    dataType: 'JSON',
                        //    data: param,
                        //    cache: false,
                        //    async: false,
                        //    success: function (responseData) {
                        //        var result = JSON.parse(responseData);

                        //        var myhtml = "";
                        //        if (result != undefined && result != null && result.keywords != undefined && result.keywords != null) {
                        //            var len = result.keywords.length;

                        //            var keywordsSTR = that.createSearchKeywordStr(result);

                        //            that.createSearchCityUI(keywordsSTR, "", result, value);


                        //        }
                        //    },
                        //    error: function (jqXHR, textStatus, errorThrown) {
                        //        //console.log("Error:", errorThrown);
                        //    }
                        //});
                    }
                }
            });



        } else {
            Vcity._m.addClass('hide', this.div);
            Vcity._m.removeClass('hide', this.cityBox);

            Vcity._m.removeClass('hide', this.myIframe);

            this.changeIframe();
        }
        $('.citySelector').find('.cityslide').find('li').eq(0).addClass('on');
        $(".cityslide").find(".cityslide_adress").hover(function () {
            $('.citySelector').find('.cityslide').find('li').eq(0).removeClass('on');
        }, function () {

        });
    },
    createSearchCityUI: function (str, oCityHtml, model, value) {
        var searchResult = [];
        //判断是否是城市
        if (oCityHtml && oCityHtml != "" && str && str != "") {
            str = oCityHtml + str;
        }
        else if (oCityHtml && oCityHtml != "") {
            str = oCityHtml;
        }
        //判断数据是否有结果
        if (str && str != "") {
            searchResult.push(str);
        }

        this.isEmpty = false;
        // 如果搜索数据为空
        if (searchResult.length == 0) {
            this.isEmpty = true;

            str = '<div class="empty">对不起，没有找到数据 "<em>' + value + '</em>"</div>';
            searchResult.push(str);
        }
        // 如果slideul不存在则添加ul
        if (!this.div) {
            var div = this.div = document.createElement('div');
            div.className = 'cityslide';
            this.rootDiv && this.rootDiv.appendChild(div);
            // 记录按键次数，方向键
            this.count = 0;
        } else if (this.div && Vcity._m.hasClass('hide', this.div)) {
            this.count = 0;
            Vcity._m.removeClass('hide', this.div);
        }
        this.div.innerHTML = searchResult.join('');
        //第一个li赋值选中on

        /* IE6 */
        this.changeIframe();

        // 绑定Li事件
        this.liEvent();
        this.cityEvent();
    },
    createSearchCityStr: function (model) {

        var count = 7;
        //if (model.List.length < 7) {
        count = model.List.length;
        //}

        var oCityHtml = "";
        //var currentlang = $("#contextLanguage").val();
        oCityHtml = '<span class="cityslide_head">城市</span>';
        //if (currentlang == "en") {
        //    for (var i = 0; i < count; i++) {
        //        oCityHtml += '<div class="cityslide_adress"><a href="javascript:;">' + model.List[i].nameValueEN + '</a><a  href="javascript:;" class="city_letter">' + model.List[i].nameValueEN + '</a></div>';
        //    }
        //} else if (currentlang == "ja-JP") {
        //    for (var i = 0; i < count; i++) {
        //        oCityHtml += '<div class="cityslide_adress"><a href="javascript:;">' + model.List[i].nameValueJA + '</a><a  href="javascript:;" class="city_letter">' + model.List[i].nameValueEN + '</a></div>';
        //    }
        //} else {
            for (var i = 0; i < count; i++) {

                oCityHtml += '<div class="cityslide_adress"><a href="javascript:;">' + model.List[i].nameValueZH + '</a><a  href="javascript:;" class="city_letter">' + model.List[i].nameValueEN + '</a></div>';
            }
         //}
        return oCityHtml;
    },
    createSearchHotelStr: function (model) {

        var str = "";
        var count = 7;
        if (model.HotelList.length < 7) {
            count = model.HotelList.length;
        }

        //var currentlang = $("#contextLanguage").val();
        str = '<span class="cityslide_head">酒店</span><ul class="cityslide_hotel">';
        //if (currentlang == "en") {
        //    for (var i = 0; i < count; i++) {

        //        str += '<li><b class="cityslide_hotel_name">' + model.HotelList[i].hotelNameValueZH + '</b><b class="cityslide_hotel_adress">' + model.HotelList[i].cityNameValueEN + '</b></li>';
        //    }
        //} else if (currentlang == "ja-JP") {
        //    for (var i = 0; i < count; i++) {


        //        str += '<li><b class="cityslide_hotel_name">' + model.HotelList[i].hotelNameValueJA + '</b><b class="cityslide_hotel_adress">' + model.HotelList[i].cityNameValueJA + '</b></li>';
        //    }
        //} else {
            for (var i = 0; i < count; i++) {

                str += '<li><b class="cityslide_hotel_name">' + model.HotelList[i].hotelNameValueZH + '</b><b class="cityslide_hotel_adress">' + model.HotelList[i].cityNameValueZH + '</b></li>';
            }
        //}
        str += '</ul>';
        return str;
    },
    /* IE6的改变遮罩SELECT 的 IFRAME尺寸大小 */
    changeIframe:function(){
        if(!this.isIE6)return;
        this.myIframe.style.width = this.rootDiv.offsetWidth + 'px';
        this.myIframe.style.height = this.rootDiv.offsetHeight + 'px';
    },

    /* *
     * 特定键盘事件，上、下、Enter键
     * @ KeyboardEvent
     * */

    KeyboardEvent:function(event,keycode){
        var lis = Vcity._m.$('li',this.ul);
        var len = lis.length;
        switch(keycode){
            case 40: //向下箭头↓
                this.count++;
                if(this.count > len-1) this.count = 0;
                for(var i=0;i<len;i++){
                    Vcity._m.removeClass('on',lis[i]);
                }
                Vcity._m.addClass('on',lis[this.count]);
                break;
            case 38: //向上箭头↑
                this.count--;
                if(this.count<0) this.count = len-1;
                for(i=0;i<len;i++){
                    Vcity._m.removeClass('on',lis[i]);
                }
                Vcity._m.addClass('on',lis[this.count]);
                break;
            case 13: // enter键
                this.input.value = Vcity.regExChiese.exec(lis[this.count].innerHTML)[0];
                Vcity._m.addClass('hide',this.ul);
                Vcity._m.addClass('hide',this.ul);
                /* IE6 */
                Vcity._m.addClass('hide',this.myIframe);
                break;
            default:
                break;
        }
    },

    /* *
     * 下拉列表的li事件
     * @ liEvent
     * */

    liEvent: function () {
        var that = this;
        var lis = Vcity._m.$('li', that.div);
        //console.log(lis[1]);
        for (var i = 0, n = lis.length; i < n; i++) {
            var liobj = lis[i];
            (function (lio) {
                Vcity._m.on(lio, 'click', function (event) {
                    event = Vcity._m.getEvent(event);
                    var target = Vcity._m.getTarget(event);
                    //that.input.value = Vcity.regExChiese.exec(target.innerHTML)[0];

                    //that.input.value = $(this).find('b')[1].innerHTML;
                    that.input.value = $(lio).find('b')[1].innerHTML;
                    //$(this).find('b:eq(1)').html()
                    Vcity._m.addClass('hide', that.div);
                    //关键字框赋值酒店名称
                    //$('.kw').find('.kw_input').attr('value', $(this).find('b')[0].innerHTML);
                    $('.kw').find('.kw_input').attr('value', $(lio).find('b')[0].innerHTML);
                    $('.kw').find('.kw_input').next().hide();

                    /* IE6 下拉菜单点击事件 */
                    Vcity._m.addClass('hide', that.myIframe);
                });
            })(liobj);

            Vcity._m.on(lis[i], 'mouseover', function (event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.addClass('on', target);
            });
            Vcity._m.on(lis[i], 'mouseout', function (event) {
                event = Vcity._m.getEvent(event);
                var target = Vcity._m.getTarget(event);
                Vcity._m.removeClass('on', target);
            })
        }
    },

    cityEvent: function () {
        var that = this;
        var lis = Vcity._m.$('.cityslide_adress', that.div);
        //console.log(lis[1]);
        if (lis && lis.length > 0) {
            for (var i = 0, n = lis.length; i < n; i++) {

                var liobj = lis[i];
                (function (lio) {
                    Vcity._m.on(lio, 'click', function (event) {
                        event = Vcity._m.getEvent(event);
                        var target = Vcity._m.getTarget(event);
                        //that.input.value = Vcity.regExChiese.exec(target.innerHTML)[0];
                        that.input.value = $(lio).find('a')[0].innerHTML;
                        $('.kw').find('.kw_input').attr('value', "");
                        $('.kw').find('.kw_input').next().show();
                        Vcity._m.addClass('hide', that.div);
                        //关键字框赋值酒店名称
                        //$('.kw').find('.kw_input').attr('value', $(this).find('b')[0].innerHTML);
                        //$('.kw').find('.kw_input').next().hide();

                        /* IE6 下拉菜单点击事件 */
                        Vcity._m.addClass('hide', that.myIframe);
                    });
                })(liobj);


                //Vcity._m.on(lis[i], 'mouseover', function (event) {
                //    event = Vcity._m.getEvent(event);
                //    var target = Vcity._m.getTarget(event);
                //    Vcity._m.addClass('on', target);
                //});
                //Vcity._m.on(lis[i], 'mouseout', function (event) {
                //    event = Vcity._m.getEvent(event);
                //    var target = Vcity._m.getTarget(event);
                //    Vcity._m.removeClass('on', target);
                //})
            }
        }
    }


};

/*
 *
 * jqTransform
 * by mathieu vilaplana mvilaplana@dfc-e.com
 * Designer ghyslain armand garmand@dfc-e.com
 *
 *
 * Version 1.0 25.09.08
 * Version 1.1 06.08.09
 * Add event click on Checkbox and Radio
 * Auto calculate the size of a select element
 * Can now, disabled the elements
 * Correct bug in ff if click on select (overflow=hidden)
 * No need any more preloading !!
 * 
 ******************************************** */
 
;;;(function($){
	var defaultOptions = {preloadImg:true};
	var jqTransformImgPreloaded = false;

	var jqTransformPreloadHoverFocusImg = function(strImgUrl) {
		//guillemets to remove for ie
		strImgUrl = strImgUrl.replace(/^url\((.*)\)/,'$1').replace(/^\"(.*)\"$/,'$1');
		var imgHover = new Image();
		imgHover.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-hover.$1');
		var imgFocus = new Image();
		imgFocus.src = strImgUrl.replace(/\.([a-zA-Z]*)$/,'-focus.$1');				
	};

	
	/***************************
	  Labels
	***************************/
	var jqTransformGetLabel = function(objfield){
		var selfForm = $(objfield.get(0).form);
		var oLabel = objfield.next();
		if(!oLabel.is('label')) {
			oLabel = objfield.prev();
			if(oLabel.is('label')){
				var inputname = objfield.attr('id');
				if(inputname){
					oLabel = selfForm.find('label[for="'+inputname+'"]');
				} 
			}
		}
		if(oLabel.is('label')){return oLabel.css('cursor','pointer');}
		return false;
	};
	
	/* Hide all open selects */
	var jqTransformHideSelect = function(oTarget){
		var ulVisible = $('.jqTransformSelectWrapper ul:visible');
		ulVisible.each(function(){
			var oSelect = $(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
			//do not hide if click on the label object associated to the select
			if( !(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0)) ){$(this).hide();}
		});
	};
	/* Check for an external click */
	var jqTransformCheckExternalClick = function(event) {
		if ($(event.target).parents('.jqTransformSelectWrapper').length === 0) { jqTransformHideSelect($(event.target)); }
	};

	/* Apply document listener */
	var jqTransformAddDocumentListener = function (){
		$(document).mousedown(jqTransformCheckExternalClick);
	};	
			
	/* Add a new handler for the reset action */
	var jqTransformReset = function(f){
		var sel;
		$('.jqTransformSelectWrapper select', f).each(function(){sel = (this.selectedIndex<0) ? 0 : this.selectedIndex; $('ul', $(this).parent()).each(function(){$('a:eq('+ sel +')', this).click();});});
		$('a.jqTransformCheckbox, a.jqTransformRadio', f).removeClass('jqTransformChecked');
		$('input:checkbox, input:radio', f).each(function(){if(this.checked){$('a', $(this).parent()).addClass('jqTransformChecked');}});
	};

	/***************************
	  Buttons
	 ***************************/
	$.fn.jqTransInputButton = function(){
		return this.each(function(){
			var newBtn = $('<button id="'+ this.id +'" name="'+ this.name +'" type="'+ this.type +'" class="'+ this.className +' jqTransformButton"><span>'+ $(this).attr('value') +'</span>')
				.hover(function(){newBtn.addClass('jqTransformButton_hover');},function(){newBtn.removeClass('jqTransformButton_hover')})
				.mousedown(function(){newBtn.addClass('jqTransformButton_click')})
				.mouseup(function(){newBtn.removeClass('jqTransformButton_click')})
			;
			$(this).replaceWith(newBtn);
		});
	};
	
	/***************************
	  Text Fields 
	 ***************************/
//	$.fn.jqTransInputText = function(){
//		return this.each(function(){
//			var $input = $(this);
//	
//			if($input.hasClass('jqtranformdone') || !$input.is('input')) {return;}
//			$input.addClass('jqtranformdone');
//	
//			var oLabel = jqTransformGetLabel($(this));
//			oLabel && oLabel.bind('click',function(){$input.focus();});
//	
//			var inputSize=$input.width();
//			if($input.attr('size')){
//				inputSize = $input.attr('size')*10;
//				$input.css('width',inputSize);
//			}
//			
//			$input.addClass("jqTransformInput").wrap('<div class="jqTransformInputWrapper"><div class="jqTransformInputInner"><div></div></div></div>');
//			var $wrapper = $input.parent().parent().parent();
//			$wrapper.css("width", inputSize+10);
//			$input
//				.focus(function(){$wrapper.addClass("jqTransformInputWrapper_focus");})
//				.blur(function(){$wrapper.removeClass("jqTransformInputWrapper_focus");})
//				.hover(function(){$wrapper.addClass("jqTransformInputWrapper_hover");},function(){$wrapper.removeClass("jqTransformInputWrapper_hover");})
//			;
//	
//			/* If this is safari we need to add an extra class */
//			$.browser.safari && $wrapper.addClass('jqTransformSafari');
//			$.browser.safari && $input.css('width',$wrapper.width()+16);
//			this.wrapper = $wrapper;
//			
//		});
//	};
	
	/***************************
	  Check Boxes 
	 ***************************/	
	$.fn.jqTransCheckBox = function(){
		return this.each(function(){
			if($(this).hasClass('jqTransformHidden')) {return;}

			var $input = $(this);
			var inputSelf = this;

			//set the click on the label
			var oLabel=jqTransformGetLabel($input);
			oLabel && oLabel.click(function(){aLink.trigger('click');});
			
			var aLink = $('<a href="#" class="jqTransformCheckbox"></a>');
			//wrap and add the link
			$input.addClass('jqTransformHidden').wrap('<span class="jqTransformCheckboxWrapper"></span>').parent().prepend(aLink);
			//on change, change the class of the link
			$input.change(function(){
				this.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
				return true;
			});
			// Click Handler, trigger the click and change event on the input
			aLink.click(function(){
				//do nothing if the original input is disabled
				if($input.attr('disabled')){return false;}
				//trigger the envents on the input object
				$input.trigger('click').trigger("change");	
				return false;
			});

			// set the default state
			this.checked && aLink.addClass('jqTransformChecked');		
		});
	};
	/***************************
	  Radio Buttons 
	 ***************************/	
	$.fn.jqTransRadio = function(){
		return this.each(function(){
			if($(this).hasClass('jqTransformHidden')) {return;}

			var $input = $(this);
			var inputSelf = this;
				
			oLabel = jqTransformGetLabel($input);
			oLabel && oLabel.click(function(){aLink.trigger('click');});
	
			var aLink = $('<a href="#" class="jqTransformRadio" rel="'+ this.name +'"></a>');
			$input.addClass('jqTransformHidden').wrap('<span class="jqTransformRadioWrapper"></span>').parent().prepend(aLink);
			
			$input.change(function(){
				inputSelf.checked && aLink.addClass('jqTransformChecked') || aLink.removeClass('jqTransformChecked');
				return true;
			});
			// Click Handler
			aLink.click(function(){
				if($input.attr('disabled')){return false;}
				$input.trigger('click').trigger('change');
	
				// uncheck all others of same name input radio elements
				$('input[name="'+$input.attr('name')+'"]',inputSelf.form).not($input).each(function(){
					$(this).attr('type')=='radio' && $(this).trigger('change');
				});
	
				return false;					
			});
			// set the default state
			inputSelf.checked && aLink.addClass('jqTransformChecked');
		});
	};
	
	/***************************
	  TextArea 
	 ***************************/	
	$.fn.jqTransTextarea = function(){
		return this.each(function(){
			var textarea = $(this);
	
			if(textarea.hasClass('jqtransformdone')) {return;}
			textarea.addClass('jqtransformdone');
	
			oLabel = jqTransformGetLabel(textarea);
			oLabel && oLabel.click(function(){textarea.focus();});
			
			var strTable = '<table cellspacing="0" cellpadding="0" border="0" class="jqTransformTextarea">';
			strTable +='<tr><td id="jqTransformTextarea-tl"></td><td id="jqTransformTextarea-tm"></td><td id="jqTransformTextarea-tr"></td></tr>';
			strTable +='<tr><td id="jqTransformTextarea-ml">&nbsp;</td><td id="jqTransformTextarea-mm"><div></div></td><td id="jqTransformTextarea-mr">&nbsp;</td></tr>';	
			strTable +='<tr><td id="jqTransformTextarea-bl"></td><td id="jqTransformTextarea-bm"></td><td id="jqTransformTextarea-br"></td></tr>';
			strTable +='</table>';					
			var oTable = $(strTable)
					.insertAfter(textarea)
					.hover(function(){
						!oTable.hasClass('jqTransformTextarea-focus') && oTable.addClass('jqTransformTextarea-hover');
					},function(){
						oTable.removeClass('jqTransformTextarea-hover');					
					})
				;
				
			textarea
				.focus(function(){oTable.removeClass('jqTransformTextarea-hover').addClass('jqTransformTextarea-focus');})
				.blur(function(){oTable.removeClass('jqTransformTextarea-focus');})
				.appendTo($('#jqTransformTextarea-mm div',oTable))
			;
			this.oTable = oTable;
			if($.browser.safari){
				$('#jqTransformTextarea-mm',oTable)
					.addClass('jqTransformSafariTextarea')
					.find('div')
						.css('height',textarea.height())
						.css('width',textarea.width())
				;
			}
		});
	};
	
	/***************************
	  Select 
	 ***************************/	
	$.fn.jqTransSelect = function(){
		return this.each(function(index){
			var $select = $(this);

			if($select.hasClass('jqTransformHidden')) {return;}
			if($select.attr('multiple')) {return;}

			var oLabel  =  jqTransformGetLabel($select);
			/* First thing we do is Wrap it */
			var $wrapper = $select
				.addClass('jqTransformHidden')
				.wrap('<div class="jqTransformSelectWrapper"></div>')
				.parent()
				.css({zIndex: 10-index})
			;
		
			/* Now add the html for the select */
			$wrapper.prepend('<div><span></span><a href="#" class="jqTransformSelectOpen"></a></div><ul></ul>');
			var $ul = $('ul', $wrapper).css('width',$select.width()).hide();
			/* Now we add the options */
			$('option', this).each(function(i){
				var oLi = $('<li><a href="#" index="'+ i +'">'+ $(this).html() +'</a></li>');
				$ul.append(oLi);
			});
			
			/* Add click handler to the a */
			$ul.find('a').click(function(){
					$('a.selected', $wrapper).removeClass('selected');
					$(this).addClass('selected');	
					/* Fire the onchange event */
					if ($select[0].selectedIndex != $(this).attr('index') && $select[0].onchange) { $select[0].selectedIndex = $(this).attr('index'); $select[0].onchange(); }
					$select[0].selectedIndex = $(this).attr('index');
					$('span:eq(0)', $wrapper).html($(this).html());
					$ul.hide();
					return false;
			});
			/* Set the default */
			$('a:eq('+ this.selectedIndex +')', $ul).click();
			$('span:first', $wrapper).click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
			oLabel && oLabel.click(function(){$("a.jqTransformSelectOpen",$wrapper).trigger('click');});
			this.oLabel = oLabel;
			
			/* Apply the click handler to the Open */
			var oLinkOpen = $('a.jqTransformSelectOpen', $wrapper)
				.click(function(){
					//Check if box is already open to still allow toggle, but close all other selects
					if( $ul.css('display') == 'none' ) {jqTransformHideSelect();} 
					if($select.attr('disabled')){return false;}

					$ul.slideToggle('fast', function(){					
						var offSet = ($('a.selected', $ul).offset().top - $ul.offset().top);
						$ul.animate({scrollTop: offSet});
					});
					return false;
				})
			;

			// Set the new width
			var iSelectWidth = $select.outerWidth();
			var oSpan = $('span:first',$wrapper);
			var newWidth = (iSelectWidth > oSpan.innerWidth()) ? iSelectWidth + oLinkOpen.outerWidth() : $wrapper.width();
			if ($select.attr('id') == 'main_0_ddlOrderTypeIntergral')
			{
			    $wrapper.css('width', '135px');
			    $ul.css('width', '135px');
			    oSpan.css({ width: '135px' });
			}
			else {
			    $wrapper.css('width', newWidth);
			    $ul.css('width', newWidth - 2);
			    oSpan.css({ width: iSelectWidth });
			}
		
			// Calculate the height if necessary, less elements that the default height
			//show the ul to calculate the block, if ul is not displayed li height value is 0
			$ul.css({display:'block',visibility:'hidden'});
			var iSelectHeight = ($('li',$ul).length)*($('li:first',$ul).height());//+1 else bug ff
			(iSelectHeight < $ul.height()) && $ul.css({height:iSelectHeight,'overflow':'hidden'});//hidden else bug with ff
			$ul.css({ display: 'none', visibility: 'visible' });

		});
	};
	$.fn.jqTransform = function(options){
		var opt = $.extend({},defaultOptions,options);
		
		/* each form */
		 return this.each(function(){
			var selfForm = $(this);
			if(selfForm.hasClass('jqtransformdone')) {return;}
			selfForm.addClass('jqtransformdone');
			
			$('input:submit, input:reset, input[type="button"]', this).jqTransInputButton();			
//			$('input:text, input:password', this).jqTransInputText();			
			$('input:checkbox', this).jqTransCheckBox();
			$('input:radio', this).jqTransRadio();
			$('textarea', this).jqTransTextarea();
			
			if( $('select', this).jqTransSelect().length > 0 ){jqTransformAddDocumentListener();}
			selfForm.bind('reset',function(){var action = function(){jqTransformReset(this);}; window.setTimeout(action, 10);});
			
			//preloading dont needed anymore since normal, focus and hover image are the same one
			/*if(opt.preloadImg && !jqTransformImgPreloaded){
				jqTransformImgPreloaded = true;
				var oInputText = $('input:text:first', selfForm);
				if(oInputText.length > 0){
					//pour ie on eleve les ""
					var strWrapperImgUrl = oInputText.get(0).wrapper.css('background-image');
					jqTransformPreloadHoverFocusImg(strWrapperImgUrl);					
					var strInnerImgUrl = $('div.jqTransformInputInner',$(oInputText.get(0).wrapper)).css('background-image');
					jqTransformPreloadHoverFocusImg(strInnerImgUrl);
				}
				
				var oTextarea = $('textarea',selfForm);
				if(oTextarea.length > 0){
					var oTable = oTextarea.get(0).oTable;
					$('td',oTable).each(function(){
						var strImgBack = $(this).css('background-image');
						jqTransformPreloadHoverFocusImg(strImgBack);
					});
				}
			}*/
			
			
		}); /* End Form each */
				
	};/* End the Plugin */

})(jQuery);;;


/*
 * Poshy Tip jQuery plugin v1.2
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2013, Vasil Dinkov, http://vadikom.com/
 */

;;(function($) {

	var tips = [],
		reBgImage = /^url\(["']?([^"'\)]*)["']?\);?$/i,
		rePNG = /\.png$/i,
		ie6 = !!window.createPopup && document.documentElement.currentStyle.minWidth == 'undefined';

	// make sure the tips' position is updated on resize
	function handleWindowResize() {
		$.each(tips, function() {
			this.refresh(true);
		});
	}
	$(window).resize(handleWindowResize);

	$.Poshytip = function(elm, options) {
		this.$elm = $(elm);
		this.opts = $.extend({}, $.fn.poshytip.defaults, options);
		this.$tip = $(['<div class="',this.opts.className,'">',
				'<div class="tipH-inner tipH-bg-image"></div>',
				'<div class="tipH-arrow tipH-arrow-top tipH-arrow-right tipH-arrow-bottom tipH-arrow-left"></div>',
			'</div>'].join('')).appendTo(document.body);
		this.$arrow = this.$tip.find('div.tipH-arrow');
		this.$inner = this.$tip.find('div.tipH-inner');
		this.disabled = false;
		this.content = null;
		this.init();
	};

	$.Poshytip.prototype = {
		init: function() {
			tips.push(this);

			// save the original title and a reference to the Poshytip object
			var title = this.$elm.attr('title');
			this.$elm.data('title.poshytip', title !== undefined ? title : null)
				.data('poshytip', this);

			// hook element events
			if (this.opts.showOn != 'none') {
				this.$elm.bind({
					'mouseenter.poshytip': $.proxy(this.mouseenter, this),
					'mouseleave.poshytip': $.proxy(this.mouseleave, this)
				});
				switch (this.opts.showOn) {
					case 'hover':
						if (this.opts.alignTo == 'cursor')
							this.$elm.bind('mousemove.poshytip', $.proxy(this.mousemove, this));
						if (this.opts.allowTipHover)
							this.$tip.hover($.proxy(this.clearTimeouts, this), $.proxy(this.mouseleave, this));
						break;
					case 'focus':
						this.$elm.bind({
							'focus.poshytip': $.proxy(this.showDelayed, this),
							'blur.poshytip': $.proxy(this.hideDelayed, this)
						});
						break;
				}
			}
		},
		mouseenter: function(e) {
			if (this.disabled)
				return true;

			this.$elm.attr('title', '');
			if (this.opts.showOn == 'focus')
				return true;

			this.showDelayed();
		},
		mouseleave: function(e) {
			if (this.disabled || this.asyncAnimating && (this.$tip[0] === e.relatedTarget || jQuery.contains(this.$tip[0], e.relatedTarget)))
				return true;

			if (!this.$tip.data('active')) {
				var title = this.$elm.data('title.poshytip');
				if (title !== null)
					this.$elm.attr('title', title);
			}
			if (this.opts.showOn == 'focus')
				return true;

			this.hideDelayed();
		},
		mousemove: function(e) {
			if (this.disabled)
				return true;

			this.eventX = e.pageX;
			this.eventY = e.pageY;
			if (this.opts.followCursor && this.$tip.data('active')) {
				this.calcPos();
				this.$tip.css({left: this.pos.l, top: this.pos.t});
				if (this.pos.arrow)
					this.$arrow[0].className = 'tipH-arrow tipH-arrow-' + this.pos.arrow;
			}
		},
		show: function() {
			if (this.disabled || this.$tip.data('active'))
				return;

			this.reset();
			this.update();

			// don't proceed if we didn't get any content in update() (e.g. the element has an empty title attribute)
			if (!this.content)
				return;

			this.display();
			if (this.opts.timeOnScreen)
				this.hideDelayed(this.opts.timeOnScreen);
		},
		showDelayed: function(timeout) {
			this.clearTimeouts();
			this.showTimeout = setTimeout($.proxy(this.show, this), typeof timeout == 'number' ? timeout : this.opts.showTimeout);
		},
		hide: function() {
			if (this.disabled || !this.$tip.data('active'))
				return;

			this.display(true);
		},
		hideDelayed: function(timeout) {
			this.clearTimeouts();
			this.hideTimeout = setTimeout($.proxy(this.hide, this), typeof timeout == 'number' ? timeout : this.opts.hideTimeout);
		},
		reset: function() {
			this.$tip.queue([]).detach().css('visibility', 'hidden').data('active', false);
			this.$inner.find('*').poshytip('hide');
			if (this.opts.fade)
				this.$tip.css('opacity', this.opacity);
			this.$arrow[0].className = 'tipH-arrow tipH-arrow-top tipH-arrow-right tipH-arrow-bottom tipH-arrow-left';
			this.asyncAnimating = false;
		},
		update: function(content, dontOverwriteOption) {
			if (this.disabled)
				return;

			var async = content !== undefined;
			if (async) {
				if (!dontOverwriteOption)
					this.opts.content = content;
				if (!this.$tip.data('active'))
					return;
			} else {
				content = this.opts.content;
			}

			// update content only if it has been changed since last time
			var self = this,
				newContent = typeof content == 'function' ?
					content.call(this.$elm[0], function(newContent) {
						self.update(newContent);
					}) :
					content == '[title]' ? this.$elm.data('title.poshytip') : content;
			if (this.content !== newContent) {
				this.$inner.empty().append(newContent);
				this.content = newContent;
			}

			this.refresh(async);
		},
		refresh: function(async) {
			if (this.disabled)
				return;

			if (async) {
				if (!this.$tip.data('active'))
					return;
				// save current position as we will need to animate
				var currPos = {left: this.$tip.css('left'), top: this.$tip.css('top')};
			}

			// reset position to avoid text wrapping, etc.
			this.$tip.css({left: 0, top: 0}).appendTo(document.body);

			// save default opacity
			if (this.opacity === undefined)
				this.opacity = this.$tip.css('opacity');

			// check for images - this code is here (i.e. executed each time we show the tip and not on init) due to some browser inconsistencies
			var bgImage = this.$tip.css('background-image').match(reBgImage),
				arrow = this.$arrow.css('background-image').match(reBgImage);

			if (bgImage) {
				var bgImagePNG = rePNG.test(bgImage[1]);
				// fallback to background-color/padding/border in IE6 if a PNG is used
				if (ie6 && bgImagePNG) {
					this.$tip.css('background-image', 'none');
					this.$inner.css({margin: 0, border: 0, padding: 0});
					bgImage = bgImagePNG = false;
				} else {
					this.$tip.prepend('<table class="tipH-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tipH-top tipH-bg-image" colspan="2"><span></span></td><td class="tipH-right tipH-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tipH-left tipH-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tipH-bottom tipH-bg-image" colspan="2"><span></span></td></tr></table>')
						.css({border: 0, padding: 0, 'background-image': 'none', 'background-color': 'transparent'})
						.find('.tipH-bg-image').css('background-image', 'url("' + bgImage[1] +'")').end()
						.find('td').eq(3).append(this.$inner);
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				if (bgImagePNG && !$.support.opacity)
					this.opts.fade = false;
			}
			// IE arrow fixes
			if (arrow && !$.support.opacity) {
				// disable arrow in IE6 if using a PNG
				if (ie6 && rePNG.test(arrow[1])) {
					arrow = false;
					this.$arrow.css('background-image', 'none');
				}
				// disable fade effect in IE due to Alpha filter + translucent PNG issue
				this.opts.fade = false;
			}

			var $table = this.$tip.find('> table.tip-table');
			if (ie6) {
				// fix min/max-width in IE6
				this.$tip[0].style.width = '';
				$table.width('auto').find('td').eq(3).width('auto');
				var tipW = this.$tip.width(),
					minW = parseInt(this.$tip.css('min-width')),
					maxW = parseInt(this.$tip.css('max-width'));
				if (!isNaN(minW) && tipW < minW)
					tipW = minW;
				else if (!isNaN(maxW) && tipW > maxW)
					tipW = maxW;
				this.$tip.add($table).width(tipW).eq(0).find('td').eq(3).width('100%');
			} else if ($table[0]) {
				// fix the table width if we are using a background image
				// IE9, FF4 use float numbers for width/height so use getComputedStyle for them to avoid text wrapping
				// for details look at: http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
				$table.width('auto').find('td').eq(3).width('auto').end().end().width(document.defaultView && document.defaultView.getComputedStyle && parseFloat(document.defaultView.getComputedStyle(this.$tip[0], null).width) || this.$tip.width()).find('td').eq(3).width('100%');
			}
			this.tipOuterW = this.$tip.outerWidth();
			this.tipOuterH = this.$tip.outerHeight();

			this.calcPos();

			// position and show the arrow image
			if (arrow && this.pos.arrow) {
				this.$arrow[0].className = 'tipH-arrow tipH-arrow-' + this.pos.arrow;
				this.$arrow.css('visibility', 'inherit');
			}

			if (async && this.opts.refreshAniDuration) {
				this.asyncAnimating = true;
				var self = this;
				this.$tip.css(currPos).animate({left: this.pos.l, top: this.pos.t}, this.opts.refreshAniDuration, function() { self.asyncAnimating = false; });
			} else {
				this.$tip.css({left: this.pos.l, top: this.pos.t});
			}
		},
		display: function(hide) {
			var active = this.$tip.data('active');
			if (active && !hide || !active && hide)
				return;

			this.$tip.stop();
			if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (hide && this.opts.hideAniDuration || !hide && this.opts.showAniDuration)) {
				var from = {}, to = {};
				// this.pos.arrow is only undefined when alignX == alignY == 'center' and we don't need to slide in that rare case
				if (this.opts.slide && this.pos.arrow) {
					var prop, arr;
					if (this.pos.arrow == 'bottom' || this.pos.arrow == 'top') {
						prop = 'top';
						arr = 'bottom';
					} else {
						prop = 'left';
						arr = 'right';
					}
					var val = parseInt(this.$tip.css(prop));
					from[prop] = val + (hide ? 0 : (this.pos.arrow == arr ? -this.opts.slideOffset : this.opts.slideOffset));
					to[prop] = val + (hide ? (this.pos.arrow == arr ? this.opts.slideOffset : -this.opts.slideOffset) : 0) + 'px';
				}
				if (this.opts.fade) {
					from.opacity = hide ? this.$tip.css('opacity') : 0;
					to.opacity = hide ? 0 : this.opacity;
				}
				this.$tip.css(from).animate(to, this.opts[hide ? 'hideAniDuration' : 'showAniDuration']);
			}
			hide ? this.$tip.queue($.proxy(this.reset, this)) : this.$tip.css('visibility', 'inherit');
			if (active) {
				var title = this.$elm.data('title.poshytip');
				if (title !== null)
					this.$elm.attr('title', title);
			}
			this.$tip.data('active', !active);
		},
		disable: function() {
			this.reset();
			this.disabled = true;
		},
		enable: function() {
			this.disabled = false;
		},
		destroy: function() {
			this.reset();
			this.$tip.remove();
			delete this.$tip;
			this.content = null;
			this.$elm.unbind('.poshytip').removeData('title.poshytip').removeData('poshytip');
			tips.splice($.inArray(this, tips), 1);
		},
		clearTimeouts: function() {
			if (this.showTimeout) {
				clearTimeout(this.showTimeout);
				this.showTimeout = 0;
			}
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
				this.hideTimeout = 0;
			}
		},
		calcPos: function() {
			var pos = {l: 0, t: 0, arrow: ''},
				$win = $(window),
				win = {
					l: $win.scrollLeft(),
					t: $win.scrollTop(),
					w: $win.width(),
					h: $win.height()
				}, xL, xC, xR, yT, yC, yB;
			if (this.opts.alignTo == 'cursor') {
				xL = xC = xR = this.eventX;
				yT = yC = yB = this.eventY;
			} else { // this.opts.alignTo == 'target'
				var elmOffset = this.$elm.offset(),
					elm = {
						l: elmOffset.left,
						t: elmOffset.top,
						w: this.$elm.outerWidth(),
						h: this.$elm.outerHeight()
					};
				xL = elm.l + (this.opts.alignX != 'inner-right' ? 0 : elm.w);	// left edge
				xC = xL + Math.floor(elm.w / 2);				// h center
				xR = xL + (this.opts.alignX != 'inner-left' ? elm.w : 0);	// right edge
				yT = elm.t + (this.opts.alignY != 'inner-bottom' ? 0 : elm.h);	// top edge
				yC = yT + Math.floor(elm.h / 2);				// v center
				yB = yT + (this.opts.alignY != 'inner-top' ? elm.h : 0);	// bottom edge
			}




			// keep in viewport and calc arrow position
			switch (this.opts.alignX) {
				case 'right':
				case 'inner-left':
					pos.l = xR + this.opts.offsetX;
					if (this.opts.keepInViewport && pos.l + this.tipOuterW > win.l + win.w)
						pos.l = win.l + win.w - this.tipOuterW;
					if (this.opts.alignX == 'right' || this.opts.alignY == 'center')
						pos.arrow = 'left';
					break;
				case 'center':
					pos.l = xC - Math.floor(this.tipOuterW / 2);
					if (this.opts.keepInViewport) {
						if (pos.l + this.tipOuterW > win.l + win.w)
							pos.l = win.l + win.w - this.tipOuterW;
						else if (pos.l < win.l)
							pos.l = win.l;
					}
					break;
				default: // 'left' || 'inner-right'
					pos.l = xL - this.tipOuterW - this.opts.offsetX;
					if (this.opts.keepInViewport && pos.l < win.l)
						pos.l = win.l;
					if (this.opts.alignX == 'left' || this.opts.alignY == 'center')
						pos.arrow = 'right';
			}
			switch (this.opts.alignY) {
				case 'bottom':
				case 'inner-top':
					pos.t = yB + this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'top';
					if (this.opts.keepInViewport && pos.t + this.tipOuterH > win.t + win.h) {
						pos.t = yT - this.tipOuterH - this.opts.offsetY;
						if (pos.arrow == 'top')
							pos.arrow = 'bottom';
					}
					break;
				case 'center':
					pos.t = yC - Math.floor(this.tipOuterH / 2);
					if (this.opts.keepInViewport) {
						if (pos.t + this.tipOuterH > win.t + win.h)
							pos.t = win.t + win.h - this.tipOuterH;
						else if (pos.t < win.t)
							pos.t = win.t;
					}
					break;
				default: // 'top' || 'inner-bottom'
					pos.t = yT - this.tipOuterH - this.opts.offsetY;
					// 'left' and 'right' need priority for 'target'
					if (!pos.arrow || this.opts.alignTo == 'cursor')
						pos.arrow = 'bottom';
					if (this.opts.keepInViewport && pos.t < win.t) {
						pos.t = yB + this.opts.offsetY;
						if (pos.arrow == 'bottom')
							pos.arrow = 'top';
					}
			}
			this.pos = pos;
		}
	};

	$.fn.poshytip = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			// unhook live events if 'destroy' is called
			if (method == 'destroy') {
				this.die ?
					this.die('mouseenter.poshytip').die('focus.poshytip') :
					$(document).undelegate(this.selector, 'mouseenter.poshytip').undelegate(this.selector, 'focus.poshytip');
			}
			return this.each(function() {
				var poshytip = $(this).data('poshytip');
				if (poshytip && poshytip[method])
					poshytip[method].apply(poshytip, args);
			});
		}

		var opts = $.extend({}, $.fn.poshytip.defaults, options);

		// generate CSS for this tip class if not already generated
		if (!$('#poshytip-css-' + opts.className)[0])
			$(['<style id="poshytip-css-',opts.className,'" type="text/css">',
				'div.',opts.className,'{visibility:hidden;position:absolute;top:0;left:0;}',
				'div.',opts.className,' table.tipH-table, div.',opts.className,' table.tipH-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}',
				'div.',opts.className,' td.tipH-bg-image span{display:block;font:1px/1px sans-serif;height:',opts.bgImageFrameSize,'px;width:',opts.bgImageFrameSize,'px;overflow:hidden;}',
				'div.',opts.className,' td.tipH-right{background-position:100% 0;}',
				'div.',opts.className,' td.tipH-bottom{background-position:100% 100%;}',
				'div.',opts.className,' td.tipH-left{background-position:0 100%;}',
				'div.',opts.className,' div.tipH-inner{background-position:-',opts.bgImageFrameSize,'px -',opts.bgImageFrameSize,'px;}',
				'div.',opts.className,' div.tipH-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}',
			'</style>'].join('')).appendTo('head');

		// check if we need to hook live events
		if (opts.liveEvents && opts.showOn != 'none') {
			var handler,
				deadOpts = $.extend({}, opts, { liveEvents: false });
			switch (opts.showOn) {
				case 'hover':
					handler = function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('mouseenter');
					};
					// support 1.4.2+ & 1.9+
					this.live ?
						this.live('mouseenter.poshytip', handler) :
						$(document).delegate(this.selector, 'mouseenter.poshytip', handler);
					break;
				case 'focus':
					handler = function() {
						var $this = $(this);
						if (!$this.data('poshytip'))
							$this.poshytip(deadOpts).poshytip('showDelayed');
					};
					this.live ?
						this.live('focus.poshytip', handler) :
						$(document).delegate(this.selector, 'focus.poshytip', handler);
					break;
			}
			return this;
		}

		return this.each(function() {
			new $.Poshytip(this, opts);
		});
	};

	// default settings
	$.fn.poshytip.defaults = {
		content: 		'[title]',	// content to display ('[title]', 'string', element, function(updateCallback){...}, jQuery)
		className:		'tipH-yellow',	// class for the tips
		bgImageFrameSize:	10,		// size in pixels for the background-image (if set in CSS) frame around the inner content of the tip
		showTimeout:		500,		// timeout before showing the tip (in milliseconds 1000 == 1 second)
		hideTimeout:		100,		// timeout before hiding the tip
		timeOnScreen:		0,		// timeout before automatically hiding the tip after showing it (set to > 0 in order to activate)
		showOn:			'hover',	// handler for showing the tip ('hover', 'focus', 'none') - use 'none' to trigger it manually
		liveEvents:		false,		// use live events
		alignTo:		'cursor',	// align/position the tip relative to ('cursor', 'target')
		alignX:			'right',	// horizontal alignment for the tip relative to the mouse cursor or the target element
							// ('right', 'center', 'left', 'inner-left', 'inner-right') - 'inner-*' matter if alignTo:'target'
		alignY:			'bottom',		// vertical alignment for the tip relative to the mouse cursor or the target element
							// ('bottom', 'center', 'top', 'inner-bottom', 'inner-top') - 'inner-*' matter if alignTo:'target'
		offsetX:		-22,		// offset X pixels from the default position - doesn't matter if alignX:'center'
		offsetY:		18,		// offset Y pixels from the default position - doesn't matter if alignY:'center'
		keepInViewport:		true,		// reposition the tooltip if needed to make sure it always appears inside the viewport
		allowTipHover:		true,		// allow hovering the tip without hiding it onmouseout of the target - matters only if showOn:'hover'
		followCursor:		false,		// if the tip should follow the cursor - matters only if showOn:'hover' and alignTo:'cursor'
		fade: 			true,		// use fade animation
		slide: 			true,		// use slide animation
		slideOffset: 		8,		// slide animation offset
		showAniDuration: 	300,		// show animation duration - set to 0 if you don't want show animation
		hideAniDuration: 	300,		// hide animation duration - set to 0 if you don't want hide animation
		refreshAniDuration:	200		// refresh animation duration - set to 0 if you don't want animation when updating the tooltip asynchronously
	};

})(jQuery);

/*! nice Validator 0.7.0
 * (c) 2012-2014 Jony Zhang <zj86@live.cn>, MIT Licensed
 * http://niceue.com/validator/
 */
;!function(e,t){"use strict";function i(n,r){var s=this;return!s instanceof i?new i(n,r):(s.$el=e(n),s._init(n,r),t)}function n(e,t){var i=t?t===!0?this:t:n.prototype;if(Q(e))for(var r in e)i[r]=s(e[r])}function r(e,t){var i=t?t===!0?this:t:r.prototype;if(Q(e))for(var n in e){if(!e[n])return;i[n]=e[n]}}function s(t){switch(e.type(t)){case"function":return t;case"array":return function(e){return t[0].test(e.value)||t[1]||!1};case"regexp":return function(e){return t.test(e.value)}}}function a(t){var i="";return e.map(t.split(" "),function(e){i+=","+("#"===e.charAt(0)?e:'[name="'+e+'"]')}),i.substring(1)}function l(t){var i;if(t&&t.tagName){switch(t.tagName){case"INPUT":case"SELECT":case"TEXTAREA":case"BUTTON":case"FIELDSET":i=t.form||e(t).closest("."+b);break;case"FORM":i=t;break;default:i=e(t).closest("."+b)}return e(i).data(m)||e(i)[m]().data(m)}}function u(e){var t,i=e.currentTarget;i.form&&null===G(i.form,E)&&(t=l(i),t?(t._parse(i),t["_"+e.type](e)):G(i,V,null))}function o(i,n){var r=e.trim(G(i,V+"-"+n));if(r)return r=Function("return "+r)(),r?s(r):t}function d(e,t,i,n){var r=t.msg,s=t._r;return Q(r)&&(r=r[s]),J(r)||(r=G(e,F+"-"+s)||G(e,F)||i||(n?J(n)?n:n[s]:"")),r}function c(e){var t;return e&&(t=U.exec(e)),t?t[1]:""}function f(e){return"INPUT"===e.tagName&&"checkbox"===e.type||"radio"===e.type}function g(e){return Date.parse(e.replace(/\.|\-/g,"/"))}var p,m="validator",h="."+m,v=".rule",_=".field",y=".form",b="nice-"+m,k="n-ok",w="n-error",M="n-tip",O="n-loading",x="msg-box",$="aria-required",C="aria-invalid",V="data-rule",F="data-msg",A="data-tip",T="data-ok",R="data-target",S="data-inputstatus",E="novalidate",q=":verifiable",N=/(!?)\s?(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?\s*(;|\||&)?/g,j=/(\w+)(?:\[\s*(.*?\]?)\s*\]|\(\s*(.*?\)?)\s*\))?/,D=/(?:([^:;\(\[]*):)?(.*)/,I=/[^\x00-\xff]/g,U=/^.*(top|right|bottom|left).*$/,H=/(?:(post|get):)?(.+)/i,L=/<|>/g,P=e.noop,W=e.proxy,B=e.isFunction,X=e.isArray,J=function(e){return"string"==typeof e},Q=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},z=!window.XMLHttpRequest,G=function(e,i,n){return n===t?e.getAttribute(i):(null===n?e.removeAttribute(i):e.setAttribute(i,""+n),t)},K=window.console||{log:P,info:P},Y={debug:0,timely:1,theme:"default",ignore:"",focusInvalid:!0,beforeSubmit:P,validClass:"n-valid",invalidClass:"n-invalid",msgWrapper:"span",msgMaker:function(e){var t,i={error:w,ok:k,tip:M,loading:O}[e.type];return t='<span class="msg-wrap '+i+'" role="alert">',t+=e.arrow+e.icon+'<span class="n-msg">'+e.msg+"</span>",t+="</span>"},msgIcon:'<span class="n-icon"></span>',msgArrow:"",msgClass:"",defaultMsg:"{0} is not valid.",loadingMsg:"Validating..."},Z={"default":{formClass:"n-default",msgClass:"n-right",showOk:""}};e.fn[m]=function(t){var n=this,r=arguments;return n.is(":input")?n:(!n.is("form")&&(n=this.find("form")),!n.length&&(n=this),n.each(function(){var n=e(this).data(m);if(n)if(J(t)){if("_"===t.charAt(0))return;n[t].apply(n,Array.prototype.slice.call(r,1))}else t&&(n._reset(!0),n._init(this,t));else new i(this,t)}),this)},e.fn.isValid=function(e,i){var n,r=l(this[0]),s=B(e);return r?(r.checkOnly=i===t||i,n=r._multiValidate(this.is(":input")?this:this.find(q),function(t){s&&e.call(null,t),r.checkOnly=!1}),s?this:n):!0},e.expr[":"].verifiable=function(e){var t=e.nodeName.toLowerCase();return("input"===t&&!{submit:1,button:1,reset:1,image:1}[e.type]||"select"===t||"textarea"===t)&&e.disabled===!1&&null===G(e,E)},i.prototype={_init:function(i,s){var l,u,o,d=this;if(B(s)&&(s={valid:s}),s=s||{},o=G(i,"data-"+m+"-option"),o=o&&"{"===o.charAt(0)?Function("return "+o)():{},u=Z[s.theme||o.theme||Y.theme],l=d.options=e.extend({},Y,u,o,d.options,s),d.rules=new n(l.rules,!0),d.messages=new r(l.messages,!0),d.elements=d.elements||{},d.deferred={},d.errors={},d.fields={},d._initFields(l.fields),X(l.groups)&&e.map(l.groups,function(i){return J(i.fields)&&B(i.callback)?(i.$elems=d.$el.find(a(i.fields)),e.map(i.fields.split(" "),function(e){d.fields[e]=d.fields[e]||{},d.fields[e].group=i}),t):null}),d.msgOpt={type:"error",pos:c(l.msgClass),wrapper:l.msgWrapper,cls:l.msgClass,style:l.msgStyle,icon:l.msgIcon,arrow:l.msgArrow,show:l.msgShow,hide:l.msgHide},d.isAjaxSubmit=!1,l.valid||null===G(i,"action"))d.isAjaxSubmit=!0;else{var f=e[e._data?"_data":"data"](i,"events");f&&f.valid&&e.map(f.valid,function(e){return-1!==e.namespace.indexOf("form")?1:null}).length&&(d.isAjaxSubmit=!0)}d.$el.data(m)||(d.$el.data(m,d).addClass(b+" "+l.formClass).on("submit"+h+" validate"+h,W(d,"_submit")).on("reset"+h,W(d,"_reset")).on("showtip"+h,W(d,"_showTip")).on("validated"+_+h,q,W(d,"_validatedField")).on("validated"+v+h,q,W(d,"_validatedRule")).on("focusin"+h+" click"+h+" showtip"+h,q,W(d,"_focusin")).on("focusout"+h+" validate"+h,q,W(d,"_focusout")).on("click"+h,":radio,:checkbox",W(d,"_click")),l.timely>=2&&d.$el.on("keyup"+h+" paste"+h,q,W(d,"_focusout")).on("change"+h,"select",W(d,"_click")),d._novalidate=G(i,E),G(i,E,E))},_initFields:function(t){var i=this;Q(t)&&e.each(t,function(e,t){if(null===t){var n=i.elements[e];n&&i._resetElement(n,!0),delete i.fields[e]}else i.fields[e]=J(t)?{rule:t}:t}),i.$el.find(q).each(function(){i._parse(this)})},_parse:function(e){var t,i=this,n=e.name,r=G(e,V);r&&G(e,V,null),(e.id&&"#"+e.id in i.fields||!e.name)&&(n="#"+e.id),n&&(t=i.fields[n]||{},t.key=n,t.old={},t.rule=t.rule||r||"",t.rule&&(t.rule.match(/match|checked/)&&(t.must=!0),-1!==t.rule.indexOf("required")&&(t.required=!0,G(e,$,!0)),("timely"in t&&!t.timely||!i.options.timely)&&G(e,"notimely",!0),J(t.target)&&G(e,R,t.target),J(t.tip)&&G(e,A,t.tip),i.fields[n]=i._parseRule(t)))},_parseRule:function(e){var i=D.exec(e.rule);if(i)return e._v=0,i[1]&&(e.display=i[1]),i[2]&&(e.rules=[],i[2].replace(N,function(){var i=arguments;i[3]=i[3]||i[4],e.rules.push({not:"!"===i[1],method:i[2],params:i[3]?i[3].split(", "):t,or:"|"===i[5]})})),e},_multiValidate:function(i,n){var r=this,s=r.options;return r._multiValid=!0,s.ignore&&(i=i.not(s.ignore)),i.each(function(e,i){var n=r.getField(i);return n&&(r._validate(i,n),!r._multiValid&&s.stopOnError)?!1:t}),e.when.apply(null,e.map(r.deferred,function(e){return e})).done(function(){n.call(r,r._multiValid)}),e.isEmptyObject(r.deferred)?r._multiValid:t},_submit:function(i){var n=this,r=n.options,s=i.target,a="submit"===i.type;i.preventDefault(),p&&(p=!1)||n.submiting||"validate"===i.type&&n.$el[0]!==s||r.beforeSubmit.call(n,s)===!1||(r.debug&&K.log("\n"+i.type),n._reset(),n.submiting=!0,n.isValid=t,n._multiValidate(n.$el.find(q),function(t){var i,l=t||2===r.debug?"valid":"invalid";t||(r.focusInvalid&&n.$el.find(":input["+C+'="true"]:first').focus(),i=e.map(n.errors,function(e){return e})),n.submiting=!1,B(r[l])&&r[l].call(n,s,i),n.$el.trigger(l+y,[s,i]),t&&!n.isAjaxSubmit&&a&&(p=!0,s.submit())}))},_reset:function(e){var t=this;t.errors={},e&&t.$el.find(q).each(function(e,i){t._resetElement(i)})},_resetElement:function(t,i){var n=this.options;e(t).removeClass(n.validClass+" "+n.invalidClass),this.hideMsg(t),i&&G(t,$,null)},_focusin:function(t){var i,n=this,r=n.options,s=t.target;if("showtip"!==t.type){if(n.submiting)return;if("error"===G(s,S))r.focusCleanup&&(e(s).removeClass(r.invalidClass),n.hideMsg(s));else if(""!==s.value)return}i=G(s,A),i&&n.showMsg(s,{type:"tip",msg:i})},_focusout:function(t,i){var n,r,s=this,a=s.options,l=t.target,u=t.type,o=150;if(!i&&"paste"!==u){if("validate"===u)r=!0,o=0;else{if(G(l,"notimely"))return;if(a.timely>=2&&"keyup"!==u)return}if(a.ignore&&e(l).is(a.ignore))return;if("keyup"===u){var d=t.keyCode,c={8:1,9:1,16:1,32:1,46:1};if(9===d&&!l.value)return;if(48>d&&!c[d])return;o=a.timely>=100?a.timely:500}}n=s.getField(l),n&&(o?(n._t&&clearTimeout(n._t),n._t=setTimeout(function(){s._validate(l,n,r)},o)):s._validate(l,n,r))},_click:function(e){this._focusout(e,!0)},_showTip:function(e){var t=this;t.$el[0]===e.target&&t.$el.find(q+"["+A+"]").each(function(){t.showMsg(this,{msg:G(this,A),type:"tip"})})},_validatedField:function(t,i,n){var r=this,s=r.options,a=t.target,l=n.isValid=i.isValid=!!n.isValid,u=l?"valid":"invalid";n.key=i.key,n.rule=i._r,l?n.type="ok":(r.submiting&&(r.errors[i.key]=n.msg),r._multiValid=!1),i.old.value=a.value,i.old.id=a.id,r.elements[i.key]=a,r.$el[0].isValid=r.isValid=l?r.isFormValid():l,r.checkOnly||(B(i[u])&&i[u].call(r,a,n),e(a).attr(C,l?null:!0).removeClass(l?s.invalidClass:s.validClass).addClass(n.skip?"":l?s.validClass:s.invalidClass).trigger(u+_,[n,r]),r.$el.triggerHandler("validation",[n,r]),(i.msgMaker||s.msgMaker)&&r[n.showOk||n.msg?"showMsg":"hideMsg"](a,n,i))},_validatedRule:function(i,n,r,s){n=n||o.getField(f),s=s||{};var a,l,u,o=this,c=o.options,f=i.target,g=n._r,p=!1;if(null===r)return e(f).trigger("validated"+_,[n,{isValid:!0,skip:!0}]),t;if(r===!0||r===t||""===r?p=!0:J(r)?a=r:Q(r)&&(r.error?a=r.error:(a=r.ok,p=!0)),n.rules&&(l=n.rules[n._v],l.not&&(a=t,p="required"===g||!p),l.or))if(p)for(;n._v<n.rules.length&&n.rules[n._v].or;)n._v++;else u=!0;u||(p?(s.isValid=p,c.showOk!==!1&&(J(a)||(J(n.ok)?a=n.ok:J(G(f,T))?a=G(f,T):J(c.showOk)&&(a=c.showOk)),J(a)&&(s.showOk=p,s.msg=a)),e(f).trigger("valid"+v,[g,s.msg])):(s.msg=(d(f,n,a,o.messages[g])||Y.defaultMsg).replace("{0}",n.display||""),e(f).trigger("invalid"+v,[g,s.msg]))),c.debug&&K.log("   "+n._v+": "+g+" => "+(p||s.msg||p)),u||p&&n._v<n.rules.length-1?(n._v++,o._checkRule(f,n)):(n._v=0,e(f).trigger("validated"+_,[n,s]))},_checkRule:function(i,n){var r,s,a=this,l=n.key,u=n.rules[n._v],d=u.method,c=u.params;a.submiting&&a.deferred[l]||(s=n.old,n._r=d,r=!n.must&&s.ret!==t&&s.rule===u&&s.id===i.id&&i.value&&s.value===i.value?s.ret:(o(i,d)||a.rules[d]||P).call(a,i,c,n),Q(r)&&B(r.then)?(a.deferred[l]=r,!a.checkOnly&&a.showMsg(i,{type:"loading",msg:a.options.loadingMsg},n),r.then(function(r,l,o){var d,c=o.responseText,f=n.dataFilter||a.options.dataFilter;"json"===this.dataType?c=r:"{"===c.charAt(0)&&(c=e.parseJSON(c)||{}),B(f)||(f=function(e){return J(e)||Q(e)&&("error"in e||"ok"in e)?e:t}),d=f(c),d===t&&(d=f(c.data)),s.rule=u,s.ret=d,e(i).trigger("validated"+v,[n,d])},function(t,r){e(i).trigger("validated"+v,[n,r])}).always(function(){delete a.deferred[l]}),n.isValid=t):e(i).trigger("validated"+v,[n,r]))},_validate:function(i,n){if(!i.disabled&&null===G(i,E)){var r,s=this,a=e(i),l={},u=n.group,o=n.isValid=!0;if(n.rules||s._parse(i),s.options.debug&&K.info(n.key),u&&(r=u.callback.call(s,u.$elems),r!==t&&(s.hideMsg(u.target,{},n),r===!0?r=t:(n._v=0,n._r="group",o=!1,s.hideMsg(i,{},n),e.extend(l,u)))),o&&!n.required&&!n.must&&!i.value){if("tip"===G(i,S))return;if(!f(i))return a.trigger("validated"+_,[n,{isValid:!0}]),t}r!==t?a.trigger("validated"+v,[n,r,l]):n.rule&&s._checkRule(i,n)}},test:function(e,i){var n,r,s,a=this,l=j.exec(i);return l&&(r=l[1],r in a.rules&&(s=l[2]||l[3],s=s?s.split(", "):t,n=a.rules[r].call(a,e,s))),n===!0||n===t||null===n},getRangeMsg:function(e,t,i,n){if(t){var r=this,s=r.messages[i]||"",a=t[0].split("~"),l=a[0],u=a[1],o="rg",d=[""],c=+e===+e;if(2===a.length){if(l&&u){if(c&&e>=+l&&+u>=e)return!0;d=d.concat(a)}else if(l&&!u){if(c&&e>=+l)return!0;d.push(l),o="gt"}else if(!l&&u){if(c&&+u>=e)return!0;d.push(u),o="lt"}}else{if(e===+l)return!0;d.push(l),o="eq"}return s&&(n&&s[o+n]&&(o+=n),d[0]=s[o]),r.renderMsg.apply(null,d)}},renderMsg:function(){var e=arguments,t=e[0],i=e.length;if(t){for(;--i;)t=t.replace("{"+i+"}",e[i]);return t}},_getMsgOpt:function(t){return e.extend({},this.msgOpt,J(t)?{msg:t}:t)},_getMsgDOM:function(t,i){var n,r,s,a=e(t);if(a.is(":input")?(s=i.target||G(t,R),s&&(s=this.$el.find(s),s.length&&(s.is(":input")?t=s.get(0):n=s)),n||(r=!f(t)&&t.id?t.id:t.name,n=this.$el.find(i.wrapper+"."+x+'[for="'+r+'"]'))):n=a,!n.length)if(a=this.$el.find(s||t),n=e("<"+i.wrapper+">").attr({"class":x+(i.cls?" "+i.cls:""),style:i.style||"","for":r}),f(t)){var l=a.parent();n.appendTo(l.is("label")?l.parent():l)}else n[i.pos&&"right"!==i.pos?"insertBefore":"insertAfter"](a);return n},showMsg:function(t,i,n){var r=this;if(i=r._getMsgOpt(i),i.msg||i.showOk){t=e(t).get(0),e(t).is(q)&&(G(t,S,i.type),n=n||r.getField(t),n&&(i.style=n.msgStyle||i.style,i.cls=n.msgClass||i.cls,i.wrapper=n.msgWrapper||i.wrapper));var s=r._getMsgDOM(t,i),a=s[0].className;!U.test(a)&&s.addClass(i.cls),z&&"bottom"===i.pos&&(s[0].style.marginTop=e(t).outerHeight()+"px"),s.html(((n||{}).msgMaker||r.options.msgMaker).call(r,i)),s[0].style.display="",B(i.show)&&i.show.call(r,s,i.type)}},hideMsg:function(t,i,n){var r=this;t=e(t).get(0),i=r._getMsgOpt(i),e(t).is(q)&&(G(t,S,null),G(t,C,null),n=n||r.getField(t),n&&(i.wrapper=n.msgWrapper||i.wrapper));var s=r._getMsgDOM(t,i);s.length&&(B(i.hide)?i.hide.call(r,s,i.type):s[0].style.display="none")},mapMsg:function(t){var i=this;e.each(t,function(e,t){var n=i.elements[e]||i.$el.find(':input[name="'+e+'"]')[0];i.showMsg(n,t)})},setMsg:function(e){new r(e,this.messages)},setRule:function(t){new n(t,this.rules),e.map(this.fields,function(e){e.old={}})},getField:function(e){var t,i=this;return t=e.id&&"#"+e.id in i.fields||!e.name?"#"+e.id:e.name,G(e,V)&&i._parse(e),i.fields[t]},setField:function(e,t){var i={};J(e)?i[e]=t:Q(e)&&(i=e),this._initFields(i)},isFormValid:function(){var e=this.fields;for(var t in e)if(!e[t].isValid)return e[t].isValid;return!0},holdSubmit:function(e){this.submiting=e===t||e},cleanUp:function(){this._reset(1)},destroy:function(){this._reset(1),this.$el.off(h).removeData(m),G(this.$el[0],E,this._novalidate)}},e(document).on("focusin",":input["+V+"]",function(e){u(e)}).on("click","input,button",function(e){var t=this;if(t.form)if("submit"===t.type)null!==G(t,E)&&(p=!0);else if(t.name&&f(t)){var i=t.form.elements[t.name];i.length&&(i=i[0]),G(i,V)&&u(e)}}).on("submit validate","form",function(t){if(null===G(this,E)){var i,n=e(this);n.data(m)||(i=n[m]().data(m),e.isEmptyObject(i.fields)?(G(this,E,E),n.off(h).removeData(m)):i._submit(t))}}),new n({required:function(t,i){var n=e.trim(t.value),r=!0;if(i)if(1===i.length){if(!n&&!this.test(t,i[0]))return G(t,$,null),null;G(t,$,!0)}else"not"===i[0]&&e.map(i.slice(1),function(t){n===e.trim(t)&&(r=!1)});return r&&!!n},integer:function(e,t){var i,n="0|",r="[1-9]\\d*",s=t?t[0]:"*";switch(s){case"+":i=r;break;case"-":i="-"+r;break;case"+0":i=n+r;break;case"-0":i=n+"-"+r;break;default:i=n+"-?"+r}return i="^(?:"+i+")$",RegExp(i).test(e.value)||this.messages.integer[s]},match:function(t,i,n){if(i){var r,s,a,l,u,o,d,c=this,f="eq";if(1===i.length?a=i[0]:(f=i[0],a=i[1]),u="#"===a.charAt(0)?a:':input[name="'+a+'"]',o=c.$el.find(u)[0]){if(d=c.getField(o),r=t.value,s=o.value,n._match||(c.$el.on("valid"+_+h,u,function(){e(t).trigger("validate")}),n._match=d._match=1),!n.required&&""===r&&""===s)return null;if(i[2]&&("date"===i[2]?(r=g(r),s=g(s)):"time"===i[2]&&(r=+r.replace(":",""),s=+s.replace(":",""))),"eq"!==f&&!isNaN(+r)&&isNaN(+s))return!0;switch(l=c.messages.match[f].replace("{1}",d.display||a),f){case"lt":return+s>+r||l;case"lte":return+s>=+r||l;case"gte":return+r>=+s||l;case"gt":return+r>+s||l;case"neq":return r!==s||l;default:return r===s||l}}}},range:function(e,t){return this.getRangeMsg(+e.value,t,"range")},checked:function(t,i){if(f(t)){var n,r,s=this;return r=s.$el.find('input[name="'+t.name+'"]').filter(function(){var t=this;return!n&&f(t)&&(n=t),!t.disabled&&t.checked&&e(t).is(":visible")}).length,i?s.getRangeMsg(r,i,"checked"):!!r||s.messages.required}},length:function(e,t){if(t){var i=e.value,n=(t[1]?i.replace(I,"xx"):i).length;return"~"===t[0].charAt(0)&&(t[0]="0"+t[0]),this.getRangeMsg(n,t,"length",t[1]?"_2":"")}},remote:function(t,i){if(i){var n,r=this,s=H.exec(i[0]),a=s[2],l=(s[1]||"POST").toUpperCase(),u={};return u[t.name]=t.value,i[1]&&e.map(i.slice(1),function(t){u[e.trim(t)]=r.$el.find(':input[name="'+t+'"]').val()}),u=e.param(u),"POST"===l&&(n=a.indexOf("?"),-1!==n&&(u+="&"+a.substring(n+1,a.length),a=a.substring(0,n))),e.ajax({url:a,type:l,data:u,cache:!1})}},filter:function(e,t){e.value=e.value.replace(t?RegExp("["+t[0]+"]","gm"):L,"")}}),i.config=function(t){e.each(t,function(e,t){"rules"===e?new n(t):"messages"===e?new r(t):Y[e]=t})},i.setTheme=function(t,i){Q(t)?e.each(t,function(e,t){Z[e]=t}):J(t)&&Q(i)&&(Z[t]=i)},e[m]=i}(jQuery);
;;;// JavaScript Document
// JavaScript Document
/*********************************
 * Themes, rules, and i18n support
 * Locale: Chinese; 中文
 *********************************/
;(function ($) {
    /* Global configuration
     */
    $.validator.config({
        //stopOnError: false,
        //theme: 'yellow_right',
        defaultMsg: "{0}格式不正确",
        loadingMsg: "正在验证...",
        
        // Custom rules
        rules: {
            digits: [/^\d+$/, "请输入数字"]
            ,letters: [/^[a-z]+$/i, "{0}只能输入字母"]
            ,tel: [/^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/, "电话格式不正确"]
            ,mobile: [/^[1][3,4,5,7,8][0-9]{9}$/, "手机号格式不正确"]
            ,email: [/^(?:[a-z0-9]+[_\-+.]?)*[a-z0-9]+@(?:([a-z0-9]+-?)*[a-z0-9]+\.)+([a-z]{2,})+$/i, "邮箱格式不正确"]
            ,qq: [/^[1-9]\d{4,}$/, "QQ号格式不正确"]
            ,date: [/^\d{4}-\d{1,2}-\d{1,2}$/, "请输入正确的日期,例:yyyy-mm-dd"]
            ,time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, "请输入正确的时间,例:14:30或14:30:00"]
            ,ID_card: [/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/, "请输入正确的身份证号码"]
            ,url: [/^(https?|ftp):\/\/[^\s]+$/i, "网址格式不正确"]
            ,postcode: [/^[1-9]\d{5}$/, "邮政编码格式不正确"]
            ,chinese: [/^[\u0391-\uFFE5]+$/, "请输入中文"]
            ,chinesename: [/^[a-zA-Z\u0391-\uFFE5]{2,10}$/, "请输入有效姓名"]
            ,username: [/^\w{3,12}$/, "请输入3-12位数字、字母、下划线"]
            ,password: [/^[0-9a-zA-Z]{6,16}$/, "密码由6-16位数字、字母组成"]
            ,accept: function (element, params){
                if (!params) return true;
                var ext = params[0];
                return (ext === '*') ||
                       (new RegExp(".(?:" + (ext || "png|jpg|jpeg|gif") + ")$", "i")).test(element.value) ||
                       this.renderMsg("只接受{1}后缀", ext.replace('|', ','));
            }
            
        }
    });

    /* Default error messages
     */
    $.validator.config({
        messages: {
            required: "{0}不能为空",
            remote: "{0}已被使用",
            integer: {
                '*': "请输入整数",
                '+': "请输入正整数",
                '+0': "请输入正整数或0",
                '-': "请输入负整数",
                '-0': "请输入负整数或0"
            },
            match: {
                eq: "{0}与{1}不一致",
                neq: "{0}与{1}不能相同",
                lt: "{0}必须小于{1}",
                gt: "{0}必须大于{1}",
                lte: "{0}必须小于或等于{1}",
                gte: "{0}必须大于或等于{1}"
            },
            range: {
                rg: "请输入{1}到{2}的数",
                gt: "请输入大于或等于{1}的数",
                lt: "请输入小于或等于{1}的数"
            },
            checked: {
                eq: "请选择{1}项",
                rg: "请选择{1}到{2}项",
                gt: "请至少选择{1}项",
                lt: "请最多选择{1}项"
            },
            length: {
                eq: "请输入{1}个字符",
                rg: "请输入{1}到{2}个字符",
                gt: "请输入大于{1}个字符",
                lt: "请输入小于{1}个字符",
                eq_2: "",
                rg_2: "",
                gt_2: "",
                lt_2: ""
            }
        }
    });

    /* Themes
     */
    var TPL_ARROW = '<span class="n-arrow"><b>◆</b><i>◆</i></span>';
    $.validator.setTheme({
        'simple_right': {
            formClass: 'n-simple',
            msgClass: 'n-right'
        },
        'simple_bottom': {
            formClass: 'n-simple',
            msgClass: 'n-bottom'
        },
        'yellow_top': {
            formClass: 'n-yellow',
            msgClass: 'n-top',
            msgArrow: TPL_ARROW
        },
        'yellow_right': {
            formClass: 'n-yellow',
            msgClass: 'n-right',
            msgArrow: TPL_ARROW
        },
        'yellow_right_effect': {
            formClass: 'n-yellow',
            msgClass: 'n-right',
            msgArrow: TPL_ARROW,
            msgShow: function($msgbox, type){
                var $el = $msgbox.children();
                if ($el.is(':animated')) return;
                if (type === 'error') {
                    $el.css({
                        left: '20px',
                        opacity: 0
                    }).delay(100).show().stop().animate({
                        left: '-4px',
                        opacity: 1
                    }, 150).animate({
                        left: '3px'
                    }, 80).animate({
                        left: 0
                    }, 80);
                } else {
                    $el.css({
                        left: 0,
                        opacity: 1
                    }).fadeIn(200);
                }
            },
            msgHide: function($msgbox, type){
                var $el = $msgbox.children();
                $el.stop().delay(100).show().animate({
                    left: '20px',
                    opacity: 0
                }, 300, function(){
                    $msgbox.hide();
                });
            }
        }
    });
})(jQuery);

// JavaScript Document
//center()居中函数
; (function ($) { $.fn.extend({ center: function () { return this.each(function () { var _a = ($(window).width()) / 2; var _b = ($(window).height()) / 2; var aH = $(window).scrollTop(); var aW = $(window).scrollLeft(); var w_box = $(this).width() / 2; var H_box = $(this).height() / 2; var top = _b + aH - H_box; var left = _a + aW - w_box; $(this).css({ position: 'absolute', margin: 0, top: (top > 0 ? top : 0) + 'px', left: (left > 0 ? left : 0) + 'px' }) }) } }) })(jQuery);

//加减号

function guestsCountchange(personType, modify) {
    var roomCount = parseInt($("#room-num").val());
    var peopleCount = parseInt($("#people-num").val());

    if ('room' == personType) {
        if ('add' == modify) {
            $("#room-num").val(roomCount + 1);
        } else if ('subtract' == modify) {
            if ($("#room-num").val() > 1) {
                $("#room-num").val(roomCount - 1);
            }

        }
    } else if ('people' == personType) {
        if ('add' == modify) {
            $("#people-num").val(peopleCount + 1);
        } else if ('subtract' == modify) {
            if ($("#people-num").val() > 0) {
                $("#people-num").val(peopleCount - 1);
            }
        }
    }
}

function showComplete_zh(reurl) {
    $("#information-box").center().show();
    //$('.information-form form').jqTransform();	

    $("#reurl").val(reurl);

    $.ajax({
        type: 'GET',
        url: '/member/certificate',
        dataType: "JSON",
        success: function (data) {
            $.each(eval(data.results), function (i, item) {
                if (item != null) {
                    $("#certificate").append("<option value='" + item.name + "'>" + item.val + "</option>");
                }
            }
        )
        }
    });

    //快速注册用户弹出层
    var ducHeight = $(document).height();
    var ducWidth = $(document).width();
    $(".page-cover").css("height", ducHeight);
    $(".page-cover").css("width", ducWidth);
    $(".page-cover").show();
}


function showComplete_en(reurl) {
    $("#information-box").center().show();
    //$('.information-form form').jqTransform();	

    $("#reurl").val(reurl);

    $.ajax({
        type: 'GET',
        url: '/member/certificate',
        dataType: "JSON",
        success: function (data) {
            $.each(eval(data.results), function (i, item) {
                if (item != null) {
                    $("#certificate").append("<option value='" + item.name + "'>" + item.name + "</option>");
                }
            }
        )
        }
    });

    //快速注册用户弹出层
    var ducHeight = $(document).height();
    var ducWidth = $(document).width();
    $(".page-cover").css("height", ducHeight);
    $(".page-cover").css("width", ducWidth);
    $(".page-cover").show();
}

$("#information-box .com-pup-close").click(function (event) {
    event.preventDefault;
    $("#information-box").hide();
    $(".page-cover").hide();
    return false;
});

$("#sure-box .com-pup-close").click(function (event) {
    event.preventDefault;
    $("#sure-box").hide();
    $(".page-cover").hide();
    return false;
});

$(".skip a").click(function (event) {
    event.preventDefault;
    $("#information-box").hide();
    $(".page-cover").hide();
    return false;
});


function doSubmit_en() {
    //alert("doSubmit1..");

    if (validateName_en()) return;
    if (validateCertificateID_en()) return;

    var msg = "Submitting，please wait...";

    $('#submit').attr("disabled", "disabled");
    $('#gerMessage').text(msg);
    $('#gerMessage').show();
    $.ajax({
        type: 'POST',
        url: '/member/invite/updateregistMember',
        cache: false,
        dataType: "JSON",
        data: {
            name: $('#cname').val(),
            certificateType: $('#certificate').val(),
            certificateNo: $('#certificateNo').val()
        },
        success: function (data) {
            if (data.status == 'OK') {
                if (data.couponAmount) $("#couponAmount").text(data.couponAmount);

                $("#sure-box").center().show();

                $("#information-box").hide();


                //信息确认完善弹出层
                var ducHeight = $(document).height();
                var ducWidth = $(document).width();
                $(".page-cover").css("height", ducHeight);
                $(".page-cover").css("width", ducWidth);
                $(".page-cover").show();
            } else {
                //if(data.status=='MEMBER_NOT_EXIST')msg="没有找到会员相关的记录无法激活";
                if (data.status == 'MEMBER_NOT_EXIST') msg = "Members did not find relevant records can not be activated";
                //if(data.status=='MOBILE_EXIST')msg="此手机号码已经被使用过";
                if (data.status == 'MOBILE_EXIST') msg = "This document type and number has been used";
                //if(data.status=='ID_NUMBER_EXIST')msg="此证件类型和号码已经被使用过";
                if (data.status == 'ID_NUMBER_EXIST') msg = "此证件类型和号码已经被使用过";
                //if(data.status=='EMAIL_EXIST')msg="此邮箱地址已经被使用过";
                if (data.status == 'EMAIL_EXIST') msg = "This email address has been used";
                //if(data.status=='MEMBER_ALREDY_REGIST')msg="该用户已经被注册过";
                if (data.status == 'MEMBER_ALREDY_REGIST') msg = "The user has been registered";
                //if(data.status=='FAIL')msg="更新失败";
                if (data.status == 'FAIL') msg = "Update Failed";
                $('#gerMessage').text(msg);
                $('#submit').removeAttr("disabled");
            }
        },
        error: function () {
            window.location.reload();
        }
    });
}

function doSubmit_zh() {
    //alert("doSubmit2..");
    if (validateName_zh()) return;
    if (validateCertificateID_zh()) return;

    var msg = "正在提交，请稍后...";

    $('#submit').attr("disabled", "disabled");
    $('#gerMessage').text(msg);
    $('#gerMessage').show();
    $.ajax({
        type: 'POST',
        url: '/member/invite/updateregistMember',
        cache: false,
        dataType: "JSON",
        data: {
            name: $('#cname').val(),
            certificateType: $('#certificate').val(),
            certificateNo: $('#certificateNo').val()
        },
        success: function (data) {
            if (data.status == 'OK') {

                if (data.couponAmount) $("#couponAmount").text(data.couponAmount);

                $("#sure-box").center().show();
                $("#information-box").hide();
                //信息确认完善弹出层
                var ducHeight = $(document).height();
                var ducWidth = $(document).width();
                $(".page-cover").css("height", ducHeight);
                $(".page-cover").css("width", ducWidth);
                $(".page-cover").show();

            } else {
                if (data.status == 'MEMBER_NOT_EXIST') msg = "没有找到会员相关的记录无法激活";
                if (data.status == 'MOBILE_EXIST') msg = "此手机号码已经被使用过";
                if (data.status == 'ID_NUMBER_EXIST') msg = "此证件类型和号码已经被使用过";
                if (data.status == 'EMAIL_EXIST') msg = "此邮箱地址已经被使用过";
                if (data.status == 'MEMBER_ALREDY_REGIST') msg = "该用户已经被注册过";
                if (data.status == 'FAIL') msg = "更新失败";
                $('#gerMessage').text(msg);
                $('#submit').removeAttr("disabled");
            }
        },
        error: function () {
            window.location.reload();
        }
    });
}


function validateCertificateID_zh() {
    var message = '';
    var hasError = false;
    var num = $('#certificateNo').val();
    if ($.trim($('#certificateNo').val()) == '') {
        message = '证件号不能为空！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
    if ($('#certificate').val() == 'ID') {
        if (!(/(^\d{15}$)|(^[0-9]{17}([0-9]|X)$)/.test(num.toUpperCase()))) {
            message = '证件号无效！';
            //alert('***输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。'); 
            removeError();
            $('#gerMessage').html(message);
            return hasError = true;
        }
    }

    var url = "/member/jsonCdno?cdno=" + num + "&cdtype=" + $('#certificate').val();
    $.ajax({
        url: url,
        type: "post",
        async: false,
        cache: false,
        success: function (result) {
            if (result == "Y") {
                removeError();
                $("#gerMessage").html("证件类型/证件号码已存在,请联系：400-820-9999");
                return hasError = true;
            }
        }
    });

    if (!hasError) {
        removeError();
    }
    return hasError;
}

function validateName_zh() {
    var hasError = false;
    if ($.trim($('#cname').val()) == '') {
        var message = '姓名不能为空！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    if ($.trim($('#cname').val()).length > 30) {
        var message = '姓名长度不能大于30个字符！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    return hasError;
}


function removeError() {
    $("#gerMessage").html("");
}



function validateCertificateID_en() {
    var message = '';
    var hasError = false;
    var num = $('#certificateNo').val();
    if ($.trim($('#certificateNo').val()) == '') {
        message = 'Identification number can not be empty！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
    if ($('#certificate').val() == 'ID') {
        if (!(/(^\d{15}$)|(^[0-9]{17}([0-9]|X)$)/.test(num.toUpperCase()))) {
            message = 'ID number is invalid！';
            //alert('***输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。'); 
            removeError();
            $('#gerMessage').html(message);
            return hasError = true;
        }
    }

    var url = "/member/jsonCdno?cdno=" + num + "&cdtype=" + $('#certificate').val();
    $.ajax({
        url: url,
        type: "post",
        async: false,
        cache: false,
        success: function (result) {
            if (result == "Y") {
                removeError();
                $("#gerMessage").html("ID Type / ID number already exists, please contact：400-820-9999");
                return hasError = true;
            }
        }
    });

    if (!hasError) {
        removeError();
    }
    return hasError;
}

function validateName_en() {
    var hasError = false;
    if ($.trim($('#cname').val()) == '') {
        var message = 'Name can not be empty！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    if ($.trim($('#cname').val()).length > 30) {
        var message = 'Name length can not exceed 30 characters！'
        removeError();
        $('#gerMessage').html(message);
        return hasError = true;
    }
    return hasError;
}
;;;;;;;;

// JavaScript Document
var val = [];
$.fn.extend({
	
	verificationCode : function(prcUrl, captureEle){
		
		//this : $('#imgCheck')
		
		
		var This = this;
		var urlPath ='';

		
		urlPath = "url('" + prcUrl + "')";

		$(this).find(".imgCap").css({"background-image":urlPath});
		$(this).find('dd.imgCap').click(function(e){
			e.preventDefault();
			var index = This.find('dd').index($(this)),
				m = parseInt( captureEle.eq(index).val() ),
				_m = m>0 ? (m + 1) : 1,
				x,y,
				arr = [];
            if($.browser.msie && ( parseInt($.browser.version) < 9 ) && !$.support.style ? true : false){
				arr[0] = $(this).css("background-position-x");
				arr[1] = $(this).css("background-position-y");
			}else{
				arr = $.trim( $(this).css("background-position").replace(/\s{2,}/ig, "")).split(" ");
	
			}
	
			x = parseInt( arr[0].replace("px", "") ),
			y = parseInt( arr[1].replace("px", "") );
			y = y-64 > -256 ? (y-64):0;
			$(this).css({
				"background-position": x + 'px ' + y + 'px'
			});
            captureEle.eq(index).val(_m);
			return false;
		});
        //循环数组赋值
		for(var i = 0; i <captureEle.length; i++){
			val[i] = captureEle.eq(i).val();
		}
		return val;
	}
	
});
;;;;;;;;;;;;;;;


/*------------我的电子券和站内信公用头部和导航JS*/
$(function(){	 	
	//tab选项卡操作
    //$(".right-tab-head").find("li").eq(0).attr("class","on");
    

	$(".right-tab").find(".right-tab-head").find("li").click(function(){
		$(".right-tab").find(".right-tab-head").find("li").attr("class","");
		$(".right-tab").find(".tab-mian-change").hide();
		$(this).attr("class", "on");
		$(".right-tab").find(".tab-mian-change").eq($(this).index()).show();
		//console.log("jqTransform()");
		//$('.jqForm').jqTransform();
	});
    //头部导航我的账户弹出层	   
	$(".lm").hover(function(){
		$(this).toggleClass("lmhover");	
		$(this).find(".lmtip").toggle();
    });
	
	//我的账户左侧导航
	$(".left-bar-mian dt").click(function(){
		$(this).toggleClass("on");								  
		$(this).parent("dl").find("dd").toggle();							
	});

	//操作时间点击排序按钮
	$(".oprate-time p").click(function(){
		$(this).toggleClass("on");								  							
	});
	
	//过期时间点击排序按钮
	$(".deadline-time p").click(function(){
		$(this).toggleClass("on");								  							
	});
	
});
	// JavaScript Document
	//center()居中函数
;(function($){$.fn.extend({center:function(){return this.each(function(){var _a=($(window).width())/2;var _b=($(window).height())/2;var aH=$(window).scrollTop();var aW=$(window).scrollLeft();var w_box=$(this).width()/2;var H_box=$(this).height()/2;var top=_b+aH-H_box;var left=_a+aW-w_box;$(this).css({position:'absolute',margin:0,top:(top>0?top:0)+'px',left:(left>0?left:0)+'px'})})}})})(jQuery);

//加减号

function guestsCountchange(personType,modify){
	var roomCount =parseInt($("#room-num").val());
	var peopleCount =parseInt($("#people-num").val());
	

	if('room'==personType){
	    if ('add' == modify && roomCount<3) {
				$("#room-num").val(roomCount+1);
		}else if('subtract' ==modify){
			if($("#room-num").val()>1){
			    $("#room-num").val(roomCount - 1);

			    var maxPeopleCount = (roomCount - 1) * 2;
			    if (peopleCount > maxPeopleCount) {
			        $("#people-num").val(maxPeopleCount);
			    }
			}
			
		}
	}else if('people'==personType){
	    if ('add' == modify && peopleCount < roomCount * 2) {
		        $("#people-num").val(peopleCount+1);
		}else if('subtract' ==modify){
			if($("#people-num").val()>0){
				$("#people-num").val(peopleCount-1);
			}
		}
	}
}
;;;;;;;;;;;;;;;;;;;;;;

// JavaScript Document
//试用说明
//调用方式
//弹出层样式自定义，只传递一个弹出层的“引用名字即可”
//退出触发按钮名字为 “.exit”,是当前弹出层的“子元素”
//pAry是默认配置，
//触发调用方式为
//$().popEvt({}); '{}'传递参数
//默认配置为
//{
//           id:".pop", //弹出层id或者classname
//          x:"auto",  //默认自动居中，传递数据时根据数据定位 例如：20
//          y:"auto",  //默认自动居，中传递数据时根据数据定位 例如：40
//        pos:"fixed", //相对或绝对位置 fixed ，absolute
//        rePos:true, //跟随窗口变化重新调整位置 true,false
//    isCover:true //是否有遮蔽层 true,false  
//      }

(function($){
    var pAry={
           id:"", //弹出层id或者classname
            x:"auto",  //默认自动居中，传递数据时根据数据定位 例如：20
            y:"auto",  //默认自动居，中传递数据时根据数据定位 例如：40
          pos:"fixed", //相对或绝对位置 fixed ，absolute
          rePos:true, //跟随窗口变化重新调整位置 true,false
      isCover:true //是否有遮蔽层 true,false  
        }
    $.fn.popEvt=function(sAry){
        var inAry=new Array(); //备份初始数据
        $.extend(pAry,sAry);
        $.extend(inAry,pAry);
        coverM(pAry.isCover);//遮蔽层控制
        popM(pAry); //弹出层设置
        //重新调整位置
       $(window).resize(function(){ 
          var et=$(pAry.id).css("display");
          if(et == "none"){ //弹出层隐藏事
                return false;
              } 
           coverM(pAry.isCover);
           if(pAry.rePos){
               popM(pAry); 
             }
        });
            
       //退出按钮   
       $(pAry.id+" .exit").click(function(){
          $(pAry.id).fadeOut("fast",function(){
              if($.browser.version==6.0){
                  $('.pop-ifm').fadeOut("fast");
                  }
              $('.pop-cover').fadeOut("fast");
              
           });
       }); 
       
         
     }
      
   // 弹出层设置
   var popM=function(pAry){
            var x=pAry.x;
            var y=pAry.y;
            var sx;
            var sy;
            if(pAry.x =='auto'){
                x=($(window).width()-$(pAry.id).width())/2;
              } 
           if(pAry.y=='auto'){
                y=($(window).height()-$(pAry.id).height())/2;
             } 
           var y2=$(window).scrollTop()+y;
           if($.browser.version == '6.0'){ 
                $(pAry.id).css({left:x+"px",top:y2+"px",position:"absolute"});
               }else if(pAry.pos == "absolute"){
                $(pAry.id).css({left:x+"px",top:y2+"px",position:pAry.pos});   
               }else{
                $(pAry.id).css({left:x+"px",top:y+"px",position:pAry.pos});
               }
           
           if($.browser.version == '8.0'){ 
               $(pAry.id).css("display","block"); 
             }else{
               $(pAry.id).fadeIn("fast");    
              }
           
           //在IE6下层跟随鼠标一起滚动
           $(window).scroll(function(){
                if($.browser.version == '6.0'){  
                    $(".pop-cover,.pop-ifm").css({top:$(window).scrollTop()+"px",left:$(window).scrollLeft()+"px"}); 
                    if( pAry.pos == "fixed"){
                          sx=x+$(window).scrollLeft();
                          sy=y+$(window).scrollTop();
                          $(pAry.id).css({top:sy+"px",left:sx+"px"});  
                       }
                     
                   }
                 
             });
       };
       
          
    // 遮蔽层设置 
    var coverM=function(par){
          if(par==false){
             return false;
            }
          var ex=$(".pop-cover").length;
          var ex2=$(".pop-ifm").length;
          var coverStr;
          var ifm;
          var pa="fixed";
          
          if($.browser.version==6.0){
               pa="absolute";
               if(ex2==0){
                    ifm='<iframe class="pop-ifm" style="height:'+$(window).height()+'px; width:'+$(window).width()+'px; position:absolute; z-index:665; top:0; left:0; background:none; opacity:0; filter:Alpha(opacity=0);" scrolling="no" frameborder="0"></iframe>';
                    coverStr="<div class='pop-cover' style='width:"+$(window).width()+"px; height:"+$(window).height()+"px; display:none; position:"+pa+";  background-color:gray; opacity:0.5; filter:Alpha(opacity=50); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50); z-index:666; top:0; left:0;'></div>";
                    $("body").prepend(ifm);
                    $("body").prepend(coverStr);    
                    $(".pop-cover,.pop-ifm").css({top:$(window).scrollTop()+"px",left:$(window).scrollLeft()+"px"}); 
                   }else{
                     $(".pop-ifm").css({width:$(window).width()+"px",height:$(window).height()+"px"});
                     $(".pop-cover").css({width:$(window).width()+"px",height:$(window).height()+"px",opacity:"0.5"});      
                   }
                  $(".pop-ifm,.pop-cover").fadeIn("fast");  
              }else{ //others  browser
                  if(ex==0){  
                    coverStr="<div class='pop-cover' style='width:"+$(window).width()+"px; height:"+$(window).height()+"px;display:none; position:"+pa+";  background-color:gray; opacity:0.5; filter:Alpha(opacity=50); filter:progid:DXImageTransform.Microsoft.Alpha(opacity=50); z-index:666; top:0; left:0;'></div>";
                    $("body").prepend(coverStr);    
                   }else{
                     $(".pop-cover").css({width:$(window).width()+"px",height:$(window).height()+"px",opacity:"0.5"});       
                   }
                   $(".pop-cover").fadeIn("fast");  
                   
              } 
        };
    
        
  })(jQuery);

/*
author:tony.wang  qq:546172171
time://2013-3-15
texttip:弹出框  一般情况下不变
width:弹出的宽度
height:弹出的高度 可为空
left:弹出偏移量
positionleft：小图标（三角）左右偏移量
*/

jQuery.fn.popTip = function(params){
	var p = params || {
			texttip:'jjui_poptext',
			width:250,
			maxwidth:250,
			left:0,
			positionleft:50
	}; 

	var _width = p.width;
	var _height = p.height;
	var _left = p.left;
	var _positionleft = p.positionleft;
	var _maxwidth = p.maxwidth;
	
	
	var htm='<div id="jjui_poptext" style="position:absolute; display:none;text-align:left;font-size:12px;color:#ad8b54;z-index:999;">'+	
				'<div style="border:1px solid #e8d6ba; padding:10px 12px 8px 20px; margin-bottom:-2px; position:relative;font-size:12px;background:#fefdfc;width:auto;">'+
					'<div class="jjui_cornu" style="-left:100px; height:8px; line-height:8px; width:100%;z-index:1; position:absolute; bottom:-8px;left:0"></div>'+
					'<div class="jjui_content">'+					
					'</div>'+				
				'</div>'+   
			'</div>'


	if(!$("#"+ p.texttip).attr('id')){
		$('body').append(htm);	
	}	
	
	$(this).hover(function(){			
			var datadase=$(this).attr('data-params');
			var k=eval('(' + datadase + ')');
			if (k.options.content.txt == '' || k.options.content.txt == '<li></li>') {
			    $("#" + p.texttip).hide();
			    return;
			}
			var h=$(this).height();			
			var template={
					title_txt:'<h3 style="font-size:12px;">'+k.options.content.title+'</h3><p>'+k.options.content.txt+'</p>',
					txt:'<p>'+k.options.content.txt+'</p>'
			}
			if(!k.options.content.href){$("#"+ p.texttip).find('a').hide();}
			else{$("#"+ p.texttip).find('a').text(k.options.content.thref).show().attr('href',k.options.content.href);}
			$("#"+ p.texttip).find('div.jjui_cornu').css({'background-position':_positionleft+'px 1px'});
			$("#"+ p.texttip).find('div.jjui_content').html(template[k.options.template]).css({'width':_width,'_width':_maxwidth,'height':_height,'max-width':_maxwidth});
			$("#"+ p.texttip).css({'left':$(this).offset().left-_positionleft+_left+66,'top':$(this).offset().top-h+14-$("#jjui_poptext").height()}).show();
          //  alert($(this).offset().left);
		//	alert(_positionleft);
			//alert(_left);
		},function(){			
			$("#"+ p.texttip).hide();
	});	
	$("#"+ p.texttip).hover(function(){	
			$("#"+ p.texttip).show();			
		},function(){
			$("#"+ p.texttip).hide();
	});	
};
;;;;;;;
/*! http://mths.be/placeholder v2.0.8 by @mathias */
;(function(window, document, $) {

	// Opera Mini v7 doesn’t support placeholder although its DOM seems to indicate so
	var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
	var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
	var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
	var prototype = $.fn;
	var valHooks = $.valHooks;
	var propHooks = $.propHooks;
	var hooks;
	var placeholder;

	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value;
				}

				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);

				var $passwordInput = $element.data('placeholder-password');
				if ($passwordInput) {
					return $passwordInput[0].value = value;
				}

				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != safeActiveElement()) {
						// We can't use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		if (!isInputSupported) {
			valHooks.input = hooks;
			propHooks.value = hooks;
		}
		if (!isTextareaSupported) {
			valHooks.textarea = hooks;
			propHooks.value = hooks;
		}

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don't get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {};
		var rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this;
		var $input = $(input);
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
				input == safeActiveElement() && input.select();
			}
		}
	}

	function setPlaceholder() {
		var $replacement;
		var input = this;
		var $input = $(input);
		var id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': $input,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

	function safeActiveElement() {
		// Avoid IE9 `document.activeElement` of death
		// https://github.com/mathiasbynens/jquery-placeholder/pull/99
		try {
			return document.activeElement;
		} catch (exception) {}
	}

}(this, document, jQuery));
// JavaScript Document
;;;;;;;




// JavaScript Document
//Club会员优惠轮播start
function startMove(obj, json, fn) {
    clearInterval(obj.iTimer);
    var iCur = 0;
    var iSpeed = 0;
        
    obj.iTimer = setInterval(function() {
        
        var iBtn = true;
                    
        for ( var attr in json ) {
                            
            var iTarget = json[attr];
            
            if (attr == 'opacity') {
                iCur = Math.round(css( obj, 'opacity' ) * 100);
            } else {
                iCur = parseInt(css(obj, attr));
            }
            
            iSpeed = ( iTarget - iCur ) / 3;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            
            if (iCur != iTarget) {
                iBtn = false;
                if (attr == 'opacity') {
                    obj.style.opacity = (iCur + iSpeed) / 100;
                    obj.style.filter = 'alpha(opacity='+ (iCur + iSpeed) +')';
                } else {
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
            }
            
        }
        
        if (iBtn) {
            clearInterval(obj.iTimer);
            fn && fn.call(obj);
        }
        
    }, 20);
}

function css(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}


$.fn.turn = function(settings){

    settings = $.extend({
        boxWidth : 1000 ,//父级宽度
        turnWidth : 680 ,//轮播宽度
        turnHeight : 310 ,//轮播高度
        turnArrow : 1,//是否有切换箭头
        turnCircle :1, //是否有圆点
        autoplay : 'true'//是否自动轮播

    },settings);

    $(this).each(function(){ 
        var oSelf = $(this);
        
        var liHtml = oSelf.find(".pic").html() + oSelf.find(".pic").html();
        var iNow = 0;
        var Timer = null;
        var nullWidth = (settings.boxWidth - settings.turnWidth)/2;
        oSelf.wrap('<div class="mF_tbhuabao_wrap" style="position:relative;"></div>');
        oSelf.addClass("mF_" + oSelf.attr('id'));
        oSelf.css({"width" : settings.boxWidth,"height" :settings.turnHeight,"overflow" :"hidden"})
        oSelf.find(".pic").html(liHtml);
        var nLi = oSelf.find(".pic li").length;
        var iLiWidth = oSelf.find(".pic li").width();
        var oPic = oSelf.find(".pic");
        var oThisId = oSelf.attr("id");
        var oIdPic = document.getElementById(oThisId).getElementsByTagName('ul')[0];
        oSelf.find(".pic").css({'width':settings.turnWidth*nLi});
        oSelf.hover(function(){
            clearTimeout(Timer);
        },function(){
            if(settings.autoplay == "true"){
                Timer = setInterval(function(){
                    iNow++;
                    if(iNow == nLi/2){
                       iNow = 0;    
                    }
                    tab();

                },4000);
            }
        })
        if(settings.turnArrow == 1){
            var arrowHtml = '<a href="javascript:;" class="prev"></a><a href="javascript:;" class="next"></a>"'
            var $arrowHtml = $(arrowHtml).appendTo(oSelf);
            oSelf.find(".prev").click(function(){
                clearTimeout(Timer);
                iNow--;
                if(iNow < 0){
                   iNow = nLi/2-1;  
                }
                tab();
            })
            oSelf.find(".next").click(function(){
                clearTimeout(Timer);                               
                iNow++;
                if(iNow == nLi/2){
                   iNow = 0;    
                }
                tab();
            })
        }
        if(settings.turnCircle == 1){
            var i = 0;
            var oLiHtml = "";
            var oUlHtml = "";

            for(i = 0 ; i < nLi/2 ; i++){
                oLiHtml +='<li><a href="javascript:;">•</a></li>'
            }
            oUlHtml = '<ul class="dot">' + oLiHtml +'</ul>';
            var $oUlHtml = $(oUlHtml).appendTo(oSelf);
            var aSmallLi = $(".dot").find("li");
            for(i = 0; i < aSmallLi.length ; i++){
                  
                aSmallLi[i].index = i;
                aSmallLi[i].onmouseover = function(){
                    clearTimeout(Timer);
                    $(this).addClass("current");
                    iNow = this.index;
                    tab();
                }

            }
        }

        if(settings.autoplay == "true"){
            Timer = setInterval(function(){
                iNow++;
                if(iNow == nLi/2){
                   iNow = 0;    
                }
                tab();

            },4000);
        }
        function tab(){
            var iPicLeft ;

            if(iNow == nLi/2 -1){
                iPicLeft = -iNow*iLiWidth + (settings.boxWidth - settings.turnWidth)/2;
            }else{
                iPicLeft = -(iNow+nLi/2)*iLiWidth + nullWidth;
            }
            
            startMove(oIdPic,{left: iPicLeft});
            if(settings.turnCircle == 1){
                var aSmallLi = $(".dot").find("li");
                for(i = 0; i < aSmallLi.length ; i++){
                    $(".dot").find("li").eq(i).removeClass("current");
                }
                $(".dot").find("li").eq(iNow).addClass("current");
            }
        }
        tab();
        
    });
	
	
	
	
	// JavaScript Document

/*
    通用表单验证方法
    Validform version 3.0
    For more information, you can visit www.rjboy.cn
    By sean during April 7, 2010 - August 7, 2011
*/

;(function(d){var e=null,c,b=true,a={w:"请输入正确信息！",r:"通过信息验证！",c:"正在检测信息…",s:"请填入信息！",v:"所填信息没有经过验证，请稍后…",p:"正在提交数据…",err:"提交数据出错，请检查地址是否正确！"},f=function(){if(d("#Validform_msg").length!==0){return false}c=d('<div id="Validform_msg"><div class="Validform_title">提示信息<a class="Validform_close" href="javascript:void(0);">&chi;</a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%"></iframe></div></div>').appendTo("body");c.find("a.Validform_close").click(function(){c.hide();b=true;if(e){e.focus().addClass("Validform_error")}return false}).focus(function(){this.blur()});d(window).bind("scroll resize",function(){if(!b){var i=(d(window).width()-c.width())/2,h=(d(window).height()-c.height())/2,g=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(h>0?h:0);c.animate({left:i,top:g},{duration:400,queue:false})}})};d.fn.Validform=function(g){var h={};g=d.extend({},d.fn.Validform.sn.defaults,g);g.datatype&&d.extend(d.Datatype,g.datatype);this.each(function(){var k=d(this);var j=false;k.find("[tip]").each(function(){var m=d(this).attr("tip");var l=d(this).attr("altercss");d(this).focus(function(){if(d(this).val()==m){d(this).val("");if(l){d(this).removeClass(l)}}}).blur(function(){if(d.trim(d(this).val())===""){d(this).val(m);if(l){d(this).addClass(l)}}})});k.find("[datatype]").blur(function(){var l=true;l=d.fn.Validform.sn.checkform(d(this),k,{type:g.tiptype,sweep:g.tipSweep},"hide");if(!l){return false}if(typeof(l)!="boolean"){d(this).removeClass("Validform_error");return false}l=d.fn.Validform.sn.regcheck(d(this).attr("datatype"),d(this).val());if(!l){if(d(this).attr("ignore")==="ignore"&&(d(this).val()===""||d(this).val()===d(this).attr("tip"))){if(g.tiptype==2){d(this).parent().next().find(".Validform_checktip").removeClass().addClass("Validform_checktip").text("")}else{if(typeof g.tiptype=="function"){(g.tiptype)("",{obj:d(this),type:4},d.fn.Validform.sn.cssctl)}}l=true;e=null;return true}e=d(this);d.fn.Validform.sn.showmsg(d(this).attr("errormsg")||a.w,g.tiptype,{obj:d(this),sweep:g.tipSweep},"hide")}else{if(d(this).attr("ajaxurl")){var m=d(this);m.attr("valid",a.c);d.fn.Validform.sn.showmsg(a.c,g.tiptype,{obj:m,type:1,sweep:g.tipSweep},"hide");d.ajax({type:"POST",url:m.attr("ajaxurl"),data:"param="+d(this).val()+"&name="+d(this).attr("name"),dataType:"text",success:function(n){if(n=="y"){m.attr("valid","true");e=null;d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:m,type:2,sweep:g.tipSweep},"hide")}else{m.attr("valid",n);e=m;d.fn.Validform.sn.showmsg(n,g.tiptype,{obj:m,sweep:g.tipSweep})}},error:function(){m.attr("valid",a.err);e=m;d.fn.Validform.sn.showmsg(a.err,g.tiptype,{obj:m,sweep:g.tipSweep})}})}else{e=null;d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:d(this),type:2,sweep:g.tipSweep},"hide")}}});k.find(":checkbox[datatype],:radio[datatype]").each(function(){var m=d(this);var l=m.attr("name");k.find("[name="+l+"]").filter(":checkbox,:radio").not("[datatype]").bind("blur",function(){m.trigger("blur")})});var i=function(){var l=true;if(j){return false}k.find("[datatype]").each(function(){l=d.fn.Validform.sn.checkform(d(this),k,{type:g.tiptype,sweep:g.tipSweep});if(!l){e.focus();return false}if(typeof(l)!="boolean"){l=true;return true}l=d.fn.Validform.sn.regcheck(d(this).attr("datatype"),d(this).val());if(!l){if(d(this).attr("ignore")==="ignore"&&(d(this).val()===""||d(this).val()===d(this).attr("tip"))){l=true;e=null;return true}e=d(this);e.focus();d.fn.Validform.sn.showmsg(d(this).attr("errormsg")||a.w,g.tiptype,{obj:d(this),sweep:g.tipSweep});return false}if(d(this).attr("ajaxurl")){if(d(this).attr("valid")!="true"){l=false;var m=d(this);e=m;e.focus();d.fn.Validform.sn.showmsg(m.attr("valid")||a.v,g.tiptype,{obj:m,sweep:g.tipSweep});if(!b||g.tiptype!=1){setTimeout(function(){m.trigger("blur")},2000)}return false}else{d.fn.Validform.sn.showmsg(a.r,g.tiptype,{obj:d(this),type:2,sweep:g.tipSweep},"hide");l=true}}});if(l&&!j){e=null;if(g.postonce){j=true}if(g.ajaxPost){d.fn.Validform.sn.showmsg(a.p,g.tiptype,{obj:k,type:1,sweep:g.tipSweep},"alwaysshow");d.ajax({type:"POST",dataType:"json",url:k.attr("action"),data:k.serialize(),success:function(m){if(m.status==="y"){d.fn.Validform.sn.showmsg(m.info,g.tiptype,{obj:k,type:2,sweep:g.tipSweep},"alwaysshow")}else{d.fn.Validform.sn.showmsg(m.info,g.tiptype,{obj:k,type:3,sweep:g.tipSweep},"alwaysshow")}g.callback&&(g.callback)(m)},error:function(){d.fn.Validform.sn.showmsg(a.err,g.tiptype,{obj:k,type:3,sweep:g.tipSweep},"alwaysshow")}});return false}else{g.callback?(g.callback)():k.get(0).submit()}}};g.btnSubmit&&k.find(g.btnSubmit).bind("click",i);k.submit(function(){i();return false})});if(g.tiptype==1||(g.tiptype==2&&g.ajaxPost)){f()}};d.fn.Validform.sn={defaults:{tiptype:1,tipSweep:false,postonce:false,ajaxPost:false},toString:Object.prototype.toString,regcheck:function(i,k){if(this.toString.call(d.Datatype[i])=="[object Function]"){return(d.Datatype[i])(k)}if(!(i in d.Datatype)){var m=i.match(d.Datatype.match),g;reg:for(var h in d.Datatype){g=h.match(d.Datatype.match);if(!g){continue reg}if(m[1]===g[1]){var l=d.Datatype[h].toString();var j=new RegExp("\\{"+g[2]+","+g[3]+"\\}");l=l.replace(j,"{"+m[2]+","+m[3]+"}").replace(/^\//,"").replace(/\/$/,"");d.Datatype[i]=new RegExp(l);break reg}}}if(this.toString.call(d.Datatype[i])=="[object RegExp]"){return d.Datatype[i].test(k)}return false},showmsg:function(l,h,k,g){if(e){e.addClass("Validform_error")}if(typeof h=="function"){if(!(k.sweep&&g=="hide")){(h)(l,k,this.cssctl)}return false}if(h==1||g=="alwaysshow"){c.find(".Validform_info").text(l)}if(h==1&&g!="hide"||g=="alwaysshow"){b=false;c.find(".iframe").css("height",c.height());var j=(d(window).width()-c.width())/2;var i=(d(window).height()-c.height())/2;i=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(i>0?i:0);c.css({left:j}).show().animate({top:i},100)}if(h==2&&k.obj){k.obj.parent().next().find(".Validform_checktip").text(l);this.cssctl(k.obj.parent().next().find(".Validform_checktip"),k.type)}},checkform:function(k,j,g,o){var l=k.attr("errormsg")||a.w,i;if(k.is("[datatype='radio']")){i=k.attr("name");var n=j.find(":radio[name="+i+"]:checked").val();if(!n){e=k;this.showmsg(l,g.type,{obj:k,sweep:g.sweep},o);return false}e=null;this.showmsg(a.r,g.type,{obj:k,type:2,sweep:g.sweep},"hide");return"radio"}if(k.is("[datatype='checkbox']")){i=k.attr("name");var m=j.find(":checkbox[name="+i+"]:checked").val();if(!m){e=k;this.showmsg(l,g.type,{obj:k,sweep:g.sweep},o);return false}e=null;this.showmsg(a.r,g.type,{obj:k,type:2,sweep:g.sweep},"hide");return"checkbox"}if(k.is("[datatype='select']")){if(!k.val()){e=k;this.showmsg(l,g.type,{obj:k,sweep:g.sweep},o);return false}e=null;this.showmsg(a.r,g.type,{obj:k,type:2,sweep:g.sweep},"hide");return"select"}var p=k.attr("tip");if((d.trim(k.val())===""||k.val()===p)&&k.attr("ignore")!="ignore"){e=k;this.showmsg(k.attr("nullmsg")||a.s,g.type,{obj:k,sweep:g.sweep},o);return false}if(k.attr("recheck")){var h=j.find("input[name="+k.attr("recheck")+"]:first");if(k.val()!=h.val()){e=k;this.showmsg(l,g.type,{obj:k,sweep:g.sweep},o);return false}}k.removeClass("Validform_error");e=null;return true},cssctl:function(h,g){switch(g){case 1:h.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");break;case 2:h.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");break;case 4:h.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");break;default:h.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong")}}};d.Showmsg=function(g){f();d.fn.Validform.sn.showmsg(g,1)};d.Hidemsg=function(){c.hide();b=true};d.Datatype={match:/^(.+)(\d+)-(\d+)$/,"*":/.+/,"*6-16":/^.{6,16}$/,n:/^\d+$/,s:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/m,"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,p:/^[0-9]{6}$/,m:/^13[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$/,e:/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}})(jQuery);


}
;;;;;;;
//Club会员优惠轮播end
