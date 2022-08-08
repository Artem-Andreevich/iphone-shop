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

function popup() {
	$("#parent_popup").fadeIn(200);
	$("#popup_send").slideDown(700);
}
function popup2() {
	$("#parent_popup").fadeIn(200);
	$("#popup_send2").slideDown(700);
}
function close_all() {
	$("#parent_popup").fadeOut(700);
	$("#popup_send").slideUp(700);
	$("#popup_send2").slideUp(700);
	$("#transc").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi' class='usphone' placeholder='+7 ( ___ ) ___ - __ - __'></div>\
				<div class='send_inu'><span onclick='sendudatas();'>Консультация</span></div></div>");
	$("#transc2").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi2' class='usphone' placeholder='+7-917-422-22-24'></div>\
				<div class='send_inu'><span onclick='sendudatas(1);'>Узнать стоимость</span></div></div>");
	$("#transc3").html(
				"<div class='input_cont'><div class='us_n'>Напишите Ваш телефон:</div>\
				<div class='inputsu'><input type='text' id='us_phi3' class='usphone' placeholder='+7-917-422-22-24'></div>\
				<div class='send_inu'><span onclick='sendudatas(2);'>Узнать стоимость</span></div></div>");

}

function sendudatas(indez) {
	if(indez == 1) {
		var phone = $("#us_phi2").val();
		var name = "Узнать стоимость"
	}
	else if(indez == 2) {
		var phone = $("#us_phi3").val();
		var name = "Скидка"
	}
	else {
		var phone = $("#us_phi").val();
		var name = "Срочный ремонт"
	}

	if(phone.length != 0) {
		$.post("handlers.php", {us_phone: phone, us_name: name}, function(data) {
			if(data == 7) {
				if(indez == 1) $("#transc2").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
                                else if(indez == 2) $("#transc3").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
				else $("#transc").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");

			}
			else {
				if(indez == 1) $("#transc2").html("<div class='tr_cont_err'>Возникла ошибка, повторите операцию позже</div>");
                                else if(indez == 2) $("#transc3").html("<div class='tr_cont'>Спасибо за Вашу заявку!</div>");
				else $("#transc").html("<div class='tr_cont_err'>Возникла ошибка, повторите операцию позже</div>");

			}

		});
	}
	else {
		if(phone.length == 0) {
			if(indez == 1) {
				$("#us_phi2").css({"border":"1px solid #F96767"});
				$("#us_phi2").val("Введите ваш телефон");
			}
			if(indez == 2) {
				$("#us_phi3").css({"border":"1px solid #F96767"});
				$("#us_phi3").val("Введите ваш телефон");
			}
			else {
				$("#us_phi").css({"border":"1px solid #F96767"});
				$("#us_phi").val("Введите ваш телефон");
			}

		}
	
	}
}








// const param = ['.owlExample', '.dots_color','.bookmarks'];






// 	slideItems.addEventListener('click', function(item){
// 		let param = param2.map(function (item) {
// 		item + 6
// 		})
// 	console.log (item)

// 		return
// 	})

// console.log (param)

// slideItems.addEventListener('click', function(){
// 	param.forEach((name, index) => param[index] = `${name}5`)
// }) 

// console.log (param)
// let slideItems = document.querySelectorAll('.nav-item > .nav-link');
// slideItems.forEach(function(item, i) {
// item.addEventListener("click", function(){
// 		if ( i == 0 ){
// 			param.push('.owlExample6')
// 		} if ( i == 1 ) {
// 			return i
// 		}
// 		});
// 	});

// console.log(param)

// const param = ['.owlExample', '.dots_color','.bookmarks'];
// param.forEach(function(name, index) {
// 	param[index] = `${name}` + num()
// 	});

// let slideItems = document.querySelectorAll('.nav-item > .nav-link');
// slideItems.forEach(function(item, i) {
// 	item.addEventListener("click", function(){
// 	 let num = 5
// 	 return num
// 	 console.log (num)
// 	});
// });
// console.log(param)



