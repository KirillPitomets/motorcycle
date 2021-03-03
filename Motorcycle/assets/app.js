var scrolled;
var timer;

document.getElementById('btn__scroll').onclick = function() {
    scrolled = window.pageYOffset;
    //window.scrollTo(0,0);
    scrollToTop();
}; 

function scrollToTop () {
    if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 220;
        timer = setTimeout(scrollToTop, 20); 
    }
    else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
    } 
}   

console.log(scrolled)

const BtnScroll = document.querySelector('#btn__scroll')

window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
   
    if(scrollPos > 700) {
        BtnScroll.classList.add('btn__scroll--opacity');
    } else {
        BtnScroll.classList.remove('btn__scroll--opacity');
    }
    
});

// JQuery

$(function() {
    var header = $('#header'),
        headerLogo = $('#header__logo')
        introH = $('#intro').innerHeight();
        scrollOffset = $(window).scrollTop();

        /* Fixed Header */
    // checkScroll(scrollOffset)

    // $(window).on('scroll', function() {

    //     scrollOffset = $(this).scrollTop();

    //     checkScroll(scrollOffset);

    // })

    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
    
        if(scrollOffset >= introH) {
            header.addClass('fixed');
            headerLogo.addClass('active')
    
        } else {
            header.removeClass('fixed');
            headerLogo.removeClass('active');
            $('#nav').removeClass('active');
        }
    }

    /* Smooth scroll */
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        });



    })



    /* nav--toggle */

    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('active');
        $('#nav-toggle').toggleClass('active');
        $('#header').toggleClass('active');
    });





});








