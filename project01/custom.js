$(function(){
    /* Trigger*/
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb').toggleClass('active')
    });

    $('section,.menu a').click(function(){
        $('.trigger').removeClass('active')
        $('.gnb').removeClass('active')
    })
    // gototop
    $('gototop').click(function(){
        event.preventDefault();
    })
    // Change CSS with Scroll
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $('header,.gototop').addClass('active')}
        else{$('header,.gototop').removeClass('active')}

    })











})
