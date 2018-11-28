// OnClick scroll to home div
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home-target").offset().top
    }, 1000);
});
// OnClick scroll to music div
$("#music").click(function() {
    $('html, body').animate({
        scrollTop: $("#music-target").offset().top
    }, 1000);
});
// OnClick scroll to merch div
$("#merch").click(function() {
    $('html, body').animate({
        scrollTop: $("#merch-target").offset().top
    }, 1000);
});
// OnClick scroll to shows div
$("#shows").click(function() {
    $('html, body').animate({
        scrollTop: $("#shows-target").offset().top
    }, 1000);
});