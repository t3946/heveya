import "bootstrap/dist/js/bootstrap";
import {
  Root,
  percent,
  Text,
  color,
  addLicense,
  Tooltip,
  Template,
  Circle,
  Bullet
} from '@amcharts/amcharts5';
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

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

  const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none",
    xAxis: xAxis
  }));
  cursor.lineY.set("visible", false);

  const series = chart.series.push(am5xy.LineSeries.new(root, {
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

  series.bullets.push(function (e) {
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

  function createGuide(value, text, dashArray?) {
    const guideDataItem = yAxis.makeDataItem({value: value});
    yAxis.createAxisRange(guideDataItem);
    guideDataItem.get("grid").setAll({
      forceHidden: false,
      strokeOpacity: 0.2,
      strokeDasharray: dashArray
    });

    const label = guideDataItem.get("label");
    label.setAll({
      text: text,
      isMeasured: false,
      centerY: percent(100)
    });

    label.adapters.add("x", function (x) {
      return chart.plotContainer.width();
    })

    chart.events.on("boundschanged", function () {
      label.set("x", label.get("x"))
    })
  }

  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      timestamp: new Date(2012 + i, 0, 2, 6, 0).getTime(),
      value: i - 5,
    });
  }

  for (const item of data) {
    if (item.value > 0) {
      item["bulletSettings"] = {fill: color("#EF7F1A")};
    }
  }

  yAxis.axisHeader.setAll({
    paddingBottom: 10,
  });

  yAxis.axisHeader.children.push(Text.new(root, {
    text: "Прибыль",
    fontWeight: "600",
    fontSize: 18,
    x: percent(50),
    centerX: percent(50),
  }));
  xAxis.get("renderer").labels.template.set("minPosition", 0.05);

  series.data.setAll(data);

  series.appear(1000);
  chart.appear(1000, 100);
}

export default init;
