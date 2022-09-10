$(function(){
	if(localStorage.getItem('unlucky_count') < 1){
		localStorage.setItem('unlucky_count', 1);}
	var prscnt = localStorage.getItem('unlucky_count');
	document.getElementById('press_count').innerHTML = prscnt;
	$('#unlucky').on("click",function(){
		prscnt++;
		$('#data tr').show();
		$('#unlucky').hide();
		document.getElementById('press_count').innerHTML = prscnt;
		localStorage.setItem('unlucky_count', prscnt);
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
