var count=0;
var first;
var second;
$('.playbox .box').on('click',function(){
    if($(this).children().hasClass('active')){
        console.log('请点击另一张卡牌');//如果点到已经翻开的牌
    }else if($(this).children().hasClass('remove')){
        console.log('请点击一张牌');//如果点到已经完成匹配的牌
    }else{
     $(this).children().addClass('active');//点到未翻开的牌
     count++;//点击次数
     if(count===1){
        first=$(this).children().css('background-color');
        console.log(first);
        console.log(count);
     }else{
        second=$(this).children().css('background-color');
        console.log(second);
        console.log(count);
        if(first===second){
            console.log(first===second)
            $(this).parent().find('active').addClass('remove');
        }else{
            $(this).parent().find('active').removeClass('active');
        }
        count=0;
        console.log(count);
        }
     }
});
