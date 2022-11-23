import initCharts from "./charts/Charts";
import initMap from "./map/Map";
import $ from "jquery";
import "./ui/UI";
import "./hat";
import "./layout/Layout";
import "./forms/Forms";
import "./interactive-image/InteractiveImage";
import "./tooltip/tooltip";
import "./account/Account";
import "./adaptive-placeholder/AdaptivePlaceholder";
import "./catalog/Catalog";
import {Dropdown} from "bootstrap";

$(() => {
  initCharts();
  initMap();

  $(".base-dropdown").each((e) => {
    new Dropdown(e)
  });
});
