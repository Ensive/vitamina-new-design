$(function () {
  const $langBtn = $('.js-language-btn');
  const $langMenu = $('.js-language-menu');

  $langBtn.on('click', toggleLangMenu);

  function toggleLangMenu(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $langMenu.slideToggle();
  }

  $('.js-slides-count').text($('.js-slide').length);

  $('.js-slider').slick({
    autoplay: 5000,
    pauseOnHover: true,
    prevArrow: '<button class="Slider__arrow Slider__arrow--prev"></button>',
    nextArrow: '<button class="Slider__arrow Slider__arrow--next"></button>',
    });

  $('.js-slider').on('afterChange', changeIndex);

  function changeIndex(slick, slickCurrentSlide) {
    $('.js-current-slide').text(slickCurrentSlide.currentSlide + 1);
  }
});


