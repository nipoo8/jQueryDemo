$(function() {
    //qq音乐logo的链接跳转
    // $(".logo a").click(function() {
    //     // alert("a");
    //     $(this).attr("src", "https://y.qq.com/#stat=y_new.player.header.logo");
    // });

    //自定义滚动条(插件)
    $(".bottom_oUl").mCustomScrollbar();

    //监听歌曲的移入移出
    $(".list_music").hover(function() {
        $(this).find(".list_menu").stop().fadeIn(100);
        $(this).find(".list_time a").stop().fadeIn(100);
        $(this).find(".list_time span").stop().fadeOut(100);
    }, function() {
        $(this).find(".list_menu").stop().fadeOut(100);
        $(this).find(".list_time a").stop().fadeOut(100);
        $(this).find(".list_time span").stop().fadeIn(100);
    });
    $(".list_check:not('.list_title>.list_check')").click(function() {
        $(this).toggleClass("list_checked");
    });
    $(".list_title>.list_check").click(function() {
        $(".list_check").toggleClass("list_checked");
    });

    //加载歌曲列表
});