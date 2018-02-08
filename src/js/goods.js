jQuery(function($){

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
       
        var data = {};
        params.forEach(function(item){
            var arr = item.split('=');
            data[arr[0]] = arr[1]; 
        });
        console.log(data)
    
    var discount = document.querySelector('.discount');
    var del = document.querySelector('.del');
    var wrap = document.querySelector('.wrap');
    var h1 = wrap.querySelector('h1');
    var list_bg = document.querySelector('.list_bg');
    var Img = list_bg.querySelector('img');
    discount.innerText = data.price;
    del.innerText = data.delPrice;
    h1.innerText = data.pro;
    Img.src = data.imgurl;

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
var date = [];
var $addcart = $('.carBtn');
    $addcart.on('click',function(){
        
        var id = data.id;
        for(var i=0;i<date.length;i++){
            if(date[i].id === id){
                break;
            }
        }
        if(i===date.length){
            var goods = {
                id:id,
                imgurl:data.imgurl,
                pro:data.pro,
                price:data.price,
                delPrice:data.delPrice,
                qty:$('#count').val()*1
            }
            date.push(goods);
        }else{
            date[i].qty = date[i].qty + $('#count').val()*1;
        }
        var now = new Date();
        now.setDate(now.getDate()+3);
        document.cookie = 'date=' + JSON.stringify(date) + ';expires=' + now.toUTCString();
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