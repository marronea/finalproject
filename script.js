$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("scrolling");
        } else {
            $('.navbar').removeClass("scrolling");
        }
    })
});


var typed = new Typed(".typing", {
    strings: ["Graphic Designer", "Traveler", "Layout Designer", "Photographer", "Cool Dude"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});


$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});
