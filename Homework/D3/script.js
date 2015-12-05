
//Create canvas and set margins
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" +margin.left + "," +margin.top +")");


// set date to standardized time format
var parseDate = d3.time.format("%Y/%m/%d").parse;

// load data
d3.csv("KNMIoutput.csv", function(error, data) {
  data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.temp = +d.temp;
  });

// scale data
var xDomain = d3.extent(data, function(d) { return d.date; })
var yDomain = d3.extent(data, function(d) { return d.temp; });

var xScale = d3.time.scale().range([0, width]).domain(xDomain);
var yScale = d3.scale.linear().range([height, 0]).domain(yDomain);

// create axis
var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
var yAxis = d3.svg.axis().scale(yScale).orient('left');

// create line
var line = d3.svg.line()
  .x(function(d) { return xScale(d.date); })
  .y(function(d) { return yScale(d.temp); });

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
});



