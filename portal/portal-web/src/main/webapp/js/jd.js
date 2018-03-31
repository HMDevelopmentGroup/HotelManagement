function selectProvince() {
    $("#city").empty();
    $("#city").append("<option value=''>请选择</option>");
    $("#district").empty();
    $("#district").append("<option value=''>请选择</option>");
    var proId = ($("#province").val());
    $.ajax({
        url: '/tool/GetCity',
        data: { ProId: proId },
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++)
                $("#city").append("<option value='" + data[i].CityID + "'>" + data[i].CityName + "</option>");
        }
    });
}
function selectCity() {
    $("#district").empty();
    $("#district").append("<option value=''>请选择</option>");
    var cityId = $("#city").val();
    $.ajax({
        url: '/tool/GetDistrict',
        data: { CityID: cityId },
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.length; i++)
                $("#district").append("<option value='" + data[i].Id + "'>" + data[i].DisName + "</option>");
        }
    });
}
function selectDistrict(productId) {
    var province = $("#province").val();
    var city = $("#city").val();
    var district = $("#district").val();
    if (province == "" || city == "" || district == "")
    {
        $(".stockCount").text("请选择配送地址");//库存获取中...
        $(".product_details .btn").removeClass("btn_red").addClass("btn_gray");
        return;
    }
    $(".stockCount").text("库存获取中...");//库存获取中...
    $(".product_details .btn").removeClass("btn_red").addClass("btn_gray");
    submitFlag = false;
    $.ajax({
        url: '/tool/GetJDSkuStockById',
        data: {
            "province": province,
            "city": city,
            "district": district,
            "productId": productId,
        },
        dataType: "JSON",
        traditional: true,//使用传统方式序列化参数
        type: "GET",
        success: function (data) {
            //code=1获取库存成功且库存充足，code=0库存不足,code=-1程序出错或无法获取京东库存
            if (data.code == 1) {
                submitFlag = true;
                $(".stockCount").text("库存 " + productInfo.currentDepot + " 件");
                $(".product_details .btn").removeClass("btn_gray").addClass("btn_red");
            }
            else {
                $(".stockCount").text("所选地区无货");
                $(".product_details .btn").removeClass("btn_red").addClass("btn_gray");
                submitFlag = false;
            }
        },
    });
}