$(document).ready(function(){
    $('.tabs_title>li').each(function(index){
        $(this).click(function(){
            $(this).addClass('tabs_select').siblings().removeClass('tabs_select')
            $('.tab_contents>div').eq(index).fadeIn(500).siblings().css('display','none')
            $('.tech_content_wrap>.left_img>img').eq(index).fadeIn(500).siblings().css('display','none')
        })
    })


   
})
