/*открываю попап*/	
$(document).ready(function() {
$('#carouselhAuto').jsCarousel({
onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
autoscroll: false,   //вкл/выкл автопрокрутку
itemstodisplay: 3,  //сколько слайдов отображать
scrollspeed: 1500,  //время эффекта прокрутки
delay: 3000,        //время прокрутки слайдов
orientation: 'v',   //горизонтальная h или вертикальная v карусель
circular: false     //?
});
});
$(document).ready(function() {
$('#carouselhAuto_1').jsCarousel({
onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
autoscroll: false,   //вкл/выкл автопрокрутку
itemstodisplay: 3,  //сколько слайдов отображать
scrollspeed: 1500,  //время эффекта прокрутки
delay: 3000,        //время прокрутки слайдов
orientation: 'v',   //горизонтальная h или вертикальная v карусель
circular: false     //?
});
});
$(document).ready(function() {
$('#carouselhAuto_2').jsCarousel({
onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
autoscroll: false,   //вкл/выкл автопрокрутку
itemstodisplay: 3,  //сколько слайдов отображать
scrollspeed: 1500,  //время эффекта прокрутки
delay: 3000,        //время прокрутки слайдов
orientation: 'v',   //горизонтальная h или вертикальная v карусель
circular: false     //?
});
});

$(document).ready(function() {
$('#carouselhAuto_3').jsCarousel({
onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
autoscroll: false,   //вкл/выкл автопрокрутку
itemstodisplay: 3,  //сколько слайдов отображать
scrollspeed: 1500,  //время эффекта прокрутки
delay: 3000,        //время прокрутки слайдов
orientation: 'h',   //горизонтальная h или вертикальная v карусель
circular: false     //?
});
});
	
$(document).ready(function popon() { 
	$('a#start').click(function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(250,function(){
				$('#popUp') 
					.css('display', 'block') 
					.animate({opacity:1,top:'55%'},490);
		
		});
	});
	
/*по нажатию на крестик закрываю окно*/
	$('#close, #overlay').click( function popoff(){ 
		$('#popUp')
			.animate({opacity: 0, top: '35%'}, 490, 
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(220); 
				}
			);
	});
});
/*Форма*/
function validate(forma)
	{	//очистка сообщений об ошибке
		var mySpan = forma.getElementsByTagName("span");
		for (var i=mySpan.length-1; i>=0; i--)	
		{
			mySpan[i].remove();
		}
		//проверка корректности заполнения всех обязательных полей
		var name = isFullText(forma.name);
		var family = isFullText(forma.family);
		var login = isCorrectLogin(forma.login);
		var password = isCorrectPass(forma.password);
		var password2 = isCorrectPass2(forma.password2);
		var email = isCorrectMail(forma.mail);
		var tel = isCorrectTel(forma.telephon);
		//если все правильнольно, форма отправляется на сервер
		if (name && family  && login && password && email && tel) 
		{ 
			alert("Спасибо за регистрацию!");
		}
		return name && family  && login && password && email && tel;
		
	}
