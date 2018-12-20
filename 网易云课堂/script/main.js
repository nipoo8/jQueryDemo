$(function() {
    //监听close来控制line板块的隐藏和显示
    $(".close").click(function() {
        $(this).parents(".line").hide();
    });

    //监听关注按钮
    $(".aOpen").click(function() {
        // alert("a");
        $(this).hide();
        $(".aClose").show();
        $(".oP span").text(parseInt($(".oP span").text()) + 1);
    });
    $(".aClose span").click(function() {
        $(this).parents(".aClose").hide();
        $(".aOpen").show();
        $(".oP span").text(parseInt($(".oP span").text()) - 1);
    });

    //实现大图的轮播
    var timer1 = null;
    var timer2 = null;
    // var num = 0;
    // var imgWid = $(".Carousel_1 ul li img").width();
    var offSet = 0;
    var num = 0;

    // alert($(".Carousel_1 ul li").index());
    // alert($(".Carousel_1 ul li img").width());
    function autoPlay() {
        timer1 = setInterval(function() {
            if (offSet > 2) {
                offSet = 0;
            } else {
                // alert($(".Carousel_1 ul li:eq(offSet)").index());
                if (offSet == 0) {
                    $(".Carousel_1 ul li:eq(" + offSet + ")").stop().fadeIn(1000);
                    $(".Carousel_1 ul li:eq(" + (offSet + 2) + ")").stop().fadeOut(1000);
                    $(".big_dot span:eq(" + offSet + ")").css("backgroundColor", "rgba(255,255,255,0.8)");
                    $(".big_dot span:eq(" + (offSet + 2) + ")").css("backgroundColor", "rgba(255,255,255,0.3)");
                } else {
                    $(".Carousel_1 ul li:eq(" + offSet + ")").stop().fadeIn(1000);
                    $(".Carousel_1 ul li:eq(" + (offSet - 1) + ")").stop().fadeOut(1000);
                    $(".big_dot span:eq(" + offSet + ")").css("backgroundColor", "rgba(255,255,255,0.8)");
                    $(".big_dot span:eq(" + (offSet - 1) + ")").css("backgroundColor", "rgba(255,255,255,0.3)")
                }
                offSet++;
            }
        }, 1500);
    }
    autoPlay();

    //监听大轮播中的span
    $(".big_dot span").hover(function() {
        clearInterval(timer1);
        var oNum = $(this).index();
        // alert(oNum);
        $(".Carousel_1 ul li:eq(" + oNum + ")").stop().fadeIn(300);
        $(".Carousel_1 ul li:eq(" + oNum + ")").siblings().fadeOut(300);
        $(".big_dot span:eq(" + oNum + ")").css("backgroundColor", "rgba(255,255,255,0.8)");
        $(".big_dot span:eq(" + oNum + ")").siblings().css("backgroundColor", "rgba(255,255,255,0.3)");

    }, function() {
        autoPlay();
    });

    //实现小图的轮播
    function smAutoPlay() {

        timer2 = setInterval(function() {
            num += -5
            if (num <= -1200) {
                num = 0;
            } else {
                $(".Carousel_2 ul").css("marginLeft", num);
            }
        }, 40);
    }
    smAutoPlay();

    //监听里面的li实现停止和移动
    $(".Carousel_2 ul li").hover(function() {
        clearInterval(timer2);
        $(this).css("opacity", 0.5);
    }, function() {
        smAutoPlay();
        $(this).css("opacity", 1);
    });
});