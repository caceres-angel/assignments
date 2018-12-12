
    var apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=5879400&appid=20237cefe6297c195f37cf7adef74932&units=metric';

    var weatherRequestAncho = new XMLHttpRequest();

    weatherRequestAncho.open('GET', apiURL3, true);

    weatherRequestAncho.send();

    weatherRequestAncho.onload =  function () {

        var weatherDataAncho = JSON.parse(weatherRequestAncho.responseText);

        console.log(weatherDataAncho);

        document.getElementById("Weather2").innerHTML = weatherDataAncho.main.temp;

    }

