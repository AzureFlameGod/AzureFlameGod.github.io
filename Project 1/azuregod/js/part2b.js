/*
Part 2:
--------------------------------------------------------------------------------------------------
4. Read in UKcensus1851.csv showing the number of men and women in different age groups in
that same time period in the UK.
5. Show a table of the census age data for men and women (i.e. one column for men and another
for women) including !!!!!the overall totals.!!!!!
6. !!!!!!Show a pie chart of the census age data for men and another for women.
7. Show a bar chart of the census age data for men and another for women.
8. !!!!!!Show a pie chart for the overall number of men vs women.
9. The charts should be scaled to fit on a 1920x1080 screen.
--------------------------------------------------------------------------------------------------
*/

Plotly.d3.xhr("data/UKcensus1851.csv", function(err, rows){
  var dirtyTSV = rows.responseText;
  var cleanTSV = "age\t" + dirtyTSV.split("age").slice(1);
  var rows = d3.csvParse(cleanTSV);
  function unpack(rows, key) {
  return rows.map(function(row){return row[key];});
  }
// Setting the Header Values
var headerNames = Plotly.d3.keys(rows[3]);
headerNames.push("Total");
var headerValues = [headerNames[0],headerNames[1],headerNames[2],headerNames[3]];
// Setting the Cell Values
var cellValues = [];
for (i = 0; i < headerValues.length; i++) {
  cellValue = unpack(rows, headerValues[i]);
  cellValues[i] = cellValue;
}
for(let a=0;a<cellValues[1].length;a++){
  cellValues[1][a]=Number(cellValues[1][a]);};

for(let a=0;a<cellValues[2].length;a++){
    cellValues[2][a]=Number(cellValues[2][a]);};

for(let a=0;a<cellValues[3].length;a++){
    cellValues[3][a]= Number(cellValues[1][a]) + Number(cellValues[2][a]);
    };
    // Creating the table
var table = {
            type: 'table',
            columnwidth: [300,300,300,300],
            columnorder: [0,1,2,3],
            //width: 300,
            header: {
              values: headerValues,
              height: 30,
              align: "center",
              line: {width: 1, color: 'rgb(227,26,28)'},
              fill: {color: ['rgb(253,141,60)']},
              font: {family: "Arial", size: 13, color: "white"}
            },
            cells: {
              values: cellValues,
              height: 30,
              align: ["center", "center"],
              line: {color: "black", width: 1},
              fill: {color: ['rgb(254,204,92)', 'rgba(255,255,178, 0.65)']},
              font: {family: "Arial", size: 13, color: ["black"]}
            },
            xaxis: 'x',
            yaxis: 'y',
            domain: {x: [0,1], y: [0.5,1]}
          }
var trace1 = {
      x: cellValues[0],
      y: cellValues[1],
      type: 'bar',
      xaxis: 'x1',
      yaxis: 'y1',
      mode: 'lines',
      marker: {color: '#bd0026'},
      name: 'Male'
    }
var trace2 = {
      x: cellValues[0],
      y: cellValues[2],
      type: 'bar',
      xaxis: 'x2',
      yaxis: 'y2',
      mode: 'lines',
      marker: {color: '#fecc5c'},
      name: 'Female'
    }
var trace3 = {
      x: cellValues[0],
      y: cellValues[3],
      type: 'bar',
      xaxis: 'x3',
      yaxis: 'y3',
      mode: 'lines',
      marker: {color: '#f03b20'},
      name: 'Total'
    }

    var data = [table, trace1,trace2,trace3];

    var axis = {
      showline: true,
      zeroline: false,
      showgrid: true,
      mirror:true,
      ticklen: 4,
      gridcolor: '#ffffff',
      tickfont: {size: 10},
    }

    var axis1 = {domain: [0.66, 0.98], anchor: 'y1', showticklabels: false}
    var axis2 = {domain: [0.33, 0.64], anchor: 'y2', showticklabels: false}
    var axis3 = {domain: [0.0, 0.31], anchor: 'y3', showticklabels: false}
    var axis4 = {domain: [0.0, 0.48], anchor: 'x1', hoverformat: '.0f'}
    var axis5 = {domain: [0.0, 0.48], anchor: 'x2', hoverformat: '.0f'}
    var axis6 = {domain: [0.0, 0.48], anchor: 'x3', hoverformat: '.0f'}

    // Defining layout
    var layout = {
      title: "UK Census Data 1851",
      titlefont: {size: 36},
      plot_bgcolor: 'rgba(245,246,249,0.65)',
      width: 2000,
      height: 1000,
      showlegend: true,
      legend: {
        x: 0.23,
        y: 0.40
      },
      xaxis1: Object.assign(axis1,axis),
      xaxis2: Object.assign(axis2,axis),
      xaxis3: Object.assign(axis3,axis),
      yaxis1: Object.assign(axis4,axis),
      yaxis2: Object.assign(axis5,axis),
      yaxis3: Object.assign(axis6,axis)

    }

Plotly.plot('graph2b', data, layout);

var ultimateColors = ['rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(255,255,191)','rgb(224,243,248)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)'];

var pies = [
    {values: cellValues[1],
    labels: cellValues[0],
    type: 'pie',
    name: 'Male Count',
    marker: {colors: ultimateColors},
    domain: {x: [0, .40],y: [0, .40]},
    hoverinfo: 'label+percent+name'},

    {values: cellValues[2],
    labels: cellValues[0],
    text: 'CO2',
    type: 'pie',
    name: 'Female Count',
    marker: {colors: ultimateColors},
    domain: {x: [0, .40],y: [0.60, 1.0]},
    hoverinfo: 'label+percent+name'},

    {values: cellValues[3],
    labels: cellValues[0],
    type: 'pie',
    name: 'Total Count',
    marker: {colors: ultimateColors},
    domain: {x: [0.60, 1.0],y: [0, 1.0]},
    hoverinfo: 'label+percent+name'}
    ];
var layout = {
  title: "UK Census Data 1851",
  titlefont: {size: 36},
  width: 2000,
  height: 1000,
  showlegend: false,
};
Plotly.plot('graph2b2', pies, layout);



});
