
 $(document).ready(function(){
       var cuerpo = $("body");
       var agrega = $('<button>Haz click aquí</button>')
       agrega.appendTo(cuerpo);
       

     });

 $(document).ready(function(){
	var bt_count = 1;
	$("button").bind("click", function(){
	$(this).after("<li>5" + (++bt_count) + "</li>");
	});

});