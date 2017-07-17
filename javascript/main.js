$(function() {
    console.log("Działa!");
    
    function slideToggle() {
        
        var currentImg = $(".slides-animating-item").find("img.active");
        var nextImg = $(".slides-animating-item").find("img:not(.active)");
        
    }
slideToggle();

});
