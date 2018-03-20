//表格
layui.use(['table','jquery'],function(){
    var table = layui.table,
        $ = layui.jquery;
    table.render({
        elem:'#orderList',
        url:'../../orderList',
        cellMinWidth: 80,
        page: true,
        limits: [10, 50, 100],
        cols:[[
            {
                type: 'checkbox'
            },{
                field:'oid', title: '订单号', sort: true
            },{
                field:'offer',title: '客户名称'
            },{
                field:'offerid',title: '身份证'
            },{
                field:'rid',  title: '客房名称'
            },{
                field:'start', title: '入住时间'
            },{
                field:'end', title: '退房时间'
            },{
                field:'days', title: '总天数'
            },{
                field:'price', title: '总金额'
            },{
                field:'status', title: '订单状态'
            }
        ]],
        done:function(res,curr,count){
            $("[data-field='status']").children().each(function(){
                if($(this).text()=='1'){
                    $(this).text('待付款');
                }else if ($(this).text()=='2'){
                    $(this).text('待入住');
                }else if ($(this).text()=='3'){
                    $(this).text('入住');
                }else if ($(this).text()=='4'){
                    $(this).text('待退房');
                }else if ($(this).text()=='5'){
                    $(this).text('已退房');
                }
            });
        }
    });

    var active={
        reload:function(){
            var oid =$('#oid').val();
            var offer=$('#offer').val();
            var offerid=$('#offerid').val();
            var start = $('#start').val();
            var end = $('#end').val();
            var status =$('#status').val();
            table.reload('orderList',{
                page:{curr:1},
                where:{
                    oid:oid,
                    offer:offer,
                    offerid:offerid,
                    start:start,
                    end:end,
                    status:status
                    }
            });

        }
    }

    $('.layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });


});