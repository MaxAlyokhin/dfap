$(document).ready(function() {

// Получение длины SVG стрелки
  setTimeout(function(){
  // Находим ширину блока
  let description_width = $('.description-header-en').css('width');
  console.log(description_width);
  // Находим ширину бокового меню
  // let menu_language_en_item = $('.menu-language-en-item').css('width');
  // let menu_navigation_item = $('.menu-navigation-item').css('width');
  // console.log(menu_language_en_item);
  // console.log(menu_navigation_item);
  // // Убираем в полученных строках 'px'
  // let description_width_value = parseInt(description_width.match(/\d+/))
  // let menu_language_en_item_value = parseInt(menu_language_en_item.match(/\d+/))
  // let menu_navigation_item_value = parseInt(menu_navigation_item.match(/\d+/))
  // // Всё отнимаем, включая боковой паддинг и прибавляем строку 'px'
  // let arrow_language_width = description_width_value - menu_language_en_item_value - 45 + 'px';
  // let arrow_navigation_width = description_width_value - menu_navigation_item_value - 45 + 'px';
  // console.log(arrow_language_width);
  // console.log(arrow_navigation_width);
  // Добавляем к аттрибуту нашей стрелки
  // $('.arrow-language').attr('width', arrow_language_width);
  // $('.arrow-navigation').attr('width', arrow_navigation_width);

  let description_width_value = parseInt(description_width.match(/\d+/))
  let arrow_language_width = description_width_value - 67 + 'px'
  $('.arrow-ru, .arrow-en, .arrow-navigation-0, .arrow-navigation-1, .arrow-navigation-2').attr('width', arrow_language_width);
  }, 100)
// Переключатель меню
  // Языки
  // Скрываем всё на русском
  $('.arrow-ru').fadeOut(1);
  $('.description-header-ru, .description-first-section-ru, .description-razyob-ru').fadeOut(1);

  let active_en = 1;
  $('.menu-language-en').click(function() {
    if (!active_en) {
      $('.arrow-ru').fadeOut(3000, 'easeOutQuart');
      $('.arrow-en').fadeIn(3000, 'easeOutQuart');

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

  $('.menu-navigation-0-item').click(function() {
    if (!active_navigation_0) {
      $('.arrow-navigation-0').fadeIn(1500, 'easeOutQuart');
      $('.arrow-navigation-1').fadeOut(1500, 'easeOutQuart');
      $('.arrow-navigation-2').fadeOut(1500, 'easeOutQuart');

      // $('.section-header').fadeIn(1500, 'easeOutQuart');
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

      // $('.section-header').fadeOut(1500, 'easeOutQuart');
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

      // $('.section-header').fadeOut(1500, 'easeOutQuart');
      $('.section-first-section').fadeOut(1500, 'easeOutQuart');
      $('.section-razyob').fadeIn(1500, 'easeOutQuart');

      active_navigation_0 = 0;
      active_navigation_1 = 0;
      active_navigation_2 = 1;
    }
  })

  


  
  
})

// click = 1;

// function lang1() {
//   if (click) {

//     $('table#en').transition({ opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     $('table#ru').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

//     $('.en').transition({ opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     $('.ru').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     click = 0;

//   }

//   else {

//     $('table#en').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     $('table#ru').transition({ opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');

//     $('.en').transition({ opacity: 1 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     $('.ru').transition({ opacity: 0 }, 500, 'cubic-bezier(0.6, 0.04, 0.98, 0.335)');
//     click = 1;
//   }
// }