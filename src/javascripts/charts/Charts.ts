import initAverageSalary from "./columns/AverageSalary";
import initEmployeesNumber from "./columns/EmployeesNumber";
import initControlRevenue from "./control/Revenue";
import initControlTaxes from "./control/Taxes";
import initControlProfit from "./control/Profit";
import initPieChart from "./pie/PieSimple";
import initInterestsIncreaseChart from "./pie/interests/Increase";
import initInterestsDecreaseChart from "./pie/interests/Decrease";
import initBidding from "./auction/Bidding";
import initWins from "./auction/Wins";
import initAveragePrice from "./auction/AveragePrice";
import initAverageDerivativePrice from "./auction/AverageDerivativePrice";
import initDebtorsPrice from "./arbitrator/Debtors";
import initAuctionBlockChart1 from "./arbitrator/AuctionBlockChart1";
import initAuctionBlockChart2 from "./arbitrator/AuctionBlockChart2";
import initAuctionBlockChart3 from "./arbitrator/AuctionBlockChart3";
import initAuctionBlockChart4 from "./arbitrator/AuctionBlockChart4";
import initPieUserRate from "./pie/personal-data-panel/UserRate";
import initPieSroRate from "./pie/personal-data-panel/SroRate";
import initPieCharUp from "./pie/personal-data-panel/Up";
import initPieCharDown from "./pie/personal-data-panel/Down";
import initPieEffectivity from "./pie/personal-data-panel/Effectivity";
import initPieWins from "./pie/personal-data-panel/Wins";
import initPieCategories from "./pie/personal-data-panel/Categories";

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

  $(".debtorsChart").each((i, e) => {
    initDebtorsPrice(e);
  });

  $(".auctionBlockChart1").each((i, e) => {
    initAuctionBlockChart1(e);
  });

  $(".auctionBlockChart2").each((i, e) => {
    initAuctionBlockChart2(e);
  });

  $(".auctionBlockChart3").each((i, e) => {
    initAuctionBlockChart3(e);
  });

  $(".auctionBlockChart4").each((i, e) => {
    initAuctionBlockChart4(e);
  });

  $(".pieUserRate").each((i, e) => {
    initPieUserRate(e);
  });

  $(".pieSroRate").each((i, e) => {
    initPieSroRate(e);
  });

  $(".pieCharUp").each((i, e) => {
    initPieCharUp(e);
  });

  $(".pieCharDown").each((i, e) => {
    initPieCharDown(e);
  });

  $(".pieCharEffectivity").each((i, e) => {
    initPieEffectivity(e);
  });

  $(".pieCharWins").each((i, e) => {
    initPieWins(e);
  });

  $(".pieCharCategories").each((i, e) => {
    initPieCategories(e);
  });
}

export default init;
