import "bootstrap/dist/js/bootstrap";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {
  Root,
  percent,
  addLicense,
  Tooltip,
  Template,
  Circle,
  Bullet, Text
} from '@amcharts/amcharts5';
import * as am5xy from "@amcharts/amcharts5/xy";

function init (elem) {
  const root = Root.new(elem);

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  addLicense("AM5C1231231321");

  const chart = root.container.children.push(am5xy.XYChart.new(root, {
    paddingTop: 40,
  }));

  const xRenderer = am5xy.AxisRendererX.new(root, {});
  xRenderer.grid.template.set("forceHidden", true);
  xRenderer.labels.template.setAll({multiLocation: 0, location: 0});

  const xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    baseInterval: {timeUnit: "year", count: 1},
    renderer: xRenderer,
    tooltip: Tooltip.new(root, {}),
    extraMin: 0.01,
    extraMax: 0.01,
    tooltipLocation: 0
  }));

  const yRenderer = am5xy.AxisRendererY.new(root, {});

  const yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: yRenderer
  }));

  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none",
    xAxis: xAxis,
  }));
  cursor.lineY.set("visible", false);

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "timestamp",
    locationX: 0,
    seriesTooltipTarget: "bullet",
    tooltip: Tooltip.new(root, {
      labelText: "{valueY} млн. ₽"
    })
  }));

  series.bullets.push(function () {
    const circleTemplate = Template.new({
      // @ts-ignore
      radius: 6,
      templateField: "bulletSettings",
      fill: series.get("fill"),
      strokeWidth: 2,
      stroke: root.interfaceColors.get("background")
    })

    // @ts-ignore
    const circle = Circle.new(root, {}, circleTemplate);

    return Bullet.new(root, {
      sprite: circle,
      locationX: 0
    });
  });


  const data = [
    {
      "timestamp": new Date(2016, 0, 1, 22, 30).getTime(),
      "value": 50
    },
    {
      "timestamp": new Date(2017, 0, 1, 23, 0).getTime(),
      "value": 100
    },
    {
      "timestamp": new Date(2018, 0, 1, 23, 30).getTime(),
      "value": 90
    },
    {
      "timestamp": new Date(2019, 0, 2, 0, 0).getTime(),
      "value": 130
    },
    {
      "timestamp": new Date(2020, 0, 2, 0, 0).getTime(),
      "value": 130
    },
    {
      "timestamp": new Date(2021, 0, 2, 0, 30).getTime(),
      "value": 110
    },
    {
      "timestamp": new Date(2022, 0, 2, 0, 30).getTime(),
      "value": 80
    }
  ];

  yAxis.axisHeader.setAll({
    paddingBottom: 10,
  });

  yAxis.axisHeader.children.push(Text.new(root, {
    text: "Налоги",
    fontWeight: "600",
    fontSize: 18,
    x: percent(50),
    centerX: percent(50),
  }));

  series.data.setAll(data);
  series.appear(1000);
  chart.appear(1000, 100);
}

export default init