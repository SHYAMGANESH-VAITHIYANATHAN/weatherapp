let lat;      
let long;

if(navigator.geolocation){
    navigator.geolocation.getcurrent(position=>{
        lat=position.coords.latitude;
        long=position.coords.longitude;

        console.log("latitude" +lat + long);
    });
}