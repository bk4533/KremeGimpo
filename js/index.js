$(function(){
    $('.gnb>li').mouseover(function(){
        $(this).addClass("on");
    })
    $('.gnb>li').mouseleave(function(){
        $(this).removeClass("on");
    })
    
}); // JQ

function UpScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}