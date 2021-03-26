$(document).ready(function() {
    sliderBanner();
    headerFixed();
    sliderOurCustomer();
    slidetoggle_header();
})

function slidetoggle_header() {

    $(".menu-mobile").click(function() {
        $(".header-main--nav-bar").toggleClass("active");
        $("body").toggleClass("show-scroll");
    });
    $(".header-nav__close").click(function() {
        $(".header-main--nav-bar").removeClass("active");
        $("body").removeClass("show-scroll");
    });
    $(document).mouseup(function(e) {
        if (!$(".menu-mobile, .header-main--nav-bar.active").is(e.target) &&
            $(".menu-mobile, .header-main--nav-bar.active").has(e.target).length === 0
        ) {
            $(".header-main--nav-bar").removeClass("active");
            $("body").removeClass("show-scroll");
        }
    });
}

function headerFixed() {
    $(window).scroll(function() {
        if ($("#header").offset().top > 100) {
            $("#header").addClass("nav-collapse");
        } else {
            $("#header").removeClass("nav-collapse");
        }
    });
}

function sliderBanner() {
    $('.slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        arrows: false,
        useTransform: true,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        responsive: [{
            breakpoint: 767,
            settings: {

                dots: true

            }
        }]
    });
}

function sliderOurCustomer() {
    $('.our-customer--slide').slick({

        autoplay: false,
        speed: 1500,
        autoplaySpeed: 3000,
        arrows: false,
        useTransform: true,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        responsive: [{
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                    arrows: false,
                    autoplay: true
                }
            }
        ]

    });
}