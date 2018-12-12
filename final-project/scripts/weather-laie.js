
    var apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?id=5850027&appid=20237cefe6297c195f37cf7adef74932&units=metric';

    var weatherRequestLaie = new XMLHttpRequest();

    weatherRequestLaie.open('GET', apiURL2, true);

    weatherRequestLaie.send();

    weatherRequestLaie.onload =  function () {

        var weatherDataLaie = JSON.parse(weatherRequestLaie.responseText);

        console.log(weatherDataLaie);
        
        document.getElementById("Weather1").innerHTML = weatherDataLaie.main.temp;

    }

