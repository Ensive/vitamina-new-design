//lang
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
    if ($(document).has(e.target).length === 0) {
      $langMenu.removeClass('is-active');
    }
  }
});

//slider
$(function () {
  $('.js-slides-count').text($('.js-slide').length);

  if ($('.js-slider').length) {
    $('.js-slider').slick({
      autoplay: 5000,
      pauseOnHover: true,
      prevArrow: '<button class="Slider__arrow Slider__arrow--prev"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 24L12 16L20 8" stroke="black" stroke-width="2"/></svg></button>',
      nextArrow: '<button class="Slider__arrow Slider__arrow--next"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L20 16L12 24" stroke="black" stroke-width="2"/></svg></button>',
    });

    $('.js-slider').on('afterChange', changeIndex);

    function changeIndex(slick, slickCurrentSlide) {
      $('.js-current-slide').text(slickCurrentSlide.currentSlide + 1);
    }
  }
});

//burger and filters
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
    $burgerLink.removeClass('is-active');
    $burgerDropdown.slideUp();
    $burgerBtn.removeClass('is-active');
    $burgerFilters.slideUp();
    $(this).parents().removeClass('is-active');
  }

  function resetFilters() {
    $filter.removeClass('is-active');
  }
});

//widget
if ($(window).width() < 768) {
  $('.js-widget-button').on('click', closeMenu);

  function closeMenu() {
    $('.js-widget-menu').stop().slideToggle();
  }
}

//modal
$(function () {
  const $modalTrigger = $('.js-modal-success');
  const $modal = $('.js-modal');
  const $modalClose = $('.js-close-modal');

  $modalTrigger.on('click', showModal);
  $modalClose.on('click', hideModal);

  function showModal(e) {
    e.preventDefault();
    $modal.fadeIn();
  }

  function hideModal() {
    $modal.fadeOut();
  }
});
