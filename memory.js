var count=0;
var first;
var second;
compareList=[];
$('.playbox .box').on('click',function(){
    if($(this).children().hasClass('active')){
        console.log('请点击另一张卡牌');//如果点到已经翻开的牌
    }else{
     $(this).children().addClass('active');//点到未翻开的牌
     console.log( $(this).children('.active'))
     count++;//点击次数
     if(count===1){
        first=$(this).children().css('background-color');//记录第一张牌颜色
        console.log(first);
        console.log(count);
     }else{
        second=$(this).children().css('background-color');//记录第二张牌颜色
        console.log(second);
        console.log(count);
        //比较两张牌颜色
        if(first===second){
            console.log(first===second)
            return setTimeout(function(){
                $('.playbox .box').children('.active').addClass('remove');
                count=0;
            },500);//相同,class加上remove,延时1s
        }else{
            return setTimeout(function(){
            $('.playbox .box').children('.active').removeClass('active');
            count=0;
            },5000);//不同,class移除active,延时5s
        }
        console.log(count);
        }
     }
});
$('.playagain').on('click',function(){
    $('.playbox .box').children().removeClass('remove');
    $('.playbox .box').children().removeClass('active');
    count=0;
})