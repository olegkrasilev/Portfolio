$(function(){

    $('.slider__items').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../images/next.png" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
              arrows: false
              }
            }
        ]    
        
            
    });
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
        
    });
    

    AOS.init();

});

jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.counter').offset().top,
        hH = jQuery('.counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.counter').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) );
                }
            });
        });
    }
}