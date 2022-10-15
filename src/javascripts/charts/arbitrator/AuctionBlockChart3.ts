import "bootstrap/dist/js/bootstrap";
import {Root, percent, Label, Text, p50, color, addLicense, Legend} from '@amcharts/amcharts5';
import * as am5xy from "@amcharts/amcharts5/xy";

addLicense("AM5C1231231321");

const data = [
  {
    "year": "2011",
    "value": 10,
  }, {
    "year": "2012",
    "value": 12,
  }, {
    "year": "2013",
    "value": 16,
  }, {
    "year": "2014",
    "value": 12,
  }, {
    "year": "2015",
    "value": 16,
  }, {
    "year": "2016",
    "value": 12,
  }, {
    "year": "2017",
    "value": 16,
  }, {
    "year": "2018",
    "value": 12,
  }, {
    "year": "2019",
    "value": 16,
  }, {
    "year": "2020",
    "value": 12,
  }, {
    "year": "2021",
    "value": 16,
  }
];

function init(elem) {
  const root = Root.new(elem);

  const chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none",
    layout: root.verticalLayout,
  }));

  const xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "year",
    renderer: am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9
    }),
  }));

  xAxis.data.setAll(data);

  const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {}),
  }));

  const series = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    categoryXField: "year",
    name: "Процент реализованных лотов"
  }));

  series.columns.template.setAll({
    tooltipText: "{valueY} Объявлено лотов (шт)",
    width: percent(18),
    cornerRadiusTL: 100,
    cornerRadiusTR: 100,
  });

  series.data.setAll(data);
  series.appear();
  series.set("fill", color(0x8CCEEF));
  series.set("stroke", null);

  let legend = chart.children.push(Legend.new(root, {
    x: p50,
    centerX: p50,
  }));
  legend.data.setAll(chart.series.values);

  chart.appear(1000, 100);
}

export default init;
