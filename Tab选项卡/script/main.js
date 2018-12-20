$(function() {
    $(".head>li").mouseenter(function() {
        $(this).addClass("show_1")
            .siblings().removeClass("show_1"); //选中的那个li添加类名"show_1",未选中的siblings().移除类名
        var index = $(this).index(); //获取选中的li的索引
        $(".content>li").eq(index).addClass("show_2")
            .siblings().removeClass("show_2");
    });
});