
$(document).ready(function(){
    $('.list>li').each(function(index){
        $(this).click(function(){
            $(this).animate({width:'50%'},500,'linear').siblings().animate({width:'5%'},500,'linear')//리니어가 속도가 일정해서 스윙보다 보기 좋다.
            $('.acco_bot_wrap>.text>li').eq(index).fadeIn().siblings().fadeOut()
            playNum=index
        })
    })
    function accordion(j){
        $('.list>li').eq(j).animate({width:'50%'},500,'linear').siblings().animate({width:'5%'},500,'linear')
        $('.acco_bot_wrap>.text>li').eq(j).fadeIn().siblings().fadeOut()
    }

    let playNum=0
    $('.acco_btn>.next').click(function(){
        playNum++
        if(playNum>3){
            playNum=0
        }
        accordion(playNum)
    })
    $('.acco_btn>.prev').click(function(){
        playNum--
        if(playNum<0){
            playNum=3
        }
        accordion(playNum)
    })

    function autoPlay(){
        $('.acco_btn>.next').trigger('click')
    }
    playauto=setInterval(autoPlay,2500)

    let stopNum=0
    $('.acco_btn>.stop').click(function(){
        stopNum++
        if(stopNum%2==1){
        clearInterval(playauto)
        $('.acco_btn>.stop img').attr('src','img/stop_btn1.png')
        }else{
        playauto=setInterval(autoPlay,2500)
        $('.acco_btn>.stop img').attr('src','img/stop_btn.png')
        }
    })
})