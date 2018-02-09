

require(['config'],function(){
    //有返回值的写前面
    require(['jquery'],function($,ca){
        jQuery(function($){
    $('.carBar').load('../html/head.html #toolbar',function(){
  
        $(this).find('.dly').attr('href','login.html');
        $(this).find('.zzy').attr('href','reg.html'); 
    });
    $('.car_footer').load('../html/foot.html');
    
   //获取cookie
   var arr1 = [];
   var cookies = document.cookie;
   console.log(cookies)
   if(cookies.length){
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0]==='arr1'){
                arr1 = JSON.parse(arr[1]);
            }
        });
        // console.log(arr1);
    }
    // console.log(arr1);

    var total1 = 0;
    var total2 = 0;

    var $buylist = $('.buylist');

    show();
    // cook();

        
    function show(){
        return $buylist.html(arr1.map(function(goods){
            total1 = (goods.price * goods.qty).toFixed(2);
            total2 += total1*1;
            total2 = Math.floor(total2*100)/100;
            tt();
            return `
                <li data-id="${goods.id}">
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
                        
                        <div class="qty">${goods.qty}</div>
                        
                    </div>
                    <div class="cart_tot">
                        <span class="total">${total1}</span>
                    </div>
                    <div class="cart_op">
                        <p class="del">删除</p>
                        <a href="#">移入收藏</a>
                    </div>

                </li>

                `
        }).join(''));
         for(var i=0;i<$('li').length;i++){
            $('.count_1').text(i+1);
        }
       
        
    }
    function tt(){
        $('.tot').text(total2);
    }


    //删除
    $buylist.on('click','.del',function(){
        var id = $(this).closest('li').attr('data-id');
        console.log(id)
        for(var i=0;i<arr1.length;i++){
            if(arr1[i].id === id){
                arr1.splice(i,1);
                break;
            }
        }
            // console.log(arr1)
        $(this).closest('li').remove();
        
        total2 = 0;
        document.cookie = 'arr1='+JSON.stringify(arr1);
       
        show();
       

    })

    //单选
    .on('click','li',function(){
        $(this).find('.c').prop('checked',this.checked);
        checkAll();
    });

    //存入cookie
    function cook(){
        var now = new Date();
        now.setDate(now.getDate()+3);

        document.cookie = 'arr1=' + JSON.stringify(arr1) + ';expires=' + now.toUTCString();
        
    };

    //全选
    var $c = $('.c');
    $('.all').click(function(){
        $c.prop('checked',this.checked);
        $('.all2').prop('checked',this.checked);
    });
    $('.all2').click(function(){
        $c.prop('checked',this.checked);
        $('.all').prop('checked',this.checked);
    });

    //数量对比
    function checkAll(){
        var $checked = $c.filter(':checked');
        $('.all').prop('checked',$checked.length === $c.length);
        $('.all2').prop('checked',$checked.length === $c.length);
    }

    //删除选中的商品
    $('.cart_footer').on('click','.clear',function(){
        var $checked = $c.filter(':checked');
        $checked.closest('li').remove();
       

    })

    //清空购物车
    .on('click','.clearAll',function(){
        $('.cart_list').find('li').remove();
        var now = new Date();
        now.setDate(now.getDate()-100);
        document.cookie = 'arr1=' + JSON.stringify(arr1) + ';expires=' + now.toUTCString();
        location.href = '../html/car.html';
           
        });
    for(var i=0;i<$('li').length;i++){
        $('.count_1').text(i+1);
    }

})
    })

});