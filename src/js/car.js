jQuery(function($){
    $('.carBar').load('../html/head.html #toolbar',function(){
  
        $(this).find('.dly').attr('href','login.html');
        $(this).find('.zzy').attr('href','reg.html'); 
    });
    
   //获取cookie
   var dataList = [];

   var cookies = document.cookie;
   if(cookies.length){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0]==='date'){
                dataList = JSON.parse(arr[1]);
            }
        });

    }
    console.log(dataList);

    var total1 = 0;
    var total2 = 0;

    var $buylist = $('.buylist');

    $('.buylist').html(dataList.map(function(goods){

        return `
            <li id="${goods.id}">
                <div class="cart_che">
                    <input type="checkbox" checked class="c" />
                </div>
                <img src="${goods.imgurl}" class="cart_img" />
                <div class="cart_ifo">${goods.pro}</div>
                <div class="cart_pri">
                    <b>￥<span class="price">${goods.price}</span></b>
                    <del>${goods.delPrice}</del>
                </div>
                <div class="cart_qty">
                    <i class="i1"></i>
                    <div class="qty">${goods.qty}</div>
                    <i class="i2"></i>
                </div>
                <div class="cart_tot">￥
                    <span class="total">${total1}</span>
                </div>
                <div class="cart_op">
                    <a href="#">移入收藏</a>
                    <p class="del">删除</p>
                </div>

            </li>


        `
    }))



    
})