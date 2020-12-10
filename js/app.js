$(document).ready(function(){
    $('.fa-align-justify').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('active');
    });
    $('nav ul li a').click(function(){
        $('.fa-align-justify').removeClass('fa-times');
        $('nav').removeClass('active');
    });
})