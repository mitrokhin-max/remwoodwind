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
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        768: {
            spaceBetween: 30
        },
        992: {
            spaceBetween: 40
        }
    }
});

var examples = new Swiper('.examples__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    // loopedSlides: 5,
    spaceBetween: 20,
    slideToClickedSlide: true,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.examples__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.examples__button-next',
        prevEl: '.examples__button-prev',
    },
});


AOS.init();
