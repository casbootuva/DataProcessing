/*/* use this to test out your function */
countries = ["pl", "cz", "sk", "hu"]
color = "#ff0000"
window.onload = function() {
 	 changeColor(countries, color);
}

 //changeColor takes a path ID and a color (hex value)
   //and changes that path's fill color 

function changeColor(id, color) {
	//iterate over array of countries and give them a color
	for (var i = 0; i < countries.length; i++) {
	
		var country = document.getElementById(countries[i])
		console.log(countries[i])
		country.style.fill = color     
	}
}

//country = document.getElementById("cz")
//console.log(country)
