import initCharts from "./charts/Charts";
import initMap from "./map/Map";
import $ from "jquery";

$(() => {
  initCharts();
  initMap();
});

$(document).on("change", ".switchGroup input[type=checkbox]", (e) => {
  const $target = $(e.target);
  console.log($target.parents(".switchGroup"));
  const $switchOnLabel = $target.parents(".switchGroup").find(".switchOnLabel");

  if (e.target.checked) {
    $switchOnLabel.addClass("switchOnLabel_active")
  } else {
    $switchOnLabel.removeClass("switchOnLabel_active")
  }
});