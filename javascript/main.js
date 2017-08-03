$(function() {
   
    var sldContainer = $(".slider-container");
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var sliderElms = $(".slider-container").find(".slider-item-wrapper");
    var currentImg = sliderElms.filter(".active");
    var nextImg = sliderElms.filter(":not('.active')");
    var galleryBackgnd = $(".big-gallery-item");
    var galleryCounter = 0;
    var toTopArrow = $(".to-top-container");
    var menuGalBtn = $(".main-menu-gallery");
    var menuGalGrd = $(".main-gallery-grid");
    var sldGalInfWrp = $(".slider-gallery-info-wrapper");
    var hmbgMenu = $(".mobile-hamburger-menu");
    var mainMenuWrp = $(".main-menu-wrapper");
    var infiniteSld = setInterval(sliderChange, 5000);
    var mobileMenuItms = $(".main-menu-item");
    console.log(mobileMenuItms);
    
    
    function menuGalMvmnt() {
        
        menuGalBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            
            if($(window).width() < 800) {
                menuGalGrd.fadeToggle(1000);
                sldGalInfWrp.css("display", "none");
                mobileMenuItms.each(function() {
                    if($(this).index() == 0) {
                        $(this).css("display", "none");
                    } else if($(this).index() == 2) {
                        $(this).css("display", "none");
                    }    
                });
            } else {
                menuGalGrd.fadeToggle(2000);
                if(sldGalInfWrp.hasClass("blurDown") == false) {
                    sldGalInfWrp.removeClass("blurUp").addClass("blurDown");
                } else {
                    sldGalInfWrp.removeClass("blurDown").addClass("blurUp");
                }
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
            
            mainMenuWrp.slideToggle("slow", function() {
                sldContainer.animate({
                    "margin-top": "0"    
                }, "slow");
                
                
            });
        });
    }
    
    mainMenuSliding();
    
    
    
    function sliderChange() {
        
        sliderElms.each(function() {
            if($(this).hasClass("active") == false) {
                $(this).css("display", "none");
            }
        });
        
        
        if(currentImg.hasClass("active") == true) {                
                currentImg.removeClass("active").css("display", "none");
                nextImg.addClass("active").css("display", "block");
            } else {
                currentImg.addClass("active").css("display", "block");
                nextImg.removeClass("active").css("display", "none");
            }
    }
    
    sliderChange();
    
    nextBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            
            clearInterval(infiniteSld);
            
            if(currentImg.hasClass("active") == true) {                
                currentImg.removeClass("active").css("display", "none");
                nextImg.addClass("active").css("display", "block");
            } else {
                currentImg.addClass("active").css("display", "block");
                nextImg.removeClass("active").css("display", "none");
            }
            
            infiniteSld = setInterval(sliderChange, 5000);
        });
        
    prevBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            
            clearTimeout(infiniteSld);
             
            if(currentImg.hasClass("active") == true) {                
                currentImg.removeClass("active").css("display", "none");
                nextImg.addClass("active").css("display", "block");
            } else {
                currentImg.addClass("active").css("display", "block");
                nextImg.removeClass("active").css("display", "none");
            }
            
            infiniteSld = setInterval(sliderChange, 5000);
        });
    
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
