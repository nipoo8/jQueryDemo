$(function() {
    var offSet = 0;
    var timer = null;

    function autoPlay() {
        timer = setInterval(function() {
            offSet += -10;
            if (offSet <= -1200) {
                offSet = 0;
            } else {
                $("ul").css("marginLeft", offSet);
            }
        }, 100);
    }
    autoPlay();
    $("li").hover(function() {
        clearInterval(timer);
        $(this).siblings().fadeTo(100, 0.5);
    }, function() {
        autoPlay();
        // $(this).fadeTo(100, 1);
        $(this).siblings().fadeTo(100, 1);
    });
});