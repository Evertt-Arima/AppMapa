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
L.mapquest.key = 'wcbAIEAbBdYNOHSZ9Qefm71xoFMaAgws';
var baseLayer = L.mapquest.tileLayer('dark');

L.mapquest.geocoding().geocode(['Mongagua, SP'], showMap);

function showMap(err, data) {
  var map = createMap();
  map.addControl(L.mapquest.control());
  addLayerControl(map);
}

function createMap() {
  var map = L.mapquest.map('map', {
    center: [-24.1219166, -46.6789992],
    zoom: 14,
    layers: baseLayer
  });
  return map;
}

function addLayerControl(map) {
  L.control.layers({
    'Map': L.mapquest.tileLayer('map'),
    'Satellite': L.mapquest.tileLayer('satellite'),
    'Hybrid': L.mapquest.tileLayer('hybrid'),
    'Light': L.mapquest.tileLayer('light'),
    'Dark': baseLayer
  }, {}, { position: 'topleft'}).addTo(map);
}
});