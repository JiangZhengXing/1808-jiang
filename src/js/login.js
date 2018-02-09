



require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery','carousel','zoom'],function($,ca){
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

            //验证
            $('.btn').on('click',function(){
                //验证码是否一致
                if($('#sryzm').val() != $('.yzm').text()){
                    alert('验证码输入不正确');
                    return false;
                }

                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val(),
                    },
                    success:function(data){
                        if(data === 'ok'){
                            alert('登录成功');
                            
                            location.href = '../index.html';
                        }else{
                            alert('账号密码不正确');
                            return false;
                        }
                            
                    }
                })
            })
        })
    })

});
