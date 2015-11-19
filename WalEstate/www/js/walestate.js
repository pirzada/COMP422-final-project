



$('#loginBtn').on('click', function(e){

alert("Javascript working");

});


$('#loginBtn').button('disable');

$('.fields').bind('keyup', function(){

var emailLength = $("#login-email-id").length;
var passwordLength = $("#login-password-id").length;

if(emailLength > 0 && passwordLength > 0){

    $('#loginBtn').button("enabled");
}

});


function buttonclicked(e){

    var btn = e.target.id;

    document.getElementById(btn).style.backgroundColor = "#e67d69";


alert(btn+" clicked!");




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


$('#signUpBtn').on('click',function(){

    var user = new Object();

user.email = document.getElementById("email").text;
user.fname = document.getElementById("fname").text;
user.lname = document.getElementById("lname").text;
user.tel = document.getElementById("tel").text;
user.password = document.getElementById("password").text;
user.password2 = document.getElementById("password2").text;

alert("First Name: "+ user.fname+ " Phone: "+user.tel);

});




function getLocation(){


 navigator.geolocation.getCurrentPosition(onSuccess, onError);

function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


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

function getPhotoWithSize(source) { 
 // Retrieve image file location from specified source
 navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
 targetWidth: 960,
 targetHeight: 960,
 destinationType: destinationType.FILE_URI,
 sourceType: source,
 allowEdit:true 
});
 }


 function goBack() {
    window.history.back();
}


