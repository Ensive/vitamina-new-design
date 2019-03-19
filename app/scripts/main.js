$(function () {
  const $langBtn = $('.js-language-btn');
  const $langMenu = $('.js-language-menu');

  $langBtn.on('click', toggleLangMenu);

  function toggleLangMenu(e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $langMenu.toggleClass('is-active');
  }
});
