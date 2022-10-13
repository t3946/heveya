import "bootstrap/dist/js/bootstrap";
import {Root, percent, Label, p50, color} from '@amcharts/amcharts5';
import {PieChart, PieSeries} from "@amcharts/amcharts5/percent";
import am5themes_Responsive from "@amcharts/amcharts5/themes/Responsive";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// remove logo from charts
// @ts-ignore
Root.prototype._hasLicense = () => true;


function createChart(element: HTMLElement) {
  const root = Root.new(element);
  const {innerLabel, innerLabelCaption} = element.dataset;
  const innerLabelCenterY = parseInt(element.dataset.innerLabelCenterY);
  const innerLabelCaptionCenterY = parseInt(element.dataset.innerLabelCaptionCenterY);
  const innerRadius = parseInt(element.dataset.innerRadius) || 80;
  const fontSize = parseFloat(element.dataset.fontSize) || 1;
  const values = JSON.parse(element.dataset.values);
  const categories = JSON.parse(element.dataset.categories);
  const defaultColors = [
    color(0x8CCEEF),
    color(0x434343),
    color(0xEF7F1A),
  ];
  const data = values.map((value, i) => {
    return {
      value: parseInt(value),
      category: categories[i],
    }
  });

  let colors;

  if (element.dataset.colors) {
    colors = JSON.parse(element.dataset.colors).map(e => color(parseInt(e)));
  }

  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Micro.new(root),
    am5themes_Responsive.new(root)
  ]);

  const chart = root.container.children.push(PieChart.new(root, {
    layout: root.verticalLayout,
    innerRadius: percent(innerRadius),
  }));

  const series = chart.series.push(PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
  }));

  series.get("colors").set("colors", colors || defaultColors);

  series.data.setAll(data);

  series.slices.template.setAll({
    tooltipText: "",
  });

  if (innerLabel) {
    if (innerLabelCaption) {
      const label = root.tooltipContainer.children.push(Label.new(root, {
        x: p50,
        y: p50,
        centerX: p50,
        centerY: innerLabelCenterY,
        fill: color(0x000000),
        fontSize: 12 * fontSize,
        fontWeight: "bold",
      }));

      label.set("text", innerLabel);

      const labelCaption = root.tooltipContainer.children.push(Label.new(root, {
        x: p50,
        y: p50,
        centerX: p50,
        centerY: innerLabelCaptionCenterY,
        fill: color(0x9b9b9b),
        fontSize: 8 * fontSize
      }));

      labelCaption.set("text", innerLabelCaption);
    } else {
      const label = root.tooltipContainer.children.push(Label.new(root, {
        x: p50,
        y: p50,
        centerX: p50,
        centerY: p50,
        fill: color(0x000000),
        fontSize: 15 * fontSize,
        fontWeight: "bold",
      }));

      label.set("text", innerLabel);
    }
  }

  series.appear(0, 0);
}

export default createChart;

