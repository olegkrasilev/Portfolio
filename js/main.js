$(function(){

    $('.slider__items').slick({
         prevArrow: '<button type="button" class="slick-prev slick-prev"><img src="images/prev.png" alt=""></button>',
         nextArrow: '<button type="button" class="slick-next slick-next"><img src="images/next.png" alt=""></button>',
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
        fade: true,
                responsive: [
            {
                breakpoint: 1025,
                settings: {
                    dots: false
                }
            }
        ]  
    });

    $(".menu, .slider__items, .about__items").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);

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