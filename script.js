console.warn('running scripts');
var data = [
    { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
    { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
    { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];

let container = d3.select('body').append('svg')
                                    .attr('width', 200)
                                    .attr('height', 200);

let circles = container.selectAll('circle')
    .data(data)
    .enter()
    .append('circle');

circles.attr('cx', function (d) {
    return d.x_axis;
}).attr('cy', function (d) {
    return d.y_axis;
}).attr('r', function (d) {
    return d.radius;
}).attr('fill', function (d) {
    return d.color;
});

