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


$(function () {
  const $burgerBtn = $('.js-burger-btn');
  const $burgerDropdown = $('.js-burger-dropdown');
  const $burgerLink = $('.js-burger-link');
  const $burgerFilters = $('.js-burger-filters');

  $burgerBtn.on('click', toggleBurgerDropdown);
  $burgerLink.on('click', toggleBurgerFilters);

  function toggleBurgerDropdown() {
    $(this).toggleClass('is-active');
    $burgerDropdown.slideToggle();
  }

  function toggleBurgerFilters() {
    $(this).toggleClass('is-active');
    $(this).parent().toggleClass('is-active');
    $burgerFilters.slideToggle();
  }
});
