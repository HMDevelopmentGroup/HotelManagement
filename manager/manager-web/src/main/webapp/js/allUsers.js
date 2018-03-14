    //动态生成表格
    layui.use(['table', 'jquery'], function () {
    var table = layui.table,
        $ = layui.jquery;
    table.render({
        elem: '#userList'
        , url: '../../users' //数据接口
        , cols: [[ //表头
            {type: 'checkbox'}
            , {field: 'uid', title: 'ID', sort: true}
            , {field: 'username', title: '用户名'}
            , {field: 'realname', title: '真实姓名'}
            , {field: 'sex', title: '性别'}
            , {field: 'idCard', title: '身份证号'}
            , {field: 'telephone', title: '电话'}
            , {field: 'integration', title: '积分'}
            , {field: 'operate', title: '操作', toolbar: '#operateTpl'}
        ]]
    });

    //分页跳转方法
    function turnPage(page) {
        layui.use('table', function () {
            var table = layui.table;
            table.render({
                elem: '#userList'
                , url: '../../users?page=' + page + '&limit=10'
                , cols: [[ //表头
                    {type: 'checkbox'}
                    , {field: 'uid', title: 'ID', width: 400, sort: true}
                    , {field: 'username', title: '用户名', width: 120}
                    , {field: 'realname', title: '真实姓名', width: 120}
                    , {field: 'sex', title: '性别', width: 100}
                    , {field: 'idCard', title: '身份证号', width: 190}
                    , {field: 'telephone', title: '电话', width: 130}
                    , {field: 'integration', title: '积分', width: 120}
                    , {field: 'operate', title: '操作', width: 80, toolbar: '#operateTpl', unresize: true}
                ]]
            });
        });
    }

    //分页跳转
    $(document).ready(function () {
        layui.use('laypage', function () {
            var laypage = layui.laypage;
            $.ajax({
                type: "get",
                url: "../../userNums",
                success: function (data) {
                    laypage.render({
                        elem: 'page'
                        , count: Number(data)
                        , limit: 10
                        , jump: function (obj) {
                            page = obj.curr;
                            turnPage(page);
                        }
                    });
                }
            });

        });

    });

    //模糊搜索后生成新表
    function queryUser() {
        var queryInfo = $("#queryInfo").val();
        layui.use(['table', 'laypage'], function () {
            var table = layui.table,
                laypage = layui.laypage;
            table.render({
                elem: '#userList'
                , url: '../../queryUser/' + queryInfo
                , page: false
                , cols: [[ //表头
                    {type: 'checkbox'}
                    , {field: 'uid', title: 'ID', width: 400, sort: true}
                    , {field: 'username', title: '用户名', width: 120}
                    , {field: 'realname', title: '真实姓名', width: 120}
                    , {field: 'sex', title: '性别', width: 100, sort: true}
                    , {field: 'idCard', title: '身份证号', width: 190}
                    , {field: 'telephone', title: '电话', width: 130}
                    , {field: 'integration', title: '积分', width: 120, sort: true}
                    , {field: 'operate', title: '操作', width: 80, toolbar: '#operateTpl', unresize: true}
                ]]
            });
            laypage.render({
                elem: 'page'
                , count: 0
            });
        });
    }

    //编辑、删除用户
    table.on('tool(test)', function (obj) {
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var uid = obj.data.uid;

        if (layEvent === 'edit') {
            location.href = '../../editUser?uid=' + uid;
        } else if (layEvent === 'del') {
            layer.confirm('真的删除该用户吗？', function (index) {
                $.post(
                    '../../delUser',
                    {'uid': uid},
                    function (data) {
                        layer.close(index);
                        if (data == 1) {
                            obj.del();
                            layer.msg("删除成功");
                            if(data>=8){
                                location.reload();
                            }
                        } else {
                            layer.msg("删除失败");
                        }
                    }
                )
            });
        }
    });

    var active = {
        getCheckData: function () { //获取选中数据
            var checkStatus = table.checkStatus('userList'),
                data = checkStatus.data;
            if (data.length > 0) {
                layer.confirm('确认要删除吗？', function (index) {
                    var ids = [];
                    for (var i = 0; i < data.length; i++) {
                        ids.push(data[i].uid);
                    }
                    $.post(
                        '../../user/batch',
                        {'ids[]': ids},
                        function (data) {
                            if (data == ids.length) {
                                $(".layui-table-body .layui-form-checked").parents('tr').remove();
                                layer.msg('删除成功', {
                                    icon: 1
                                });
                                layer.close(index);
                            }
                        }
                    );

                });
            } else {
                layer.msg("请先选择需要删除的用户！");
            }

        }
    };

    $('.demoTable .layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    window.member_del = function (obj, id) {
        layer.confirm('确认要删除吗？', function (index) {
            //发异步删除数据
            $(obj).parents("tr").remove();
            layer.msg('已删除!', {
                icon: 1,
                time: 1000
            });
        });
    }

});

