$('.side-body').hover(function() {
			var zilanmu =  $(this).parent().children('.side-box');
			if(zilanmu.css('display') == 'none'){
				$('.side-box').hide();
				zilanmu.show();
			}else{
				zilanmu.hide();
			}
		}, function() {
			zilanmu.hide();
		});
		
		//回到顶部
		function pageScroll(){
			window.scrollBy(0,-100); 
			scrolldelay = setTimeout('pageScroll()',10); 
			var sTop=document.documentElement.scrollTop+document.body.scrollTop; 
			if(sTop==0) clearTimeout(scrolldelay); 
		}
		//回到顶部end

		$(window).scroll(function() {
			if ($(this).scrollTop() > 500) {
				$('.right-side .side-row:last-child').removeClass('up');
			}else{
				$('.right-side .side-row:last-child').addClass('up');
			}
		});
		//数量增减器
		$('.g_jia').click(function() {
			var input = $(this).parent('.goods-num-update-updown').parent('.goods-num-update').find('input');
			var num = input.val();
			num++;
			input.val(num);
		});
		$('.g_jian').click(function() {
			var input = $(this).parent('.goods-num-update-updown').parent('.goods-num-update').find('input');
			var num = input.val();
			num--;
			if(num < 1){
				num = 1;
			}
			input.val(num);
		});
		$('.J_jia').click(function() {
			var input = $(this).parent('.num_box').children('label').children('input');
			var num = input.val();
			num++;
			input.val(num);
		});

		$('.J_jian').click(function() {
			var input = $(this).parent('.num_box').children('label').children('input');
			var num = input.val();
			num--;
			if(num < 1){
				num = 1;
			}
			input.val(num);
		});
