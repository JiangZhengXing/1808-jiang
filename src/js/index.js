


require(['config'],function(){
    // 建议：有返回值的写前面
    require(['jquery','carousel'],function($,ca){
            jQuery(function($){
        //头部尾部
        $('#myHeader').load('../html/head.html');
        $('#myFooter').load('../html/foot.html');

        //轮播图
        $('.banner_pt').yjCarousel({
            imgs:['../img/banner_big1.jpg','../img/banner_big2.jpg','../img/banner_big3.jpg','../img/banner_big4.jpg','../img/banner_big5.jpg'],
            width:951,
            height:304,
            buttons:true,
            type:'fade'
        });

        //二级导航
        $('.c1').on('mouseenter','li','.go',function(){
            $('.go').show();
        }).on('mouseleave','li',function(){
            $('.go').hide();
        })

        //侧别及返回顶部
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
                var speed = Math.floor(scrollTop/5);

                if(scrollTop<=5 || speed === 0){
                    clearInterval(timer);
                }
                window.scrollBy(0,-speed);

            },50);
        })

        $('.tab-nav').on('mouseenter','a',function(){
            $(this).addClass('active');
        }).on('mouseleave','a',function(){
            $(this).removeClass('active');
        });
        



    })

    //首页商品轮播

        var datalist = [{
            id:'01',
            title:'【绒毛更细腻保暖性更好】凡戈2018新款短绒加厚商务休闲牛仔裤',
            imgurl:'../img/flash_sale1.jpg',
            price:'￥56.8'
        },{
            id:'02',
            title:'春季新款短袖毛衣 男时尚修身套头针织衫男',
            imgurl:'../img/flash_sale2.jpg',
            price:'￥39.9'
        },{
            id:'03',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale3.jpg',
            price:'￥79'
        },{
            id:'04',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale4.jpg',
            price:'￥79'
        },{
            id:'05',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale5.jpg',
            price:'￥79'
        },{
            id:'06',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale6.jpg',
            price:'￥79'
        },{
            id:'07',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale7.jpg',
            price:'￥79'
        },{
            id:'08',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale8.jpg',
            price:'￥79'
        },{
            id:'09',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale9.jpg',
            price:'￥79'
        },{
            id:'10',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale10.jpg',
            price:'￥79'
        },{
            id:'11',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale11.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        },{
            id:'12',
            title:'【年末疯抢】麦克风音响一体机全民k歌神器手机专用无线蓝牙唱歌',
            imgurl:'../img/flash_sale12.jpg',
            price:'￥79'
        }];

        var goods = document.querySelector('.goods');
        var data = goods.querySelector('.data');

        data.innerHTML = datalist.map(function(item){
            return `
            <li guid="${item.id}">
                <a href-""><img src="${item.imgurl}"/></a>
                <p class="price">${item.price}</p>
                <p class="color">${item.title}</p>
            </li>
            `
        }).join('');


        var datalist = document.querySelector('.datalist');
        var page = document.querySelector('.page');

            let pageNo = 1;
            let qty = 24;

            let arr_status = [200,304];

            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(arr_status.indexOf(xhr.status)!=-1){
                     
                    let res = JSON.parse(xhr.responseText);
                    let ul = document.createElement('ul');
                    ul.innerHTML = res.data.map(item=>{
                        return `
                            <li>
                                <a href="../html/list.html">
                                    <img src="${item.imgurl}"/>
                                    <p class="title">${item.title}</p>
                                    <p class="pro">${item.pro}<span class="pp">${item.pingpai}</span></p>
                                </a>
                            </li>
                        `
                    }).join('');

                    // 写入页面
                    datalist.innerText = '';
                    datalist.appendChild(ul);



                    

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


            xhr.open('post','../api/index.php');

            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

            // POS请求发送数据
            xhr.send(`pageNo=${pageNo}&qty=${qty}`);


            // 切换分页
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    pageNo = e.target.innerText*1;
                    xhr.open('post','../api/index.php');
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                    xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                }
            }






    })

});