<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  #chartdiv {
    width: 100%;
    height: 500px;
  }
</style>

<script src="//www.amcharts.com/lib/4/core.js"></script>
<script src="//www.amcharts.com/lib/4/charts.js"></script>
<script src="//www.amcharts.com/lib/4/themes/animated.js"></script>
<script src="//www.amcharts.com/lib/4/themes/kelly.js"></script>
<div id="chartdiv"></div>


<script>
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end


  var chart = am4core.create("chartdiv", am4charts.XYChart);
  var title = chart.titles.create();
  title.text = "Total Daily Users Detected from 10:00AM - 2:00PM";
  title.fontSize = 25;

  chart.data = [{
    "weekday": "Thursday",
    "cars": 1101,
    "motorcycles": 1062
  }, {
    "weekday": "Friday",
    "cars": 545,
    "motorcycles": 720
  }, {
    "weekday": "Saturday",
    "cars": 404,
    "motorcycles": 555
  }, {
    "weekday": "Sunday",
    "cars": 498,
    "motorcycles": 685
  }, {
    "weekday": "Monday",
    "cars": 2106,
    "motorcycles": 1801
  }, {
    "weekday": "Tuesday",
    "cars": 2577,
    "motorcycles": 1434
  }, {
    "weekday": "Wednesday",
    "cars": 2243,
    "motorcycles": 1925
  }];

  var dateAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  dateAxis.dataFields.category = "weekday";
  dateAxis.title.text = "";

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.title.text = "Total Users Detected";

  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.categoryX = "weekday";
  series.name = "Center for Korean Studies";
  series.dataFields.valueY = "cars";
  series.tooltipHTML = "<span style='font-size:14px; color:#000000;'><b>{valueY.value} users</b></span>";
  series.tooltip.background.fill = am4core.color("#FFF");
  series.tooltip.getStrokeFromObject = true;
  series.tooltip.background.strokeWidth = 3;
  series.tooltip.getFillFromObject = false;
  series.fillOpacity = 0.6;
  series.strokeWidth = 2;
  series.stacked = true;

  var series2 = chart.series.push(new am4charts.LineSeries());
  series2.name = "Holmes Hall";
  series2.dataFields.categoryX = "weekday";
  series2.dataFields.valueY = "motorcycles";
  series2.tooltipHTML = "<span style='font-size:14px; color:#000000;'><b>{valueY.value} users</b></span>";
  series2.tooltip.background.fill = am4core.color("#FFF");
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.getStrokeFromObject = true;
  series2.tooltip.background.strokeWidth = 3;
  series2.sequencedInterpolation = true;
  series2.fillOpacity = 0.6;
  series2.stacked = true;
  series2.strokeWidth = 2;

  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = dateAxis;
  chart.scrollbarX = new am4core.Scrollbar();

  // Add a legend
  chart.legend = new am4charts.Legend();
  chart.legend.position = "bottom";

  // axis ranges
  var range = dateAxis.axisRanges.create();
  range.category = "Thursday";
  range.endCategory = "Sunday";
  range.label.text = "Summer Vacation";
  range.label.inside = true;
  range.label.horizontalCenter = "middle";

  var range2 = dateAxis.axisRanges.create();
  range2.category = "Monday";
  range2.label.text = "1st Day of Class";
  range2.label.inside = true;
  range2.label.horizontalCenter = "middle";
  range2.label.verticalCenter = "middle";
</script>
