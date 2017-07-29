$(function() {
   
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var currentImg = $("#active");
    var nextImg = $(".slider-item-wrapper").not("[id='active']");
    var galleryBackgnd = $(".big-gallery-item");
    var galleryCounter = 0;
    var toTopArrow = $(".to-top-container");
    var menuGalBtn = $(".main-menu-gallery");
    var menuGalGrd = $(".main-gallery-grid");
    var sldGalInfWrp = $(".slider-gallery-info-wrapper");
    var hmbgMenu = $(".mobile-hamburger-menu");
    var mainMenuWrp = $(".main-menu-wrapper");
    console.log(prevBtn,nextBtn);
    console.log(currentImg,nextImg);
    console.log(menuGalBtn,menuGalGrd,sldGalInfWrp);
    console.log(hmbgMenu,mainMenuWrp);
    
    
    function menuGalMvmnt() {
        
        menuGalBtn.on("click", function(e) {
            e.stopImmediatePropagation();
            menuGalGrd.fadeToggle(2000);
            if(sldGalInfWrp.hasClass("blurDown") == false) {
                
            }
        });
        
//        menuGalBtn.on("click", function(e) {
//            e.stopImmediatePropagation();
//            if(menuGalGrd.attr("id") !== "active") {
//                menuGalGrd.fadeIn(2000, function() {
//                    menuGalGrd.attr("id", "active");
//                });
////                setTimeout(function() {
//                    sldGalInfWrp.attr("id", "blurring");
////                }, 1000);
//            } else if(sldGalInfWrp.attr("id") == "blurring") {
//                menuGalGrd.fadeOut(2000, function() {
//                    menuGalGrd.removeAttr("id");
//                });
//                setTimeout(function() {
//                    sldGalInfWrp.removeAttr("id");
//                }, 1000);
//            }
//        });
        
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
        
        nextBtn.on("click", function(e) {
            e.stopImmediatePropagation();

            if(currentImg.attr("id", "active")) {
            
                currentImg.removeAttr("id").css("display", "none");
                nextImg.attr("id", "active").css("display", "block");
            }
        });

        prevBtn.on("click", function(e) {
            e.stopImmediatePropagation();

            if(currentImg.attr("id", "active")) {
                currentImg.removeAttr("id").css("display", "none");
                nextImg.attr("id", "active").css("display", "block");
            }
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
