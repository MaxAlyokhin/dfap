$(document).ready(function() {

  $('.section-header');
  $('.section-first-section');
  $('.section-razyob');

// Получение длины SVG стрелки

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
  $('.arrow').attr('width', arrow_language_width);
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