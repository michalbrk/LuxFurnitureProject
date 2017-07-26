$(function() {
    console.log("Działa!");
    
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var currentImg = $("#active");
    var nextImg = $(".slider-item-wrapper").not("[id='active']");
    var galleryBackgnd = $(".big-gallery-item");
    var galleryCounter = 0;
    console.log(prevBtn,nextBtn);
    console.log(currentImg,nextImg);
    console.log(galleryBackgnd.length);
    
    function galleryPainter() {
        galleryBackgnd.each(function(galleryCounter) {
            galleryCounter++;
            if(galleryCounter % 2 == 1) {
                $(this).addClass("odd-item-bColor");
            }
        });
    }
    
    galleryPainter();
    
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
});
