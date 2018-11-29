   

    var fiveDayUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=20237cefe6297c195f37cf7adef74932&units=metric';
    
    var fiveDayRequest = new XMLHttpRequest();

    fiveDayRequest.open('GET', fiveDayUrl, true);

    fiveDayRequest.send();

    fiveDayRequest.onload =  function () {

        var fiveDayData = JSON.parse(fiveDayRequest.responseText);

        console.log(fiveDayData);

        document.getElementById("day1").innerHTML = fiveDayData.list[0].main.temp;
        document.getElementById("day2").innerHTML = fiveDayData.list[7].main.temp;
        document.getElementById("day3").innerHTML = fiveDayData.list[14].main.temp;
        document.getElementById("day4").innerHTML = fiveDayData.list[21].main.temp;
        document.getElementById("day5").innerHTML = fiveDayData.list[28].main.temp;

    }

