

	   	$(window).scroll( function (){
			if ($(window).scrollTop() > 900){

			$('.intro').css('opacity', '0');
			$('h1').css('color','orange');
		

			} else {

			$('.intro').css('opacity', '1');
			$('h1').css('color','blue')
			
			}

		})


			




		$(window).scroll( function (){
			if ($(window).scrollTop() > 1200){

			
			$('h3').replaceWith('<h3>Responsibilities</h3>');
		

			} else {

			$('h3').replaceWith('<h3>info</h3>');
			
			
			}

		})
    
	