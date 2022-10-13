import CreatePieChart from "./charts/PieSimple";
import $ from "jquery";

$(() => {
  $(".pieChart").each((i, e) => {
    CreatePieChart(e);
  });
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