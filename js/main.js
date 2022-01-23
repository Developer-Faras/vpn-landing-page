$(document).ready(function(){

    // Testimonials Slider

    let sliderWraper = $("#slider");
    let slider = sliderWraper.find(".owl-carousel");
    let navDotContainer = sliderWraper.find("#nav-dot-container");
    let navContainer = navDotContainer.find('.nav-container');
    let dotContainer = navDotContainer.find('.dot-container');

    slider.owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: true,
        navContainer: navContainer,
        dotsContainer: dotContainer,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            600: {
                items: 1
            },
            550:{
                items: 1
            },
            400:{
                items: 1
            },
            300:{
                items: 1
            }
        }
    });

    // Footer List Title Click Disable
    $("#main-footer").find(".list-title").click(function(e){
        e.preventDefault();
    });

    // Nav Toggler
    const navToggler = $("#mobile-menu-toggler");
    const mobileMenu = $("#mobile-menu");

    $(navToggler).click(function(){
        $(mobileMenu).toggleClass('show');
        $(this).toggleClass('fa-bars fa-times');
    });

    // Header Active On Scroll
    const mainHeader = $("#main-header");

    $(window).scroll(function(){
        if($(this).scrollTop() > 70){
            mainHeader.addClass("active");
        }else{
            mainHeader.removeClass("active");
        }
    });
});

// Jquery Code
