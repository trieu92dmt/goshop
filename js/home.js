$(document).ready(function(){
    //loading
    $(".preload").delay(1000).fadeOut("slow");
    //function previous button
    function sliderleft(){
        var one=parseInt($("#slide-1").css("left"))-1140;
        var two=parseInt($("#slide-2").css("left"))-1140;
        var three=parseInt($("#slide-3").css("left"))-1140;
        var four=parseInt($("#slide-4").css("left"))-1140;
        if (one%1140==0){
            $("#slide-1").animate({
                "left" : one+ "px"
            },500)
        }
        if (two%1140==0){
            $("#slide-2").animate({
                "left" : two+ "px"
            },500)
        }
        if (three%1140==0){
            $("#slide-3").animate({
                "left" : three+ "px"
            },500)
        }
        if (four%1140==0){
            $("#slide-4").animate({
                "left" : four+ "px"
            },500)
        }
        if (one==-2280)
        {
            $("#slide-1").animate({
                "left" : "2280px"
            },0)
        }
        else if (two==-2280)
        {
            $("#slide-2").animate({
                "left" : "2280px"
            },0)
        }
        else if (three==-2280)
        {
            $("#slide-3").animate({
                "left" : "2280px"
            },0)
        }
        else
        {
            $("#slide-4").animate({
                "left" : "2280px"
            },0)
        }
    }
    //slide auto
    var auto=setInterval(function(){
        var one=parseInt($("#slide-1").css("left"));
        var two=parseInt($("#slide-2").css("left"));
        var three=parseInt($("#slide-3").css("left"));
        var four=parseInt($("#slide-4").css("left"));
        if (one%1140==0 || two%1140==0 || three%1140==0 || four%1140==0) sliderleft();
    },4000)
    //button previous
    $(".prev").click(function(){
        var one=parseInt($("#slide-1").css("left"));
        var two=parseInt($("#slide-2").css("left"));
        var three=parseInt($("#slide-3").css("left"));
        var four=parseInt($("#slide-4").css("left"));
        clearInterval(auto);
        if (one%1140==0 || two%1140==0 || three%1140==0 || four%1140==0) sliderleft();
    })
    //button next
    function sliderright(){
        var one=(parseInt($("#slide-1").css("left"))+1140).toString()+"px";
        var two=(parseInt($("#slide-2").css("left"))+1140).toString()+"px";
        var three=(parseInt($("#slide-3").css("left"))+1140).toString()+"px";
        var four=(parseInt($("#slide-4").css("left"))+1140).toString()+"px";
        $("#slide-1").animate({
            "left" : `${one}`
        },500)
        $("#slide-2").animate({
            "left" : `${two}`
        },500)
        $("#slide-3").animate({
            "left" : `${three}`
        },500)
        $("#slide-4").animate({
            "left" : `${four}`
        },500)
        if (one=="3420px")
        {
            $("#slide-1").animate({
                "left" : "-1140px"
            },0)
        }
        else if (two=="3420px")
        {
            $("#slide-2").animate({
                "left" : "-1140px"
            },0)
        }
        else if (three=="3420px")
        {
            $("#slide-3").animate({
                "left" : "-1140px"
            },0)
        }
        else
        {
            $("#slide-4").animate({
                "left" : "-1140px"
            },0)
        }
    }
    $(".next").click(function(){
        var one=parseInt($("#slide-1").css("left"));
        var two=parseInt($("#slide-2").css("left"));
        var three=parseInt($("#slide-3").css("left"));
        var four=parseInt($("#slide-4").css("left"));
        clearInterval(auto);
        if (one%1140==0 || two%1140==0 || three%1140==0 || four%1140==0) sliderright();
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