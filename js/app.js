$(document).ready(function(){
	
	//Efeitos de abertura do site
	$('.first-page').fadeIn(2000).delay(3000).fadeOut(2500);
	 
	// Carregar Imagens Logo no inicio
   	$(restaurantes).each(function (chave, valor) {
		$('<img>').attr('src', valor.image).attr('id', valor.name).appendTo('#restaurant-shower');
	});

	//Função de clique no buscar
	$("#btnOrder").click(function(){
		var	foodorder = $("#order").val();
		var resultRestaurants = [];

	//Função limpar #restaurant-shower
	  	$('#restaurant-shower').children().remove();
	  
	   //Função grep e filter
		var approved = $.grep(restaurantes, function(restaurant) {
			$(restaurant).filter(function (chave, valor) {
				 if (valor.name === foodorder || valor.type === foodorder) { 
					var img = [];
   					img.push
					$('<img>').attr('src', valor.image).attr('id', valor.name).appendTo('#restaurant-shower');
   
   
   	//Função de clicar na imagem  
   					$('img').click(function(chave, valor){
	   //if($('img').attr('id') === restaurant.name){
				  
	var titleRestaurant = [];
    titleRestaurant.push("<p>" + restaurant.name + "</p>");
   $("#title").append(titleRestaurant);  
   
   var descriptionRestaurant = [];
    descriptionRestaurant.push("<p>" + restaurant.description + "</p>");
   $("#description").append(descriptionRestaurant);
						//Função limpar #restaurant-shower
	  	$('#description').children().remove();
   });
	}
});
	});
});
});// Fim da ready

var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -23.5489, lng: -46.6388},
         zoom: 15
		});
		var marker = new google.maps.Marker({
          position: (restaurant.latitude, restaurant.longitude),
          map: map,
		 icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
		animation: google.maps.Animation.DROP
        });
		 initMap();
		
		 // Função para carregar pins;
  function loadingMarker () {

    //percorre o data;
    $.each(restaurantes, function (i, restaurant) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurant.latitude, restaurant.longitude),
        title: "Restaurantes",
        map: map,
      });
      $('<img>').attr('src', restaurant.image).attr('id', restaurant.name).appendTo('#restaurant-shower');
      });
      
  }
 loadingMarker ();
		};