// let num = ['.owlExample5', '.dots_color5', '.bookmarks5'];
// let slideItems = document.querySelectorAll('.nav-item > .nav-link');
// slideItems.forEach(function(item, i) {
// 	item.addEventListener("click", function(){
// 		let lastElemE = num[0].charAt(num[0].length-1);
// 		let lastElemD = num[1].charAt(num[1].length-1);
// 		let lastElemB = num[2].charAt(num[2].length-1);
// 		lastElem2 = Number(lastElemE) + i;
// 		lastElem3 = Number(lastElemD) + i;
// 		lastElem4 = Number(lastElemB) + i;

// 		num[0] = ('.owlExample' + lastElem2)
// 		num[1] = ('.dots_color' + lastElem3)
// 		num[2] = ('.bookmarks' + lastElem4)
// 		num = [num[0], num[1], num[2]]
// 		return num		
// 	});
// });
		
// console.log (num)




// let param = rety

// function rety(num) {
// 	let slideItems = document.querySelector("a[href='#iphone_x']").addEventListener("click", function (e) {
// 	return num = '.owlExample6'
// 	});
// }


// param.forEach(function(name, index) {
// 	let slideItems = document.querySelector("a[href='#iphone_x']").addEventListener("click", function(e) {
// 	param[index] = `${name}` + 6
	
//  });

// });

// console.log (param)

// function myFunc() {
// 	param = '.owlExample6';
// }
// let param = '.owlExample5';
// let slideItems = document.querySelector("a[href='#iphone_x']")


// console.log (param)

// let param = '.owlExample5';

// function param2() {
//   param = '.owlExample6';
// }
// param2();

// console.log (param)


// let slideItems = document.querySelector(".modelTog.active").dataset.about




// let slideItems = document.querySelector("a[href='#iphone_x']");
// slideItems.onclick = function(){
// 	a.clear();
// 	a.add('.owlExample6')
// 	a.add('.dots_color6')
// 	a.add('.bookmarks6')
// 	return param
// }

// let a = new Set(['.owlExample5', '.dots_color5', '.bookmarks5']);

// let param = a.values();
// 	console.log(a)


// console.log(param.next().value)
// console.log(param.next().value)
// console.log(param.next().value)

// let slideItems = document.querySelector("a[href='#iphone_x']");
// const param1 = () => {
// 	let param1 = '.owlExample5';
	

// 	// slideItem.forEach(function(i){
// 	// 	console.log (i.getAttribute('about'))
// 	// });

// }

// let slideItem = document.querySelectorAll(".modelTog");

// slideItem.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		let paramm = item.getAttribute("data-about");
// 		console.log (paramm)

// 		return paramm
// 	}) 
// })


// const param1 = () => {
// 	slideItem.forEach(function(item){
// 	return item.addEventListener("click", function(){
// 		let paramm = item.getAttribute("data-about");
// 	}) 
// 		console.log (paramm)
// })
// }




// const param2 = () => {
// 	let param2 = function(){
// 		let slideItem = document.querySelectorAll(".modelTog");
// 		slideItem.forEach(function(item){
// 			item.addEventListener("click", function(){
// 				let paramm = item.getAttribute("data-about");
// 			}) 
// 		})
// 	}
// 	return param2
// }
// // console.log (param2())
// const param3 = () => {
// 	let param3 = '.bookmarks5';
// 	return param3
}

//
// let slideItem = document.querySelectorAll(".modelTog");

// let param2 = () => {
//  slideItem.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		let paramm = item.getAttribute("data-about");
// 		console.log(paramm)

// 	}) 
// })
// }
// param2()

// let param2 = function( paramm ){
// 	let getParamm = function(){
// 		return '.owlExample5'
// 	}
// 	return getParamm
// }
//
// myParam = param2()
// console.log (myParam())
// 	['.owlExample5', '.dots_color5', '.bookmarks5']);


$(document).ready(function(){
var action = false, clicked = false;
var Owl = {

    init: function() {
      Owl.carousel();
    },

	carousel: function() {
		var owl;
		$(document).ready(function() {
			
			owl = $( .owlExample ).owlCarousel({
				animateOut: false,
				items 	 : 1,
				mouseDrag: false,
				touchDrag: false,
				center	   : true, 
				nav        : false,
				dots       : true,
				loop       : false,
				margin     : 10,
				dotsContainer: .bookmarks;
			});

			 $( .dots_color ).on('click', 'li', function(e) {
			    owl.trigger('to.owl.carousel', [$(this).index(), 10]);
			  });
		});
	}
};

$(document).ready(function() {
  Owl.init();
});
});
