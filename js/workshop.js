$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if(scroll > 0){
        $('#workshophome h1').css({
            "visibility": "visible",
            "opacity": "100%"
        });
        $('#workshophome p').css({
            "visibility": "visible",
            "opacity": "100%"
        });
        $('#my-gif-1').css({
            "visibility": "visible",
            "left": "90%",
        });
        $('.witvlak').css({
            "visibility": "visible",
            "left": "100%",
        });
    } else{
    }

    if(scroll > 600){
        $('#workshophome h1').css({
            "visibility": "hidden",
            "opacity": "0%"
        });
        $('#cta-download').css({
            "visibility": "hidden",
            "opacity": "0%"
        });
        $('#workshophome p').css({
            "visibility": "hidden",
            "opacity": "0%"
        });
        $('#workshophome h2').css({
            "visibility": "hidden",
            "opacity": "0%"
        });
        $('#my-gif-1').css({
            "visibility": "hidden",
            "left": "250%",
        });
        $('.witvlak').css({
            "visibility": "hidden",
            "left": "250%",
        });
    } else{
        $('#cta-download').css({
            "visibility": "visible",
            "opacity": "100%"
        });
        $('#my-gif-1').css({
            "visibility": "visible",
            "left": "90%"
        });
        $('#workshophome h2').css({
            "visibility": "visible",
            "opacity": "100%"
        });
    }
});
