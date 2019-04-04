// This is a JavaScript file
//beep
$(document).on("click", "#local", function(){
  navigator.notification.beep(3);
});

//vibrar
$(document).on("click", "#local", function(){
  navigator.vibrate(6000);
});

//localizar
$(document).on("click", "#local", function(){
if( !('geolocation' in navigator) ) {
    alert("Navegador não tem suporte API Geolocation");
  }
  navegator.geolocation.getCurrentPosition(success, error, PositionOptions);

  function geolocationSuccess(position){
    navigator.notification.alert("Latitude: " + position.coords.latitude + "\n" + "Longitude: " + position.coords.longitude);
  };
  navigator.geolocation.getCurrentPosition(geolocationSuccess);
});

//verificar conexão com internet
$(document).on("click", "#local", function(){
  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexão desconhecida';
    states[Connection.ETHERNET] = 'Conexão Ethernet.';
    states[Connection.WIFI]     = 'Conexão WiFi.';
    states[Connection.CELL_2G]  = 'Cell 2G connection.';
    states[Connection.CELL_3G]  = 'Cell 3G connection.';
    states[Connection.CELL_4G]  = 'Cell 4G connection.';
    states[Connection.CELL]     = 'Cell generic connection.';
    states[Connection.NONE]     = 'Sem conexão.';

    
}
checkConnection();
});

if(states==Connection.NONE){
  navigator.notification.alert("Sem conexão");
}

//mapa
$(document).on("click", "#local", function(){
document.addEventListener('DOMContentLoaded', function(){
 
    var target = document.querySelector('#map');
    
    navigator.geolocation.getCurrentPosition(function(position) {
 
        var latitude   = position.coords.latitude;
        var longitude  = position.coords.longitude;
        var coordinate = new google.maps.LatLng(latitude, longitude);
 
        var optionsMap = {
                    center : coordinate,
                    zoom: 19,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(target, optionsMap);
 
        var configMarker = {
                             position : coordinate,
                             map : map,
                             title: "Você está aqui!"
                            };
 
        var marker = new google.maps.Marker(configMarker);
 
    });
});
});