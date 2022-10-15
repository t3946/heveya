import {Root, percent, Label, p50, color, addLicense, Legend, Container, Rectangle} from '@amcharts/amcharts5';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";

addLicense("AM5C1231231321");

function init(elem) {
  const root = Root.new(elem);

  root.setThemes([
    am5themes_Animated.new(root),
    // am5themes_Responsive.new(root),
  ]);

  const chart = root.container.children.push(PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: 80
  }));

  const series = chart.series.push(PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    alignLabels: true,
    legendLabelText: "mmm"
  }));

  console.log({series});
  series.ticks.template.setAll({
    stroke: color(0x000000),
    strokeWidth: 1,
    strokeOpacity: 1,
  })

  series.labels.template.setAll({
    fontSize: 20,
    text: "{valuePercentTotal.formatNumber('0.  ')}%"
  });

  series.slices.template.setAll({
    forceInactive: true,
    stroke: color(0xffffff),
    strokeWidth: 3,
  });

  series.get("colors").set("colors", [color(0x8CCEEF), color(0x434343), color(0xEF7F1A), color(0xF9E216)]);


  const labelContainer = root.container.children.push(Container.new(root, {
    x: p50,
    y: p50,
    centerX: p50,
    centerY: p50,
    background: Rectangle.new(root, {
      fill: color(0xff5599),
      opacity: 0,
      // opacity: 0.1, //toggle for debug caption
    }),
    height: 70,
    width: 150,
    layout: root.verticalLayout,
  }));

  const textWins = labelContainer.children.push(Label.new(root, {
    fill: color(0x161616),
    fontSize: 14,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
  }));

  textWins.set("text", "Побед: [fontWeight: 600]24(17)%[/]");

  const textTotal = labelContainer.children.push(Label.new(root, {
    fill: color(0x161616),
    fontSize: 14,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
  }));

  textTotal.set("text", "Чек: [fontWeight: 600]1300000 ₽[/]");

  const increaseTotal = labelContainer.children.push(Label.new(root, {
    fill: color(0x161616),
    fontSize: 14,
    lineHeight: 1,
    paddingTop: 5,
    paddingBottom: 5,
  }));

  increaseTotal.set("text", "Понижение: [#FB0E0E fontWeight: 600 fontSize: 16px]-23%[/][/]");


  series.data.setAll([
    {value: 1413, category: "One"},
    {value: 975, category: "Two"},
    {value: 154, category: "Three"},
    {value: 124, category: "Four"},
  ]);


  series.appear(1000, 100);
}

export default init;