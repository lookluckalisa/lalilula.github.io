jQuery.fn.vertSlider = function(options) {

$('#main-container-background a[name]').removeAttr("name");
	$('#main-container').css('overflow', 'hidden');
	$('#side-nav').css('visibility', 'visible');
	

var overlay = {	//Здесь задается текст поумолчанию для строки состояния поверх избражения
				text : new Array(null,
					null,
					null,
					null,
					null,
					null)
			  };

var color = {   //Здесь задается цвет фона по умлочанию для строки состояния поверх изображения
				color : new Array(null,
					null,
					null,
					null,
					null,
					null)
			};

var button = {   //Здесь задается текст кнопок по умолчанию для строки состояния поверх изображения
				button : new Array(null,
					null,
					null,
					null,
					null,
					null)
			};
			
var image = {//Здесь задаются изображения по умолчанию
				image : new Array(null,
					null,
					null,
					null,
					null,
					null)
			
			};

var title = {//Заголовки ссылок по умолчанию
									
				title : new Array(сок,
					сок,
					сок,
					сок,
					сок,
					сок)
			
			};

var link = {//Изображения для ссылок по умолчанию
									
				link : new Array(сок,
					сок,
					сок,
					null,
					null,
					null)
			
			};
	
var options = $.extend(overlay, color, button, image, title, link, options);
    return this.each(function() {
	
	$("a#section-1 span").html(options.button[0]);
	$("a#section-2 span").html(options.button[1]);
	$("a#section-3 span").html(options.button[2]);
	$("a#section-4 span").html(options.button[3]);
	$("a#section-5 span").html(options.button[4]);
	$("a#section-6 span").html(options.button[5]);
	
	
	
	$('.s1').html('<a href="' + options.link[0] + '" title= "' + options.title[0] + '"><img src="' + options.image[0] + '" /></a>');
	$('.s2').html('<a href="' + options.link[1] + '" title= "' + options.title[1] + '"><img src="' + options.image[1] + '" /></a>');
	$('.s3').html('<a href="' + options.link[2] + '" title= "' + options.title[2] + '"><img src="' + options.image[2] + '" /></a>');
	$('.s4').html('<a href="' + options.link[3] + '" title= "' + options.title[3] + '"><img src="' + options.image[3] + '" /></a>');
	$('.s5').html('<a href="' + options.link[4] + '" title= "' + options.title[4] + '"><img src="' + options.image[4] + '" /></a>');
	$('.s6').html('<a href="' + options.link[5] + '" title= "' + options.title[5] + '"><img src="' + options.image[5] + '" /></a>');
	
	   $(this).click(function() {
	   var index = $('#side-nav a').index(this);
	   $(this).parent().removeClass('remove-right-border').css("border-right-color", options.color[index]);
	   
		$(this).parent().siblings().addClass('remove-right-border');
		
		
		
		
		
		
		$("#main-container-background").animate({ top: index * -307 }, 'slow');
	   
	   $(".overlay").hide().css("background-color",  options.color[index]).text(options.text[index]).fadeIn(1500);
	   
								});
								});
};