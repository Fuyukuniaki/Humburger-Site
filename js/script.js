
//-------------------------------------------------------------------------
function navActive(){
    $(function () {
        $("nav").addClass('active');
        $(".js-shade").addClass('inactive');
    });
};
function navInactive(){
    $(function () {
        $("nav").removeClass('active');
        $(".js-shade").removeClass('inactive');
    });
};

function menu_slide(){
    if( $('.js-button__clickable').length > 0 ||
       $('.js-button__clickable').hasClass('clicked') ){
            $('.js-button__clickable').remove();
            $('.js-shade').removeClass('inactive').remove();
            $('.js-body').removeClass('inactive');
            $('.js-button__clickable').removeClass('clicked');
    }
    if(window.matchMedia("(max-width: 834px)").matches){
        $('.js-body').prepend('<span class="p-button__clickable js-button__clickable">Menu</span>');
        $('.js-body').prepend('<div class="js-shade p-body__Shade"></div>');

        $('.js-button__clickable').each(function(){
            $(this).on('click', function(){
                if($(this).hasClass('clicked')){
                    $.when($('body').removeClass('inactive'))
                     .done(navInactive());
                } else {
                    $.when($('body').addClass('inactive'))
                     .done(navActive());
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