//need to lear more about JSON

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="geolocation()">Geolocation</button>
    <p id="out"></p>
    <p id="location"></p>
    <p id="weather"></p>
    <script>
        let x = document.getElementById("out");
        let y= document.getElementById("location");
        let z = document.getElementById("weather");

        function geolocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition);
            }
            else{
                x.innerText= "Geo not supported";
            }
        }
        function showPosition(data){
            console.log(data.coords.latitude);
            console.log(data.coords.longitude);
            let lat = data.coords.latitude;
            let long = data.coords.longitude;
            x.innerText = `Lat is ${lat} and long is ${long}`;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={2aff787e7f23a9e46844509b77be34cd}`;
            fetch(url, {method:"GET"})
            .then((data)=>data.json())
            .then((res)=>{
                console.log("weather data", res.name);
            });

        
        }


    </script>
</body>
</html>