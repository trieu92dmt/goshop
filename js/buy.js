$(document).ready(function(){
        //loadding
        $(".preload").delay(1500).fadeOut("slow");
        //chuyen slide
        $("input[idx=1]").click(function(){
                $(".slide").hide("300")
        })
        $("input[idx=2]").click(function(){
                $("input[idx=2]+.slide").show("300")
                $("input[idx=3]+.slide").hide("300")
        })
        $("input[idx=3]").click(function(){
                $("input[idx=3]+.slide").show("300")
                $("input[idx=2]+.slide").hide("300")
        })
        //
        $("#name").focus(function(){
                $(this).css("border","2px solid #306199")
        })
        $("#name").blur(function(){
                $(this).css("border","")
        })
        $("#email").focus(function(){
                $(this).css("border","2px solid #306199")
        })
        $("#email").blur(function(){
                $(this).css("border","")
        })
        $("#phone").focus(function(){
                $(this).css("border","2px solid #306199")
        })
        $("#phone").blur(function(){
                $(this).css("border","")
        })
        $("#address").focus(function(){
                $(this).css("border","2px solid #306199")
        })
        $("#address").blur(function(){
                $(this).css("border","")
        })
        //kiem tra truoc khi submit
        $("#check").click(function(){
                var kt=true;
                check("#name",kt);
                check("#email",kt);
                check("#phone",kt);
                check("#address",kt);
                check("#province",kt);
                check("#district",kt);
                check("#ward",kt);
                function check(a){
                        if ($(a).val()=="")
                        {
                                $(a).css("border","1px solid red");
                                kt=false;
                        }
                }
                if (kt==true) next('two','three','infor','pay')
        })
})
function next(a,b,c,d){
        var a=document.getElementById(a);
        var b=document.getElementById(b);
        var c=document.getElementById(c);
        var d=document.getElementById(d);
        a.style.backgroundColor="white";
        a.style.color="#1da541"
        b.style.backgroundColor="#1da541";
        b.style.color="white"
        c.style.display="none";
        d.style.display="block";
}
