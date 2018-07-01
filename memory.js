var count=0;
var totalCount=0;
var first;
var second;
compareList=[];
$('.playbox .box').on('click',function(){
    if($(this).children().hasClass('active')){
        console.log('请点击另一张卡牌');//如果点到已经翻开的牌
    }else{
     $(this).children().addClass('active');//点到未翻开的牌
     count++;//点击次数
     totalCount++;
     if(count===1){
        first=$(this).children().css('background-color');//记录第一张牌颜色
     }else{
        second=$(this).children().css('background-color');//记录第二张牌颜色
        //比较两张牌颜色
        if(first===second){
            setTimeout(function(){
                $('.playbox .box').children('.active').addClass('remove');
                count=0;
            },500);//相同,class加上remove,延时0.5s
            //判断游戏是否结束
            if($('.playbox .box').children('.remove').length===10){
                setTimeout(function(){
                    console.log(totalCount);
                    $('.playbox .box').children().removeClass('remove');
                    alert('游戏结束,您一共用了'+ totalCount +'步,请再来一局');
                }, 1000);

            }
        }else{
            setTimeout(function(){
            $('.playbox .box').children('.active').removeClass('active');
            count=0;
            },5000);//不同,class移除active,延时5s
            }        
        }
        
        }
});
$('.playagain').on('click',function(){
    //重置所有显示,移除效果
    $('.playbox .box').children().removeClass('remove');
    $('.playbox .box').children().removeClass('active');
    count=0;
    totalCount=0;
})