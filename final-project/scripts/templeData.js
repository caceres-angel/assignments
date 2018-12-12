var apiURL = 'https://caceres-angel.github.io/assignments/final-project/scripts/data.json';

var templeRequest = new XMLHttpRequest();

templeRequest.open('GET', apiURL, true);

templeRequest.send();

templeRequest.onload =  function () {

    var templeData = JSON.parse(templeRequest.responseText);

    console.log(templeData);

    for (var i = 0; i < templeData.temples.length; i++) {

        document.getElementById("Name"+i).innerHTML = templeData.temples[i].name;
        document.getElementById("Address"+i).innerHTML = templeData.temples[i].address;
        document.getElementById("Telephone"+i).innerHTML = templeData.temples[i].telephone;

        var templeServices = templeData.temples[i].services;
            for (var j = 0; j < templeServices.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeServices[j];
            document.getElementById("Services"+i).appendChild(listItem);
            //myList.appendChild(listItem);
        }

        var templeHistory = templeData.temples[i].history;
            for (var j = 0; j < templeHistory.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeHistory[j];
            document.getElementById("History"+i).appendChild(listItem);
            //myList.appendChild(listItem);
        }

        var templeOrdinances = templeData.temples[i].history;
            for (var j = 0; j < templeOrdinances.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeOrdinances[j];
            document.getElementById("Ordinances"+i).appendChild(listItem);
            //myList.appendChild(listItem);
        }

        
        var templeClosures = templeData.temples[i].history;
            for (var j = 0; j < templeClosures.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = templeClosures[j];
            document.getElementById("Closures"+i).appendChild(listItem);
            //myList.appendChild(listItem);
        }
        document.getElementById("Sessions"+i).innerHTML = templeData.temples[i].sessions;
    }

}