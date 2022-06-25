$(function(){

    $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let blockID = $(this).data('scroll');
    let elementOffset = $(blockID).offset().top;

    $('.header').removeClass('fixed');
    $('body').removeClass('lock');

    $('.nav__link').removeClass('active');
    $(this).addClass('active');

    $("html, body").animate({
        scrollTop: elementOffset -50
    }, 700);

    $('.burger,.header-nav,.header__block').removeClass('active');
        $('body').removeClass('lock');

});

    let header = $("#header");
    let intro =$("#intro");
    let introH = intro.innerHeight();
    let scrollPos= $(window).scrollTop();

     checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
         if(scrollPos > introH) {
            header.addClass("fixed");

        } else {
            header.removeClass("fixed");
        }
    }

    $('.burger').click(function(event){
        event.preventDefault();

        $('.burger,.header-nav,.header__block').toggleClass('active');
        $('body').toggleClass('lock');
    })

});
