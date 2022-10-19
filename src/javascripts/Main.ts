import "bootstrap/dist/js/bootstrap";
import initCharts from "./charts/Charts";
import initMap from "./map/Map";
import $ from "jquery";
import "./ui/UI";
import "./hat";
import "./layout/Layout";
import "./forms/Forms";

$(() => {
  initCharts();
  initMap();
});

$(document).on("change", ".switchGroup input[type=checkbox]", (e) => {
  const $target = $(e.target);
  const $switchOnLabel = $target.parents(".switchGroup").find(".switchOnLabel");

  if (e.target.checked) {
    $switchOnLabel.addClass("switchOnLabel_active")
  } else {
    $switchOnLabel.removeClass("switchOnLabel_active")
  }
});