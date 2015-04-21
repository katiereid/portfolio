$('.move').click(function(){
 $('html, body').animate({
   scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
 }, 800);
 return false;
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".hidden");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.removeClass('hidden').addClass("logoFont");
        } else {
            header.removeClass("logoFont").addClass('hidden');
        }
    });
});
