var $doc = $(document),
    $win = $(window),
    $svg = $('svg').drawsvg(),
    max = $doc.height() - $win.height() - 7500;


$(window).scroll(function () {

    var scroll = $(window).scrollTop();
    var p = $win.scrollTop() / max;

    if(scroll > 0){
        $('.scroll').css({
            "border": "white thin solid"
        });
        $('.ellipse').css({
            "background": "white",
        });
        $('#bol3 p').css({
            "font-weight": "bold",
            "font-size": "1em",
        });
        $('#bol1 p').css({
            "font-weight": "normal",
            "font-size": "1em",
        });
        $('#bol2 p').css({
            "font-weight": "normal",
            "font-size": "1em",
        });
    } else{
    }
    if (scroll > 1000) {
        $('.green').css({
            "width": "50vw",
        });
        $('#btn-les').css({
            "visibility": "hidden",
            "opacity": "0%",
        });
    } else {
        $('.green').css({
            "width": "100vw",
        });
        $('#btn-les').css({
            "visibility": "visible",
            "opacity": "100%",
        });
    }

    if (scroll > 2000) {
        $('.scroll').css({
            "border": "#1A4B25 thin solid"
        });
        $('.ellipse').css({
            "background": "#1A4B25",
        });
        $('#bol2 p').css({
            "font-weight": "bold",
            "color": "#1A4B25",
            "font-size": "1em",
        });
        $('#bol1 p').css({
            "font-weight": "normal",
            "color": "#1A4B25",
            "font-size": "1em",
        });
        $('#bol3 p').css({
            "font-weight": "normal",
            "font-size": "1em",
            "color": "#1A4B25",
        });
        $('#home h1').css({
            "visibility": "hidden",
        });
        $('#home h2').css({
            "visibility": "hidden",
        });
        $('#about h3').css({
            "visibility": "visible",
        });
        $('#about h2').css({
            "visibility": "visible",
        });
        $('svg').css({
            "visibility": "hidden",
        });
        $('#home .btnPizza').css({
            "visibility": "hidden",
        });
        $('#about .btnPizza').css({
            "visibility": "visible",
        });
    } else {
        $('#bol2 p').css({
            "font-weight": "normal",
            "font-size": "1em",
            "color": "white",
        });
        $('#bol1 p').css({
            "font-weight": "normal",
            "color": "white",
            "font-size": "1em",
        });
        $('#bol3 p').css({
            "font-weight": "bold",
            "font-size": "1em",
            "color": "white",
        });
        $('#home h1').css({
            "visibility": "visible",
        });
        $('#home h2').css({
            "visibility": "visible",
        });
        $('#about h3').css({
            "visibility": "hidden",
        });
        $('#about h2').css({
            "visibility": "hidden",
        });
        $svg.drawsvg('progress', p);
        $('svg').css({
            "visibility": "visible",
        });
        $('#home .btnPizza').css({
            "visibility": "visible",
        });
        $('#about .btnPizza').css({
            "visibility": "hidden",
        });
    }
    if (scroll > 2000) {
        $('#over p').css({
            "left": "50%",
            "visibility": "visible",
        });
        $('.redbox').css({
            "left": "0%",
        });
        $('#pizzaimg').css({
            "left": "10%",
        });
    } else {
        $('#over p').css({
            "left": "100%",
            "visibility": "hidden",
        });
        $('.redbox').css({
            "left": "-50%",
        });
        $('#pizzaimg').css({
            "left": "-50%",
        });
    }
    if (scroll > 3500) {
        $('.scroll').css({
            "visibility": "hidden",
        });
        $('.ellipse').css({
            "visibility": "hidden",
        });
        $('#bol1 p').css({
            "font-weight": "bold",
            "font-size": "1em",
            "color": "white",
        });
        $('#bol3 p').css({
            "font-weight": "normal",
            "font-size": "1em",
            "color": "white",
        });
        $('#bol2 p').css({
            "font-weight": "normal",
            "font-size": "1em",
            "color": "white",
        });
        $('#btn-4').css({
            "visibility": "hidden",
        });
        $('#over p').css({
            "left": "100%",
            "visibility": "hidden",
        });
        $('.redbox').css({
            "left": "-50%",
        });
        $('#pizzaimg').css({
            "left": "-50%",
        });
        $('#about .btnPizza').css({
            "visibility": "hidden",
        });
    } else {
        $('.scroll').css({
            "visibility": "visible",
        });
        $('.ellipse').css({
            "visibility": "visible",
        });

    }
    if (scroll > 4000) {
        $('#about h2').css({
            "visibility": "hidden",
        });
        $('#about h3').css({
            "visibility": "hidden",
        });
        $('#about .btnPizza').css({
            "visibility": "hidden",
        });
        $('#lesmateriaal h3').css({
            "visibility": "visible",
            "top": "15%",
        });
        $('#my-video-1').css({
            "visibility": "visible",
            "opacity": "100%",
        });
    } else {
        $('#lesmateriaal h3').css({
            "visibility": "hidden",
            "top": "0%",
        });
        $('#my-video-1').css({
            "visibility": "hidden",
            "opacity": "0%",
        });
    }

    if (scroll > 4000) {
        $('#about h2').css({
            "visibility": "hidden",
        });
        $('#about h3').css({
            "visibility": "hidden",
        });
        $('#about .btnPizza').css({
            "visibility": "hidden",
        });
        $('#lesmateriaal h3').css({
            "visibility": "visible",
            "top": "15%",
            "color": "white",
        });
        $('#txt-sct-1 h2').css({
            "visibility": "visible",
            "opacity": "100%",
        });
        $('#txt-sct-1 h4').css({
            "visibility": "visible",
            "opacity": "100%",
        });
        $('#txt-sct-1 p').css({
            "visibility": "visible",
            "opacity": "100%",
        });
        $('#lesmateriaal #btn-1').css({
            "opacity": "100%",
            "visibility": "visible",
        });
        $('#btn-4').css({
            "visibility": "visible",
            "color": "white",
        });
    } else {
        $('#lesmateriaal h3').css({
            "visibility": "hidden",
            "top": "0%",
        });
        $('#txt-sct-1 h2').css({
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-1 h4').css({
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-1 p').css({
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#lesmateriaal #btn-1').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
    }
    if (scroll > 5000) {
        $('#bol1 p').css({
            "font-weight": "bold",
            "font-size": "1em",
            "color": "#1A4B25",
        });
        $('#bol3 p').css({
            "font-weight": "normal",
            "color": "#1A4B25",
            "font-size": "1em",
        });
        $('#bol2 p').css({
            "font-weight": "normal",
            "color": "#1A4B25",
            "font-size": "1em",
        });
        $('#lesmateriaal #btn-1').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('#btn-4').css({
            "visibility": "visible",
            "color": "#1A4B25",
        });
        $('#lesmateriaal #btn-2').css({
            "opacity": "100%",
            "visibility": "visible",
        });
        $('#txt-sct-1 h2').css({
            "left": "-50%",
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('#txt-sct-1 h4').css({
            "left" : "-50%",
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-1 p').css({
            "left": "-50%",
        });
        $('#my-video-1').css({
            "left": "-100%",
        });
        $('#txt-sct-2 h2').css({
            "left": "55%",
            "opacity": "100%",
            "visibility": "visible",
            "color": "#1A4B25",
        });
        $('#txt-sct-2 h4').css({
            "left": "55%",
            "opacity": "100%",
            "visibility": "visible",
            "color": "#1A4B25",
        });
        $('#txt-sct-2 p').css({
            "left": "55%",
            "visibility": "visible",
            "color": "#1A4B25",
        });
        $('#my-video-2').css({
            "left": "12%",
            "visibility": "visible",
        });
        $('section#lesmateriaal').css({
            "background": "white",
        });
        $('#lesmateriaal h3').css({
            "color": "#1A4B25",
        });
    } else {
        $('#lesmateriaal #btn-2').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('section#lesmateriaal').css({
            "background": "#C4353F",
        });
        $('#txt-sct-1 h4').css({
            "left": "55%",
        });
        $('#txt-sct-1 h2').css({
            "left": "55%",
        });
        $('#txt-sct-1 p').css({
            "left": "55%",
        });
        $('#my-video-1').css({
            "left": "12%",
        });
        $('#txt-sct-2 h2').css({
            "left": "150%",
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-2 h4').css({
            "left": "150%",
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-2 p').css({
            "left": "150%",
            "visibility": "hidden",
        });
        $('#my-video-2').css({
            "left": "-100%",
            "visibility": "hidden",
        });
    }

    if (scroll > 6000) {
        $('#bol1 p').css({
            "font-weight": "bold",
            "font-size": "1em",
            "color": "white",
        });
        $('#bol3 p').css({
            "font-weight": "normal",
            "color": "white",
            "font-size": "1em",
        });
        $('#bol2 p').css({
            "font-weight": "normal",
            "color": "white",
            "font-size": "1em",
        });
        $('#btn-4').css({
            "visibility": "hidden",
        });
        $('#lesmateriaal #btn-2').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('#lesmateriaal #btn-3').css({
            "opacity": "100%",
            "visibility": "visible",
        });
        $('section#lesmateriaal').css({
            "background": "#1A4B25",
        });
        $('#lesmateriaal h3').css({
            "color": "white",
        });
        $('#txt-sct-2 h2').css({
            "left": "-50%",
            "opacity": "0%",
        });
        $('#txt-sct-2 h4').css({
            "left": "-50%",
            "opacity": "0%",
        });
        $('#txt-sct-2 p').css({
            "left": "-50%",
        });
        $('#my-video-2').css({
            "left": "-100%",
        });
        $('#txt-sct-3 h2').css({
            "left": "55%",
            "visibility": "visible",
            "opacity": "100%",
        });
        $('#txt-sct-3 h4').css({
            "left": "55%",
            "visibility": "visible",
            "opacity": "100%",
        });
        $('#txt-sct-3 p').css({
            "left": "55%",
            "visibility": "visible",
        });
        $('#my-video-3').css({
            "left": "12%",
            "visibility": "visible",
        });
    } else {
        $('#lesmateriaal #btn-3').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('#txt-sct-3 h2').css({
            "left": "150%",
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-3 h4').css({
            "left": "150%",
            "visibility": "hidden",
            "opacity": "0%",
        });
        $('#txt-sct-3 p').css({
            "left": "150%",
            "visibility": "hidden",
        });
        $('#my-video-3').css({
            "left": "-100%",
            "visibility": "hidden",
        });
        $('#lesmateriaal #btn-3').css({
            "opacity": "100%",
            "visibility": "hidden",
        });
    }

    if (scroll > 7000) {

        $('#btn-4').css({
            "visibility": "hidden",
        });
        $('#lesmateriaal #btn-3').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('#txt-sct-3 h2').css({
            "left": "-50%",
        });
        $('#txt-sct-3 h4').css({
            "left": "-50%",
        });
        $('#txt-sct-3 p').css({
            "left": "-50%",
        });
        $('#my-video-3').css({
            "left": "-100%",
        });
        $('#txt-sct-4 h2').css({
            "left": "55%",
            "visibility": "visible",
        });
        $('#txt-sct-4 p').css({
            "left": "55%",
            "visibility": "visible",
        });
        $('#my-video-4').css({
            "left": "10%",
            "visibility": "visible",
        });
    } else {
        $('#txt-sct-4 h2').css({
            "left": "150%",
            "visibility": "hidden",
        });
        $('#txt-sct-4 p').css({
            "left": "150%",
            "visibility": "hidden",
        });
        $('#my-video-4').css({
            "left": "-100%",
            "visibility": "hidden",
        });
    }
    if (scroll > 7500) {
        $('#txt-sct-4 h2').css({
            "opacity": "0%"
        });
        $('#txt-sct-4 p').css({
            "opacity": "0%"
        });
        $('#my-video-4').css({
            "opacity": "0%"
        });
        $('#lesmateriaal h3').css({
            "opacity": "0%",
        });
    } else {
        $('#txt-sct-4 h2').css({
            "opacity": "100%"
        });
        $('#txt-sct-4 p').css({
            "opacity": "100%"
        });
        $('#my-video-4').css({
            "opacity": "100%"
        });
        $('#lesmateriaal h3').css({
            "opacity": "100%",
        });
    }
    if (scroll > 7500) {
        $('#bol1 p').css({
            "font-weight": "bold",
            "font-size": "1em",
        });
        $('#promovideo').css({
            "opacity" : "100%",
        });
        $('#bol3 p').css({
            "font-weight": "normal",
            "font-size": "1em",
        });
        $('#bol2 p').css({
            "font-weight": "normal",
            "font-size": "1em",
        });
        $('#btn-meld').css({
            "opacity": "100%",
            "visibility": "visible",
        });
        $('footer h3').css({
            "opacity": "100%",
            "visibility": "visible",
        });
        $('footer ul').css({
            "opacity": "100%",
            "visibility": "visible",
        });
    } else {
        $('#btn-meld').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('footer h3').css({
            "opacity": "0%",
            "visibility": "hidden",
        });
        $('footer ul').css({
            "opacity": "100%",
            "visibility": "hidden",
        });
        $('#promovideo').css({
            "opacity" : "0%",
        });
    }
 
});
