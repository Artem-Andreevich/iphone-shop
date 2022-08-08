// Переключение картинок в галерее товара
$("nav").on("click", "a", function () {
   $(this).addClass("current").siblings().removeClass("current")
   $(".photo img").attr("src", $(this).prop("href"))
   return false;
});
$(".color").on("click", "img", function () {
	var myimg = $(this).attr("src");
	$(".photo img").attr("src", myimg);
});
$(".nav-link").on("click",  function () {
	var am = $(this).attr("href");
	var mainimg = $(am).find(".color.active img").attr("src");
	$(".photo img").attr("src", mainimg);
});

$(".collap-btn").on("click",  function () {
	$(this).toggleClass("collap-active");
});
// Плавная прокрутка до якоря.
$(function(){
        $(".color a[href^='#'], .product-top a[href^='#'], .top-nav-link a[href^='#']").click(function(){
                var _href = $(this).attr("href")
                $("html, body").animate({scrollTop: $(_href).offset().top-10});
        });
});

$(function(){
$('.main-nav').click(function(){$('html,body').animate({scrollTop:$('.stopblock').offset().top-10}, 200);});
});

for (var i = 0; i < document.form.length; i++) {
    document.form[i].check[0].checked = true;
    document.form[i].price.value = document.form[i].check[0].value;
    document.form[i].onclick = function(e) {
        var target = e && e.target || event.srcElement;
        if (target.name != 'check') return;
        this.price.value = target.value;
    }
};


$('input:checkbox').click(function(){
  if ($(this).is(':checked')) {
    $(this).parent().addClass('active');
  } else {
    $(this).parent().removeClass('active');
  }
});

// Слайдер на главной странице
$(document).ready(function() {
            $('.popular-item').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:0, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                autoplay:false, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    900:{
                        items:3
                    },
                    1150:{
                       items:4
                   }
                }
            });
        });
$(document).ready(function() {
            $('.slider-top').owlCarousel({
                loop:true, //Зацикливаем слайдер
                items:1,
                margin:0, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                dots:true,
                autoplay:false, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:5000, //Время смены слайда
            });
        });


// Переключения слайдера в карточке
function OneSlider (arg1, arg2, arg3) {
	$(document).ready(function(){
		var action = false, clicked = false;
		var Owl = {

			init: function() {
				Owl.carousel();
			},

			carousel: function() {
				var owl;
				$(document).ready(function() {

					owl = $(arg1).owlCarousel({
						animateOut: false,
						items 	 : 1,
						mouseDrag: false,
						touchDrag: false,
						center	   : true,
						nav        : false,
						dots       : true,
						loop       : false,
						margin     : 10,
						dotsContainer: arg2
					});

					$(arg3).on('click', 'li', function(e) {
						owl.trigger('to.owl.carousel', [$(this).index(), 10]);
					});
				});
			}
		};

		$(document).ready(function() {
			Owl.init();
		});
	});
}

let a = '.owlExample5'
let b = '.dots_color5'
let c = '.bookmarks5'

OneSlider(a, b, c)

const btnSlider = document.querySelectorAll('a.nav-link')

btnSlider.forEach( (item, i ) => {
	item.addEventListener("click", () => {
		a = a.slice(0, 11) + i;
		b = b.slice(0, 11) + i;
		c = c.slice(0, 10) + i;
		OneSlider(a, b, c)
	})

})












