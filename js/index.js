$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll >= 100){
            $("#navFirst").addClass("scrolling");
        }else{
            $("#navFirst").removeClass("scrolling");
        }

    })
})