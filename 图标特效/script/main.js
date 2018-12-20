$(function() {
    $("ul.show>li").mouseenter(function() {
        $(this).children("img").animate({
            top: "-50px"
        }, 1000, function() {
            $(this).css("top", "100px");
            $(this).animate({
                top: "30"
            }, 1000);
        });
    });
});