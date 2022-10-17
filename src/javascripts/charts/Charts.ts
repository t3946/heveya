import initAverageSalary from "./columns/AverageSalary";
import initEmployeesNumber from "./columns/EmployeesNumber";
import initControlRevenue from "./control/Revenue";
import initControlTaxes from "./control/Taxes";
import initControlProfit from "./control/Profit";
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
import initPieChartUp from "./pie/personal-data-panel/Up";
import initPieChartDown from "./pie/personal-data-panel/Down";
import initChartParticipation from "./pie/personal-data-panel/Participation";
import initPieEffectivity from "./pie/personal-data-panel/Effectivity";
import initPieWins from "./pie/personal-data-panel/Wins";
import initPieCategories from "./pie/personal-data-panel/Categories";
import initAverageDebtorsSum from "./etp/AverageDebtorsSum";
import initBidsInitiator from "./etp/BidsInitiator";
import initBidsMember from "./etp/BidsMember";
import initBiddingNumbers from "./bidding-numbers/BiddingNumbers";
import initAverageSum from "./bidding-numbers/AverageSum";
import initBiddingNumbersChart3 from "./bidding-numbers/Chart3";
import initBiddingNumbersChart4 from "./bidding-numbers/Chart4";
import initSiteRate from "./pie/SiteRate";

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

  $(".pieChartUp").each((i, e) => {
    initPieChartUp(e);
  });

  $(".pieChartDown").each((i, e) => {
    initPieChartDown(e);
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

  $(".etpChartAverageDebtorsSum").each((i, e) => {
    initAverageDebtorsSum(e);
  });

  $(".etpChartBidsInitiator").each((i, e) => {
    initBidsInitiator(e);
  });

  $(".etpChartBidsMember").each((i, e) => {
    initBidsMember(e);
  });

  $(".pieChartBiddingNumbers").each((i, e) => {
    initBiddingNumbers(e);
  });

  $(".averageOfferSumChart").each((i, e) => {
    initAverageSum(e);
  });

  $(".biddingNumbersChart3").each((i, e) => {
    initBiddingNumbersChart3(e);
  });

  $(".biddingNumbersChart4").each((i, e) => {
    initBiddingNumbersChart4(e);
  });

  $(".pieChartParticipation").each((i, e) => {
    initChartParticipation(e);
  });

  $(".pieSiteRate").each((i, e) => {
    initSiteRate(e);
  });
}

export default init;
