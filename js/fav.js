$(function(){
	$('.fav').each(function(){
		var fav_id = $(this).attr('id');
		var fav_st = localStorage.getItem(fav_id);
		if(fav_st == 1){
			$(this).addClass('active');
		}
		$(this).on("click",function(){
			var fav_id = $(this).attr('id');
			var fav_st = localStorage.getItem(fav_id);
			if(fav_st != 1){
				$(this).addClass('active');
				localStorage.setItem(fav_id,1);
			}else{
				$(this).removeClass('active');
				localStorage.setItem(fav_id,0);
			}
		});
	});
});
