﻿function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	h = checkTime(h);
	document.getElementById('timpu').innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 5000);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
}

function startDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth(); //January is 0!
	var yyyy = today.getFullYear();
	var azi = today.getDay();
	var monthNames = [
    "Ianuarie", "Februarie", "Martie",
    "Aprilie", "Mai", "Iunie", "Iulie",
    "August", "Septembrie", "Octombrie",
    "Noiembrie", "Decembrie"];
	var dayNames = [
	"Duminica",
	"Luni", "Marti", "Miercuri",
	"Joi","Vineri","Sambata"];
	if(dd<10) {
		dd = '0'+dd;
	}
	today = dayNames[azi] +" "+ dd +" "+ monthNames[mm] ;
	document.getElementById("data").innerHTML = today;
}

function loadWeather(){
	var xhttp = createCORSRequest("GET","https://baritiu-smart-mirror.herokuapp.com/currently");
	if (!xhttp)
		throw new Error('CORS not supported');
    xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200)
		{
			var myJSON = this.responseText;
			var myObj = JSON.parse(myJSON);
			var image = document.getElementById("iconvreme").src= "https://baritiu-smart-mirror.herokuapp.com/icons/" + myObj.currently.icon + ".png";
			document.getElementById("temperatura").innerHTML = Math.round(myObj.currently.temperature) + "°C";
			document.getElementById("sumar").innerHTML = myObj.currently.summary;
		}

	};
	xhttp.send();
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url, true);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

