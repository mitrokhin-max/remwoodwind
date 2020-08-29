$(document).ready(function() {
    /* Меню бургер */
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
    
    /* Скролл к блоку */
    $("#header__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    /* Аккордеон */
    $('.faq__question').click(function(event) {
        if ($('.faq__body').hasClass('akkordeon')) {
            $('.faq__question').not($(this)).removeClass('active');
            $('.faq__answer').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    /* Маска для телефона */
    $("#phone_1").mask("+7 (999) 999-99-99");
    $("#phone_2").mask("+7 (999) 999-99-99");
});

/* слайдер Цены на москитные сетки */
var kinds = new Swiper('.kinds__slider', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 15,
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

/* слайдер Примеры работ */
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

/* слайдер Цены на ремонт */
var kinds = new Swiper('.repair__slider', {
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

/* Активация АОС */
AOS.init();