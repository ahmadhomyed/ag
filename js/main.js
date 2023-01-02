// Template Name: Dr Ahmad Gaber - Personal Portfolio Template
	// Author: Ahmad Gaber
	// Version:        1.0
    // Copyright: 2019

//loading
$(window).on("load",function (){
        $(".loading").fadeOut(3000,function(){
            $(".loading").remove();
        })
})
$(document).ready(function () {
    "use strict";
    // general
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
    // wow
    new WOW().init();
 // nice scroll
    $("html,body").niceScroll({
  
    cursorwidth:"8px",
    background:"#E2E3E7",
    cursorborderradius:"0",
    cursorborder:"none",
    zindex:"99"
    }); 
    $(".nicescroll-rails-vr").niceScroll({
        width:"8px"
    })

    // navbar
    $(window).on("scroll",function () {
        if($(window).scrollTop() == 0){
            $(".navbar").removeClass("scrolled")
        }else{
            $(".navbar").addClass("scrolled")
        }
    })
    // goToContact Class on homepage and advertise section
    var activeLink =$(".navbar .navbar-nav .nav-item ,.goToContact");
    activeLink.on("click",function(e){
        e.preventDefault();
        $(this).addClass("active").siblings().removeClass("active");
        $("html,body").animate({
            scrollTop:$("."+$(this).data("scroll")).offset().top -$(".navbar").innerHeight()
            // 66 is the hight of sticky navbar
        },1000);
    })
    // if you want to color navbar items on scroll remove comments
    // $(window).on("scroll",function(){
    //     $(".navbar .nav-item").each(function(){
    //         if($(window).scrollTop() > $("."+$(this).data("scroll")).offset().top-20){
    //             $(this).addClass("active").siblings().removeClass("active");
    //         }
    //     })
    // })
// homePage arrow down
$(".home-page .arrow-down").on("click",function(){
    $("html,body").animate({
        scrollTop:$("."+$(this).data("scroll")).offset().top -$(".navbar").innerHeight()
    },1000);
})
    // projects
    
    mixitup(".shuffle-images");
    $(".projects .projects-list li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
    })
    // skill bars
    $(window).on("scroll", function () {
        $(".skills .progress .progress-bar").each(function () {
            var GoSkill =$(this).offset().top + $(this).outerHeight();
            var bottomOfWindow =$(window).scrollTop() + $(window).height();
            var widthValue = $(this).data("value");
            if (bottomOfWindow > GoSkill) {
                $(this).css({
                    width: widthValue
                });
            }
        });
    });


    // swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
     // arrow up
     $(window).scroll(function(){
        if ( $(window).scrollTop() > 700 ) {
            $(".arrow-up").fadeIn(300);
            $(".arrow-up").addClass("show");
        } else {
            $(".arrow-up").fadeOut(300);
            $(".arrow-up").removeClass("show");
        }
    })
    $(".arrow-up").click(function(e){
       
        $("html,body").animate({
            scrollTop:0 },700)})
        // end arrow up
console.log('%c Hi dear developer \n Welcome to DrhomYed \:)','color: #d50000; display: block;');
});