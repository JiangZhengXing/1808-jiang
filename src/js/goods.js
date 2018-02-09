


require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery','zoom'],function($,ca){

                $('.car_header').load('../html/head.html',function(){
                //放大镜
                 $('.list_bg').gdsZoom({
                    position:'right'
                });
                 $('.list_sm').on('mouseenter','img',function(){
                        $('.list_bg img').attr({
                            src:this.src,
                            'data-big':this.dataset.big || this.src
                        })
                    });

                    $('.phone_buy').on('mouseenter',function(){

                        $(this).find('img').show();
                        $('.js_tishi').show();
                    }).on('mouseleave',function(){
                        $(this).find('img').hide();
                        $('.js_tishi').hide();
                    })
                    });
                    $('.car_footer').load('../html/foot.html');

                    //侧边
                    $('.side-tab').on('mouseenter',function(){

                        $(this).css('backgroundColor','#c7000b').find('.tab-tip').show();
                    }).on('mouseleave',function(){
                        $(this).css('backgroundColor','#000').find('.tab-tip').hide();
                    })
                    //返回顶部效果
                    window.onscroll = function(){
                        //获取滚动条滚动的距离
                        var toTop = window.scrollY;
                       
                        //隐藏显示
                        if(toTop>=500){
                            $('#goTop').show();
                        }else{
                            $('#goTop').hide();
                        }
                    }
                    //点击返回顶部
                    $('#goTop').click(function(){

                        var timer = setInterval(function(){
                            //获取距离
                            var scrollTop = window.scrollY;
                            //计算速度
                            var speed = Math.floor(scrollTop/10);

                            if(scrollTop<=10 || speed === 0){
                                clearInterval(timer);
                            }
                            window.scrollBy(0,-speed);

                        },50);
                    })

                    //数据传递
                    var params = decodeURI(location.search);
                        params = params.slice('1');
                        
                        params = params.split('&');
                       
                        var obj = {};
                        params.forEach(function(item){
                            var arr = item.split('=');
                            obj[arr[0]] = arr[1]; 
                        });
                        console.log(obj);
                    
                    var discount = document.querySelector('.discount');
                    var del = document.querySelector('.del');
                    var wrap = document.querySelector('.wrap');
                    var h1 = wrap.querySelector('h1');
                    var list_bg = document.querySelector('.list_bg');
                    var Img = list_bg.querySelector('img');
                    discount.innerText = obj.price;
                    del.innerText = obj.delPrice;
                    h1.innerText = obj.pro;
                    Img.src = obj.imgurl;

                    //数量加一减一
                    $('.increase').on('click',function(){
                        $('#count').val($('#count').val()*1 + 1);
                    });
                    $('.decrease').on('click',function(){
                        $('#count').val($('#count').val()*1 - 1);
                        if($('#count').val()*1<=1){
                            $('#count').val(1);
                        }
                    })





                //将数据存入cookie
                var arr1 = [];

                var cookies = document.cookie;
                    cookies = cookies.split('; ');
                    cookies.forEach(function(item){
                    var arr = item.split('=');    
                        if(arr[0] === 'arr1'){
                            arr1 = JSON.parse(arr[1]);
                        }
                    })

                var $addcart = $('.carBtn');
                    $addcart.on('click',function(){
                        var id = obj.id;

                        for(var i=0;i<arr1.length;i++){
                            if(arr1[i].id === id){
                                break;
                            }
                        }
                        if(i===arr1.length){
                            var goods = {
                                id:id,
                                imgurl:obj.imgurl,
                                pro:obj.pro,
                                price:obj.price,
                                delPrice:obj.delPrice,
                                qty:$('#count').val()*1
                            }
                            arr1.push(goods);
                            console.log(arr1);
                        }else{
                            arr1[i].qty = arr1[i].qty + $('#count').val()*1;
                        }
                        var now = new Date();
                        now.setDate(now.getDate()+3);
                        document.cookie = 'arr1=' + JSON.stringify(arr1) + ';expires=' + now.toUTCString();
                        console.log(document.cookie); 

                    //点击按钮飞入购物车效果
                    var $img = $('.list_bg').children('img');

                    //复制当前图片
                    var $copyImg = $img.clone();

                    //设置图片样式
                    $copyImg.css({
                        position:'absolute',
                        left:$img.offset().left,
                        top:$img.offset().top,
                        width:$img.outerWidth()
                    });

                    // 把图片写入页面
                    $('body').append($copyImg);

                    $copyImg.animate({
                        left:1200,
                        top:$('.side-tab-cart').offset().top,
                        width:30
                    },800,function(){
                        $copyImg.remove();
                        location.href = '../html/car.html';
                    
                    })

                    

                })
            
        
    })

});