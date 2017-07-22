$(function() {
    console.log("Działa!");
    
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    console.log(prevBtn,nextBtn);
    
    nextBtn.on("click", function(e) {
        var currentImg = $(".active");
        var nextImg = $(".slider-arrow-wrapper:last-child").find("img:not(.active)");
        
        e.stopImmediatePropagation();
        
        if(nextImg.length) {
            currentImg.removeClass("active").css("z-index", -10);
            nextImg.addClass("active").css("z-index", 10);
        }
    });

});
    