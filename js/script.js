$(document).ready(function () {

    $(window).on("load", function () {
        $(".header__link,.header__logo").mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: "swing",
            offset: 58
        });
    });

    $('.header__burger').click(function () {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__link').click(function () {
        $('.header__burger').removeClass('active');
        $('.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.clients__body').slick({
        dots: true,
        arrows: false,
        speed: 1000
    });

});

let tabsItem = document.querySelectorAll('._tabs-item');
let tabsBlock = document.querySelectorAll('._tabs-block');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        tabsItem.forEach(button => {
            button.classList.remove('active');
        });
        tabsBlock.forEach(button => {
            button.classList.remove('active');
        });
        tabsItem[i].classList.add('active');
        tabsBlock[i].classList.add('active');
    });
}


