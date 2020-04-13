$(document).ready(function() {
    $("#wiki").click(function() {
        window.open("http://en.wikipedia.org/wiki/Hacker_(hobbyist)");
    });
    var pics = document.getElementById("pics");

    function pic_init() {
        var mybutton = document.getElementById("button1");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button2");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button3");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button4");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button5");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button6");;
        mybutton.setAttribute("class", "btn btn-default");
        mybutton = document.getElementById("button7");;
        mybutton.setAttribute("class", "btn btn-default");
    }
    $('#button1').click(function() {
        pic_init();
        pics.setAttribute("src", "image/1.jpg");
        var mybutton = document.getElementById("button1");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button2').click(function() {
        pic_init();
        pics.setAttribute("src", "image/2.jpg");
        var mybutton = document.getElementById("button2");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button3').click(function() {
        pic_init();
        pics.setAttribute("src", "image/3.jpg");
        var mybutton = document.getElementById("button3");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button4').click(function() {
        pic_init();
        pics.setAttribute("src", "image/4.jpg");
        var mybutton = document.getElementById("button4");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button5').click(function() {
        pic_init();
        pics.setAttribute("src", "image/5.jpg");
        var mybutton = document.getElementById("button5");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button6').click(function() {
        pic_init();
        pics.setAttribute("src", "image/6.jpg");
        var mybutton = document.getElementById("button6");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });
    $('#button7').click(function() {
        pic_init();
        pics.setAttribute("src", "image/7.jpg");
        var mybutton = document.getElementById("button7");;
        mybutton.setAttribute("class", "btn btn-default  active");
    });

});