		var intro_bottom = $('.intro h2')[0].getBoundingClientRect().bottom;

		var description_top;
	   	



		$(window).scroll( function(){
			intro_toggle();
		});

		$(window).resize(function(){
			intro_bottom = $('.intro h2')[0].getBoundingClientRect().bottom;
			intro_toggle();
		});


		function intro_toggle (){
			description_top = $('#description')[0].getBoundingClientRect().top;
			if (intro_bottom > description_top){
				$('.intro').css('display', 'none');
			} else{
				$('.intro').css('display', 'block');
			}
		}

			




		$(window).scroll( function (){
			if ($(window).scrollTop() > 1200){

			
			$('h3').replaceWith('<h3>Responsibilities</h3>');
		

			} else {

			$('h3').replaceWith('<h3>info</h3>');
			
			
			}

		})
    
	