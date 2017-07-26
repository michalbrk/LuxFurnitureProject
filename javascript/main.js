$(function() {
    console.log("Działa!");
    
    var prevBtn = $(".slider-arrow-left");
    var nextBtn = $(".slider-arrow-right");
    var currentImg = $("#active");
    var nextImg = $(".slider-item-wrapper").not("[id='active']");
    var galleryBackgnd = $(".big-gallery-description");
    console.log(prevBtn,nextBtn);
    console.log(currentImg,nextImg);
    console.log(galleryBackgnd.length);
    
    for(i = 0; i < galleryBackgnd.length; i++) {        
        if((galleryBackgnd[i] % 2) == 0) {
            console.log("Jestem nieparzysty!");
            $(this).css("background-color", "#412816;")
        } 
    }
    
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
