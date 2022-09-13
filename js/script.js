
//-------------------------------------------------------------------------
function menu_slide(){
    if($('.js-button__clickable').length > 0 ||
       $('.js-button__clickable').hasClass('clicked') ||
       $('nav').attr('right','0')){
            $('.js-button__clickable').remove();
            $('.js-shade').removeClass('inactive').remove();
            $('.js-body').removeClass('inactive');
            $('nav').css('right','-100%').removeClass('active');
            $('.js-shade').css('opacity','0');
            $('.js-button__clickable').removeClass('clicked');
    }
    if(window.matchMedia("(max-width: 834px)").matches){
        $('.js-body').prepend('<span class="p-button__clickable js-button__clickable">Menu</span>');
        $('.js-body').prepend('<div class="js-shade p-body__Shade"></div>');

        $('.js-button__clickable').each(function(){
            $(this).on('click', function(){
                if($(this).hasClass('clicked')){
                    $('.js-body').removeClass('inactive');
                    $('.js-shade').animate(
                        { opacity: 0 }, 500,
                        function(){$(this).removeClass('inactive');}
                    );
                    $('nav').animate(
                        { right: '-100%' }, 500,
                        function(){ $(this).removeClass('active');}
                    );
                } else {
                    $('.js-body').addClass('inactive');
                    $('.js-shade').addClass('inactive').animate(
                        { opacity: 1 }, 500
                    );
                    $('nav').addClass('active').animate(
                        { right: 0 }, 500
                    );
                }
                $(this).toggleClass('clicked');
            });
        });
    }
};


$(window).on('load resize', function(){
    menu_slide();
//-------------------------------------------------------------------------
});