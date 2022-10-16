import "bootstrap/dist/js/bootstrap";
import {Root, percent, Label, Text, p50, color, addLicense, Legend} from '@amcharts/amcharts5';
import * as am5xy from "@amcharts/amcharts5/xy";

addLicense("AM5C1231231321");

const data = [
  {
    "year": "2021",
    "value": 1,
  }, {
    "year": "2022",
    "value": 3,
  }, {
    "year": "2023",
    "value": 6,
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
    paddingTop: 40,
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
  }));

  series.columns.template.setAll({
    tooltipText: "{valueY} {name}",
    width: percent(5),
    cornerRadiusTL: 100,
    cornerRadiusTR: 100,
  });

  series.data.setAll(data);
  series.appear();
  series.set("fill", color(0x8CCEEF));
  series.set("stroke", null);

  yAxis.axisHeader.setAll({
    paddingBottom: 10,
  });

  yAxis.axisHeader.children.push(Text.new(root, {
    text: "Численность сотрудников",
    fontWeight: "600",
    fontSize: 18,
    x: percent(50),
    centerX: percent(50),
  }));

  chart.appear(1000, 100);
}

export default init;
