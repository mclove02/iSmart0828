( function($) {

    var total = $('.info').size();
    var width = $('.info').width();
    var tw = total * width;
    $('.location').css('width', tw);
    $('.flag.select').on('click', function(event) {
        event.preventDefault();

        var index = $(this).index();
        var width = $('.info').width();
        var pos = index * width;
        var current = $(this).children('.pin');
        var sibling = $(this).siblings().children('.pin');
        current.addClass('active');
        sibling.removeClass('active');

        $('.location').stop().animate({ left: -pos }); 

    }); 

    $('.flag.select').eq(0).trigger('click');


})(jQuery);
