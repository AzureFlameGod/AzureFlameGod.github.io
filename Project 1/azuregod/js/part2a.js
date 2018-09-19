/*
Part 2:
--------------------------------------------------------------------------------------------------
1. Read in naplesCholeraAgeSexData.tsv showing fatality numbers for men and women in different
age groups from cholera in the same time period in Naples.
2. Show a table of age categories for male fatalities and female fatalities (i.e. one column or male
and another for female).
3. Show a bar chart of age categories (i) for male fatalities and (ii) another for female fatalities
--------------------------------------------------------------------------------------------------
*/

//Reading data and returning rows with keys
Plotly.d3.xhr("data/naplesCholeraAgeSexData.tsv", function(err, rows){
  var dirtyTSV = rows.responseText;
  var cleanTSV = "age\t" + dirtyTSV.split("age").slice(2);
  temp = cleanTSV.replace(/ /g, '\t');
  temp = temp.replace(/\t\t/g,'\t');
  temp = temp.replace(/over\t80/g,'Over 80');
  var rows = d3.tsvParse(temp);
  function unpack(rows, key) {
  return rows.map(function(row){return row[key];});
  }
// Setting the Header Values
var headerNames = Plotly.d3.keys(rows[6]);
var headerValues = [headerNames[0],headerNames[1],headerNames[2]];
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

// Creating the table
var table = {
        type: 'table',
        //columnwidth: [300,300,300],
        columnorder: [0,1,2],
        header: {
          values: headerValues,
          align: "center",
          height: 30,
          line: {width: 1, color: 'rgb(227,26,28)'},
          fill: {color: ['rgb(253,141,60)']},
          font: {family: "Arial", size: 13, color: "white"}
        },
        cells: {
          values: cellValues,
          align: "center",
	        height: 30,
          line: {color: "black", width: 1},
          fill: {color: ['rgb(254,204,92)', 'rgba(255,255,178, 0.65)']},
          font: {family: "Arial", size: 13, color: ["black"]}
        },
        xaxis: 'x',
        yaxis: 'y',
        domain: {x: [0.2,0.8], y: [0.64,1.0]}
      }
var trace1 = {
  x: cellValues[0],
  y: cellValues[1],
  type: 'bar',
  xaxis: 'x1',
  yaxis: 'y1',
  mode: 'lines',
  marker: {color: '#fecc5c'},
  name: 'Male Fatality Numbers'
}
var trace2 = {
  x: cellValues[0],
  y: cellValues[2],
  type: 'bar',
  xaxis: 'x2',
  yaxis: 'y2',
  mode: 'lines',
  marker: {color: '#bd0026'},
  name: 'Female Fatality Numbers'
}

var data = [table, trace1,trace2];

var axis = {
  showline: true,
  zeroline: false,
  showgrid: true,
  mirror:true,
  ticklen: 4,
  gridcolor: '#ffffff',
  tickfont: {size: 10},
}

var axis1 = {domain: [0.2, 0.8], anchor: 'y1', showticklabels: false}
var axis2 = {domain: [0.2, 0.8], anchor: 'y2', showticklabels: false}

var axis3 = {domain: [0.32, 0.62], anchor: 'x1', hoverformat: '.1f'}
var axis4 = {domain: [0.0, 0.30], anchor: 'x2', hoverformat: '.1f'}

// Defining layout
var layout = {
  title: "Naples Cholera Age vs. Sex",
  titlefont: {size: 36},
  plot_bgcolor: 'rgba(245,246,249,0.65)',
  width: 3300,
  height: 1000,
  showlegend: true,
  legend: {x: 0.21,y: 0.55},
  xaxis1: Object.assign(axis1,axis),
  xaxis2: Object.assign(axis2,axis),

  yaxis1: Object.assign(axis3,axis),
  yaxis2: Object.assign(axis4,axis),

}

Plotly.plot('graph2', data, layout);
});
