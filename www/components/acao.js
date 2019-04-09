// This is a JavaScript file

//conexão
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
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

$(document).on("click", "#local", function(){
var Latitude = undefined;
var Longitude = undefined;

// Get geo coordinates

function getMapLocation() {

    navigator.geolocation.getCurrentPosition
    (onMapSuccess, onMapError, { enableHighAccuracy: true });
}

// Success callback for get geo coordinates

var onMapSuccess = function (position) {

    Latitude = position.coords.latitude;
    Longitude = position.coords.longitude;

    getMap(Latitude, Longitude);

}

// Obter mapa usando coordenadas

function getMap(latitude, longitude) {

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map
    (document.getElementById("map"), mapOptions);


    var latLong = new google.maps.LatLng(latitude, longitude);

    var marker = new google.maps.Marker({
        position: latLong
    });

    marker.setMap(map);
    map.setZoom(15);
    map.setCenter(marker.getPosition());
}

// Callback de sucesso para assistir a sua mudança de posição

var onMapWatchSuccess = function (position) {

    var updatedLatitude = position.coords.latitude;
    var updatedLongitude = position.coords.longitude;

    if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getMap(updatedLatitude, updatedLongitude);
    }
}

// Erro callback

function onMapError(error) {
    console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

// Assista sua mudança de posição

function watchMapPosition() {

    return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onMapError, { enableHighAccuracy: true });
}
});
