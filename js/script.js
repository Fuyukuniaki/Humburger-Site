$(function(){
//-------------------------------------------------------------------------
    if(window.matchMedia("(max-width: 834px)").matches){
        $('.js-body').prepend('<span class="p-button--clickable js-button--clickable">Menu</span>');
        $('.js-button--clickable').each(function(){
            $(this).on('click', function(){
                if($(this).hasClass('clicked')){
                    $('body').removeClass('inactive');
                    $('nav').removeClass('active');
                } else {
                    $('body').addClass('inactive');
                    $('nav').addClass('active');
                }
                $(this).toggleClass('clicked');
            });
        });
    }

});








$('window').on('resize', function(){

//-------------------------------------------------------------------------
});