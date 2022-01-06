$(document).ready(function() {

    $("#button_01").click(function() {
        $("#p_01, #p_02").hide(500);
    });

    $("#button_02").click(function() {
        $("#p_03").hide();
    });

    $("#button_03").click(function() {
        $(".cp_01").hide();
    });

    $("#button_04").click(function() {
        $("p.intro").hide();
    });

    $("#button_05").click(function() {
        $("ul li:first").hide();
    });
    
    $("#button_06").click(function() {
        $("li:even").hide();
    });

    $("#button_07").click(function() {
        $("*p, *li").hide();
    });

    $("#button_08").click(function() {
        $("*p, *li").show();
    });

    $("#button_09").click(function() {
        $(".cp_01").show();
    });

    $("#button_10").click(function() {
        $("p.intro").show();
    });

});