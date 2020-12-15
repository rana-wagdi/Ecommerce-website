$(document).ready(function(){
    $('.fa-align-justify').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('active');
    });
    $('nav ul li a').click(function(){
        $('.fa-align-justify').removeClass('fa-times');
        $('nav').removeClass('active');
    });
    $(window).on('scroll load',function(){
        if($(window).scrollTop()>150){
            $('#header').addClass('header-active');
        }else{
            $('#header').removeClass('header-active');
        
        }
    })
})