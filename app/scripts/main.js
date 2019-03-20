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

$(function () {
  const $widgetButton = $('.js-widget-button');
  const $widgetMenu = $('.js-widget-menu');

  $widgetButton.on('click', toggleWidgetMenu);

  function toggleWidgetMenu() {
    $widgetMenu.toggleClass('is-active')
  }
});
