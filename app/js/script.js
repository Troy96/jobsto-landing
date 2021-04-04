const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
const mobileAbout = document.querySelector('#about');



btnHamburger.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        removeMobileNavStyles();
    } else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
    }
})

mobileAbout.addEventListener('click', function () {
    if (header.classList.contains('open')) {
        removeMobileNavStyles();
        document.querySelector('#feature').scrollIntoView();
    }
})

window.addEventListener('resize', function (event) {
    if (window.innerWidth >= 1024 && header.classList.contains('open')) {
        removeMobileNavStyles();
    }
})

const removeMobileNavStyles = () => {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function (element) {
        element.classList.remove('fade-in')
        element.classList.add('fade-out')
    })
    overlay.classList.remove('fade-in')
    overlay.classList.add('fade-out')
}

