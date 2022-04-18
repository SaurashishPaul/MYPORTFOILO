$(document).ready(function(){
    $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
var Typed = new  Typed(".typing",{
    strings:["Freelancer","Developer", "Designer", "Graphic Designer"],
    typespeed: 150,
    backspeed:100,
    loop: true
});
