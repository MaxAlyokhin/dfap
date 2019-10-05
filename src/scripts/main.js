$(document).ready(function() {

// Получение длины SVG стрелки
  setInterval(function(){
    // Находим ширину блока
    let description_width = $('.description-header-en').css('width');
    // Находим ширину бокового меню
    let description_width_value = parseInt(description_width.match(/\d+/));
    let arrow_language_width = description_width_value - 67 + 'px';

    if (body_width <= 1279) {
      $('.arrow-ru, .arrow-en, .arrow-navigation-0, .arrow-navigation-1, .arrow-navigation-2').fadeOut(1500, 'easeOutQuart');
    }
    else {
      $('.arrow-ru, .arrow-en, .arrow-navigation-0, .arrow-navigation-1, .arrow-navigation-2').attr('width', arrow_language_width);
    }
    }, 100)

// Переключатель меню
  // Языки
  // Скрываем всё на русском
  $('.arrow-ru').fadeOut(1);
  $('.description-header-ru, .description-first-section-ru, .description-razyob-ru').fadeOut(1);
  // Английский по-умолчанию
  let active_en = 1;
  $('.menu-language-en').click(function() {
    if (!active_en) {
      $('.arrow-ru').fadeOut(3000, 'easeOutQuart');
      $('.arrow-en').fadeIn(3000, 'easeOutQuart');

      $('.menu-language-en-item').addClass('underline');
      $('.menu-language-ru-item').removeClass('underline');

      $('.description-header-ru, .description-first-section-ru, .description-razyob-ru').fadeOut(1500, 'easeOutQuart');
      setTimeout(function(){
        $('.description-header-en, .description-first-section-en, .description-razyob-en').fadeIn(1500, 'easeOutQuart'); 
      }, 1500) 

      active_en = 1;
    }
  })

  $('.menu-language-ru').click(function() {
    if (active_en) {
      $('.arrow-ru').fadeIn(3000, 'easeOutQuart');
      $('.arrow-en').fadeOut(3000, 'easeOutQuart');
      
      $('.menu-language-en-item').removeClass('underline');
      $('.menu-language-ru-item').addClass('underline');

      setTimeout(function(){
        $('.description-header-ru, .description-first-section-ru, .description-razyob-ru').fadeIn(1500, 'easeOutQuart'); 
      }, 1500)
      $('.description-header-en, .description-first-section-en, .description-razyob-en').fadeOut(1500, 'easeOutQuart');  

      active_en = 0;
    }
  })
  // Навигация
  // Скрываем лишние стрелки
  $('.arrow-navigation-1').fadeOut(1);
  $('.arrow-navigation-2').fadeOut(1);

  // Скрываем лишние секции
  $('.section-first-section').fadeOut(1);
  $('.section-razyob').fadeOut(1);

  let active_navigation_0 = 1;
  let active_navigation_1 = 0;
  let active_navigation_2 = 0;

  let body_width = $('body').css('width');
  body_width = parseInt(body_width.match(/\d+/));
  console.log(body_width);

  $('.menu-navigation-0-item').click(function() {
    if (!active_navigation_0) {
      $('.arrow-navigation-0').fadeIn(1500, 'easeOutQuart');
      $('.arrow-navigation-1').fadeOut(1500, 'easeOutQuart');
      $('.arrow-navigation-2').fadeOut(1500, 'easeOutQuart');

      $('.menu-navigation-0-item').addClass('underline');
      $('.menu-navigation-1-item').removeClass('underline');
      $('.menu-navigation-2-item').removeClass('underline');

      $('.section-header').fadeIn(1500, 'easeOutQuart');
      $('.section-first-section').fadeOut(1500, 'easeOutQuart');
      $('.section-razyob').fadeOut(1500, 'easeOutQuart');

      active_navigation_0 = 1;
      active_navigation_1 = 0;
      active_navigation_2 = 0;
    }
  })

  $('.menu-navigation-1-item').click(function() {
    if (!active_navigation_1) {
      $('.arrow-navigation-0').fadeOut(1500, 'easeOutQuart');
      $('.arrow-navigation-1').fadeIn(1500, 'easeOutQuart');
      $('.arrow-navigation-2').fadeOut(1500, 'easeOutQuart');

      $('.menu-navigation-0-item').removeClass('underline');
      $('.menu-navigation-1-item').addClass('underline');
      $('.menu-navigation-2-item').removeClass('underline');

      if (body_width <= 1279) {
        $('.section-header').fadeOut(1500, 'easeOutQuart');
      }
      $('.section-first-section').fadeIn(1500, 'easeOutQuart');
      $('.section-razyob').fadeOut(1500, 'easeOutQuart');

      active_navigation_0 = 0;
      active_navigation_1 = 1;
      active_navigation_2 = 0;
    }
  })

  $('.menu-navigation-2-item').click(function() {
    if (!active_navigation_2) {
      $('.arrow-navigation-0').fadeOut(1500, 'easeOutQuart');
      $('.arrow-navigation-1').fadeOut(1500, 'easeOutQuart');
      $('.arrow-navigation-2').fadeIn(1500, 'easeOutQuart');

      $('.menu-navigation-0-item').removeClass('underline');
      $('.menu-navigation-1-item').removeClass('underline');
      $('.menu-navigation-2-item').addClass('underline');

      if (body_width <= 1279) {
        $('.section-header').fadeOut(1500, 'easeOutQuart');
      }
      $('.section-first-section').fadeOut(1500, 'easeOutQuart');
      $('.section-razyob').fadeIn(1500, 'easeOutQuart');

      active_navigation_0 = 0;
      active_navigation_1 = 0;
      active_navigation_2 = 1;
    }
  })

  // Сброс скролла
  $('.menu').click(function () { 
    $("html, body").animate({
      scrollTop: 0
    }, 1500, 'easeInOutCubic');
    return false;
  }); 
  
})
