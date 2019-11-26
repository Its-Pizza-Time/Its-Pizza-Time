$(".box1").hover(function() {
        $(".box1").css("transform", "scale(1.5)");
        $(".titre1").css("transform", "scale(0.75)");
});
$('.box1').mouseleave(function() {
    $(".box1").css("transform", "scale(1)");
    $(".titre1").css("transform", "scale(1)");
});