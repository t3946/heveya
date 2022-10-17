import {Root, percent, Label, p50, color, addLicense} from '@amcharts/amcharts5';
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

addLicense("AM5C1231231321");

function createChart(element: HTMLElement) {
  const root = Root.new(element);
  const data = [
    {
      value: 19,
      category: "",
    },
    {
      value: 57,
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
    color(0xD4D4D4),
  ]);

  series.slices.template.setAll({
    forceInactive: true,
    tooltipText: "",
    stroke: color(0xffffff),
    strokeWidth: 2
  });

  series.data.setAll(data);

  series.appear(0, 0);
}

export default createChart;

