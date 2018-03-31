
function addSheetFile(path) {
    var fileref = document.createElement("link");
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = path;
    fileref.media = "screen";
    var headobj = document.getElementsByTagName('head')[0];
    var first = headobj.firstChild;
    headobj.insertBefore(fileref, first);
}

function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function LoadCss() {
    addSheetFile("/Content/newcss/sign_phone.css");
    addSheetFile("/Content/newcss/bootstrap.min.css");
    addSheetFile("/Content/newcss/reset.css");
    addSheetFile("/Content/newcss/reg.css");
    //addSheetFile("/Content/newcss/list_wap.css");
    addSheetFile("/Content/newcss/iconfont.css");
}
function EnCss() {
    addSheetFile("/Content/newcss/sign_phone.css");
    addSheetFile("/Content/newcss/bootstrap.min.css");
    addSheetFile("/Content/newcss/reset.css");
    addSheetFile("/Content/engsh/reg.css");
    //addSheetFile("/Content/newcss/list_wap.css");
    addSheetFile("/Content/newcss/iconfont.css");
    addSheetFile("/Content/engsh/input.css");


}