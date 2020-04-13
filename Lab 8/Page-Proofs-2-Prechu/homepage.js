$(document).ready(function() {
    $('#text > p').hide();
    $(".mainhead").mouseover(function() {
        var mythis = $("#text > p");
        mythis.slideDown(400);
        setTimeout(function() {
            mythis.css("color", "purple");
        }, 1200);
    });
});