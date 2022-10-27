import initCharts from "./charts/Charts";
import initMap from "./map/Map";
import $ from "jquery";
import "./ui/UI";
import "./hat";
import "./layout/Layout";
import "./forms/Forms";
import "./interactive-image/InteractiveImage";
import "./tooltip/tooltip";

$(() => {
  initCharts();
  initMap();
});
