import {Root, percent, Label, p50, color, addLicense} from '@amcharts/amcharts5';
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

addLicense("AM5C1231231321");

function createChart(element: HTMLElement) {
  const root = Root.new(element);
  const data = [
    {
      value: 22,
      category: "Недвижимость",
    },
    {
      value: 28,
      category: "Транспорт\nи техника",
    },
    {
      value: 19,
      category: "Права\nтребования",
    },
    {
      value: 11,
      category: "Станки и\nоборудование",
    },
    {
      value: 20,
      category: "Прочее",
    },
  ];

  root.setThemes([
    am5themes_Animated.new(root),
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
    fontSize: 20,
    text: "[fontSize: 32px]{value.formatNumber('0.')}%[/]\n{category}",
    oversizedBehavior: "wrap",
    fill: color(0xffffff),
  });

  series.ticks.template.setAll({
    stroke: color(0xffffff),
    strokeOpacity: 1,
  });

  series.get("colors").set("colors", [
    color(0x01F7F7),
    color(0xF7F701),
    color(0xF701F7),
    color(0xF60000),
    color(0xF77B00),
  ]);

  series.slices.template.setAll({
    forceInactive: true,
    tooltipText: "",
    stroke: color(0x434343),
    strokeWidth: 2
  });

  series.data.setAll(data);

  series.appear(0, 0);
}

export default createChart;

