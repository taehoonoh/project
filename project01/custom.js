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
    // slick.js : history

    $('.history-slider').slick({
        dots: true,
        infinite: false,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 3,

      });
              
    //  slick.js : project photo

      $('.project-photo').slick({
        dots: true,
        autoplay: true,
        speed:500,
        fade:true,
        infinite: true,
        autoplaySpeed: 2000,
        cssEase:'linear'
      });









})
