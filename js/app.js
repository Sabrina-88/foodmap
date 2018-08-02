$(document).ready(function(){
$("#btnOrder").click(function(){
        var foodorder = $("#order").val();;
        console.log(foodorder);
    });
	
	$.each(restaurantes,function (chave, valor){
		
		console.log(valor.name); 
		
		if (valor.name === "Sabrina") {
			 alert("restaurante Sabrina");
			}
			
			else {
				alert ("só tem restaurante > " + valor.name)}
		/*console.log($(this).text());*/
		});
	/*
	var data = { "programs": [ { "name":"zonealarm", "price":"500" }, { "name":"kaspersky", "price":"200" } ] };

$.each(data.programs, function (i) {
    $.each(data.programs[i], function (key, val) {
        alert(key + " : " + val);
    });
});*/
	
}); // FINAL DA  FUNCAO READY

