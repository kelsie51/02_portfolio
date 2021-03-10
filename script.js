$ (document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticking");
        }else{
            $('.navbar').removeClass("sticking");

        }
    });
    //Switch menu-navbar //
    $('.menu-butten').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-butten i').toggleClass("active");
    });
});

