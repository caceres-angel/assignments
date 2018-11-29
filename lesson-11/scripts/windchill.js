
var f = 0;
var t = parseFloat(document.getElementById("prestonTemp").innerText);
var s = parseFloat(document.getElementById("prestonWS").innerText);
s =  Math.pow(s, 0.16);

f = Math.round((35.74 + .6215 * t - 35.75 * s + 0.42745 * t * s) * 100)/100;

document.getElementById("prestonWC").innerHTML = f+"ºF";