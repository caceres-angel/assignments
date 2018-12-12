   

    var apiURL3 = 'https://api.openweathermap.org/data/2.5/weather?id=7285212&appid=20237cefe6297c195f37cf7adef74932&units=metric';

    var weatherRequestBern = new XMLHttpRequest();

    weatherRequestBern.open('GET', apiURL3, true);

    weatherRequestBern.send();

    weatherRequestBern.onload =  function () {

        var weatherData = JSON.parse(weatherRequestBern.responseText);

        console.log(weatherData);

        document.getElementById("Weather3").innerHTML = weatherData.main.temp;

    }

