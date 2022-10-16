import {Root, percent, Label, p50, color, addLicense} from '@amcharts/amcharts5';
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

addLicense("AM5C1231231321");

function createChart(element: HTMLElement) {
  const root = Root.new(element);
  const labelColor = element.dataset.innerLabelColor ? color(parseInt(element.dataset.innerLabelColor)) : color(0x000000);
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
    innerRadius: percent(60),
  }));

  const series = chart.series.push(PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
  }));

  series.get("colors").set("colors", [
    color(0xEF7F1A),
    color(0x434343),
  ]);

  series.slices.template.setAll({
    forceInactive: true,
    tooltipText: "",
    stroke: color(0xffffff),
    strokeWidth: 2
  });

  root.tooltipContainer.children.push(Label.new(root, {
    x: p50,
    y: p50,
    centerX: p50,
    centerY: p50,
    fill: labelColor,
    fontSize: 12,
    fontWeight: "600",
    text:"62%"
  }));

  series.data.setAll(data);

  series.appear(0, 0);
}

export default createChart;

