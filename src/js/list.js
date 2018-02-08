jQuery(function($){
    $.ajax({
        url:'../api/list.php',
        dataType:'json',
        
        success:function(data){
            console.log(data);
            var list_content = document.querySelector('.list_content');
            sort();


            //价格排序
            var btn1 = document.getElementById('btn1');
            var btn2 = document.getElementById('btn2');
            btn1.onclick = function(){
                data.sort(function(a,b){
                    return a.price - b.price
                });
                sort();
            }
            btn2.onclick = function(){
                data.sort(function(a,b){
                    return a.price - b.price
                }).reverse();
                sort();
            }
            //封装排序重新生成结构
            function sort(){
                list_content.innerHTML = data.map(function(item){
                return `
                    <li id="${item.id}">
                        <img src="${item.imgurl}"/>
                        <p class="pro">${item.pro}</p>
                        <div class="sale">
                        <p class="mon">
                        <b>￥</b><span class="price">${item.price}</span>
                            <del class="del_price">￥${item.delPrice}</del>
                            <span class="time">${item.time}</span>
                        </p>
                    </li>
                `
            }).join('');

            }

            //传参
            $('.list_content').on('click','li',function(item){
                    var id = $(this).attr('id');
                    console.log(id);
                    var params = '?';
                    // console.log(data.data);
                    data.map(function(item){
                        if(item.id == id){
                            for(var attr in item){
                                params += attr + '=' + item[attr] + '&';
                            }
                            // 删除多余的&
                            params = params.slice(0,-1);
                            // console.log(params);
                            location.href = '../html/goods.html' + encodeURI(params);
                        }
                    });
            
                });
        }
    })


    
})