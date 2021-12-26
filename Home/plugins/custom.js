$(function(){
    'use strict';
    
    
    
//Show Color Option When Clicking On The Gear Icon
    $(".gear-icon").click(function () {
    
        $(".color-options").fadeToggle();
    
    });
        
//Change Theme Color By Clicking
    var colorLi = $(".color-options ul li"), scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css("backgroundColor", "#e63737").end()
        .eq(1).css("backgroundColor", "#f7600e").end()
        .eq(2).css("backgroundColor", "#e91e63").end()
        .eq(3).css("backgroundColor", "#12b8d6").end()
        .eq(4).css("backgroundColor", "rgba(0,118,255,0.9)");
    colorLi.click(function () {
        
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });
    
    
    var heroSec = $(".hero-sec");
    
    //Showing & Hiding Navbar Start
    var menuClicked = true;
    var itemWidth = $(".menu .menu-list").outerWidth();
    var menuBtn = $("#menu-btn") ;
    
    //closing the navbar menu if pressing somewhere else
    $(document).on("click", function(e){
        var clickover =$(e.target);
        //closest() >> means that "header" is on of its parents
        if(!clickover.closest(".navbar").length && menuBtn.hasClass("visible-menu")){  
            
                menuClicked = false;
                $(".menu .menu-list .menu-item").animate({
                    right : '0'
               },100);
                menuBtn.removeClass("visible-menu");
                    console.log(menuBtn);

                setTimeout(function(){
                    menuClicked = true;
                }, 1300);
            }
    });
    
    
    menuBtn.click(function(){
        
        if(!(menuBtn.hasClass("visible-menu"))){
           
            if(menuClicked){
                
                menuClicked = false;
                
                $(".menu .menu-list .menu-item").animate({
                    right : itemWidth
               },100);
                menuBtn.addClass("visible-menu");
                
                setTimeout(function(){
                    menuClicked = true;
                },1300);
                
            }
         
        }
        else{
            
            if(menuClicked){
                menuClicked = false;
                
                $(".menu .menu-list .menu-item").animate({
                    right : '0'
               },100);
                menuBtn.removeClass("visible-menu");

                setTimeout(function(){
                    menuClicked = true;
                }, 1300);

            }
            
        }
    });
    //Showing & Hiding Navbar End
    
    
    
    //Navbar Items Scroll Start

    $("#home-link").click(function(){
       $("body").animate({
           scrollTop : heroSec.offset().top
       }, 400) 
    });
    

    $("#services-link").click(function(){
       $("html, body").animate({
           scrollTop : ($(".services").offset().top - 75)
       }, 1000) 
    });

    $("#portfolio-link").click(function(){
       $("html, body").animate({
           scrollTop : ($(".portfolio").offset().top -75)
       }, 1000) 
    });

    $("#testimonials-link").click(function(){
       $("html, body").animate({
           scrollTop : ($(".testimonials").offset().top -75)
       }, 1000) 
    });

    $("#our-team-link").click(function(){
       $("html, body").animate({
           scrollTop : ($(".team-sec").offset().top -75)
       }, 1000) 
    });

    $("#contact-link").click(function(){
       $("html, body").animate({
           scrollTop : ($(".contact-sec").offset().top -75)
       }, 1000) 
    });
    
    //Navbar Items Scroll End
    
    
    //Centering The Hero-Section Content
    function centeringHero(){
        heroSec.height($(window).height());
        var heroHeight = heroSec.height();
        var contentPosition = (heroHeight/2) - ($(".hero-sec .hero-sec-content").height())/2;
        $(".hero-sec .hero-sec-content").css("top", contentPosition);
    } centeringHero();
    
    $(window).resize(centeringHero);
    
    //Trigger NiceScroll
//    $("html").niceScroll({
//        zindex:1001,
//        cursoropacitymax: 0.8
//    });
//    $(".color-options ul li").click(function(){
//        var optLiColor = $(this).css("backgroundColor");
//        console.log(optLiColor);
//        $(this).niceScroll({
//            cursorcolor: optLiColor
//        });
//    });
    
    
    //scroll when clicking on hire-us button
    $("#hire-us").click(function(){
       $("html, body").animate({
           scrollTop : ($(".contact-sec").offset().top -75)
       }, 1000) 
    });
    
    //scroll when clicking on our-works button
    $("#our-works").click(function(){
       $("html, body").animate({
           scrollTop : ($(".portfolio").offset().top -75)
       }, 1000) 
    });
    
    //scroll when clicking on arrow button
    $(".arrow i").click(function(){
       $("body, html").animate({
           scrollTop : ($(".services").offset().top -75)
       }, 1000) 
    });
    
    //showing more portfolio items
    var btn = $(".show-more button");
        btn.on("click", function(){

                if(btn.text() == 'Show More'){
                    btn.text('Less Items');
                }
                else{
                    btn.text('Show More');
                }
            
            $(".portfolio .portfolio-items .itemToHide").fadeToggle(2000);
        });
      

    
    
    
    //Animating Navbar
    var heroSecHeight = heroSec.height();
    $(document).on("scroll",function(){
        if($(".services").offset().top < (($(document).scrollTop() + 80 ) )){
            $(".navbar").addClass("animate-nav");
        }
        else{
            $(".navbar").removeClass("animate-nav");
        }
    })
    
        
    
    /*
        > Testimonials Slider Start
    */
    
    function slider(){
        
    //setting the width
        var numberOfClients= $(".testimonials .overlay .client").length;
        var sliderWidth = $(".testimonials").width() * numberOfClients;
        var overlayLeft =0;
        var shownClientNum = 1;
        var clicked = true;

        $(".testimonials .overlay").width(sliderWidth * numberOfClients);
        $(".testimonials .client").width(sliderWidth / numberOfClients);

        //sliding the items
            
            $(".testimonials .slider-arrows i").click(function(){

               if($(this).hasClass("fa-chevron-right")){        
                   
                   
                   if(shownClientNum != numberOfClients && clicked){

                       clicked = false; 
                       
                       setTimeout(function(){
                          clicked = true; 
                       }, 600);
                       
                       overlayLeft += - (sliderWidth / numberOfClients);
                       $(".testimonials .overlay").animate({
                           left : overlayLeft

                       },600);

                       shownClientNum++;
                   }
               }
                else if($(this).hasClass("fa-chevron-left")){

                   if(shownClientNum <= numberOfClients && shownClientNum != 1 && clicked){

                       clicked = false;
                       
                       setTimeout(function(){
                          clicked = true; 
                       },600);
                       
                       overlayLeft += (sliderWidth / numberOfClients);
                       $(".testimonials .overlay").animate({
                           left : overlayLeft
                       }, 600);

                       shownClientNum--;
                   }
                }

               //disabling the another arrow
                if( shownClientNum == 1 ){
                    $(".fa-chevron-left").addClass("disabled-arrow");        
                    $(".fa-chevron-right").removeClass("disabled-arrow");        
               }
                else if(shownClientNum == 5){
                    $(".fa-chevron-right").addClass("disabled-arrow");        
                    $(".fa-chevron-left").removeClass("disabled-arrow");        
                }

            });
            
        
    } slider();
    
    $(window).resize(function(){
        slider();
    });
    /*
        > Testimonials Slider End
    */
    
});








