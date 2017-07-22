$(function() {
    console.log("Działa!");
    
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    console.log(prevBtn,nextBtn);
    
    prevBtn.on("click", function() {
        var currentImg = $(".active");
        var nextImg = $(".slider-arrow-wrapper:last-child").find("img:not(.active)");
        console.log(currentImg,nextImg);
    });

});
