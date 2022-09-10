$(function(){
	$('.nobebou').on("click",function(){
       		$('.js-modal').fadeIn();
     		return false;
	});
});
$(function(){
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});
