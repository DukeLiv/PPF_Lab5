$(document).ready(function() {

    $("#btn1").click(function() {
        $(".square").fadeIn();
        $(".triangle").fadeIn("slow");
        $(".circle").fadeIn(800);
    });

    $("#btn2").click(function() {
        $(".square").fadeOut();
        $(".triangle").fadeOut("slow");
        $(".circle").fadeOut(800);
    });

    $("#btn3").click(function() {
        $(".square").fadeToggle();
        $(".triangle").fadeToggle("slow");
        $(".circle").fadeToggle(800);
    });

    $("#btn4").click(function() {
        $(".square").fadeTo(0, .2);
        $(".triangle").fadeTo("slow", .2);
        $(".circle").fadeTo(800, .2);
    });

    $("#btn5").click(function() {
        $("#text").slideDown(3000);
    });

    $("#btn6").click(function() {
        $("#text").slideUp(3000);
    });

    $("#btn7").click(function() {
        $("#text").slideToggle(3000);
    });

    $("#btn8").click(function() {
        var div = $("#animation");
            div.animate({fontSize: '1.3rem'});
            div.animate({left: '10rem'});
            div.animate({height: '15rem', opacity: '0.4'}, 1500);
            div.animate({width: '15rem', opacity: '0.8'}, 1500);
            div.animate({height: '10rem', opacity: '0.4'}, 1500);
            div.animate({width: '10rem', opacity: '0.8'}, 1500);
    });

    $("#btn9").click(function() {
        $("#text").stop();
    });

    $("#btn10").click(function() {
        $("#panel").hide(1000, function() {
            alert("Panel jest teraz ukryty");
        });
    });

    $("#btn11").click(function() {
        $("#panel").css("color", "blue").slideUp(2000).slideDown(2000);
    })

    $("#btn12").click(function() {
        $("div#shape").css("color", "blue")
        .fadeOut(1000)
        .fadeIn(1000)
    });

});