
//Load Internet Acces dataset as a global variable.
var data2;

d3.json("INTdata.json", function(error, json) {
	if (error) return console.warn(error);
	data2 = json;

	// graph function calls uses id that becomes avalaible through on click event.
	// For some reason graph does not show up on worldgraph.html
	function graph(id){
		CountryInfo = data2[id]
		console.log(CountryInfo)
		
		// new data array
		var data = [parseFloat(data2[id][0]), parseFloat(data2[id][1]), parseFloat(data2[id][2]), parseFloat(data2[3]), parseFloat(data2[4]), parseFloat(data2[5])]

		// scale data
		//var xDomain = d3.extent(data, function(d) { return d.date; })
		//var yDomain = d3.extent(data, function(d) { return d.temp; });

		var xScale = d3.scale.linear()
	                     .domain([2009, 2014])
	                     .range([0, width]);

	    var yScale = d3.scale.linear()
	                     .domain([0, d3.max(data)])
	                     .range([0, h]);


		// create axis
		var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
		var yAxis = d3.svg.axis().scale(yScale).orient('left');

		// create line
		var line = d3.svg.line()
		  .x(function(d) { return xScale(data2); })
		  .y(function(d) { return yScale(data); });

		// Add the X Axis
		svg.append("g")         
		    .attr("class", "x axis")
		    .attr("transform", "translate(0," + height + ")")
		    .call(xAxis);

		// Add the Y Axis
		svg.append("g")         
		    .attr("class", "y axis")
		    .call(yAxis);

		// Add the valueline path.
		svg.append("path")      
		    .attr("d", line(data));

		// create cross hair along x axis
		var crossX = svg.append("line")
		  .style("stroke", "black")
		  .attr("x1", 0)
		  .attr("y1", 10)
		  .attr("x2", width)
		  .attr("y2", 10)
		  .attr('opacity', 0);

		// create cross hair along y axis.
		var crossY = svg.append("line")
		  .style("stroke", "black")
		  .attr("x1", 10)
		  .attr("y1", 0)
		  .attr("x2", 10)
		  .attr("y2", height)
		  .attr('opacity', 0);

		// mousemove
		svg.on('mousemove', function(data){
		  mouse = d3.mouse(this);

		// move y-line to mouse position
		crossY.style('opacity', 1)
		  .attr('x1', mouse[0])
		  .attr('x2', mouse[0])
		//
		crossX.style('opacity', 1)
		  .attr('y1', mouse[1])
		  .attr('y2', mouse[1])

		})
};


});

// Load GDP data as a global.

var data; 

d3.json("GDPdata.json", function(error, json) {
	if (error) return console.warn(error);
	data = json;
	var dictionary = {}
	console.log(data["NLD"])

	// data is a dictionary that contains country code as key, GDP as value.
	// Loop through dictionary and fill matching id of country based on value.

	for (key in data){
		var value = Math.round(data[key]*0.00000000001)
		if (value < 3){
        dictionary[key] = {fillKey : 'class1'};
	    }
	    else if (value >= 3 && value < 10){
	        dictionary[key] = {fillKey : 'class2'};
	    }
	    else if (value >= 10 && value < 15){
	        dictionary[key] = {fillKey : 'class3'};
	    }
	    else if (value >= 15 && value < 20){
	        dictionary[key] = {fillKey : 'class4'};
	    }
	    else if (value >= 20 && value < 25){
	        dictionary[key] = {fillKey : 'class5'};
	    }
	    else if (value >= 25 && value < 180){
	        dictionary[key] = {fillKey : 'class6'};
	   	}
	};

	//create new data map.
   	var map = new Datamap({element: document.getElementById('container'),

   	//on click send geography info to chart function.
   	done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            graph(geography.id);
        })
    },


	fills: {
        'class1': '#e0ecf4',
        'class2': '#c6dbef',
        'class3': '#9ecae1',
        'class4': '#6baed6',
        'class5': '#3182bd',
        'class6': '#08519c',
      	defaultFill: 'black'
    },

    // add associative array 
    
    data : dictionary
	});
});
