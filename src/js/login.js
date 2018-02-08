jQuery(function($){
    $('.blc_r').click(function(){
        $('.blc').hide();
        $('.noe').show();
    });
    $('.noe_r').click(function(){
        $('.blc').show();
        $('.noe').hide();
    });
    $('.mmdl').click(function(){
        $('.blc').hide();
        $('.noe').show();
    });
    //验证码
    function randomCode(){
        var str = '0123456789abcdefghigklmnopqrstuvwxyz';
        var res = '';
        for(var i=0;i<4;i++){
            var idx = parseInt(Math.random()*str.length);
            res += str[idx];   
        }
        //将循环中的res返回给函数
            return res; 

        }
        var randomCodes = randomCode();
        $('.yzm').append(randomCodes);
        randomCode();
})