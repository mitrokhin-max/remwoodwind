$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    
    $("#list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

var kinds = new Swiper('.kinds__slider', {
    slidesPerView: 'auto',
    freeMode: true,
    loop: false,
    spaceBetween: 20,
    // loopedSlides: 8,
    breakpoints: {
        576: {
            spaceBetween: 20
        },
        768: {
            spaceBetween: 30
        },
        992: {
            spaceBetween: 40
        }
    }
});