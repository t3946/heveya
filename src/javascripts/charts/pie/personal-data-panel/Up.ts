import {Root, percent, Label, Legend, p50, color, addLicense} from '@amcharts/amcharts5';
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Breakpoint from "../../../Breakpoint";

addLicense("AM5C1231231321");

function createChart(element: HTMLElement) {
  const root = Root.new(element);
  const data = [
    {
      value: 62,
      category: "",
    },
    {
      value: 38,
      category: "",
    }
  ];

  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Micro.new(root),
  ]);

  const chart = root.container.children.push(PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: percent(75),
  }));

  const series = chart.series.push(PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
  }));

  series.get("colors").set("colors", [
    color(0x8CCEEF),
    color(0xEF7F1A),
  ]);

  series.slices.template.setAll({
    forceInactive: true,
    tooltipText: "",
    stroke: color(0xffffff),
    strokeWidth: 2
  });

  const label1 = root.tooltipContainer.children.push(Label.new(root, {
    x: p50,
    y: p50,
    centerX: p50,
    centerY: p50,
    fill: color(0x2FAD03),
    fontSize: 20,
    fontWeight: "600",
    text: `+${62}%`
  }));

  const label2 = root.tooltipContainer.children.push(Label.new(root, {
    x: p50,
    y: percent(65),
    centerX: p50,
    centerY: p50,
    fill: color(0x9b9b9b),
    fontSize: 13,
    text: "Повышен",
    fontWeight: "600",
  }));

  series.data.setAll(data);

  series.appear(0, 0);
}

export default createChart;

