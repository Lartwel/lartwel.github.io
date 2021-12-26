$(document).ready(function(){
    
    //showing the navbar using hamburger button in small screen
    var $header =$("header");
    var clicked = false;
    $("nav .nav-btn").click(function(){
        if(!clicked){
            clicked =true;
        $(this).parent().toggleClass("active");
            setTimeout(function(){
                clicked=false;
            },750);
        }
    });
    
    
    
    
    //rev .length
    //closing the navbar menu if pressing somewhere else
    $(document).on("click", function(e){
        var clickover =$(e.target);
        //closest() >> means that "header" is on of its parents
        if(!clickover.closest("header").length && $("nav").hasClass("active")){  
            $("nav").removeClass("active");
        }
    });
    
    
    //changing the header style after scrolling
    var $mainSection= $(".main-sec");
    $(window).on("scroll", function(){
       if ($(window).scrollTop()>= $mainSection.height() +100 ){
           $header.addClass("sticky");
       }
        else{
            $header.removeClass();
        }
    });
    
    
    // Menu Slider Function
    function menuSlider(){
        
        var $sliderContainer = $(".menu-slider"),
            $slider = $sliderContainer.find(".slider"),
            $sliderBanner= $sliderContainer.find(".slider-banner"),
            $sliderItems= $sliderBanner.find('.slider-item'),
            itemsLength= $sliderItems.length,
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev');
                
        var activeItems,
            slidesToShow=3;
            
        activeItems=slidesToShow;

        
        function responsiveSlides(){
            activeItems -= slidesToShow;
            if($(window).width() <= 991 && $(window).width() >550){
                slidesToShow =2;
            }
            else if ($(window).width() <550){
                slidesToShow =1;
            }
            else{
                slidesToShow =3;
            }
            activeItems += slidesToShow;
        } responsiveSlides();
        
        
        $sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
        
        var itemWidth,
            itemsWidth;
        
        function fixWidth(){
            itemWidth= $sliderItems.outerWidth();
            itemsWidth= itemWidth * itemsLength; 
            $sliderBanner.width(itemsWidth);
        }fixWidth();
        
        $(window).on("resize", function(){
            responsiveSlides();
        $sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
            fixWidth();
            $sliderBanner.css("left", -leftCalc());
        });
        
        function leftCalc(){
            return itemWidth * itemMove;
        }
        
        var left=0;
        var itemMove =0;
        var clicked = false;

        function checkStatus(){
            if(activeItems == itemsLength){
                $nextBtn.addClass("disabled-btn");
            }
            else{
                $nextBtn.removeClass("disabled-btn");
            }
            
            if(activeItems == slidesToShow){
                $prevBtn.addClass("disabled-btn");
            }
            else{
                $prevBtn.removeClass("disabled-btn");
            }
        } checkStatus();
        
          $nextBtn.click(function(){
              if(!clicked){
                if(activeItems != itemsLength){
                    clicked=true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBanner.css("left", left); 
                    activeItems++;
                    
                 setTimeout(function(){
                     clicked=false;
                 }, 400) ;
                    checkStatus();
                }
              }
        });
      $prevBtn.click(function(){
          if(!clicked){
              if(activeItems> slidesToShow){
                  clicked=true;
                  itemMove--;
                  left = -leftCalc();
                  $sliderBanner.css("left", left);
                  activeItems--;
              
                  setTimeout(function(){
                      clicked=false
                  },400);
                    checkStatus();
              }
          }
          });
    }menuSlider();
    
    
    // Chief Slider Function
    function chiefSlider(){
        
        var $sliderContainer = $(".chief-slider"),
            $slider = $sliderContainer.find(".slider"),
            $sliderBanner= $sliderContainer.find(".slider-banner"),
            $sliderItems= $sliderBanner.find('.slider-item'),
            itemsLength= $sliderItems.length,
            $nextBtn = $sliderContainer.find('.arrow.next'),
            $prevBtn = $sliderContainer.find('.arrow.prev');
                
        var activeItems,
            slidesToShow=1;
            
        activeItems=slidesToShow;
     
        $sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
        
        var itemWidth,
            itemsWidth;
        
        function fixWidth(){
            itemWidth= $sliderItems.outerWidth();
            itemsWidth= itemWidth * itemsLength; 
            $sliderBanner.width(itemsWidth);
        }fixWidth();
        
        $(window).on("resize", function(){
        $sliderItems.outerWidth(parseInt($slider.width()/slidesToShow));
            fixWidth();
            $sliderBanner.css("left", -leftCalc());
        });
        
        function leftCalc(){
            return itemWidth * itemMove;
        }
        
        var left=0;
        var itemMove =0;
        var clicked = false;

        function checkStatus(){
            if(activeItems == itemsLength){
                $nextBtn.addClass("disabled-btn");
            }
            else{
                $nextBtn.removeClass("disabled-btn");
            }
            
            if(activeItems == slidesToShow){
                $prevBtn.addClass("disabled-btn");
            }
            else{
                $prevBtn.removeClass("disabled-btn");
            }
        } checkStatus();
        
          $nextBtn.click(function(){
              if(!clicked){
                if(activeItems != itemsLength){
                    clicked=true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBanner.css("left", left); 
                    activeItems++;
                    
                 setTimeout(function(){
                     clicked=false;
                 }, 400) ;
                    checkStatus();
                }
              }
        });
      $prevBtn.click(function(){
          if(!clicked){
              if(activeItems> slidesToShow){
                  clicked=true;
                  itemMove--;
                  left = -leftCalc();
                  $sliderBanner.css("left", left);
                  activeItems--;
              
                  setTimeout(function(){
                      clicked=false
                  },400);
                    checkStatus();
              }
          }
          });
    }chiefSlider();
});