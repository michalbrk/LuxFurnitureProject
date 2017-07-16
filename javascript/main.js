$(function() {
    console.log("Działa!");
    
    function slideToggle() {
        
    var singleSlide = $(".mobile-sliders-container").find(".slides-animating-item");
    console.log(singleSlide);
    console.log(typeof(singleSlide));
    
    singleSlide.each(function() {
        
        if($(this).css(("display") == "none")) {
            $(this).next().css(("display") == "block");
        } else {
            $(this).next().css(("display") == "none");
        }
    });
        
    setInterval(slideToggle, 7000);
}

slideToggle();

});
