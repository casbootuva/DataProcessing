/*/* use this to test out your function */
// Array that contains the countries and data in JSON.
var countries = [["aw", "83.78"], ["ad", "95.9"], ["af", "6.39"], ["ao", "21.26"], ["al", "60.1"], ["ARB", "34.5173747336633"], ["ae", "90.4"], ["ar", "64.7"], ["am", "46.3"], ["as", ""], ["ag", "64"], ["au", "84.56"], ["at", "81"], ["az", "61"], ["bi", "1.38"], ["be", "85"], ["bj", "5.3"], ["bf", "9.4"], ["bd", "9.6"], ["bg", "55.49"], ["bh", "90.99998"], ["The", "72"], ["ba", "60.8"], ["by", "59.02"], ["bz", "38.7"], ["bm", "96.8"], ["bo", "39.02"], ["br", "57.6"], ["bb", "76.67"], ["bn", "68.77"], ["bt", "34.37"], ["bw", "18.5"], ["cf", "4.03"], ["ca", "87.12"], ["CEB", "66.9285233413295"], ["ch", "87"], ["CHI", ""], ["cl", "72.35"], ["cn", "49.3"], ["ci", "14.6"], ["cm", "11"], ["Rep.", "6.6"], ["co", "52.57"], ["km", "6.98"], ["cv", "40.26"], ["cr", "49.41"], ["CSS", "49.2739489478771"], ["cu", "30"], ["cw", ""], ["ky", "74.1"], ["cy", "69.33"], ["cz", "79.71"], ["de", "86.19"], ["dj", "10.71"], ["dm", "62.86"], ["dk", "95.99"], ["do", "49.58"], ["dz", "18.09"], ["EAP", "42.1320603778734"], ["EAS", "46.8912750395826"], ["ECA", "48.1822381677585"], ["ECS", "69.2034365478165"], ["ec", "43"], ["Arab Rep.", "29.4"], ["EMU", "78.3000360115901"], ["er", "0.99"], ["es", "76.19"], ["ee", "84.24"], ["et", "2.9"], ["EUU", "78.1021476800944"], ["FCS", "11.5312545592712"], ["fi", "92.38"], ["fj", "41.8"], ["fr", "83.75"], ["fo", "94.66"], ["Fed. Sts.", "27.8"], ["ga", "9.81"], ["gb", "91.61"], ["ge", "48.9"], ["gh", "18.9"], ["gn", "1.72"], ["The", "14"], ["gw", "3.32"], ["gq", "18.86"], ["gr", "63.21"], ["gd", "37.38"], ["gl", "66.7"], ["gt", "23.4"], ["gu", "69.27"], ["gy", "37.35"], ["HIC", "80.6075498546686"], ["cn", "74.2"], ["hn", "19.08"], ["HPC", "8.86529118205637"], ["hr", "68.57"], ["ht", "11.4"], ["hu", "76.13"], ["id", "17.14"], ["im", ""], ["in", "18"], ["INX", ""], ["ie", "79.69"], ["Islamic Rep.", "29.95"], ["iq", "11.3"], ["is", "98.16"], ["il", "71.45"], ["it", "61.96"], ["jm", "40.5"], ["jo", "44"], ["jp", "90.58"], ["kz", "54.89"], ["ke", "43.4"], ["kg", "28.3"], ["kh", "9"], ["ki", "12.25"], ["kn", "65.4"], ["Rep.", "84.77"], ["KSV", ""], ["kw", "78.7"], ["LAC", "47.4660333270483"], ["la", "14.26"], ["lb", "74.7"], ["lr", "5.41"], ["ly", "17.76"], ["lc", "51"], ["LCN", "50.153320418858"], ["LDC", "8.6363921502324"], ["LIC", "6.2909866250761"], ["li", "95.21"], ["lk", "25.8"], ["LMC", "22.5551514519941"], ["LMY", "31.1365897393605"], ["ls", "11"], ["lt", "72.13"], ["lu", "94.67"], ["lv", "75.83"], ["China", "65.8"], ["mf", ""], ["ma", "56.8"], ["mc", "92.4"], ["md", "46.6"], ["mg", "3.7"], ["mv", "49.28"], ["MEA", "38.2614233288785"], ["mx", "44.39"], ["mh", "16.8"], ["MIC", "34.0523027842052"], ["FYR", "65.24"], ["ml", "7"], ["mt", "73.17"], ["mm", "2.1"], ["MNA", "32.6617750663861"], ["me", "61"],["mk", "71"],["mn", "27"], ["mp", ""], ["mz", "5.94"], ["mr", "10.7"], ["mu", "41.44"], ["mw", "5.83"], ["my", "67.5"], ["NAC", "87.3379213412336"], ["na", "14.84"], ["nc", "70"], ["ne", "1.95"], ["ng", "42.68"], ["ni", "17.6"], ["nl", "93.17"], ["NOC", "69.899326346869"], ["no", "96.3"], ["np", "15.44"], ["nz", "85.5"], ["OEC", "83.8455755786269"], ["OED", "78.0513737077336"], ["om", "70.22"], ["OSS", "18.3925682450413"], ["pk", "13.8"], ["pa", "44.92"], ["pe", "40.2"], ["ph", "39.69"], ["pw", ""], ["pg", "9.38"], ["pl", "66.6"], ["pr", "78.78"], ["Dem. Rep.", ""], ["pt", "64.59"], ["py", "43"], ["PSS", "26.6331225128195"], ["pf", "60.68"], ["qa", "91.49"], ["ro", "54.08"], ["ru", "70.52"], ["rw", "10.6"], ["SAS", "16.6099246937189"], ["sa", "63.7"], ["sd", "24.64"], ["sn", "17.7"], ["sg", "82"], ["sb", "9"], ["sl", "2.1"], ["sv", "29.7"], ["sm", ""], ["so", "1.63"], ["rs", "53.5"], ["SSA", "19.2181330694094"], ["ss", "15.9"], ["SSF", "19.2212447812268"], ["SST", "26.3799180755841"], ["st", "24.41"], ["sr", "40.08"], ["sk", "79.98"], ["si", "71.59"], ["se", "92.52"], ["sz", "27.1"], ["sx", ""], ["sc", "54.26"], ["sy", "28.09"], ["tc", ""], ["td", "2.5"], ["tg", "5.7"], ["th", "34.89"], ["tj", "17.49"], ["tm", "12.2"], ["tl", "1.14"], ["to", "40"], ["tt", "65.1"], ["tn", "46.16"], ["tr", "51.04"], ["tv", ""], ["tz", "4.86"], ["ug", "17.71"], ["ua", "43.4"], ["UMC", "47.7213465385068"], ["uy", "61.46"], ["us", "87.36"], ["uz", "43.55"], ["vc", "56.48"], ["RB", "54.9"], ["vi", "50.07"], ["vn", "48.31"], ["vu", "18.8"], ["ps", "53.67"], ["WLD", "40.689136605418"], ["ws", "21.2"], ["Rep.", "20"], ["za", "49"], ["Dem. Rep.", "2.2"], ["zm", "17.34"], ["zw", "19.89"]]

