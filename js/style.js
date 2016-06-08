$(document).ready(function() {
    var images = ["images/Layer38.png", "images/Layer39.png"];
    var currentImage = 0;
    $("#img").attr('src', images[currentImage]);
    $("#up").click(function (){
        if (currentImage !== 0) {
            currentImage--;
            $("#img").attr('src', images[currentImage]);
        }
    });
    $("#down").click(function (){
        if (currentImage != images.length - 1) {
            currentImage++;
            $("#img").attr('src', images[currentImage]);
        }
    });
});
