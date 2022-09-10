function shuffle(array){
	for (let i = array.length - 1; i >= 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));
		[array[i], array[rand]] = [array[rand], array[i]]
	}
return array;
}

$(function(){
	$('#data').addClass('active');
	setTimeout(function(){
	$('#data').removeClass('active');}, 10);
	var btn = $('.btn');
	var state = 0;
        var check = localStorage.getItem('check_st');
	if(check != 1){
		$('input').prop('checked', false);
		$('.ex').hide();
	}
	$('#button2').addClass('active');
	$('#button').on("click",function(){
		$('#data').addClass('active');
		if(state !=1){
			btn.removeClass('active');
        			$(this).addClass('active');
			var re = new RegExp($('#search').val());
			$('#data tbody tr').each(function(){
				var tr = $(this);
				tr.hide();
				$('.srch_trg', this).each(function(){
					var txt = $(this).html();
					if(txt.match(re) != null){
						tr.show();
					}
				});
			});
			setTimeout(function(){
				$('#data').removeClass('active');}, 10);
			state = 1;
		}else{
        			$(this).removeClass('active');
			$('#button2').addClass('active');
			$('#data tr').show();
			setTimeout(function(){
				$('#data').removeClass('active');}, 10);
			state = 0;
		}
		if(check != 1){
			$('.ex').hide();
		}
	});
	$('#button2').on("click",function(){
		if(state !=0){
			$('#data').addClass('active');
			btn.removeClass('active');
        			$(this).addClass('active');
			$('#data tr').show();
			state = 0;
			setTimeout(function(){
				$('#data').removeClass('active');}, 10);
			if(check != 1){
				$('.ex').hide();
			}
		}
	});
	$('#button3').on("click",function(){
		$('#data').addClass('active');
		btn.removeClass('active');
       		$(this).addClass('active');
		if(check != 1){
			var trRowsL = $('#data tbody tr').not('.ex').length;
		}else{
			var trRowsL = $('#data tbody tr').length;
		}
		var RowsR = [...Array(trRowsL).keys()].map(i => ++i);
		RowsR = shuffle(RowsR);
		$('#data tbody tr').each(function(){
			var tr = $(this);
			tr.hide();
			tr_rand = RowsR.shift();
			if(tr_rand == 1){
				tr.show();
			}
		});
		setTimeout(function(){
			$('#data').removeClass('active');}, 10);
		state = 2;
	});
	$('#button4').on("click",function(){
		$('#data').addClass('active');
		if(state !=4){
			btn.removeClass('active');
        			$(this).addClass('active');
			$('#data tbody tr td.fav').each(function(){
				$(this).parent().hide();
				var fav_id = $(this).attr('id');
				var fav_st = localStorage.getItem(fav_id);
				if(fav_st == 1){
				$(this).parent().show();}
			});
			setTimeout(function(){
				$('#data').removeClass('active');}, 10);
			state =4;
		}else{
        			$(this).removeClass('active');
			$('#button2').addClass('active');
			$('#data tr').show();
			setTimeout(function(){
				$('#data').removeClass('active');}, 10);
			state = 0;
		}
		if(check != 1){
			$('.ex').hide();
		}
	});
	$('.checkmark').on("click",function(){
		if(check != 1){
			localStorage.setItem('check_st',1);
	        	check = 1;
		}else{
			localStorage.setItem('check_st',0);
	        	check = 0;
		}
	});
});
