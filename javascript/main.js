$(function() {
   
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var sliderElms = $(".slider-container").find(".slider-item-wrapper");
    var currentImg = sliderElms.filter(".active");
    var nextImg = $(".slider-item-wrapper"):not(".active");
    var galleryBackgnd = $(".big-gallery-item");
    var galleryCounter = 0;
    var toTopArrow = $(".to-top-container");
    var menuGalBtn = $(".main-menu-gallery");
    var menuGalGrd = $(".main-gallery-grid");
    var sldGalInfWrp = $(".slider-gallery-info-wrapper");
    var hmbgMenu = $(".mobile-hamburger-menu");
    var mainMenuWrp = $(".main-menu-wrapper");
    console.log(sliderElms);
    console.log(currentImg);
    console.log(nextImg);
    
    
    function menuGalMvmnt() {
        
        menuGalBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            menuGalGrd.fadeToggle(2000);
            if(sldGalInfWrp.hasClass("blurDown") == false) {
                sldGalInfWrp.removeClass("blurUp").addClass("blurDown");
            } else {
                sldGalInfWrp.removeClass("blurDown").addClass("blurUp");
            }
        });        
    }
    
    menuGalMvmnt();
    
    
    function galleryPainter() {
        galleryBackgnd.each(function(galleryCounter) {
            galleryCounter++;
            if(galleryCounter % 2 == 1) {
                $(this).addClass("odd-item-bColor");
            }
        });
    }
    
    galleryPainter();
    
    
    function mainMenuSliding() {
        hmbgMenu.on("click", function(e) {
            e.stopImmediatePropagation();
            mainMenuWrp.slideToggle("slow");
        });
    }
    
    mainMenuSliding();
    
    
    
    function sliderChange() {
        
        sliderElms.each(function() {
            if($(this).hasClass("active") == false) {
                $(this).css("display", "none");
            }
        });
        
        nextBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            if(currentImg.hasClass("active") == true) {
                currentImg.removeClass("active");
                
            }
        });

        prevBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            
        });
    }
    
    sliderChange();
    
    
    
    function toppingViewport() {
        $(window).scroll(function() {
            if($(this).scrollTop() > 100) {
                toTopArrow.fadeIn();
            } else {
                toTopArrow.fadeOut();
            }
        });
        
        toTopArrow.on("click", function(e) {
            e.stopImmediatePropagation();
            $("body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    }
    
    toppingViewport();
});
