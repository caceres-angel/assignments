    var d = new Date();
    var m = new Date();
    var da = new Date();
    var y = new Date();
    
    
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "Octobre";
    month[10] = "November";
    month[11] = "December";
    
    var n = weekday[d.getDay()];
    var m = month[m.getMonth()];
    var day = da.getDate();
    var year = y.getFullYear();
    
    //document.write(n+', '+day+' '+m+' '+year);
    document.getElementById("showdate").innerHTML =  n+', '+day+' '+m+' '+year;