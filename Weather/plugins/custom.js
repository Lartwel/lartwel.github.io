$(function(){
    
    /*
        > Testimonials Slider Start
    */
    
    function slider(){
 
    //setting the width
        var numberOfSlides= $(".widgets .overlay .slide").length;
        var slideWidth = ($(".widgets .overlay .slide").width()) ;
        var overlayLeft = 0;
        var shownSlideNum = 1;
        var clicked = true;

        //centering the slides
        $(".widgets .overlay").css("margin" , "auto" );
        //sliding the items
            
                
        
            $(".widgets .slider-arrows i").click(function(){
                
                
                console.log($(".widgets .overlay").css("left"));
                
               var activeWidget = $(".overlay .active-widget");
               if($(this).hasClass("fa-chevron-right")){        
                   
                   if(shownSlideNum <= 1 && clicked){

                       activeWidget.next().addClass("active-widget");
                       activeWidget.removeClass("active-widget");
                       
                       
                       clicked = false; 
                       
                       setTimeout(function(){
                          clicked = true; 
                       }, 600);
                       
                       overlayLeft = overlayLeft - slideWidth;
                       
                       
                       $(".widgets .overlay").animate({
                           left : overlayLeft
                       },600);

                       shownSlideNum++;
                   }
               }
                else if($(this).hasClass("fa-chevron-left")){
                    

                   if(shownSlideNum <= numberOfSlides && shownSlideNum >= 1 && clicked){

                       activeWidget.prev().addClass("active-widget");
                       activeWidget.removeClass("active-widget");
                       
                       clicked = false;
                       
                       setTimeout(function(){
                          clicked = true; 
                       },600);
                       
                       
                       overlayLeft = overlayLeft + slideWidth ;
                       $(".widgets .overlay").animate({
                           left : overlayLeft
                       }, 600);

                       shownSlideNum--;
                   }
                }

               //disabling the another arrow
                if( shownSlideNum > 1 ){
                    $(".fa-chevron-right").addClass("disabled-arrow");        
                    $(".fa-chevron-left").removeClass("disabled-arrow");        
               }
                else if(shownSlideNum < 1){
                    $(".fa-chevron-left").addClass("disabled-arrow");        
                    $(".fa-chevron-right").removeClass("disabled-arrow");        
                }

            });

        
    } slider();
   
    /*
        > Testimonials Slider Start
    */
    
    
    /*
        > Final Retouch
    */
    $(".home-link").click(function(){
       $("body, html").animate({
           scrollTop: $("body").offset().top
       },1000)
    });
    $(".features-link").click(function(){
       $("body, html").animate({
           scrollTop: $(".features").offset().top
       },1000)
    });
    $(".reviews-link").click(function(){
       $("body, html").animate({
           scrollTop: $(".testimonials").offset().top
       },1000)
    });
    $(".download-link").click(function(){
       $("body, html").animate({
           scrollTop: $(".download").offset().top
       },1000)
    });
    
    
    $(window).scroll(function(){
       if($(this).scrollTop() > 400){
           $(".top-btn").fadeIn(1000);
       }
        else{
           $(".top-btn").fadeOut(1000);
        }
    });
    $(".top-btn").click(function(){
       $("body, html").animate({
           scrollTop: $("body").offset().top
       },1000)
    });
    
    
    
    
    
    
    
    
});