//Array that contains the colors.
color = ["#030d11","#092834","#155d7a","#2193c0","#96d5ed"]

//Function that initiates change color function.
window.onload = function() {
 	 changeColor(countries, color);
}

 //changeColor takes a path ID and a color (hex value)
 //and changes that path's fill color 

function changeColor(id, color) {
	//iterate over country array
	for (var i = 0; i < countries.length; i++) {
		var country = document.getElementById(countries[i][0])
		//if statement to make sure country exists in svg file.
		
		if(country != null){
			var coastalCountry = document.getElementById(countries[i][0]).getElementsByTagName("path")
			
			//if statement to make sure that country doesnt have any paths in its instance.
			if(0 == coastalCountry.length){
				//coloring
				if (countries[i][1] < 60){ 	
					country.style.fill = color[0] 
				}
				else if (countries[i][1] >=60 && countries[i][1] < 70){
					country.style.fill = color[1] 
				}    
				else if (countries[i][1] >=70 && countries[i][1] < 80){
					country.style.fill = color[2] 
				}  
				else if (countries[i][1] >=80 && countries[i][1] <90){
					country.style.fill = color[3] 
				}
				else if (countries[i][1] >=90 && countries[i][1] < 100){
					country.style.fill = color[4] 
				}
			}
			//if the country does have paths, make sure they are colored as well.
			else{
				for (var j = 0; j < coastalCountry.length; j++) {
					if (countries[i][1] < 60){ 	
						coastalCountry[j].style.fill = color[0] 
					}
					else if (countries[i][1] >60 && countries[i][1] < 70){
						coastalCountry[j].style.fill = color[1] 
					}    
					else if (countries[i][1] >70 && countries[i][1] < 80){
					coastalCountry[j].style.fill = color[2] 
					}  
					else if (countries[i][1] >80 && countries[i][1] <90){
					coastalCountry[j].style.fill = color[3] 
					}
					else if (countries[i][1] >90 && countries[i][1] < 100){
					coastalCountry[j].style.fill = color[4] 
					}    
				}
			}
		}
	}
}
