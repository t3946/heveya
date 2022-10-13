import CreatePieChart from "./charts/PieSimple";
import $ from "jquery";

$(() => {
  $(".pieChart").each((i, e) => {
    CreatePieChart(e);
  });
})