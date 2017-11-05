
$(document).ready(function($) {

    // login
    $('#loginLink').click(function() {
        var loginHtml=$('#loginHtml').html();
        showLayer(loginHtml,500,300,closeCallback);

        $('#loginSubmitBtn').click(function() {
            var username=$("input[name='username']").val();
            var password=$("input[name='password']").val();

            if(username === '1234' && password === '1234') {
                alert('登入成功');
            } else {
                $('.error-msg').html("帳號或密碼輸入錯誤");
            }
        });
    });

    $('#regeLink').click(function() {
        var regeHtml=$('#regeHtml').html();
        showLayer(regeHtml,500,350,closeCallback);

        $('#regeSubmitBtn').click(function() {
            var username=$("input[name='username']").val();
            var password=$("input[name='password']").val();
            var repassword=$("input[name='repassword']").val();

            if(username === '1234' && password === '1234' && repassword === password) {
                alert('註冊成功');
            } else {
                $('.error-msg').html('帳號或是密碼輸入錯誤')
            }
        })
    })

    function closeCallback(){
        $('.error-msg').html("");
    }

    function showLayer(html,width,height,closeCallback){
        $('#layer-mask').show();
        $('#layer-pop').show();

        $("#layer-pop").css({
            width: width,
            height: height
        });

        $('#layer-content').html(html);

        $('#layer-close').click(function(){
            hideLayer();
            closeCallback();
        })
    }

    function hideLayer() {
        $('#layer-mask').hide();
        $('#layer-pop').hide();
    }
});