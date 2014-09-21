$(document).ready(function () {
	$("a.highlighter").each(function(index) {
		$(this).click(function() {
			var positive_data;
			var negative_data;
			
			if(index == 0)
			{
				positive_data = "understand";
				negative_data = "confused";
			}
			else if(index == 1)
			{
				positive_data = "well-src";
				negative_data = "poor-src";
			}
			else if(index == 2)
			{
				positive_data = "agree";
				negative_data = "disagree";
			}
						
			var sentences = $("#main-paper").children("a").each(function() {
				var positive = $(this).attr("data-" + positive_data + "-feedback");
				var negative = $(this).attr("data-" + negative_data + "-feedback");
				
				if(positive > negative)
					$(this).css("background", "#99FF33");
				else if(negative > positive)
					$(this).css("background", "#FA5858");
				else
					$(this).css("background", "");
			});
			
			$("a.highlighter").buttonMarkup({theme: 'b'});
			$(this).buttonMarkup({theme: 'e'});
		});
	});
});