function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('timpu').innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
		return i;
}

function startDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
		dd = '0'+dd
	} 
	if(mm<10) {
		mm = '0'+mm
	} 
	today = dd + '/' + mm + '/' + yyyy;
	document.getElementById('data').innerHTML = today;	
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
            document.getElementById('iconvreme').innerHTML = "../icons/sleet.png";
///var image = document.getElementById("iconvreme").src = "../icons/sleet.png";
            ///= "../icons/" + myObj.currently.icon + ".PNG";
		
            document.getElementById("vreme").innerHTML = myObj.currently.temperature + "°C";
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