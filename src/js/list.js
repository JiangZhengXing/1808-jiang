

require(['config'],function(){
    
    require(['jquery'],function($,ca){
        jQuery(function($){
            $('#header').load('../html/head.html');
            $('#footer').load('../html/foot.html');


            // 返回顶部
            window.onscroll = function(){
                //获取滚动条滚动的距离
                var Top = window.scrollY; 

                //隐藏显示
                if(Top>=500){
                    $('.toTop').show();
                }else{
                    $('.toTop').hide();
                }
            }   
                //点击返回顶部
            $('.toTop').click(function(){

                var timer = setInterval(function(){
                    //获取距离
                    var scrollTop = window.scrollY;
                    //计算速度
                    var speed = Math.floor(scrollTop/5);

                    if(scrollTop<=5 || speed === 0){
                        clearInterval(timer);
                    }
                    window.scrollBy(0,-speed);

                },50);
            })



            var datalist = document.querySelector('.datalist');
            var page = document.querySelector('.page');

            //列表页分页效果
            let pageNo = 1;
            let qty = 12;

            let arr_status = [200,304];

            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(arr_status.indexOf(xhr.status)!=-1){
                    let res = JSON.parse(xhr.responseText);
                    var list_content = document.querySelector('.list_content');

                    //点击价格从小到大排序
                    $('#btn1').on('click',function(){
                        res.data.sort(function(a,b){
                            return a.price-b.price;
                            })
                            create();
                        })

                    //点击价格从大到小排序
                    $('#btn2').on('click',function(){
                        res.data.sort(function(a,b){
                            return b.price-a.price;
                            })
                            create();
                        })

                    //封装排序重新生成结构
                    function create(){
                        list_content.innerHTML = res.data.map(function(item){
                        return `
                            <li data-id="${item.id}">
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
                    create();

                    //传参至详情列表
                    $('.list_content').on('click','li',function(items){
                            var id = $(this).attr('data-id');
                            var params = '?';

                            res.data.map(function(items){
                                if(items.id == id){
                                    for(var attr in items){
                                        params += attr + '=' + items[attr] + '&'
                                    }
                                    // 删除多余的&
                                    params = params.slice(0,-1);
                                    // console.log(params);
                                    location.href = '../html/goods.html' + encodeURI(params);
                                }
                            });
                    
                     });

                    // 处理分页
                    let pageQty = Math.ceil(res.total/res.qty);

                    page.innerText = '';
                    for(let i=1;i<=pageQty;i++){
                        let span = document.createElement('span');
                        span.innerText = i;
                        if(i===res.pageNo){
                            span.className = 'active';
                        }
                        page.appendChild(span);
                    }
                }
            }


            xhr.open('post','../api/list2.php');

            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

            // POS请求发送数据
            xhr.send(`pageNo=${pageNo}&qty=${qty}`);


            // 切换分页
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    pageNo = e.target.innerText*1;
                    xhr.open('post','../api/list2.php');
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                    xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                }
            }
            

          
                   
      
                   
                    

                    

                  
                
            })
        })
    })

