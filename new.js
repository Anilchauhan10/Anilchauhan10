//checkValidity() => Returns true if an input element contains valid datw

//setCustomValidity()=> Sets the validation Message Property of an input Element.apply



function myFunction() {
    const inputValue = document.getElementById("id1");
    if (!inputValue.checkValidity()) {
        document.getElementById("demo").innerHTML = inputValue.validationMessage;
    }
    else {
        document.getElementById("demo").innerHTML = `<h1 style="color:pink; font-size: 40px; background-color:black; display:inline;">Congratulation for your input is valid</h1>`;
    }
}


const myLocation = document.getElementById('bolo');
function yourFunction(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        myLocation.innerHTML= "Not supported";
    }
}

function showPosition(position){
    myLocation.innerHTML= "Latitude: "+ position.coords.latitude + "<br> Longitude:" + position.coords.longitude;
}