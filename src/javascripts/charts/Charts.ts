import initAverageSalary from "./columns/AverageSalary";
import initEmployeesNumber from "./columns/EmployeesNumber";
import initControlRevenue from "./control/Revenue";
import initControlTaxes from "./control/Taxes";
import initControlProfit from "./control/Profit";
import CreatePieChart from "./pie/PieSimple";
import $ from "jquery";

function init() {
  $(".averageSalary").each((i, e) => {
    initAverageSalary(e);
  });

  $(".employeesNumber").each((i, e) => {
    initEmployeesNumber(e);
  });

  $(".chartRevenue").each((i, e) => {
    initControlRevenue(e);
  });

  $(".chartTaxes").each((i, e) => {
    initControlTaxes(e);
  });

  $(".chartProfit").each((i, e) => {
    initControlProfit(e);
  });

  $(".pieChart").each((i, e) => {
    CreatePieChart(e);
  });
}

export default init;
