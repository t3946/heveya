import 'stylesheets/base.scss';
import 'javascripts/Main';

const home = require('./views/pages/home/home.hbs')
const SearchResults = require('./views/pages/search-results/SearchResults.hbs')
const SearchResultsLines = require('./views/pages/search-results-lines/SearchResultsLines.hbs')
const Offer = require('./views/pages/offer/Offer.hbs')
const Rate = require('./views/pages/rate/Rate.hbs')

document.addEventListener('DOMContentLoaded', function () {
  switch (document.location.pathname) {
    case "/":
      break;
    case "/home":
      document.body.innerHTML = home()
      break;

    case "/search-results":
      document.body.innerHTML = SearchResults()
      break;

    case "/search-results-lines":
      document.body.innerHTML = SearchResultsLines()
      break;

    case "/offer":
      document.body.innerHTML = Offer()
      break;

    case "/rate":
      document.body.innerHTML = Rate()
      break;

    default:
      document.location.pathname = "/";
      break;
  }
})