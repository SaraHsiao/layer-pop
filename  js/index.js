

$(document).ready(function() {

    // 登入連結事件
    $('#loginLink').click(function() {
        $('#layer-mask').show();
        $('#layer-pop').show();

        // 關閉連結事件
        $('#layer-close').click(function(){
            $('#layer-mask').hide();
            $('#layer-pop').hide();
        })
    })
})