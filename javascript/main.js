$(function() {
    console.log("Działa!");
    
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var currentImg = $("#active");
    var nextImg = $(".slider-item-wrapper").not("[id='active']");
    console.log(prevBtn,nextBtn);
    console.log(currentImg,nextImg);
    
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
