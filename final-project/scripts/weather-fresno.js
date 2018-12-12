   

    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3682330&appid=20237cefe6297c195f37cf7adef74932&units=metric';

    var weatherRequest = new XMLHttpRequest();

    weatherRequest.open('GET', apiURL, true);

    weatherRequest.send();

    weatherRequest.onload =  function () {

        var weatherData = JSON.parse(weatherRequest.responseText);

        console.log(weatherData);

        document.getElementById("Weather0").innerHTML = weatherData.main.temp;

    }

