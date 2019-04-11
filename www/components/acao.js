// This is a JavaScript file


$(document).on("click", "#local", function(){

var online = navigator.onLine;
if(online==false) {
alert('Sem Conexão, favor conectar a uma rede');
}

else{
//beep
  navigator.notification.beep(3);

//vibrar
  navigator.vibrate(6000);
}
});





//mapa

$(document).on("click", "#local", function(){

var onSuccess = function(position){

L.mapquest.key = 'wcbAIEAbBdYNOHSZ9Qefm71xoFMaAgws';

L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

map.addControl(L.mapquest.control());
}
navigator.geolocation.getCurrentPosition(onSuccess);

checkConnecton();
});