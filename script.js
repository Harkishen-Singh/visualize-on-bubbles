console.warn('running scripts');
var data = [
    { "x_axis": 300, "y_axis": 30, "radius": 20, "color" : "green" },
    { "x_axis": 600, "y_axis": 70, "radius": 20, "color" : "purple"},
    { "x_axis": 900, "y_axis": 100, "radius": 20, "color" : "red"},
    { "x_axis": 1200, "y_axis": 30, "radius": 10, "color" : "blue" },
    { "x_axis": 1500, "y_axis": 7, "radius": 20, "color" : "black"},
    { "x_axis": 1800, "y_axis": 200, "radius": 30, "color" : "grey"}];

var x_lines = [], y_lines = [];
for(let x =0; x<data.length; x++) {
    x_lines.push(data[x].x_axis);
}
console.log(x_lines);

let container = d3.select('body').append('svg')
                                    .attr('width', 2000)
                                    .attr('height', 500);

let circles = container.selectAll('circle')
    .data(data)
    .enter()
    .append('circle');

circles.attr('cx', function (d) {
    return d.x_axis;
}).attr('cy', function (d) {
    return 200 - d.y_axis;
}).attr('r', function (d) {
    return d.radius;
}).attr('fill', function (d) {
    return d.color;
});

var line = d3.line().curve(d3.curveCardinal).x(function (a,b) {
    return a.x_axis;
}).y(function (a,b) {
    return 200 - a.y_axis;
});

container.append('path').attr('d', line(data)).attr('stroke', 'black').attr('stroke-width', '2').attr("fill", "none");

