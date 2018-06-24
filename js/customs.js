
 var navigation - $('.header').offset().top + 100;

	$(document).scroll(function(){
		if($ (this).scrolltop() > navigation ){
			$('.navbar-default').css({
			'background-color':'white',
			'box-shadow':'1px 1px 14px #888887;'
			});
			$('.navbar-default .navbar-nav>li>a').css({
				'color':'#000'
			});
			$('.navbar-brand').css({
				'color': '#000'
			});
		}
		else{
		$('.navbar-default').css({
			'background-color':'transparent',
			'box-shadow':'none;'
		});
		$('.navbar-default .navbar-nav>li>a').css({
			'color':'#fff'
		});
		$('.navbar-brand').css({
			'color': '#fff'
		});
	}
});