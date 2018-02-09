
require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery'],function($,ca){
        jQuery(function($){
            //点击更多
            $('#showMore').click(function(){
                $('.moreu').toggle(function(){
                    $(this).prev().toggleClass('cur');
                });
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
                $('.mcode').append(randomCodes);
                randomCode();


            //表单验证
            
            // console.log($('#reg_submit'))
            $('#reg_submit').on('click',function(){
                //用户名
                var $username = $('#username').val();
                if($username === ''){
                    alert('用户名不能为空');
                    return false;
                }
                var reg = /^[a-z][a-z0-9\-]{5,19}$/;
                if(!reg.test($username)){
                    alert('请输入正确的用户名');
                    return false;
                }

                //密码
                var $password = $('#password').val();
                if($password === ''){
                    alert('密码不能为空');
                    return false;
                }
                if(!/^[^\s]{6,20}$/.test($password)){
                    alert('请输入正确的密码');
                    return false;
                }

                //确认密码
                var $ysword = $('#ysword').val();
                if($ysword === ''){
                    alert('请再输入密码');
                    return false;
                }

                 if($password!=$ysword){
                        alert('两次密码输入不一致');
                        return false;
                    }


                //验证码
                var $mycode = $('#mycode').val();


                if($mycode === ''){
                    alert('请输入验证码');
                    return false;
                }
                if($mycode!==$('.mcode').text()){
                    alert('请输入正确的验证码');
                    return false;
                }
                //勾选注册
                var $aa = $('#aa');
                if(!$aa.is(':checked')){
                    alert('请勾选我已阅读并接受');
                    return false;
                }

                $.ajax({
                        url:'../api/reg.php',
                        data:{
                            username:$('#username').val(),
                            password:$('#password').val()
                        },
                        success:function(data){
                            if(data === 'fail'){
                                alert('此用户已被注册');
                                return false;
                            }else{
                                alert('注册成功');
                                location.href = '../html/login.html';
                            }
                            
                        }
                    });

            })
        })
    })

});

