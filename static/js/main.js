/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
    if (window.scrollY > 100) {
        backtotop.classList.add('active')
    } else {
        backtotop.classList.remove('active')
    }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}

/**
 * Preloader
 */
let preloader = select('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
    preloader.remove()
    });
}

/**
 * Hero type effect
 */

/*
const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
    strings: typed_strings,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: false;
    });
} */

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 800,
    typeSpeed: 150,
    smartBackspace: true,
    loop: false,
    onComplete: function () {
    $('.typed-cursor').delay(1500).animate({fontSize: '0px', lineHeight: '0px', opacity:'0' }, 400);
    }
    // onComplete: function(self) { self.cursor.remove() }
});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
    AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
    })
});