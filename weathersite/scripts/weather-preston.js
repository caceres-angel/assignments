   

    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=20237cefe6297c195f37cf7adef74932&units=metric';

    var weatherRequest = new XMLHttpRequest();

    weatherRequest.open('GET', apiURL, true);

    weatherRequest.send();

    weatherRequest.onload =  function () {

        var weatherData = JSON.parse(weatherRequest.responseText);

        console.log(weatherData);

        document.getElementById("prestonMain").innerHTML = weatherData.weather[0].description;
        document.getElementById("prestonTemp").innerHTML = weatherData.main.temp;
        document.getElementById("prestonHum").innerHTML = weatherData.main.humidity;
        document.getElementById("prestonWS").innerHTML = weatherData.wind.speed;
        document.getElementById("prestonWD").innerHTML = weatherData.wind.deg;
        document.getElementById("prestonWC").innerHTML = weatherData.main.temp;

    }

