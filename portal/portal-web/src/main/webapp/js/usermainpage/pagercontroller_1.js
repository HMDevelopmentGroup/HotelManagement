
$(function () {



    $(".page-btn").live("click", function () {

        var index = $("input.page-btn").index(this);

        //console.log(index);
       
        var pageNo = $(".page-input")[index].value;

        var maxPageNo = $(".page-input").eq(index).attr("maxPageNo");
        
        var pageKey = $(".page-input").eq(index).attr("pagekey");

        var isSingleParam = $(".page-input").eq(index).attr("singleparam") == "True";  

        if (!!pageNo)
        {
            var num = parseInt(pageNo);
            if (typeof num === 'number' && !isNaN(num)) {

                if (num <= 0) num = 1;

                if (!!maxPageNo) {
                    var max = parseInt(maxPageNo);
                    if (typeof max === 'number' && !isNaN(max)) {
                        if (num > max) num = max;
                    }
                }
                if ($("#type").length > 0) {
                    location.href = "?page=" + num + "&t=" + (1 - $("#type").val());
                }
                else if (isSingleParam) {
                    location.href = "?"+pageKey+"=" + num ;
                }
                else {
                    location.href = RegularUrl(location.href, pageKey, num);
                }
            }
            
        }

    });
    function RegularUrl(url, key, value) {
        var fragPos = url.lastIndexOf("#");
        var fragment = "";
        if (fragPos > -1) {
            fragment = url.substring(fragPos);
            url = url.substring(0, fragPos);
        }
        var querystart = url.indexOf("?");
        if (querystart < 0) {
            url += "?" + key + "=" + value;
        }
        else if (querystart == url.length - 1) {
            url += key + "=" + value;
        }
        else {
            var Re = new RegExp(key + "=[^\\s&#]*", "gi");
            if (Re.test(url))
                url = url.replace(Re, key + "=" + value);
            else
                url += "&" + key + "=" + value;
        }
        return url + fragment;
    }
})