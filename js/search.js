function shuffle(array){
	for (let i = array.length - 1; i >= 0; i--) {
		let rand = Math.floor(Math.random() * (i + 1));
		[array[i], array[rand]] = [array[rand], array[i]]
	}
return array;
}

$(function(){
	var btn = $('.btn');
	var state = 0;
	$('#button2').addClass('active');
	$('#unlucky').hide();
	$('#button').on("click",function(){
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
			$('#unlucky').hide();
			state = 1;
		}else{
        			$(this).removeClass('active');
			$('#button2').addClass('active');
			$('#data tr').show();
			$('#unlucky').hide();
			state = 0;
		}
	});
	$('#button2').on("click",function(){
		btn.removeClass('active');
        		$(this).addClass('active');
		$('#data tr').show();
		$('#unlucky').hide();
		state = 0;
	});
	$('#button3').on("click",function(){
		btn.removeClass('active');
        		$(this).addClass('active');
		var trRowsL = $('#data tbody tr').length;
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
		state = 0;
	});
	$('#button4').on("click",function(){
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
			$('#unlucky').hide();
			state =4;
		}else{
        			$(this).removeClass('active');
			$('#button2').addClass('active');
			$('#data tr').show();
			$('#unlucky').hide();
			state = 0;
		}
	});
});
