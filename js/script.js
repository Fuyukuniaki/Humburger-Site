
//-------------------------------------------------------------------------
function navActive(){
    $(function () {
        $("nav").toggleClass('active');
        $(".js-shade").toggleClass('inactive');
    });
};

function menu_slide(){
    if( $('.js-button__clickable').length > 0 ||
       $('.js-button__clickable').hasClass('clicked') ){
            $('.js-button__clickable').remove();
            $('.js-shade').removeClass('inactive').remove();
            $('.js-body').removeClass('inactive');
            $('nav').removeClass('active');
            $('.js-button__clickable').removeClass('clicked');
    }
    if(window.matchMedia("(max-width: 834px)").matches){
        $('.js-body').prepend('<span class="p-button__clickable js-button__clickable">Menu</span>');
        $('.js-body').prepend('<div class="js-shade p-body__Shade"></div>');

        $('.js-button__clickable').each(function(){
            $(this).on('click', function(){
                $.when($('body').toggleClass('inactive'))
                 .done(navActive());
                $(this).toggleClass('clicked');
            });
        });
    }
};


$(window).on('load resize', function(){
    menu_slide();
//-------------------------------------------------------------------------
});