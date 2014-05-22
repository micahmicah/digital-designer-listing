

	   	$(window).scroll( function (){
			if ($(window).scrollTop() > 900){

			$('.intro').css('display', 'none');
			$('h1').css('color','orange');
		

			} else {

			$('.intro').css('display', 'block');
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
    
	