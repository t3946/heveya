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
      value: 30,
      category: "",
    },
    {
      value: 12,
      category: "",
    },
    {
      value: 8.5,
      category: "",
    },
    {
      value: 8.5,
      category: "",
    },
    {
      value: 8.5,
      category: "",
    },
    {
      value: 13,
      category: "",
    },
    {
      value: 16,
      category: "",
    }
  ];

  root.setThemes([
    am5themes_Animated.new(root),
    // am5themes_Micro.new(root),
  ]);

  const chart = root.container.children.push(PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: percent(75),

  }));

  const series = chart.series.push(PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
  }));

  series.labels.template.setAll({
    fontSize: 24,
    text: "{value.formatNumber('0.')}%"
  });

  series.get("colors").set("colors", [
    color(0x7CD1FB),
    color(0x1A2FEF),
    color(0xEF1AC0),
    color(0xEF1A27),
    color(0xEBEF1A),
    color(0x27BD0F),
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
    fontSize: 24,
    fontWeight: "600",
    text:"28 385 ₽"
  }));

  series.data.setAll(data);

  series.appear(0, 0);
}

export default createChart;

