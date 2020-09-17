$(document).ready(function(){
    $(".thumbnail>li>img").click(function(){
        var a=$(this).attr("src");
        $("#main-img").attr("src",a)
    })
    //button back to top
    $(window).scroll(function(){
        if ($(this).scrollTop()>80){
            $("#gototop").fadeIn(500);
        }
        else{
            $("#gototop").fadeOut(500);
        }
    })
    $("#gototop").click(function(){
        $('html').animate({scrollTop: 0},700);
    })
})
