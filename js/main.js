		var intro_bottom = $('.intro h2')[0].getBoundingClientRect().bottom;

		var description_top;
	   	
		var apply_bottom;


		$(window).scroll( function(){
			intro_toggle();
			apply_toggle();
		});

		$(window).on('touchmove', function(){
			intro_toggle();
		});

		$(window).resize(function(){
			intro_bottom = $('.intro h2')[0].getBoundingClientRect().bottom;
			intro_toggle();
		});


		function intro_toggle (){
			description_top = $('#description')[0].getBoundingClientRect().top;
			if (intro_bottom > description_top){
				// $('.intro').css('display', 'none');
				$('.intro h2').addClass('hidden');
			} else{
				// $('.intro').css('display', 'block');
				$('.intro h2').removeClass('hidden');
			}
		}

		function apply_toggle(){
			apply_bottom = $('.apply')[0].getBoundingClientRect().bottom;
			if(apply_bottom < window.innerHeight ){
				$('.apply').css('background','red').css('background','blue').css('color', 'white');
				$('h3').replaceWith('<h3>Join Us</h3>');
			} else{
				$('.apply').css('background', 'none').css('color','blue');
				$('h3').replaceWith('<h3>Info</h3>');
			}
		}

			




		// $(window).scroll( function (){
		// 	if ($(window).scrollTop() > 1200){

			
		// 	$('h3').replaceWith('<h3>Responsibilities</h3>');
		

		// 	} else {

		// 	$('h3').replaceWith('<h3>info</h3>');
			
			
		// 	}

		// })
    
	