$(function() {
    'use strict';
    //adjust slider height
    var winH   = $(window).height(),
        UpperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( UpperH + navH ));

    //featured work shuffle
    $(`.features-work ul li`).on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity' , 1);
        }
        else {
            $('.shuffle-images .col-md').css('opacity','.08');
            $(this).data('class').parent().css('opacity', 1);
        }
    });
});