//проверка заполнения поля Имя
	function isFullText(text){
		if (text.value.trim().length == 0)
		{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Введите имя!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
			text.style.border = "solid 1px green";
			return true;
	}
	//проверка заполнения поля Логин - ограничения на ввод: только лат. буквы и цифры
	function isCorrectLogin(text){
	if (!text.value.match(/^[0-9_a-z-]+$/i)) 
	{text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Введите логин (только цифры и англ. буквы)!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
	}
	//миним длина поля - 3 символа
	else if (text.value.trim().length < 3) 
	{text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Введите логин - минимум 3 символа!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
	}
		
			text.style.border = "solid 1px green";
			return true;
	}
	
	//проверка заполнения поля Пароль
function isCorrectPass(text){
	text.value = text.value.replace(/\s/g, "");
	//миним длина поля - 6 символов
	if (text.value.trim().length<6)
		{	
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Введите пароль - минимум 6 символов!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
	//проверка правильности ввода через регулярное выражение
	else  if (!text.value.match(/^[\d\w]+$/i))
		{
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Введите пароль - только цифры и англ. буквы!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
		text.style.border = "solid 1px green";
			return true;
	}
	//проверка заполнения поля Повторите Пароль
	function isCorrectPass2(text) {
	//проверка идентичности полей с именем password и password2
	if(document.forms.RegisrForm.elements.password.value != document.forms.RegisrForm.elements.password2.value) 
	{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Пароли не совпадают!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
	}
	
		text.style.border = "solid 1px green";
		return true;
		
	}
		
	//проверка заполнения поля емейла
		function isCorrectMail(text){
	//убираем пробелы
	text.value = text.value.replace(/\s/g, "");
	//проверка правильности ввода через регулярное выражение
	if (!text.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i))
		{
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Некорректный ввод!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
		text.style.border = "solid 1px green";
			return true;
	}
//проверка заполнения поля телефон
	function isCorrectTel(text){
	//убираем пробелы
	text.value = text.value.replace(/\s/g, "");
	//проверка правильности ввода через регулярное выражение
	if (!text.value.match(/^\d[\d\(\)\ -]{4,14}\d$/)) //В этом правиле указываем что первый и последний знак должен быть обязательно цифрой — «\d», а в середине разрешаем использовать знаки скобок, пробел и знак дефиса — «[\d\(\)\ -]{4,14}», от 4 до 14 символов. Так как скобки и пробел являются зарезервированными элементами регулярных выражений, перед ними ставим обратный слеш.
		{
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<br><span style=\"font-size:9px; padding-left:5px; color: red;\">Некорректный ввод!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
		text.style.border = "solid 1px green";
			return true;
	}
//проверка ввода email	
	function validateNew(forma)
	{	//очистка сообщений об ошибке
		var mySpan = forma.getElementsByTagName("span");
		for (var i=mySpan.length-1; i>=0; i--)	
		{
			mySpan[i].remove();
		}
		//проверка корректности заполнения всех обязательных полей
		var email = isCorrectNewMail(forma.Newmail);
		//если все правильнольно, форма отправляется на сервер
		if (email) 
		{ 
		alert("Вам отправлено письмо с регистрационными данными!");
		}
		return email;
		
	}
	
		//проверка заполнения поля емейла
		function isCorrectNewMail(text){
	//убираем пробелы
	text.value = text.value.replace(/\s/g, "");
	//проверка правильности ввода через регулярное выражение
	if (!text.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i))
		{
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "<span style=\"font-size:9px; padding-left:5px; color: red;\">Некорректный ввод!</span>";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
		text.style.border = "solid 1px green";
			return true;
	}
	
	
//Выбор меню
function changeBg_ice(action){
        switch (action){
          case 0: {  
		   //Клик мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1.jpg)';
            break;
           }
          case 1: {  
		  // Наведение мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1.jpg)';
             break;
           }
           }
       }

function changeBg_cake(action){
        switch (action){
          case 0: {  
		   //Клик мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1.jpg)';
             break;
           }
          case 1: {  
		  // Наведение мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1_torty.jpg)';
			 break;
           }
           }
       }

function changeBg_drink(action){
        switch (action){
          case 0: {  
		   //Клик мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1_drink.jpg)';
            break;
           }
          case 1: {  
		  // Наведение мышью
            document.getElementById('menu_tr').style.backgroundImage = 'url(img/block1_drink.jpg)';
             break;
           }
           }
       }  
function changeBg_0(){  
		  // Без наведения
            document.getElementById('img_drink').style.backgroundImage = 'url(img/drink_1.png)';
             
           }
function changeBg_1(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/orange.png)';
           }
function changeBg_2(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/grape.png)';
           }
function changeBg_3(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/mult.png)';
           }
function changeBg_4(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/coke.png)';
           }
function changeBg_5(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/fanta.png)';
           }
function changeBg_6(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/sprite.png)';
           }
function changeBg_7(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/limon.png)';
           } 
function changeBg_8(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/mineral.png)';
           } 
function changeBg_9(){
		   //Наведение мышью
			document.getElementById('img_drink').style.backgroundImage = 'url(img/mol.png)';
           } 
		   


function add(element){
if (element.parentNode.getElementsByTagName('input')[2].value<10){
    element.parentNode.getElementsByTagName('input')[2].value = parseInt(element.parentNode.getElementsByTagName('input')[2].value) + 1;
	}
}

function remove(element){
if (element.parentNode.getElementsByTagName('input')[2].value>=1){
    element.parentNode.getElementsByTagName('input')[2].value = parseInt(element.parentNode.getElementsByTagName('input')[2].value) - 1;
	}
}

function changeBg_img(){
document.getElementsByClassName('cl').style.display = 'inline-block';
}