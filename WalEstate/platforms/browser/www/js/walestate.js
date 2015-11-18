




function buttonclicked(event){

	var but = event.target.id;

	var doc = document.getElementById(but);

	doc.style.backgroundColor = "#e67d69"; 

	setTimeout(function(){

    doc.style.backgroundColor = "#82d2d6";

	},10);




}//end of buttonclicked


function validate(e){

var elem = document.getElementById(e);

if(elem.value == ""){

	var p = elem.placeholder;

alert("Enter "+p+".");
elem.focus();
return false;

}//end of if



}//end of validate


function createUser(){

var user = new Object();


user.email = document.getElementById("email");
user.fname = document.getElementById("fname");
user.lname = document.getElementById("lname");
user.dob = document.getElementById("dob");
user.password = document.getElementById("password");
user.password2 = document.getElementById("password2");

alert("First Name: "+ user.fname+ " Date of Birth: "+user.dob);


}


var city = document.getElementById("location");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


function takePicture(){

navigator.camera.getPicture(onSuccess, onFail, { quality: 75,
   destinationType: Camera.DestinationType.DATA_URL
});
 function onSuccess(imageData) {
   var image = document.getElementById('Image');
   image.src = "data:image/jpeg;base64," + imageData;
}
 function onFail(message) {
   alert('Error: ' + message);
}
	
}