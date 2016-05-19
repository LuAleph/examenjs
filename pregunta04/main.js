
 $(document).ready(function(){
       var cuerpo = $("body");
       var agrega = $('<button>Haz click aquí</button>')
       agrega.appendTo(cuerpo);
       

     });

/*$(document).ready(function(){
	var bt_count = 0;
	$("button").bind("click", function(){
	$(this).after("<li>5" + (++bt_count) + "</li>");
	});

});*/


 $(document).ready(function() {
	$("button").click(function() {
		var nuevo = parseInt($("li:last()").text());
		var colors = $('#dos').val();
		var algo = $('#uno').val();
	
		if(algo === ""){algo = "";}

		$("ul:last()").append("<li></li>");	
	});

});