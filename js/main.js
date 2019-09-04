let slideIndex = 1; //Порядковый номер слай шоу
showSlides(slideIndex);

// Следующие / предыдущие элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Миниатюра изображения
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
      slides = document.getElementsByClassName("mySlides"); // слайды
      dots = document.getElementsByClassName("dot"); // номер круги с низу

  if (n > slides.length) {slideIndex = 1} // plus слайд
  if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; // скрываются придыдущии 
}

for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//images

let magnifier = document.getElementsByClassName("lupa");
    close = document.getElementsByClassName("close"); // html элементы
    img = document.getElementsByClassName("img-with1");

for (let i = 0; i < magnifier.length; i++) {

		magnifier[i].onclick = function() { // открывать фото
			img[i].style.display = "block";
		}

		close[i].onclick = function() { //скрывать фото
			img[i].style.display = "none";
		}

}

/*
 Jqure
*/

$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх"><img src="img/up.png" alt="" width="50"/></a>');
});
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $("#go-top").scrollToTop();
});

// Селекторы кэша
let lastId,
    topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // Все элементы списка
    menuItems = topMenu.find("a"),
    // соответствующие пунктам меню
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Привязать обработчик кликов к пунктам меню
// так что мы можем получить необычную анимацию прокрутки
menuItems.click(function(e){
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Привязать к прокрутке
$(window).scroll(function(){
   // Получить позицию прокрутки контейнера
   let fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Получить идентификатор текущего элемента прокрутки
   let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Получить идентификатор текущего элемента
   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Установить / удалить активный класс
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

// Селекторы кэша
let lastId1,
    topMenu1 = $(".nav1"),
    topMenuHeight1 = topMenu1.outerHeight()+15,
     // Все элементы списка
    menuItems1 = topMenu1.find("a"),
    // соответствующие пунктам меню
    scrollItems1 = menuItems1.map(function(){
      let item1 = $($(this).attr("href"));
      if (item1.length) { return item1; }
    });

// Привязать обработчик кликов к пунктам меню
// так что мы можем получить необычную анимацию прокрутки
menuItems1.click(function(e){
  let href1 = $(this).attr("href"),
      offsetTop1 = href1 === "#" ? 0 : $(href1).offset().top-topMenuHeight1+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop1
  }, 300);
  e.preventDefault();
});

// Привязать к прокрутке
$(window).scroll(function(){
   // Получить позицию прокрутки контейнера
   let fromTop1 = $(this).scrollTop()+topMenuHeight1;
   
   // Получить идентификатор текущего элемента прокрутки
   let cur1 = scrollItems1.map(function(){
     if ($(this).offset().top < fromTop1)
       return this;
   });
   // Получить идентификатор текущего элемента
   cur1 = cur1[cur1.length-1];
   let id = cur1 && cur1.length ? cur1[0].id : "";
   
   if (lastId1 !== id) {
       lastId1 = id;
       // Установить / удалить активный класс
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});