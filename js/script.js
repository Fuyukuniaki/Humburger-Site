$(function(){
//-------------------------------------------------------------------------
    $('.js-body').prepend('<span class="js-clickable">Menu</span>');

    $('.js-clickable').each(function(){
        $(this).on('click', function(){
            if($(this).hasClass('js-clicked')){
                $('body').removeClass('inactive');
                $('nav').removeClass('active');
            } else {
                $('body').addClass('inactive');
                $('nav').addClass('active');
            }
            $(this).toggleClass('js-clicked');
        });
    });









//-------------------------------------------------------------------------
});