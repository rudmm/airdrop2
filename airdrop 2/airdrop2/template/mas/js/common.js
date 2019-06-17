



$(function() {



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#sendform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {

	// };

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");



});

$(window).scroll(function() {
   var scroll = $(window).scrollTop();


   if (scroll >= 100) {
       $('.top_header').addClass('scroll').addClass('shadow');
   } else {
       $('.top_header').removeClass('scroll').removeClass('shadow');
   }
});

$('a[href^="#"]').click(function(e) {
	e.preventDefault();
	var section = $(this).attr("href");
	console.log(section);

	$("html, body").animate({
		scrollTop: $(section).offset().top - 100
	});
});



$(document).ready(function(){

	new WOW().init();

});

$( function() {
    $( "#accordion" ).accordion({
		heightStyle: "content",
		collapsible:true,
		// disabled: true
	});
  } );

//   $(document).ready(function() {
//     $('.input').focus(function() {
// 	   $(this).next('label').hide();

// 	}).blur(function () {
// 		var val = $(this).val();
// 		if ( val === "" ) {
// 			$(this).next('label').show();
// 		}
// 	});
// });
