$(function(){
//-------------------------------------------------------------------------
    if(window.matchMedia("(max-width: 834px)").matches){
        $('.js-body').prepend('<span class="p-button__clickable js-button__clickable">Menu</span>');
        $('.js-body').prepend('<div class="js-shade p-body__Shade"></div>');

        $('.js-button__clickable').each(function(){
            $(this).on('click', function(){
                if($(this).hasClass('clicked')){
                    $('.p-body__Shade').animate(
                        { opacity: 0 }, 1000,
                        function(){$(this).removeClass('inactive');}
                    );
                    $('nav').animate(
                        { right: '-100%' }, 1000,
                        function(){ $(this).removeClass('active');}
                    );
                } else {
                        $('.p-body__Shade').addClass('inactive').animate(
                            { opacity: 1 }, 1000
                        );
                        $('nav').addClass('active').animate(
                            { right: 0 }, 1000
                        );
                }
                $(this).toggleClass('clicked');
            });
        });
    }
});






$('window').on('resize', function(){
//-------------------------------------------------------------------------
});