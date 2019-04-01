$(function () {
  const $langBtn = $('.js-language-btn');
  const $langMenu = $('.js-language-menu');

  $langBtn.on('click', toggleLangMenu);
  $(document).on('mouseup', handleDocumentClick);

  function toggleLangMenu(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $langMenu.slideToggle();
  }

  function handleDocumentClick(e) {
    console.log('s')
    if ($(document).has(e.target).length === 0) {
      $langMenu.removeClass('is-active');
    }
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
  const $filter = $('.js-filter');
  const $burgerFilters = $('.js-burger-filters');
  const $resetFilterBtn = $('.js-filter-reset');

  $burgerBtn.on('click', toggleBurgerDropdown);
  $burgerLink.on('click', toggleBurgerFilters);
  $resetFilterBtn.on('click', resetFilters);
  $filter.on('click', addFilter);

  function toggleBurgerDropdown() {
    $(this).toggleClass('is-active');
    $burgerDropdown.slideToggle()
  }

  function toggleBurgerFilters() {
    $burgerFilters.slideUp();
    $burgerLink.removeClass('is-active');
    $burgerLink.parent().removeClass('is-active');
    $(this).toggleClass('is-active');
    $(this).parent().toggleClass('is-active');
    $(this).next().stop().slideToggle();
  }

  function addFilter() {
    $filter.removeClass('is-active');
    $(this).toggleClass('is-active');

    $burgerDropdown.slideUp();
    $burgerBtn.removeClass('is-active');
  }

  function resetFilters() {
    $filter.removeClass('is-active');
  }
});

if ($(window).width() < 768) {
  $('.js-widget-button').on('click', closeMenu);

  function closeMenu() {
    $('.js-widget-menu').stop().slideToggle();
  }
}
