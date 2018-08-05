
$(document).ready(function(){
	
	/* $('#start-page').delay('3000').fadeIn('slow');*/
	
	
	// Carregar Imagens Logo no inicio
    $(restaurantes).each(function (chave, valor) {
      
		/*var nomeRestaurante = [];
   nomeRestaurante.push("<span>" + valor.name + "</span>");
   $("#restaurant-shower").append(nomeRestaurante[0]);*/
		$('<img>').attr('src', valor.image).attr('id', valor.name).appendTo('#restaurant-shower');
	});// FIM Carregar imagem
	
	
	// testando infos de cada imagem
	/*$("#restaurant-shower").click(function(chave, valor){
		$(restaurantes).each(function (chave, valor) {
			if (valor.image === )
	alert ("eitaaa" + valor.image);
	});
	});*/ // final da funcao clicar na imagem inicial
	
	//Funcao de clique no buscar
$("#btnOrder").click(function(){
	var	foodorder = $("#order").val();
	var resultRestaurants = [];
	
	//funcão limpar #restaurant-shower
	  $('#restaurant-shower').children().remove();
	   
	   // funcao grep e filter
	var approved = $.grep(restaurantes, function(restaurant) {
	$(restaurant).filter(function (chave, valor) {
		 if (valor.name === foodorder || valor.type === foodorder) { 
	var img = [];
   img.push("<img class='nomesRestaurantes' src ='" + valor.image + "'>");
   $("#restaurant-shower").append(img[0]);	
   

   
   $('img').click(function(chave, valor){
	    
	
	var tituloRestaurante = [];
    tituloRestaurante.push("<p>" + restaurant.name + "</p>");
   $("#titulo").append(tituloRestaurante);  
   
   var tituloRestaurante = [];
    tituloRestaurante.push("<p>" + restaurant.description + "</p>");
   $("#titulo").append(tituloRestaurante);
   
	if(restaurant === restaurant.image){
		
	   var clique = []
	   clique.push(restaurant);
	   console.log(restaurant);
	   console.log(restaurant.name);
	  // alert(restaurant.description);
	}
	 
    
   });

	
	
	};
		});
	});
});//FIM clique
    

});// Fim da ready



var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -23.5489, lng: -46.6388},
         zoom: 15
		});
		var marker = new google.maps.Marker({
          position: {lat: -23.5489, lng: -46.6388},
          map: map,
        
		 icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		animation: google.maps.Animation.DROP
        });
		};