import initAverageSalary from "./columns/AverageSalary";
import initEmployeesNumber from "./columns/EmployeesNumber";
import initControlRevenue from "./control/Revenue";
import initControlTaxes from "./control/Taxes";
import initControlProfit from "./control/Profit";
import initPieChart from "./pie/PieSimple";
import initInterestsIncreaseChart from "./pie/interests/Increase";
import initInterestsDecreaseChart from "./pie/interests/Decrease";
import initBidding from  "./auction/Bidding";
import initWins from  "./auction/Wins";
import initAveragePrice from  "./auction/AveragePrice";
import initAverageDerivativePrice from  "./auction/AverageDerivativePrice";

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
    initPieChart(e);
  });

  $(".interestIncreaseChart").each((i, e) => {
    initInterestsIncreaseChart(e);
  });

  $(".interestDecreaseChart").each((i, e) => {
    initInterestsDecreaseChart(e);
  });

  $(".biddingChart").each((i, e) => {
    initBidding(e);
  });

  $(".winsChart").each((i, e) => {
    initWins(e);
  });

  $(".averagePriceChart").each((i, e) => {
    initAveragePrice(e);
  });

  $(".averageDerivativePriceChart").each((i, e) => {
    initAverageDerivativePrice(e);
  });
}

export default init;
