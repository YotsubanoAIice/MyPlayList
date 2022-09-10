$(function(){
	$('.fav').each(function(){
		var fav_id = $(this).attr('id');
		var fav_st = localStorage.getItem(fav_id);
		$(this).css({'color':'#ccc','font-size':'20px'});
		if(fav_st == 1){
			$(this).css('color','#f93');
		}
		$(this).on("click",function(){
			var fav_id = $(this).attr('id');
			var fav_st = localStorage.getItem(fav_id);
			if(fav_st != 1){
				$(this).css('color','#f93');
				localStorage.setItem(fav_id,1);
			}else{
				$(this).css('color','#ccc');
				localStorage.setItem(fav_id,0);
			}
		});
	});
});
