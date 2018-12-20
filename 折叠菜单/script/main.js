$(function() {
    $(".nav>li").click(function() {
        if ($(this).children(".sub").is(":visible")) {
            $(this).children(".sub").slideUp(1000);
            $(this).children("span").removeClass("move");
        } else {
            $(this).children(".sub").slideDown(1000);
            $(this).children("span").addClass("move");
            $(this).siblings().children(".sub").slideUp(1000);
            $(this).siblings().children("span").removeClass("move");
        }
    });
});