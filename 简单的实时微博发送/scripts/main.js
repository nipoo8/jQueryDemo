$(function() {
    //监听textarea的实时输入
    $("body").delegate(".comment", "propertychange input", function() { //propertychange input
        if ($(this).val().length > 0) {
            $(".send").prop("disabled", false);
        } else {
            $(".send").prop("disabled", true);
        }
    });

    //监听.send发布按钮
    $(".send").click(function() {
        // alert("a");

        //获取.comment输入内容
        var $text = $(".comment").val();
        // $(".comment").val("");
        //创建一条微博
        var $weibo = createEl($text);
        //将此微博添加进去
        $(".messageList").prepend($weibo);
    });

    //给赞添加点击事件(事件委托)
    $("body").delegate(".infoUp", "click", function() {
        $(this).text(parseInt($(this).text()) + 1);
    });
    $("body").delegate(".infoDown", "click", function() {
        $(this).text(parseInt($(this).text()) + 1);
    });
    $("body").delegate(".infoDel", "click", function() {
        $(this).parents(".info").remove();
    });


    //createEl()
    function createEl(text) {
        var $weibo = $('<div class="info">\n' +
            '<p class="infoText">' + text + '</p>\n' +
            '<p class="infoOperation">\n' +
            '<span class="infoTime">' + changeTine() + '</span>\n' +
            '<span class="infoHandler">\n' +
            '<a href="javascript:;" class="infoUp">0</a>\n' +
            '<a href="javascript:;" class="infoDown">0</a>\n' +
            '<a href="javascript:;" class="infoDel">删除</a>\n' +
            '</span>\n' +
            '</p>\n' +
            '</div>');
        return $weibo;
    }

    //实时改变事件 
    function changeTine() {
        var time = new Date();
        var arr = [time.getFullYear() + "-", time.getMonth() + 1 + "-", time.getDate() + " ", time.getHours() + ":", time.getMinutes() + ":", time.getSeconds() + ""];
        return arr.join(""); //将数组转为字符串
    }
});